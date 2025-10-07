import StudentLearnData from "../../Data/StudentLearnData"
import CardStudent from "../CardStudent/CardStudent"
import Title from "../Title/Title"
import "./StudentLearn.css"

const StudentLearn = () => {
    return (
        <section className="studentLearn whiteSpace conatiner">
            <Title intro= "Our Features"
                    title= "What Students Learn"
                    desc= "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
            />
            <div className="cardsStudent">
                {StudentLearnData?.map((cardStd, index) => {
                    return(
                        <CardStudent key={index}
                                    img={cardStd?.icon}
                                    title={cardStd?.subject}
                                    desc={cardStd?.skills}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default StudentLearn
