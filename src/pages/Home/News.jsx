import { AiOutlineShareAlt } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  const {
    title,
    details,
    image_url,
    author,
    thumbnail_url,
    total_view,
    rating,
    _id
  } = news || {};

  return (
    <div className="border my-4 rounded">
      <div className="flex justify-between bg-gray-200 py-3">
        <div className="flex">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} />
            </div>
          </label>
          <div className="ml-4">
            <p>Awlad Hossain</p>
            <p>2022-08-21</p>
          </div>
        </div>
        <div className="flex justify-center items-center text-xl px-4">
          <FaRegBookmark className="mr-3" />
          <AiOutlineShareAlt className="text-2xl" />
        </div>
      </div>
      <div className=" py-4 px-4">
        <div>
          <h2 className="text-base font-bold pb-4">{title}</h2>
          <img src={image_url} alt="" />
          <div className="my-4">
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200)}{" "}
                <Link to={`/news/${_id}`} className="text-blue-500 font-medium">
                  Read More...
                </Link>{" "}
              </p>
            ) : (
              <p>{details}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
