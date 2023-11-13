import "./property.css";
import Address from "../../components/address/Address";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import axios from "axios";


function Property() {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [property, setProperty] = useState({});
    // const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const getProperty = async () => {
            try {
                const res = await axios.get("https://luxury.onrender.com/api/property/find/" + id);
                setProperty(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        getProperty();
    }, [id])

    return (
        <div className="prop-container">
            <Address />
            <Navbar />

            <div>
                <h2 className="prop-heading"> PROPERTY DETAILS</h2>
                <hr className="prop-h" />
                <hr className="prop-h-1" />

                <div className="prop-wrapper" key={property._id}>
                    <img src={property.img} alt="house" className="propertyImg" />
                    <br />
                    <button className="prop-btn">For sale </button>
                    <h2> {property.title} </h2>
                    <h3>Price : <span className="prop-span"> ₦ {property.price}</span></h3>
                    <p className="loca"> {property.location}</p>

                    <h3 className="prop-desc"> Description </h3>
                    <p className="prop-p"> Own this property at katampe for just 40 million initial deposit and spread the balance in 12 months of house delivery
                        <br />
                        Pricing: 90 million for offplan
                        {property.title}
                        <br />
                        Amenities:
                        Transformer
                        tarred Road to the estate
                        Automated bore hole
                        Smart security system
                        Serviced generators
                        2 mins drive from town <br />
                        We could also manage your property for shortlet and give you returns.</p>
                    <h3> Features </h3>
                    <ul>
                        <li> Property Age : <span className="my-span"
                        > {property.property_age} </span></li>
                        <li> Swimming pool : <span className="my-span"
                        > {property.pool} </span></li>
                        <li> Parking : <span className="my-span"
                        > {property.parking_space} </span></li>
                        <li> Gym : <span className="my-span"
                        > {property.gym} </span></li>
                        <li> Third Party : <span className="my-span"
                        > {property.third_party} </span></li>
                        <li> Allivator : <span className="my-span"
                        > {property.allivator}</span></li>
                        <li> CCTV : <span className="my-span"
                        > {property.cctv}</span></li>
                        <li> Water Supply : <span className="my-span"
                        >  {property.water_supply}</span></li>
                        <li> Type : <span className="my-span"
                        >
                            {property.type} </span></li>
                        <li> Security : <span className="my-span"
                        > {property.security} </span></li>
                        <li> Temple : <span className="my-span"
                        > {property.temple} </span></li>
                        <li> Installmental Payment? : <span className="my-span"
                        > Yes </span></li>

                    </ul>
                </div>

                <div className="prop-agent">
                    <h3> Interested In this?</h3>
                    <h2 className="agent-heading"> Contact Agent</h2>
                    <hr className="agent-h" />
                    <hr className="agent-h-1" />

                    <form>
                        <div className="contact-agent">
                            <div className="input-group">
                                <label for="name">Name:</label>
                                <input type="text" id="name" placeholder="Name" />
                            </div>
                            <div className="input-group">
                                <label for="email">Email:</label>
                                <input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className="input-group">
                                <label for="phone">Phone:</label>
                                <input type="tel" id="phone" placeholder="Phone" />
                            </div>
                            <div className="input-group">
                                <label for="message">Message:</label>
                                <textarea id="message" placeholder="Message"></textarea>
                            </div>
                            <button className="snd-btn" type="submit">Send Message</button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Property;