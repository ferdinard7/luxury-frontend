import "./invest.css";


function Invest() {
  return (
    <div className="i-container">
      <div className="i-1">
        <h3> General Infomation</h3>
        <p>
          Own Your Dream Plot in Abuja with Our 5-Year Payment Plan! Key Features of our 5-Year Payment Plan:
        </p>
        <p>
          1. Flexible Payment Options: We understand that everyone's financial situation is unique. With our 5-Year Payment Plan, you have the flexibility to choose a payment option that suits your budget and cash flow. Whether you prefer monthly, quarterly, or annual installments, we've got you covered.
        </p>
        <p>
          2. Secure Your Plot Today: Don't miss out on the opportunity to own a plot in Abuja's most sought-after locations. Our 5-Year Payment Plan allows you to secure your plot now and start building your dreams for the future.
        </p>
        <p>
          3. Guaranteed Ownership: Rest assured that you will receive full ownership rights to your plot upon completion of the payment plan. We prioritize transparency and ensure a seamless transfer of ownership, giving you peace of mind.
        </p>
        <p>
          4. Prime Locations: Our plots are strategically located in desirable areas of Abuja, offering proximity to key amenities, infrastructure, and excellent potential for appreciation. Invest in a plot that not only fits your budget but also promises long-term value. Take advantage of this limited-time opportunity to invest in Abuja's real estate market with ease. Our 5-Year Payment Plan makes land ownership accessible to all, allowing you to turn your dreams into reality.
        </p>
      </div>
      <div className="i-2">
        <h3>Signup for our 5 years plan, We would give you a call</h3>
        <form className="form2">
          <input />
          <p> Name</p>
          <input />
          <p>Email</p>
          <select name="cars" className="type">
            <option value="Select Type">Property you're going for</option>
            <option value="flat">Kurudu ($ 200 monthly)</option>
            <option value="bungalow">Idu ($ 400 monthly)</option>
            <option value="house">Legbe ($300 monthly)</option>
          </select>
          <p>Requesting for?</p>
          <input />
          <p>Whatsapp Number</p>

          <p className="i-p"> <input className="i-c" type="checkbox" /> I do accept the <a href="/" className="i-a">Terms and Conditions</a> of your site.</p>
          <button type="submit"> Subscribe</button>
        </form>


      </div>
    </div>
  )
}


export default Invest;