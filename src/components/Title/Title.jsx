import "./Title.css"
const Title = ({intro, title, desc}) => {
    return (
        <div className="title">
            <span>{intro}</span>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default Title
