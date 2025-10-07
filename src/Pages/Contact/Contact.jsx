import HeroSection from "../../components/HeroSection/HeroSection"

const Contact = () => {
    return (
        <>
            <HeroSection img= "assets/img/about/heroAbout.png"
                        altImg= "hero img for Stucent Life section"
                        span= "Contact Us"
                        title= "Feel Free To Connect With Us"
                        desc= "We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
                        contacts={[
                            {icon: "assets/img/mail.png", text: "hello@littlelearners.com"},
                            {icon: "assets/img/phone.png", text: "hello@littlelearners.com"},
                            {icon: "assets/img/location.png", text: "hello@littlelearners.com"},
                            {icon: "assets/img/location.png", text: "hello@littlelearners.com"},
                        ]}
            />
        </>
    )
}

export default Contact
