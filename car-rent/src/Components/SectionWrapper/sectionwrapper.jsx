import "./wrapper.css"
const SectionWrapper = (sectionName, Component) =>
    function HOC() {
        return (
            <section className={`${sectionName}`}>
                <div className="container">
                    <Component />
                </div>
            </section>
        )
    }
export default SectionWrapper;{/*Ця конструкція так і називається як функція HOC(Higher Order Component)-приймає компонент як аргумент і повертає вже модифікований компонент*/}