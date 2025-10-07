import "./CardNavigate.css"

const CardNavigate = ({title, desc, btn}) => {
    return (
        <div className="cardNavigate">
            <h2>{title}</h2>
            <p>{desc}</p>
            <button>
                {btn?.content}
                <img src={btn?.icon} alt="arrow"/>
            </button>
        </div>
    )
}

export default CardNavigate
