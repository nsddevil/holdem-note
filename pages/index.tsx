import React from "react";
import Link from "next/link";
import Authentication from "../feature/auth/Authentication";

function Home() {
  return (
    <Authentication>
      <div>
        <Link href="/create">
          <button>create</button>
        </Link>
      </div>
    </Authentication>
  );
}

export default Home;
