import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import bg1 from '../../../assets/bg.png';
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div >
        <h2 className="text-base font-semibold">Login With</h2>
        <div className="p-4">
        <div className="mb-3">
          <button className="btn btn-outline w-full capitalize">
            <FaGoogle></FaGoogle> Login with Google
          </button>
        </div>
        <div>
          <button className="btn btn-outline w-full capitalize">
            <FaGithub></FaGithub> Login with Github
          </button>
        </div>
        </div>
      </div>

      <div className="mt-2">
        <h2 className="text-2xl mb-4">Find Us on</h2>
        <a
          href=""
          className="p-4 flex justify-start items-center text-lg capitalize border rounded-t-lg"
        >
          <div className="bg-gray-200 p-2 rounded-full">
            <FaFacebook className=""></FaFacebook>
          </div>
          <span className="ml-4"> Facebook</span>
        </a>
        <a
          href=""
          className="p-4 flex justify-start items-center text-lg capitalize border-b border-l border-r"
        >
          <div className="bg-gray-200 p-2 rounded-full">
            <FaTwitter className=""></FaTwitter>
          </div>
          <span className="ml-4"> Twitter</span>
        </a>
        <a
          href=""
          className="p-4 flex justify-start items-center text-lg capitalize border-l border-r border-b rounded-b-lg"
        >
          <div className="bg-gray-200 p-2 rounded-full">
            <FaInstagram className=""></FaInstagram>
          </div>
          <span className="ml-4"> Instagram</span>
        </a>
      </div>

      {/* Q Zone  */}
      <div className="p-4 mt-5 bg-gray-200">
        <h2 className="text-2xl mb-4">Q-Zone</h2>
        <div className="my-6">
          <img className="mx-auto mb-8" src={qZone1} alt="" />
          <img className="mx-auto mb-8" src={qZone2} alt="" />
          <img className="mx-auto" src={qZone3} alt="" />
        </div>
      </div>

      {/* ad  */}
      <div className="mt-5">
        <div className="card w-full h-40 bg-base-100 shadow-xl image-full backdrop-blur-none">
          <figure className="rounded">
            <img
              src={bg1}
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-2xl justify-center text-center">Create an <br /> Amazing <br /> Newspaper</h2>
            <p className="my-6">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-error text-white">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
