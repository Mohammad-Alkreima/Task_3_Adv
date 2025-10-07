import EventsCelebrationsData from "../../Data/EventsCelebrationsData"
import CardStudent from "../CardStudent/CardStudent"
import Title from "../Title/Title"
import "./EventsCelebrationsSection.css"

const EventsCelebrationsSection = () => {
    return (
        <section className="eventsCelebrationsSection whiteSpace conatiner">
            <Title intro= "Our Features"
                    title= "Events & Celebrations"
                    desc= "At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
            />
            <div className="allCards">
                {EventsCelebrationsData?.map((data, index) => {
                    return(
                        <CardStudent key={index}
                                    img={data.img}
                                    title={data.title}
                                    desc={data.desc}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default EventsCelebrationsSection
