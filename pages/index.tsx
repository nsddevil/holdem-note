import React from "react";
import Link from "next/link";
import Authentication from "../feature/auth/Authentication";
import Head from "next/head";

function Home() {
  return (
    <Authentication>
      <Head>
        <title>Holdem Note</title>
      </Head>
      <div>
        <Link href="/create">
          <button>create</button>
        </Link>
      </div>
    </Authentication>
  );
}

export default Home;
