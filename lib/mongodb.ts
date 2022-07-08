import { MongoClient, MongoClientOptions } from "mongodb";

const options: MongoClientOptions & {
  useUnifiedTopology: boolean;
  useNewUrlParser: boolean;
} = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}
const uri = process.env.MONGODB_URI;

if (process.env.NODE_ENV === "development") {
  let myMongoClientPromise = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>;
  };

  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!myMongoClientPromise._mongoClientPromise) {
    client = new MongoClient(uri, options);
    myMongoClientPromise._mongoClientPromise = client.connect();
  }
  clientPromise = myMongoClientPromise._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
