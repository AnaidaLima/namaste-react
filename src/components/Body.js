import Search from "./Search";
import RestaurantContainer from "./RestaurantContainer";
import { useState, useEffect } from "react";
// import resList from "../utils/restaurantList";
import Filter from "./Filter";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfResto, setResListss] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const result = await data.json();
        setResListss(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredData(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    if(filteredData.length === 0) {
        return <Shimmer/>
    }

    return (
    <div className="body-container">
        <Search searchStr={[searchData, setSearchData]} lisData={[listOfResto, setResListss]} filData={[filteredData, setFilteredData]}/>
        <div className="filter">
            <button onClick={() => {
                if(listOfResto.length !== filteredData.length) {
                    setFilteredData(listOfResto);
                    return;
                }
                let resss = listOfResto.filter(res=>res.info.avgRating > 4.2);
                setFilteredData(resss);
            }}>
                Top Res - Easy
            </button>
        </div>
        {<Filter filData={[filteredData, setFilteredData]} resData={[listOfResto, setResListss]}/>}
        <RestaurantContainer resData={filteredData}/>
    </div>
)};

export default Body;