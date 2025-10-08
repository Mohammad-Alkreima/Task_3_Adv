import { useState } from "react"
import OurTestimonialsData from "../../Data/OurTestimonialsData"
import CardTestimonials from "../CardTestimonials/CardTestimonials"
import Title from "../Title/Title"
import "./OurTestimonials.css"

const OurTestimonials = () => {
    const [index, setIndex] = useState(0);


    const getVisibleCount = () => {
        return(
            typeof window !== "undefined" && window.innerWidth < 992 ? 1 : 3
        )
    }

    const prev = () => {
    const visible = getVisibleCount();
    console.log(visible)
    const maxIndex = Math.max(0, OurTestimonialsData.length - visible);
    setIndex((i) => (i === 0 ? maxIndex : i - 1));
    };


    const next = () => {
    const visible = getVisibleCount();
    const maxIndex = Math.max(0, OurTestimonialsData.length - visible);
    setIndex((i) => (i === maxIndex ? 0 : i + 1));
    };
    return (
        <section className="ourTestimonials whiteSpace conatiner">
            <Title intro = "Their Happy Words 🤗"
                    title= "Our Testimonials"
                    desc= "Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
            />
            <div className="cardsTestimoials" style={{["--idx"] : index}}>
                <div className="cards">
                    <div className="slides">
                        {OurTestimonialsData.map((card, index) => {
                            return(
                                <CardTestimonials   key= {index}  
                                                    image= {card.image}
                                                    name= {card.name}
                                                    rate= {card.rate}
                                                    desc = {card.desc}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="arrows">
                    <button className="left" onClick={prev}>
                        <img src="/Task_3_Adv/assets/img/arrow-left.png" alt=""  />
                    </button>
                    <button className="right" onClick={next}>
                        <img src="/Task_3_Adv/assets/img/arrow-right.png" alt="" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OurTestimonials
