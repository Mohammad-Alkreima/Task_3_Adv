import NavigateData from "../../Data/NavigateData"
import CardNavigate from "../CardNavigate/CardNavigate"
import Title from "../Title/Title"
import "./Navigate.css"

const Navigate = () => {
    return (
        <section className="Navigate whiteSpace conatiner">
            <Title intro= "Explore More"
                    title= "Navigate through our Pages"
                    desc= "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
            />
            <div className="cardsNavigate">
                {NavigateData.map((card, index) => {
                    return(
                        <CardNavigate   key={index}
                                        title={card.title}
                                        desc={card.subTitle}
                                        btn={card.btn}
                                        
                        />
                    )
                })}
            </div>
            </section>
    )
}

export default Navigate
