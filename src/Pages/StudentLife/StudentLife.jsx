import EventsCelebrationsSection from "../../components/EventsCelebrationsSection/EventsCelebrationsSection"
import ExtracurricularActivitiesSection from "../../components/ExtracurricularActivitiesSection/ExtracurricularActivitiesSection"
import HeroSection from "../../components/HeroSection/HeroSection"
import StudentSupportSection from "../../components/StudentSupportSection/StudentSupportSection"

const StudentLife = () => {
    return (
        <>
            <HeroSection img= "assets/img/about/heroAbout.png"
                        altImg= "hero img for Stucent Life section"
                        span= "Enriching Student Life"
                        title= "Embracing Learning with Discovery and Joy"
                        desc= "Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
            />
            <ExtracurricularActivitiesSection/>
            <EventsCelebrationsSection/>
            <StudentSupportSection/>
        </>
    )
}

export default StudentLife
