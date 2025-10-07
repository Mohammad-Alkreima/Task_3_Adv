import Title from "../Title/Title"
import "./FrequentlyAskedQuestions.css"
import FaqData from "../../Data/OurTestimonialsData"
import CardFaq from "../CardFaq/CardFaq"
const FrequentlyAskedQuestions = () => {
    return (
        <section className="frequentlyAskedQuestions whiteSpace conatiner">
            <Title intro= "Solutions For The Doubts"
                    title= "Frequently Asked Questions"
                    desc= "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
            />
            <div className="cardsFaq">
                {FaqData.map((faq, index) => {
                    return(
                        <CardFaq key={index} title= {faq.title}
                                img= {faq.img}
                                desc= {faq.desc}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default FrequentlyAskedQuestions
