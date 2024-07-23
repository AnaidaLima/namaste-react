import { RES_IMG } from "../utils/constants";

const ResCards = (props) => {
    const {name, cuisines, avgRating, cloudinaryImageId, sla} = props.resInfo.info;
    return (
    <div className="res-card">
        <img src={RES_IMG+cloudinaryImageId}/>
        <h2>{name}</h2>
        <div className="res-details">
            <h4>{cuisines.join(' ')}</h4>
            <h4> {sla.deliveryTime+" mins"}</h4>
            <h4>{avgRating+" ratings"}</h4>
        </div>
    </div>
    )
}

export default ResCards;