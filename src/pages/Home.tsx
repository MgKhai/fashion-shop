import { Link } from "react-router";

function Home() {
  return (
    <section className="flex grow items-center bg-gray-200">
      <div className="flex flex-col items-center gap-5 text-center md:ms-10 md:items-start md:gap-8 lg:ms-30">
        <h1 className="px-4 text-3xl font-bold md:text-5xl md:font-extrabold">
          Welcome to Our Fashion Shop
        </h1>
        <p className="px-4 text-lg md:text-start md:text-2xl">
          This is a simple landing page built with React, TypeScript, and
          Tailwind CSS.
        </p>
        <div className="px-4">
          <Link
            to="shop"
            className="w-30 rounded-3xl bg-sky-600 p-4 text-white md:text-xl"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
