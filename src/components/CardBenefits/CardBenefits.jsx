import "./CardBenefits.css"

const CardBenefits = ({icon, title, desc}) => {
    return (
        <div className="card">
            <div className="icon">
                <img src={icon} alt="icon svg" />
            </div>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default CardBenefits
