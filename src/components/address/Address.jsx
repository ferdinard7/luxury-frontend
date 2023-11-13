import "./address.css";
import { Phone, Mail } from "@mui/icons-material";

function Address() {
    return (
        <div className="address-container">
            <div className="address-wrapper">
                <p> <Phone className="address-icon" /> +234 808 197 2416 / 07089915606  <span className="address-span"> <Mail className="address-icon" />  support@luxuryprime.org</span></p>
            </div>

        </div>
    )
}

export default Address;