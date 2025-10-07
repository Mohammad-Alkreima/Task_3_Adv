import TeamMembersData from "../../Data/TeamMembersData"
import CardTeam from "../CardTeam/CardTeam"
import Title from "../Title/Title"
import "./TeamMembersSection.css"

const TeamMembersSection = () => {
    return (
        <section className="teamMembers whiteSpace conatiner">
            <Title intro= "Our Teachers With Experties"
                    title= "Our Team Members"
                    desc= "At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
            />
            <div className="cardsTeam">
                {TeamMembersData?.map((cardMember, index) => {
                    return(
                        <CardTeam key={index}
                                imgPerson={cardMember.img}
                                name={cardMember.name}
                                mailIcon={cardMember.iconMail}
                                qualification={cardMember.qualification}
                                desc={cardMember.desc}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default TeamMembersSection
