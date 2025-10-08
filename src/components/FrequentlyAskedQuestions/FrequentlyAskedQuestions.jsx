import Title from "../Title/Title"
import "./FrequentlyAskedQuestions.css"
import CardFaq from "../CardFaq/CardFaq"
const FrequentlyAskedQuestions = () => {
    const FaqData = [
        {
            title : "What are the school hours at Little Learners Academy?",
            img1: "/Task_3_Adv/assets/img/plus.png",
            img2: "/Task_3_Adv/assets/img/substract.png",
            desc: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            title: "Is there a uniform policy for students?",
            img1: "/Task_3_Adv/assets/img/plus.png",
            img2: "/Task_3_Adv/assets/img/substract.png",
            desc: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            title: "What extracurricular activities are available for students?",
            img1: "/Task_3_Adv/assets/img/plus.png",
            img2: "/Task_3_Adv/assets/img/substract.png",
            desc: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            title: "What extracurricular activities are available for students?",
            img1: "/Task_3_Adv/assets/img/plus.png",
            img2: "/Task_3_Adv/assets/img/substract.png",
            desc: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            title: "How do you handle food allergies and dietary restrictions?",
            img1: "/Task_3_Adv/assets/img/plus.png",
            img2: "/Task_3_Adv/assets/img/substract.png",
            desc: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            title: "What is the teacher-to-student ratio at Little Learners Academy?",
            img1: "/Task_3_Adv/assets/img/plus.png",
            img2: "/Task_3_Adv/assets/img/substract.png",
            desc: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            title: "How do you handle discipline and behavior management?",
            img1: "/Task_3_Adv/assets/img/plus.png",
            img2: "/Task_3_Adv/assets/img/substract.png",
            desc: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        },
        {
            title: "How do I apply for admission to Little Learners Academy?",
            img1: "/Task_3_Adv/assets/img/plus.png",
            img2: "/Task_3_Adv/assets/img/substract.png",
            desc: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
        }
    ]    

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
                                img1= {faq.img1}
                                img2= {faq.img2}
                                desc= {faq.desc}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default FrequentlyAskedQuestions
