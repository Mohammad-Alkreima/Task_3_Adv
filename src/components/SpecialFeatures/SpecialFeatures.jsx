import SpecialFeaturesData from "../../Data/SpecialFeaturesData"
import CardBenefits from "../CardBenefits/CardBenefits"
import Title from "../Title/Title"
import "./SpecialFeatures.css"

const SpecialFeatures = () => {
    return (
        <section className="specialFeatures whiteSpace conatiner">
            <Title intro= "Our Features"
                    title= "Our Special Features"
                    desc= "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
            />
            <div className="cardsFeatures">
                {SpecialFeaturesData?.map((cardFeature, index) => {
                    return(
                        <CardBenefits key={index}
                                        icon={cardFeature?.icon}
                                        title={cardFeature?.title}
                                        desc={cardFeature?.desc}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default SpecialFeatures
