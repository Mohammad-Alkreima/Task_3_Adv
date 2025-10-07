import FeeStructureData from "../../Data/FeeStructureData"
import TableStructureOne from "../TableStructureOne/TableStructureOne"
import TableStructureTwo from "../TableStructureTwo/TableStructureTwo"
import Title from "../Title/Title"
import "./FeeStructureSection.css"

const FeeStructureSection = () => {
    return (
        <section className="feeStructureSection whiteSpace conatiner">
            <Title  intro= "Our Features"
                    title= "Fee Structure"
                    desc= "Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."
            />
            <TableStructureOne theads={["Program", "Age Group", "Annual Tuition", "Registration Fee", "Activity Fee"]}
            />
            <TableStructureTwo theads={["Additional Services"]}/>
        </section>
    )
}

export default FeeStructureSection
