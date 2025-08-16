import List from "./list";
import { useState } from "react";
function ListContainer({items}){
    const [viewStock, setViewStock] = useState(false);
    return(
        <>
        <label>
            <input
            type = "checkbox"
            checked = {viewStock}
            onChange={e => {setViewStock(e.target.checked)}}
            />
            Show Items in stock
        </label>
        <table>
            <thead>
            <tr>
                <td>Name</td>
                <td>Price</td>
            </tr>
            </thead>
            <tbody>
           <List item = {items} viewStock={viewStock}></List>
           </tbody>
            
        </table>
        </>
    )
}
export default ListContainer;