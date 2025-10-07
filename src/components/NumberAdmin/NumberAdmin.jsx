import AdmissionPrecoessData from "../../Data/AdmissionPrecoessData"
import CardAdmin from "../CardAdmin/CardAdmin"
import NumberCard from "../CardMission/CardMission"
import "./NumberAdmin.css"

const NumberAdmin = () => {
    return (
        <>
            <div className="cardsAdmin">
                {AdmissionPrecoessData?.map((data, index) => {
                    return(
                        <CardAdmin  key={index}
                                    num={data.num}
                                    title={data.title}
                                    desc={data.desc}
                        /> 
                    )
                })}
            </div>
        </>
    )
}

export default NumberAdmin
