import { Services } from "../../Data/FeeStructureData"
import TabeBodyStructure from "../TabeBodyStructure/TabeBodyStructure"
import "./TableStructureTwo.css"

const TableStructureTwo = ({theads}) => {
    return (
        <div className="tableContainer">
            <div className="tableInner">
                <table>
                    <thead>
                        <tr>
                            {theads?.map((thead, index) => {
                                return(
                                    <th colSpan={2} key={index}>{thead}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {Services?.map((data, index) => {
                            return(
                                <TabeBodyStructure key={index}
                                                title={data?.title}
                                                price={data?.price}
                            />
                            )
                        })}
                    </tbody>                                    
                </table>
            </div>
        </div>
    )
}

export default TableStructureTwo
