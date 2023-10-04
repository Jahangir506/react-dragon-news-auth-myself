import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className=" bg-slate-100 py-6 mt-7 rounded">
      <div className="pl-2 flex">
        <button className="btn btn-sm rounded btn-secondary capitalize">
          Breaking News
        </button>
        <Marquee pauseOnHover={true} speed={80}>
          <Link className="mr-8" to="/">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link className="mr-12" to="/">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link className="mr-12" to="/">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
