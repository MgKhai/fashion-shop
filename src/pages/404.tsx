import { Link } from "react-router";

function NotFound() {
  return (
    <section className="flex grow items-center bg-gray-200">
      <div className="flex flex-col items-center gap-5 text-center md:ms-10 md:items-start md:gap-8 lg:ms-30">
        <h1 className="px-4 text-3xl font-bold md:text-5xl md:font-extrabold">
          404
        </h1>
        <p className="px-4 text-lg md:text-start md:text-2xl">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="px-4">
          <Link
            to="/"
            className="w-30 rounded-3xl bg-sky-600 p-4 text-white md:text-xl"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
