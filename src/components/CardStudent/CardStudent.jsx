import "./CardStudent.css"

const CardStudent = ({img, title, desc}) => {
    return (
        <div className="cardStudent">
            <img src={img} alt="education image"/>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default CardStudent
