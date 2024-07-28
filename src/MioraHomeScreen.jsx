import CustomerReview from "./RealEstate/CustomerReview";
import DreamHome from "./RealEstate/DreamHomeToday";
import EstateFooter from "./RealEstate/Footer";
import EstateNavbar from "./RealEstate/Navbar";
import Properties from "./RealEstate/Properties";

let MioraHomeScreen = ()=>{
    return(
        <>
        <EstateNavbar/>
        <Properties/>
        <CustomerReview/>
        <DreamHome/>
        <EstateFooter/>
        </>
    );
}
export default MioraHomeScreen;