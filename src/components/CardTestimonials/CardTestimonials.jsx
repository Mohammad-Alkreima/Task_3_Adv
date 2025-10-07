import "./CardTestimonials.css"

const CardTestimonials = ({image, name, rate, desc}) => {
    return (
        <div className="cardTest">
            <div className="img">
                <img src= {image} alt= "person img" />
            </div>
            <span>{name}</span>
            <div className="rate">
                <img src={rate} alt="rate img" />
                <img src={rate} alt="rate img" />
                <img src={rate} alt="rate img" />
                <img src={rate} alt="rate img" />
                <img src={rate} alt="rate img" />
            </div>
            <p className="desc">{desc}</p>
        </div>
    )
}

export default CardTestimonials
