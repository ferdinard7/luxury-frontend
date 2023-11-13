import "./why.css";


function Why() {
    return (
        <div className="why-container">
            <div className="why-wrapper">
                <div className="why2-wrapper" >
                    <h4 className="why-heading">Why Us</h4>
                    <div className="m-wrapper">
                        <div>
                            {/* DONT CONFUSED THIS DIV ---START-- */}
                            <div>
                                <img src="/icons/005-winner.png" alt="icon1" />
                            </div>
                            <div className="v-div">
                                <h4> OUR VISION</h4>
                                <p> To be Nigeria's number one source for affordable, luxurious, and well-planned real estate.
                                    In other words, we want to give the averave Nigerian family or property prospect the property of their dream home on their current budget.</p>
                            </div>
                        </div>

                        {/* DONT CONFUSED THIS DIV ---END-- */}
                        <div>

                            <div>
                                <img src="/icons/006-user.png" alt="icon1" />
                            </div>
                            <div className="v-div">
                                <h4> OUR MISSION</h4>
                                <p> We have a mission to deliver properties that strike the perfect balance between luxury, affordability,and buyer's choice.
                                    We do this by helping our customers source for good buys, optimize every resource available to deliver what is simply a ""Great boy</p>
                            </div>

                        </div>
                        {/* DONT CONFUSED THIS DIV ---END-- */}
                        <div>
                            <div>
                                <img src="/icons/007-package.png" alt="icon1" />
                            </div>
                            <div className="v-div">
                                <h4> OUR PRODUCTS</h4>
                                <p>Wherever your heart is leading you, we help make sure budget supports the journey. We pratically assist you to achieve your lifelong goals in real estate through the outright purchase of properties and lands and/or investing with us.</p>
                            </div>
                        </div>


                    </div>


                </div>


            </div>
        </div>

    )
}


export default Why;