import "./HeroSection.css"
const HeroSection = ({img, altImg, span, title, desc, contacts}) => {
    return (
        <header className="whiteSpace">
            <div className="heroSertion">
                <img className="img" src={img} alt={altImg} />
                <div className="main">
                    <div className="text">
                        <span>{span}</span>
                        <h1>{title}</h1>
                    </div>
                    {/* <p>{desc}</p> */}
                    <div className="textLeft">
                        <p className="desc">{desc}</p>
                        <div className="contacts">
                            {contacts?.map((contact, indx) => {
                                return(
                                    <div className="contact" key={indx}>
                                        <div className="icon">
                                            <img src={contact.icon} alt="" />
                                        </div>
                                        <p className="textContact">{contact.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeroSection
