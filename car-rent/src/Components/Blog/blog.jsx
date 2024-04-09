import SectionWrapper from "../SectionWrapper/sectionwrapper"
import "./blog.css"
import img1 from "../../assets/blog1.jpg"
import img2 from "../../assets/blog2.jpg"
function Blog() {
    return (
        <>
            <div className="blog__items">
                <div className="blog__item">
                    <img className="blog__item-img" src={img1}/>
                        <h4 className="blog__item-title">An easier way to buy your next Toyota</h4>
                        <a href="#" className="blog__item-link">more</a>
                </div>
                <div className="blog__item">
                    <img className="blog__item-img" src={img2}/>
                        <h4 className="blog__item-title">A Guide to Road-Tripping With Pets</h4>
                        <a href="#" className="blog__item-link">more</a>
                </div>
            </div>
            <a className="showmore__link" href="#">SHOW MORE</a>
        </>
    )
}

export default SectionWrapper("blog", Blog);