import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home"
import Invest from "../pages/invest/Invest";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Admin from "../pages/admin/Admin";
import Properties from "../pages/properties/Properties";
import Property from "../pages/property/Property";


function Routes() {
    // const user = false;

    return (
        <Switch>
        <Route path="/" exact>
          <Home />
        </Route> 
        <Route path="/invest">
          <Invest />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about" exact>
            <About />
           </Route>
           <Route path="/properties" exact>
            <Properties />
           </Route>
           <Route path="/property/:id" exact>
            <Property />
           </Route>
           <Route path="/admin">
           <Admin />
           </Route>
           
                   </Switch>
    )
}


export default Routes;