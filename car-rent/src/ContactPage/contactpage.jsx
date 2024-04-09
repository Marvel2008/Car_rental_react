import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import Contact from "../Components/ContactsPage/ContactsPage"
function ContactPage(){
    return(
        <>
        <Header isMain={false}/>
        <Contact/>
        <Footer/>
        </>
    )
}
export default ContactPage;