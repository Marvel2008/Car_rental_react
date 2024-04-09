import Blog from "../Components/Blog/blog";
import Choose from "../Components/Choose/choose";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";

function NewCar(){
    return(
        <>
        <Header isMain={false}/>
        <Choose/>
        <Blog/>
        <Footer/>
        </>
    )
}

export default NewCar;