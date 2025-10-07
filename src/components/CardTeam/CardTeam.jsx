import "./CardTeam.css"

const CardTeam = ({imgPerson, name, mailIcon, qualification, desc}) => {
    return (
        <div className="cardTeam">
            <div className="info">
                <div className="name">
                    <img src={imgPerson} alt="img person" />
                    <h2>{name}</h2>
                </div>
                <div className="icon">
                    <img src={mailIcon} alt="mail icon" />
                </div>
            </div>
            <div className="desc">
                <h3>{qualification}</h3>
                <h4>{desc}</h4>
            </div>
        </div>
    )
}

export default CardTeam
