import StudentSupportData from "../../Data/StudentSupportData"
import CardBenefits from "../CardBenefits/CardBenefits"
import Title from "../Title/Title"
import "./StudentSupportSection.css"

const StudentSupportSection = () => {
    return (
        <section className="studentSupportSection whiteSpace conatiner">
            <Title intro= "Our Achievements"
                    title= "Student Support"
                    desc= "At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
            />
            <div className="allCards">
                {StudentSupportData?.map((data, index) => {
                    return(
                        <CardBenefits key={index}
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

export default StudentSupportSection
