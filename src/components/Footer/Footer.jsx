import "./Footer.css"

const Footer = ({colOne, colTwo, colThree, colFour, colFive, texts, socails, copyRight}) => {
    return (
        <footer className="">
            <div className="cols">
                {colOne.map((col, index) => {
                    return(
                        <div className="colOne" key={index}>
                            <div className="logo">
                                <img src={col.logo} alt="logo img"/>
                                <p className="logoText">{col.textLogo}</p>
                            </div>
                            <p className="desc">{col.desc}</p>
                            <div className="contacts">
                                <div className="contact">
                                    <div className="img">
                                        <img src={col.icon.mail} alt="icon"/>
                                    </div>
                                    <p>{col.textContact.mail}</p>
                                </div>
                                <div className="contact">
                                    <div className="img">
                                        <img src={col.icon.phone} alt="icon"/>
                                    </div>
                                    <p>{col.textContact.phone}</p>
                                </div>
                                <div className="contact">
                                    <div className="img">
                                        <img src={col.icon.location} alt="icon"/>
                                    </div>
                                    <p>{col.textContact.location}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="flexCols">
                    {colTwo.map((col, index) => {
                    return(
                        <div className="col colTwo" key={index}>
                            <p className="main">{col?.title}</p>
                            <p>{col?.one}</p>
                            <p>{col?.two}</p>
                            <p>{col?.three}</p>
                        </div>  
                    )
                })}
                {colThree.map((col, index) => {
                    return(
                        <div className="col colThree" key={index}>
                            <p className="main">{col?.title}</p>
                            <p>{col?.mission}</p>
                            <p>{col?.vission}</p>
                            <p>{col?.awards}</p>
                            <p>{col?.history}</p>
                            <p>{col?.teachers}</p>
                        </div>
                    )
                })}
                {colFour.map((col, index) => {
                    return(
                        <div className="col colFour" key={index}>
                            <p className="main">{col?.title}</p>
                            <p>{col?.features}</p>
                            <p>{col?.gallery}</p>
                        </div>
                    )
                })}
                {colFive.map((col, index) => {
                    return(
                        <div className="col colFour" key={index}>
                            <p className="main">{col?.title}</p>
                            <p>{col?.information}</p>
                            <p>{col?.map}</p>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className="row">
                {texts.map((text, index) => {
                    return(
                        <div className="terms" key={index}>
                            <p>{text.term}</p>
                            <p>{text.privacy}</p>
                            <p>{text.Cookie}</p>
                        </div>
                    )
                })}
                <div className="socails">
                    {socails.map((socail, index) => {
                        return(
                            <div className="socail" key={index}>
                                <img src={socail.icon} alt={socail.alt}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <p className="copy">{copyRight}</p>
        </footer>
    )
}

export default Footer
