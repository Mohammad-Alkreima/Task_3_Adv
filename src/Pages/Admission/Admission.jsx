import AdmissionProcessSection from "../../components/AdmissionProcessSection/AdmissionProcessSection"
import FeeStructureSection from "../../components/FeeStructureSection/FeeStructureSection"
import HeroSection from "../../components/HeroSection/HeroSection"

const Admission = () => {
    return (
        <>
            <HeroSection img= "assets/img/about/heroAbout.png"
                        altImg= "hero img for admission section"
                        span= "Admission"
                        title= "Join Our Family of Young Learners"
                        desc= "At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
            />
            <AdmissionProcessSection/>
            <FeeStructureSection/>
        </>
    )
}

export default Admission
