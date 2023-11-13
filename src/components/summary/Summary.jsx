import "./summary.css";

function Summary() {
  return (
    <div className="s-container">
      <div className="s-wrapper">
        <div className="s2-wrapper" >
          <div className="s3-wrapper">
            <div>
              <img src="/icons/011-property.png" alt="icon1" />
              <h2> 4 </h2>
              <h4>Property Available</h4>
            </div>
            {/* SECOND */}
            <div>
              <img src="/icons/012-real-estate.png" alt="icon1" />
              <h2> 4 </h2>
              <h4>Sales Property Available</h4>
            </div>
            {/* THIRD */}
            <div>
              <img src="/icons/013-rent.png" alt="icon1" />
              <h2> 0 </h2>
              <h4>Rent Property Available</h4>
            </div>
            {/* FOURTH */}
            <div>
              <img src="/icons/014-best-customer-experience.png" alt="icon1" />
              <h2> 17 </h2>
              <h4>Registered Users</h4>
            </div>


          </div>


        </div>


      </div>
    </div>

  )
}

export default Summary;