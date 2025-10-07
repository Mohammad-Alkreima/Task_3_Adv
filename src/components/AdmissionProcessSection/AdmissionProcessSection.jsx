import NumberAdmin from "../NumberAdmin/NumberAdmin"
import Title from "../Title/Title"
import CardMission from "../CardMission/CardMission"
import "./AdmissionProcessSection.css"

const AdmissionProcessSection = () => {
    return (
        <section className="admissionProcessSection whiteSpace conatiner">
            <Title intro= "Process"
                    title= "Admission Process"
                    desc= "Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
            />
            <NumberAdmin/>
        </section>
    )
}

export default AdmissionProcessSection
