import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import leftSideImg1 from '../../../assets/1.png';
import leftSideImg2 from '../../../assets/2.png';
import leftSideImg3 from '../../../assets/3.png';
import Category from "../../../components/Category/Category";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="pb-4 px-4">
            <h2 className="text-base font-semibold">All Category</h2>
            <div className="p-4">
                <button className="btn w-full capitalize">National News</button>
                <div className="pl-12 py-6 opacity-75">
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                    <p>All News</p>
                </div>
            </div>
            <div>
                <div className="mb-5">
                    <img src={leftSideImg1} alt="" />
                    <h3 className="font-lg font-poppins  font-semibold py-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className="flex gap-4">
                        <p>Sports</p>
                        <FaCalendar/>
                        <p>Jan 4, 2023</p>
                    </div>
                </div>
                <div className="mb-5">
                    <img src={leftSideImg2} alt="" />
                    <h3 className="font-lg font-poppins  font-semibold py-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className="flex gap-4">
                        <p>Sports</p>
                        <FaCalendar/>
                        <p>Jan 4, 2023</p>
                    </div>
                </div>
                <div className="mb-5">
                    <img src={leftSideImg3} alt="" />
                    <h3 className="font-lg font-poppins  font-semibold py-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className="flex gap-4">
                        <p>Sports</p>
                        <FaCalendar/>
                        <p>Jan 4, 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;