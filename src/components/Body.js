import Search from "./Search";
import RestaurantContainer from "./RestaurantContainer";
import { useState } from "react";
import resList from "../utils/restaurantList";
import Filter from "./Filter";


const Body = () => {
    const [listOfResto, setResListss] = useState(resList)
    return (
    <div className="body-container">
        <Search/>
        <div className="filter">
            <button onClick={() => {
                let resss = listOfResto.filter(res=>res.info.avgRating > 4.5);
                setResListss(resss);
            }}>
                Top Res - Easy
            </button>
        </div>
        <Filter resData={[listOfResto, setResListss]}/>
        <RestaurantContainer resData={listOfResto}/>
    </div>
)};

export default Body;