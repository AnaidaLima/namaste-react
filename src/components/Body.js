import Search from "./Search";
import RestaurantContainer from "./RestaurantContainer";
import { useState, useEffect } from "react";
// import resList from "../utils/restaurantList";
import Filter from "./Filter";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfResto, setResListss] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const result = await data.json();
        setResListss(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    if(listOfResto.length === 0) {
        return <Shimmer/>
    }

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