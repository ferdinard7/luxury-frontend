import React from "react";
import { Instagram, Facebook, Twitter } from '@mui/icons-material';
import "./footer.css";

function Footer() {

   return (
      <div className="footer-container contact">
         <div className="footer-wrapper">
            <div className="footer-logo">
               <img className="footer-img" src="/images/logo.png" alt="logo" />
            </div>
            <div className="footer-first">
               <h4 style={{ marginBottom: "10px" }}>Support</h4>
               <p style={{ marginBottom: "10px" }}> <span className="footer-span"></span> Forum </p>
               <p style={{ marginBottom: "10px" }}> <span className="footer-span">  </span> Statistics</p>
               <p style={{ marginBottom: "20px" }}> <span className="footer-span"> </span> Terms And Condition</p>
               <p style={{ marginBottom: "20px" }}> <span className="footer-span"> </span> Support</p>
            </div>
            <div className="footer-second">
               <h4 style={{ marginBottom: "10px" }}>Quick Links</h4>
               <p style={{ marginBottom: "10px" }}>  About Us </p>
               <p style={{ marginBottom: "10px" }}>  Featured Properties</p>
               <p style={{ marginBottom: "10px" }}>  How It Works</p>
            </div>
            <div className="footer-third">
               <h4 style={{ marginBottom: "10px" }}>Contact Us</h4>
               <p style={{ marginBottom: "10px" }}> <Instagram className="iconss" />  Head office: No 2 pokistum street, Area 2 Garki, Nigeria</p>
               <p style={{ marginBottom: "10px" }}>  <Twitter className="iconss" />  branch office: No 4 Abuja children home, karu Abuja</p>
               <p style={{ marginBottom: "20px" }}>  <Facebook className="iconss" /> Lagos branch: 28b fola osibo street, lekki phase 1 </p>
               <p style={{ marginBottom: "20px" }}>  <Facebook className="iconss" /> Rwanda head office: KN4st, Nyarugenge Kigali Rwanda </p>
               <p style={{ marginBottom: "20px" }}>  <Facebook className="iconss" />+234 808 197 2416 </p>
               <p style={{ marginBottom: "20px" }}>  <Facebook className="iconss" />+250 792 106 125 </p>
               <p style={{ marginBottom: "20px" }}>  <Facebook className="iconss" /> <Twitter style={{ fontSize: "16px", marginRight: "10px" }} /> <Instagram style={{ fontSize: "16px", marginRight: "10px" }} /> <Facebook /> </p>

            </div>
         </div>

         <footer>
            <p>Made with 💖 by Big_Ferd</p>
            <small> copyright © 2023</small>
         </footer>
      </div>
   )
}


export default Footer;