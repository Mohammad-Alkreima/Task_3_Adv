import "./TabeBodyStructure.css"

const TabeBodyStructure = ({title, age, price, reg, fee}) => {
    return (
            <tr>
                <td>{title}</td>
                {age && <td>${age}</td>}
                <td>{price}</td>
                {reg && <td>${reg}</td>}
                {fee && <td>${fee}</td>}
            </tr>
    )
}

export default TabeBodyStructure
