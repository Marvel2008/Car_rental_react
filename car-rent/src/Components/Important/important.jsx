import SectionWrapper from "../SectionWrapper/sectionwrapper"
import img1 from "../../assets/last1.jpg"
import img2 from "../../assets/last2.jpg"
import img3 from "../../assets/last3.jpg"
import img4 from "../../assets/last4.jpg"
import "./important.css"
function Important() {
    return (
        <>
            <h1 className="section-title important-title">Important Things to Consider</h1>
            <p className="important-text">Depending on your circumstances and what is important to you, a lease could be a great option for your next vehicle. Below are some important factors that may influence your decision.</p>
            <ul className="important__list">
                <li className="important__list__item">
                    <img className="important__item-img" src={img1}/>
                    <p className="important__item-text">Monthly payments on leases are generally 20% - 30% cheaper than loans</p>
                </li>
                <li className="important__list__item">
                    <img className="important__item-img" src={img2} />
                    <p className="important__item-text">You may be eligible for a tax break if you use the leased vehicle for business purposes</p>
                </li>
                <li className="important__list__item">
                    <img className="important__item-img" src={img3} />
                    <p className="important__item-text">Easy to upgrade to the newest vehicle model every few years</p>
                </li>
                <li className="important__list__item">
                    <img className="important__item-img" src={img4} />
                    <p className="important__item-text">There are often fees charged if you drive more than your lease's mileage allowance</p>
                </li>
            </ul>

        </>
    )
}

export default SectionWrapper("important",Important);