import Address from "../components/address/Address";
import Hero from "../components/hero/Hero";
import Wedo from "../components/wedo/Wedo";
import Listings from "../components/listings/Listings";
import Why from "../components/why/Why";
import Work from "../components/work/Work";
import Team from "../components/team/Team";
import Summary from "../components/summary/Summary";
import Footer from "../components/footer/Footer";
import Navbar2 from "../components/navbar2/Navbar2";

function Home() {
    return (
        <div>
       <Address />
       <Navbar2 />
       <Hero />
       <Wedo />
       <Listings />
       <Why />
       <Work />
       <Team />
       <Summary />
       <Footer />
       
        </div>
    )
}

export default Home;