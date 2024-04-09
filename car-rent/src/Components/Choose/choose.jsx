import { useState } from "react";
import SectionWrapper from "../SectionWrapper/sectionwrapper"
import card1 from "../../assets/card-1.jpg"
import card2 from "../../assets/card-2.jpg"
import card3 from "../../assets/card-3.jpg"
import card4 from "../../assets/card-4.jpg"
import "./choose.css"
function Choose() {
    const tabs = [
        {
            id: 'content-1', title: 'Car and Minivan',
            content: (
                <>
                    <div className="card">
                        <img className="card__img" src={card1} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card__img" src={card2} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card__img" src={card1} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div><div className="card">
                        <img className="card__img" src={card2} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div><div className="card">
                        <img className="card__img" src={card1} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div><div className="card">
                        <img className="card__img" src={card2} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div><div className="card">
                        <img className="card__img" src={card1} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div>
                </>
    
            )
        },
        {
            id: 'content-2', title: 'Trucks',
    
            content: (
    
                <>
                    <div className="card">
                        <img className="card__img" src={card1} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div><div className="card">
                        <img className="card__img" src={card4} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div><div className="card">
                        <img className="card__img" src={card2} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div>
                </>
            )
        },
        {
            id: 'content-3', title: 'Crossovers & SUVs', content:
    
                (<>
    
                    <div className="card">
                        <img className="card__img" src={card3} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div><div className="card">
                        <img className="card__img" src={card4} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div><div className="card">
                        <img className="card__img" src={card1} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div><div className="card">
                        <img className="card__img" src={card2} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div><div className="card">
                        <img className="card__img" src={card1} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div><div className="card">
                        <img className="card__img" src={card4} />
                        <div className="card__content">
                            <h4 className="card__title">Toyota Crown 2023</h4>
                            <p className="card__text">starting from $ 39900</p>
                            <p className="card__price">$ 650/mo</p>
                            <a className="card__link" href="#">see details</a>
                        </div>
                    </div>
                </>)
        },
        {
            id: 'content-4', title: 'Electrified', content: (<>
    
                <div className="card">
                    <img className="card__img" src={card1} />
                    <div className="card__content">
                        <h4 className="card__title">Toyota Crown 2023</h4>
                        <p className="card__text">starting from $ 39900</p>
                        <p className="card__price">$ 650/mo</p>
                        <a className="card__link" href="#">see details</a>
                    </div>
                </div><div className="card">
                    <img className="card__img" src={card3} />
                    <div className="card__content">
                        <h4 className="card__title">Toyota Crown 2023</h4>
                        <p className="card__text">starting from $ 39900</p>
                        <p className="card__price">$ 650/mo</p>
                        <a className="card__link" href="#">see details</a>
                    </div>
                </div><div className="card">
                    <img className="card__img" src={card1} />
                    <div className="card__content">
                        <h4 className="card__title">Toyota Crown 2023</h4>
                        <p className="card__text">starting from $ 39900</p>
                        <p className="card__price">$ 650/mo</p>
                        <a className="card__link" href="#">see details</a>
                    </div>
                </div><div className="card">
                    <img className="card__img" src={card2} />
                    <div className="card__content">
                        <h4 className="card__title">Toyota Crown 2023</h4>
                        <p className="card__text">starting from $ 39900</p>
                        <p className="card__price">$ 650/mo</p>
                        <a className="card__link" href="#">see details</a>
                    </div>
                </div></>)
        },
    ];
   
    const [activeTab, setactiveTab] = useState('content-1');


    return (
        <>
            <h1 className="section-title choose__title">Choose your car</h1>
            <div className="tabs">
                <div className="tabs__btn">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tabs__btn-item ${activeTab === tab.id ? 'tabs__btn-item--active' : ''}`}
                            onClick={() => setactiveTab(tab.id)}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="tabs__content">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            id={tab.id}
                            className={`tabs__content-item ${activeTab === tab.id ? 'tabs__content-item--active' : ''}`}
                        >
                            {tab.content}
                        </div>
                    ))}
                </div>
            </div>
            <a className="showmore__link link" href="#">SHOW MORE</a>
        </>
    )
}

export default SectionWrapper("choose", Choose);