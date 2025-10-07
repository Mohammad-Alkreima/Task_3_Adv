import HistorySectionData from "../../Data/HistorySectionData"
import HistoryContent from "../HistoryContent/HistoryContent"
import Title from "../Title/Title"
import "./HistorySection.css"

const HistorySection = () => {
    return (
        <section className="HistorySection whiteSpace conatiner">
            <Title intro= "Our Progressive Journey"
                    title= "Our History"
                    desc= "Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
            />
            <div className="parent">
                {HistorySectionData?.map((card, index) => {
                    return(
                        <HistoryContent key={index}
                                        img={card.img}
                                        number={card.number}
                                        title={card.title}
                                        desc={card.desc}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default HistorySection
