import SectionWrapper from "../SectionWrapper/sectionwrapper"
import "./why-lease.css"
import img1 from "../../assets/why-lease-1.svg"
import img2 from "../../assets/why-lease-2.svg"
import img3 from "../../assets/why-lease-3.svg"
import img4 from "../../assets/why-lease-4.svg"

function Whylease() {
    return (
        <>
            <h1 className="section-title">
                Why Lease with D&M?
            </h1>
            <ul className="why-lease__list">
                <li className="why-lease__item">
                    <img className="why-lease__item-img" src={img1} />
                    <h2 className="why-lease__item-title">Top Dealers</h2>
                    <p className="why-lease__item-text">TrueCar Certified Dealers compete for your business by providing discounted pricing on in-stock inventory.</p>
                </li>
                <li className="why-lease__item">
                    <img className="why-lease__item-img" src={img2} />
                    <h2 className="why-lease__item-title">Discounted Pricing</h2>
                    <p className="why-lease__item-text">View local inventory from the comfort of home and get access to guaranteed savings on the car of your choice.</p>
                </li>
                <li className="why-lease__item">
                    <img className="why-lease__item-img" src={img3} />
                    <h2 className="why-lease__item-title">Lower Payments</h2>
                    <p className="why-lease__item-text">Get discounted pricing when you shop for a car or truck using TrueCar and save on your lease payment.</p>
                </li>
                <li className="why-lease__item">
                    <img className="why-lease__item-img" src={img4} />
                    <h2 className="why-lease__item-title">Easy Upgrade</h2>
                    <p className="why-lease__item-text">Easy to upgrade to the newest vehicle model every few years if you would like to be modern and comfortable</p>
                </li>
            </ul>

        </>
    )
}

export default SectionWrapper("why-lease", Whylease);