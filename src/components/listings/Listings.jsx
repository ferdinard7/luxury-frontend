import featuredListings from "../../data";
import "./listings.css";
// import { Properties } from "../../data";

function Listings() {
    return (
        <div className="l-container">
            <h2 className="l-heading"> Featured Listings</h2>
            <hr className="l-h-1" />
            <hr className="l-h" />
            <div className="l-wrapper">
                {featuredListings.map((property) => {
                    return (
                        <div key={property._id}>
                            <img className="l-img1" src={property.img} alt="flat" />
                            <button className="l-btn">VIEW LISTING</button>
                            <p> {property.title}</p>
                            <h3 className="l-h3"> ₦ {property.price}</h3>
                            <p>{property.desc} </p>
                            <p className="l-location"> {property.location} </p>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}


export default Listings;