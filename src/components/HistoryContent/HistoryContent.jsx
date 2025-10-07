import "./HistoryContent.css"

const HistoryContent = ({img, number, title, desc}) => {
    return (
        <div className="child">
            <div className="cardHistory">
                <img src={img} alt= "Abstract Design Img" />
                <p className="number">{number}</p>
            </div>
            <div className="text">
                <h2>{title}</h2>
                <p className="desc">{desc}</p>
            </div>  
        </div>
    )
}

export default HistoryContent
