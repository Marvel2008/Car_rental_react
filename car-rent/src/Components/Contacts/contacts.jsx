import SectionWrapper from "../SectionWrapper/sectionwrapper"
import "./contacts.css"
function Contacts() {
    return (
        <>
            <h1 className="section-title contacts__title">Contact Us</h1>
            <p className="contacts__text">Feel free to contact us with questions, potencial partnerships or media inquiries</p>
            <form action="#" className="form">
                <input type="text" className="form__input" placeholder="Name" />
                <input type="email" className="form__input" placeholder="E-mail" />
                <textarea className="form__textarea" placeholder="Your text"></textarea>
                <button className="form_btn" type="submit">SUBMIT</button>
            </form>
        </>
    )
}

export default SectionWrapper("contacts", Contacts);