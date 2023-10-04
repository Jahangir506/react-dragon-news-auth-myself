import { useLoaderData } from 'react-router-dom';
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import News from "./News";

const Home = () => {
  const categoriesNews = useLoaderData()

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-72">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-base font-semibold">Dragon News</h2>
          <div>
            {
                categoriesNews?.slice(0, 3).map(news =>  <News key={news._id} news={news}></News>)
            }
          </div>
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
