import PizzaAbout from "./PizzaComponents/about";
import PizzaFooter from "./PizzaComponents/footer";
import PizzaHome from "./PizzaComponents/home";
import PizzaNavbar from "./PizzaComponents/navbar";
import PizzaTeam from "./PizzaComponents/pizzateam";
import PizzaTypes from "./PizzaComponents/pizzatypes";

let PizzaHomeScreen = () =>{
    return(
        <div>
        <PizzaNavbar/>
        <PizzaHome/>
        <PizzaTypes/>
        <PizzaAbout/>
        <PizzaTeam/>
        <PizzaFooter/>
        </div>
    );
}
export default PizzaHomeScreen;