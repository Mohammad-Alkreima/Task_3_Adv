import ExtracurricularActivitiesData from "../../Data/ExtracurricularActivitiesData"
import CardBenefits from "../CardBenefits/CardBenefits"
import Title from "../Title/Title"
import "./ExtracurricularActivitiesSection.css"

const ExtracurricularActivitiesSection = () => {
    return (
        <section className="extracurricularActivitiesSection whiteSpace conatiner">
            <Title intro= "Our Features"
                    title= "Extracurricular Activities"
                    desc= "At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
            />
            <div className="allCards">
                {ExtracurricularActivitiesData?.map((data, index) => {
                    return(
                        <CardBenefits   key={index}
                                        icon={data.icon}
                                        title={data.title}
                                        desc={data.desc}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default ExtracurricularActivitiesSection
