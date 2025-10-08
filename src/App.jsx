import './App.css'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import TopBanner from './components/TopBanner/TopBanner'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      {/* <Header/> */}
      <TopBanner image1="/Task_3_Adv/assets/img/circle.png"
                            text= "Admission is Open, Grab your seat now"
                            icon="/Task_3_Adv/assets/img/arrow.svg"
                            image2="/Task_3_Adv/assets/img/circle.png"
                            altImage="circle"
                            altIcon="arrow svg"
      />
      <NavBar logo="/Task_3_Adv/assets/img/logo.svg"
              logoAlt="logo svg"
              textLogo="Little Learners"
              // items={["Home", "About Us", "Academics", "Admissions", "Student Life", "Contact"]}
              items={[
                  {
                      url: "/",
                      content: "Home"
                  },
                  {
                      url: "/about",
                      content: "About"
                  },
                  {
                      url: "/academics",
                      content: "Academics"
                  },
                  {
                      url: "/admission",
                      content: "Admissions"
                  },
                  {
                      url: "/studentLife",
                      content: "Student Life"
                  },
                  {
                      url: "/contact",
                      content: "Contact"
                  }
              ]}
              bars="assets/img/bars.svg"
              barsAlt="bars svg"
              close="assets/img/close.svg"
      />
      <Main/>
      <Footer 
          colOne = {
            [
              {logo: "/Task_3_Adv/assets/img/logo.svg",
              textLogo: "Little Learners",
              desc: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
              icon: {mail: "/Task_3_Adv/assets/img/mail.png", phone: "/Task_3_Adv/assets/img/phone.png", location: "/Task_3_Adv/assets/img/location.png"},
              textContact: {mail: "hello@littlelearners.com", phone: "+91 91813 23 2309",location: "Somewhere in the World"},
              }
            ]
          }
          colTwo={
            [
              {
                title: "Home", one: "Features", two: "Our Testimonials", three: "FAQ"
              }
            ]
          }
          colThree={
            [
              {
                title: "About Us", mission: "Our Mission", vission: "Our Vission", awards: "Awards and Recognitions", history: "History", teachers: "Teachers"
              }
            ]
          }
          colFour={
            [
              {
                title: "Academics", features: "Special Features", gallery: "Gallery"
              }
            ]
          }
          colFive={
            [
              {
                title: "Contact Us", information: "Information", map: "Map & Direction"
              }
            ]
          }
          texts={
            [
              {
                term: "Terms of Service", privacy: "Privacy Policy", Cookie: "Cookie Policy"
              }
            ]
          }
          socails={
            [
              {icon: "/Task_3_Adv/assets/img/facebook.png", alt: "facebook icon"},
              {icon: "/Task_3_Adv/assets/img/twitter.png", alt: "twitter icon"},
              {icon: "/Task_3_Adv/assets/img/linkedin.png", alt: "linkedin icon"}
            ]
          }
          copyRight= "Copyright © [2023] Little Learners Academy. All rights reserved."
      />
    </>
  )
}

export default App
