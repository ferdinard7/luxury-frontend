import React, { useEffect, useState } from "react";
import Address from "../../components/address/Address";
import Navbar from "../../components/navbar/Navbar";
import "./properties.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function Properties() {

    const [Houses, setHouses] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProperty = async () => {
            try {
                const res = await axios.get("https://luxury-backend.onrender.com/api/properties");
                setHouses(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        getProperty();
    }, []);



    return (

        <div>
            <Address />
            <Navbar />
            <div className="props-container">
                <h2 className="props-heading"> PROPERTY GRID</h2>
                <hr className="props-h" />
                <hr className="props-h-1" />

                <div className="props-wrapper">
                    {Houses.map((house) => {
                        return (
                            <div key={house.id}>
                                <img className="props-img1" src={house.img} alt="flat" />
                                <Link className="btn-link" to={`/property/${house._id}`}>VIEW LISTING</Link>
                                <p> {house.title}</p>
                                <h3 className="props-h3"> ₦ {house.price}</h3>
                                <p>{house.desc} </p>
                                <p className="props-location"> {house.location} </p>
                            </div>
                        )
                    })}


                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Properties;