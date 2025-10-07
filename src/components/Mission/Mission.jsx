import MissionData from "../../Data/MissionData"
import CardMission from "../CardMission/CardMission"
import Title from "../Title/Title"
import "./Mission.css"

const Mission = () => {
    return (
        <section className="mission whiteSpace conatiner">
            <Title intro= "Mission & Visions"
                    title= "Our Mission & Visions"
                    desc= "We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
            />
            <div className="cardsMission">
                {MissionData.map((card, index) => {
                    return(
                        <CardMission key={index}
                                    title={card.title}
                                    img={card.img}
                                    altImg={card.altImg}
                                    desc={card.desc}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Mission
