import "./TopBanner.css"
const TopBanner = ({image1, text, icon, image2, altImage, altIcon}) => {
    return (
        <div className="topBanner">
            <img className="circleTop" src={image1} alt={altImage} />
            <div>
                <p>{text}</p>
                <img src={icon} alt={altIcon} />
            </div>
            <img className="circleBottom" src={image2} alt={altImage} />
        </div>
    )
}

export default TopBanner
