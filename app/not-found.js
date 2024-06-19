import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center bg-[#17ABFF] ">
      <h1 className="text-xl">Page Not Found</h1>
      <p className="text-6xl font-semibold">4o4</p>
      <Link href="/" className="my-8 text-sm">
        Go back to home  →
      </Link>
    </main>
  );
};

export default notFound;
