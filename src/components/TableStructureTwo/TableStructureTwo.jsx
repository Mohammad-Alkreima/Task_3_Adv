import { Services } from "../../Data/FeeStructureData"
import TabeBodyStructure from "../TabeBodyStructure/TabeBodyStructure"
import "./TableStructureTwo.css"

const TableStructureTwo = ({theads}) => {
    return (
        <table>
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
    )
}

export default TableStructureTwo
