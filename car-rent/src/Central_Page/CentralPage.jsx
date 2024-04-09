import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import Mainpage from "../Components/MainPage/mainpage";

function CentralPage(){
    return(
        <>
        <Header isMain={true}/>
        <Mainpage/>
        <Footer/>
        </>
    )
}

export default CentralPage;