import "./hero.css";


function Hero() {
  return (
    <div className="hero-container">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="/video/the-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        {/* Other content */}
      </div>

      <div className="hero-wrapper">
        <p className="hero-wrapper-first">Luxury Prime</p>
        <p className="hero-wrapper-paragraph">Find Your dream house</p>

        <div className="select-div">
          <div>
            <select name="cars" className="type">
              <option value="Select Type">Select Type</option>
              <option value="Apartment">Apartment</option>
              <option value="flat">Flat</option>
              <option value="bungalow">Bungalow</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="office">Office</option>
            </select>
          </div>

          <div>
            <select className="status">
              <option value="select status">Select Status</option>
              <option value="rent">Rent</option>
              <option value="sale">Sale</option>
            </select>
          </div>

          <div>
            <input className="search-input" placeholder="Enter city or State" />
          </div>

          <div>
            <button className="search-button">Search Property</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Hero;