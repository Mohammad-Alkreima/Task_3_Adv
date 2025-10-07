import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions"
import Header from "../../components/Header/Header"
import Navigate from "../../components/Navigate/Navigate"
import OurBenefits from "../../components/OurBenefits/OurBenefits"
import OurTestimonials from "../../components/OurTestimonials/OurTestimonials"

const Home = () => {
    return (
        <>
            <Header/>
            <OurBenefits/>
            <OurTestimonials/>
            <FrequentlyAskedQuestions/>
            <Navigate/>
        </>
    )
}

export default Home
