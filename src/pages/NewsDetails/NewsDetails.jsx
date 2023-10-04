import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-base">News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;