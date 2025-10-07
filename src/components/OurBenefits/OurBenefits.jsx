import BenefiteData from "../../Data/BenefiteData/BenefiteData"
import CardBenefits from "../CardBenefits/CardBenefits"
import Title from "../Title/Title"
import "./OurBenefits.css"


const OurBenefits = () => {
    return (
        <section className="ourBenefits whiteSpace conatiner">
            <Title intro = "Children Deserve Bright Future"
                    title= "Our Benefits"
                    desc= "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
            />
            <div className="cards">
                {BenefiteData.map((card, index) => {
                    return(
                        <CardBenefits   key={index}
                                    icon = {card.icon}
                                    title={card.title}
                                    desc={card.desc}
                    />
                    )
                })}
            </div>
        </section>
    )
}

export default OurBenefits
