import "./wedo.css";


function Wedo() {
    return (
        <div className="w-container">
            <h2 className="w-heading"> What We Do</h2>
            <hr className="w-h-1" />
            <hr className="w-h" />
            <div className="w-wrapper">
                <div>
                    <img className="w-img" src="/icons/001-house.png" alt="icon" />
                    <h3 className="w-h3">Selling Service</h3>
                    <p className="w-p">We sell some of the best properties you can find in nigeria</p>
                </div>
                <div>
                    <img className="w-img" src="/icons/002-for-rent.png" alt="icon" />
                    <h3 className="w-h3">Rental Service</h3>
                    <p className="w-p">Are you looking to rent an apartment or an office we got you covered.</p>

                </div>
                <div>
                    <img className="w-img" src="/icons/003-list.png" alt="icon" />
                    <h3 className="w-h3">Property Listings</h3>
                    <p className="w-p">Are you an agent, builder or just a user you can now list your property on our platform and we sell for you.</p>

                </div>
                <div>
                    <img className="w-img" src="/icons/004-diagram.png" alt="icon" />
                    <h3 className="w-h3">Invest</h3>
                    <button className="w-btn"> Invest</button>
                </div>

            </div>
        </div>
    )
}



export default Wedo;