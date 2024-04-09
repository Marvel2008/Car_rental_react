import SectionWrapper from "../SectionWrapper/sectionwrapper"
import "./video.css"
function Video() {
    return (
        <>
            <h1 className="section-title video__title">
                WELCOME TO D&M LEASING
            </h1>
            <h2 className="video__text">Find out how easy it is to lease from D&M</h2>
            <iframe className="video__content" width="1000" height="500" src="https://www.youtube.com/embed/RdZsI7gzNVM?si=3-vDFBDJlwSjYX1b&amp;controls=0" title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </>
    )
}

export default SectionWrapper("video",Video)

