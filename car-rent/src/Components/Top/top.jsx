import SectionWrapper from "../SectionWrapper/sectionwrapper"
import "./top.css"
function Top() {
    return (
        <>
            <h1 className="title">
                Leasing From D&M
            </h1>
            <a href="#" className="top__link">
                FIND A CAR
            </a>
        </>
    )
}

export default SectionWrapper("top", Top);