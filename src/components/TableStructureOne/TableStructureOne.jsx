import FeeStructureData from "../../Data/FeeStructureData"
import TabeBodyStructure from "../TabeBodyStructure/TabeBodyStructure"
import "./TableStructureOne.css"

const TableStructureOne = ({theads}) => {
    return (
        <div className="tableContainer">
            <div className="tableInner">
                <table className="tableProgram">
                <thead>
                    <tr>
                        {theads?.map((thead, index) => {
                            return(
                                <th key={index}>{thead}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {FeeStructureData?.map((data, index) => {
                        return(
                            <TabeBodyStructure key={index}
                                            title={data?.title}
                                            age={data?.years}
                                            price={data?.annual}
                                            reg={data?.registrationFee}
                                            fee={data?.activityFee}
                        />
                        )
                    })}
                </tbody>
            </table>
            </div>
            
        </div>
    )
}

export default TableStructureOne
