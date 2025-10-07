import HeroSection from "../../components/HeroSection/HeroSection"
import RoomsGallerySection from "../../components/RoomsGallerySection/RoomsGallerySection"
import SpecialFeatures from "../../components/SpecialFeatures/SpecialFeatures"
import StudentLearn from "../../components/StudentLearn/StudentLearn"

const Academics = () => {
    return (
        <>
            <HeroSection img= "assets/img/about/heroAbout.png"
                        altImg= "hero img for academics section"
                        span= "Academics"
                        title= "Nurturing Young Minds for Success"
                        desc= "Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
            />
            <SpecialFeatures/>
            <StudentLearn/>
            <RoomsGallerySection filters={["All", "Classrooms", "Library", "Science Lab", "Computer Lab", "Garden and Nature Area"]}
            />
        </>
    )
}

export default Academics
