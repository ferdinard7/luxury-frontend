import "./contact.css";
import Address from "../../components/address/Address";
import Footer from "../../components/footer/Footer";
import { useRef } from "react";
import Navbar from "../../components/navbar/Navbar";

function Contact() {

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Address />
            <Navbar />
            <div className="g-container">
                <div class="vertical-rule">
                    <h3> Contacts</h3>
                    <p> Address</p>
                    <small>No 2 pokistum street, Area 2 Garki, Nigeria</small>
                    <p> Call Us </p>
                    <small> +234 808 197 2416 </small>
                    <br />
                    <small> +234 901 295 9606 </small>
                    <p> Email Address </p>
                    <small>support@luxuryprime.org</small>
                    <small> support@luxuryprime.org </small>
                </div>
                <div className="next">
                    <h2>GET IN TOUCH</h2>
                    <hr className="n-h-1" />
                    <hr className="n-h" />
                    <form className="form" ref={formRef} onSubmit={handleSubmit}>
                        <input placeholder="your name" />
                        <input placeholder="email address" />
                        <input placeholder="phone number" />
                        <input placeholder="subject" />
                        <textarea placeholder="Type comments" />
                        <button>Send Message</button>

                    </form>

                </div>

            </div>
            <Footer />

        </div>
    )
}


export default Contact;