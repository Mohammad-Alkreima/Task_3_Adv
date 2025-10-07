import { useState } from "react"
import "./CardFaq.css"

const CardFaq = ({title, img1,img2, desc}) => {
    const [show, setShow] = useState(false)
    const showHandle = () => {
        setShow(!show)
    }
    return (
        <div className={`cardFaq ${show ? "show" : ""}`}>
            <div className="ques">
                <p>{title}</p>
                <div className="img" onClick={showHandle}>
                    <img src={`${show ? `${img2}` : `${img1}`}`} alt="icon"/>
                </div>
            </div>
            <p className={`desc ${show ? "show" : ""}`}>{desc}</p>
        </div>
    )
}

export default CardFaq
