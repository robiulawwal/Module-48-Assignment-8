import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-2xl mb-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-xl mb-8">
        <i>{ 'page: ' + error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;