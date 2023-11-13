import "./work.css";

function Work() {

    return (
        <div className="work-container">
            <h2 className="work-heading"> How It Works</h2>
            <hr className="work-h-1" />
            <hr className="work-h" />
            <div className="work-wrapper">
                <div>
                    <img src="/icons/008-discussion.png" alt="icon1" />
                    <h3> 1. Discussion</h3>
                    <p>
                        At Luxury Prime Properties, There is a package for everyone! feel free to communicate with us to get your property today.
                    </p>
                </div>
                <div>
                    <img src="/icons/009-search-data.png" alt="icon1" />
                    <h3> 2. Files Review</h3>
                    <p>
                        Get all the necesary files and document for your new property and ownership .
                    </p>
                </div>
                <div>
                    <img src="/icons/010-agreement.png" alt="icon1" />
                    <h3> 3. Acquire</h3>
                    <p>
                        All done! time to purchase your new property.
                    </p>
                </div>


            </div>
        </div>
    )
}


export default Work;