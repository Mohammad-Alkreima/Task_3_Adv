import "./CardMission.css"

const CardMission = ({title, img, altImg, desc}) => {
    return (
        <div className="card">
            <div className="mainTitle">
                <h2>{title}</h2>
                <img src={img} alt={altImg} />
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default CardMission
