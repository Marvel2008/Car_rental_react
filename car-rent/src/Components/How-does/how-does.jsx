import SectionWrapper from "../SectionWrapper/sectionwrapper"
import "./how-does.css"
function HowDoes() {
    return (
        <>
            <div className="how-does__inner">
                <h1 className="section-title">How Does Leasing Work?</h1>
                <p className="how-does__text">
                    Leasing a vehicle is essentially entering into a long term rental agreement for that vehicle. Unlike a traditional car purchase, you don’t actually own the vehicle. Instead, a leasing company purchases the vehicle from the dealer on your behalf and then you make monthly payments to the leasing company for the duration of your lease. Some leases however, do provide the option to purchase the vehicle at the end of the lease.
                </p>
                <h2 className="how-does-title">
                    Similar to a short term car rental, there are rules that define:
                </h2>
                <ol className="how-does-list">
                    <li className="how-does-item">How much you can drive, stated as annual miles (excess miles are charged at a specified rate)</li>
                    <li className="how-does-item">Types of damage that you may be liable for at the end of your lease</li>
                    <li className="how-does-item">The procedures and costs when you return the vehicle at the end of your lease</li>
                </ol>
                <p className="how-does__text">
                    Lease contracts are a commitment and ending them early can be difficult and expensive so it is important to consider your circumstances carefully before you decide.
                </p>
            </div>
        </>
    )
}

export default SectionWrapper("how-does", HowDoes);