import "./about.css";
import Address from "../../components/address/Address";
import Footer from "../../components/footer/Footer";
import React, { useEffect, useRef, useState } from 'react';
import Navbar from "../../components/navbar/Navbar";

function About() {

  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);


  return (
    <div>
      <Address />
      <Navbar />
      <div>
        <div className="about-container">
          <div className="about-wrapper">
            {/* <div className="a-wrapper"> */}
            <h2 className="a-heading"> About Luxury Prime</h2>
            <hr className="a-h-1" />
            <hr className="a-h" />
            {/* </div> */}
            <p className="a-p">
              At Luxury Prime, you are number one. We value your interest and will provide you with all the individual attention and service your desire. We are obsessed with client satisfaction by offering value whilst creating wealth through Real Estate products. Our watchword is affordability, thereby producing non exclusive projects at prime locations. At Luxury Prime Properties, There is a package for everyone!   We believe in integrity, commitment to excellence, a professional attitude and personalized care. We have projects at Katampe, Kaura, Lokogoma, Lugbe, Life Camp, Mbora, Asokoro & Jahi. Think Real Estate, think Luxury Prime Properties. We look forward to doing business with you.
            </p>

          </div>

        </div>
      </div>
      {/* MY ANIMATION  */}


      <Footer />


      <div className={`container${isVisible ? ' in-view' : ''}`} ref={containerRef}>
        <div className="footer">
          <p>This is the footer</p>
        </div>
        <div className={`content${isVisible ? ' enter' : ' leave'}`}>
          <p>Content 1</p>
        </div>
        <div className={`content${isVisible ? ' enter' : ' leave'}`}>
          <p>Content 2</p>
        </div>
        <div className={`content${isVisible ? ' enter' : ' leave'}`}>
          <p>Content 3</p>
        </div>
      </div>

    </div>

  )
}


export default About;