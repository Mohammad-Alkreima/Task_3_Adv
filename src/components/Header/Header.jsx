import Hero from "../Hero/Hero"
import NavBar from "../NavBar/NavBar"
import TopBanner from "../TopBanner/TopBanner"
import "./Header.css"

const Header = () => {
    return (
        <>
            <header className="whiteSpace">
                <Hero img="assets/img/heroImg.png"
                        absDesgin="assets/img/Abstract Design.png"
                        welcome= "Welcome to Little Learners Academy"
                        title= "Where Young Minds Blossom and "
                        subTitle= "Dreams Take Flight."
                        desc= "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
                        numsStd= "+7000"
                        textStd= "Students Passed Out"
                        numsAwards= "+37"
                        textAwards= "Awards & Recognitions"
                        numsExp= "+15"
                        textExp= "Experience Educators"
                />
        </header>
        </>
    )
}

export default Header
