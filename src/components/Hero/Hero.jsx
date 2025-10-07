import "./Hero.css"
const Hero = ({img, absDesgin, welcome, title, subTitle, desc, numsStd, textStd, numsAwards, textAwards, numsExp, textExp}) => {
    return (
        <div className="hero">
            <div className="img">
                <img src={img} alt="hero img" />
                <span className="topLeft"></span>
                <span className="topRight"></span>
                <span className="bottomRight"></span>
                <span className="bottomLeft"></span>
                <img className="absDesgin" src={absDesgin} alt="asbDegin circles" />
            </div>
            <div className="heroText">
                <p className="welcome">{welcome}</p>
                <h1>
                    {title}
                    <span>
                        {subTitle}
                    </span>
                </h1>
                <p className="desc">{desc}</p>
                <div className="info">
                    <div>
                        <p>{numsStd}</p>
                        <span>{textStd}</span>
                    </div>
                    <div>
                        <p>{numsAwards}</p>
                        <span>{textAwards}</span>
                    </div>
                    <div>
                        <p>{numsExp}</p>
                        <span>{textExp}</span>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Hero
