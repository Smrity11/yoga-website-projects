import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="lg:flex  justify-center gap-24 lg:mt-48 my-12">
      <div className="lg:w-1/2">
        <img
          className="w-full"
          src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
          alt=""
        />
      </div>
      <div className="lg:mt-56 text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p>page not found</p>
        <Link className="underline text-purple-600" to="/">
          <button className="btn btn-success">Back to Home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
