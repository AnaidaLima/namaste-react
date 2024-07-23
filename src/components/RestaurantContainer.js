import ResCards from "./ResCards";


const RestaurantContainer = (props) => {
    const {resData} = props;
    return (
    <div className="res-container">
        {
            resData.map((restaurantData) => (
                <ResCards key={restaurantData.info.id} resInfo={restaurantData}/>
            ))
        }
    </div>
)}

export default RestaurantContainer;