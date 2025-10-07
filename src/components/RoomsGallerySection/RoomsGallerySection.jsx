import { useState } from "react"
import RoomGalleryData from "../../Data/RoomGalleryData"
import CardGallery from "../CardGallery/CardGallery"
import Title from "../Title/Title"
import "./RoomsGallerySection.css"

const RoomsGallerySection = ({filters}) => {
    const [selectedType, setSelectedType] = useState("All");
    const [active, setActive] = useState("All")
    return (
        <section className="gallery whiteSpace conatiner">
            <Title intro= "Our Gallery"
                    title= "Our Rooms Gallery"
                    desc= "Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
            />
            <div className="filter">
                {filters?.map((filter, index) => {
                    return(
                        <p key={index} className={active == `${filter}` ? "active" : ""} onClick={() => {
                            setSelectedType(`${filter}`)
                            setActive(`${filter}`)
                        }}>
                        {filter}
                        </p>
                    )
                })}
            </div>
            
            <div className="cardsGallery">
                {RoomGalleryData?.filter((data) => selectedType === "All" || data.type === selectedType)?.map((card, index) => {
                    return(
                        <CardGallery key={index}
                                    imgs={card?.imgs}
                                    title={card?.title}
                                    desc={card?.desc}
                        />
                    )
                })} 
            </div>
        </section>
    )
}

export default RoomsGallerySection
