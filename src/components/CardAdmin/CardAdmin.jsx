import "./CardAdmin.css"

const CardAdmin = ({num, title, desc}) => {
    return (
        <div className="cardNum">
            <div className="num">
                <p>{num}</p>
            </div>
            <div className="text">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default CardAdmin
