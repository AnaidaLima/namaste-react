import ResCards from "./ResCards";
import resList from "../utils/restaurantList";

const RestaurantContainer = () => (
    <div className="res-container">
        {
            resList.map((restaurantData) => (
                <ResCards key={restaurantData.info.id} resInfo={restaurantData}/>
            ))
        }
        
    </div>
)

export default RestaurantContainer;