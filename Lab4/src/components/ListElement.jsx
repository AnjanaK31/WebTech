function ListElement({name, price, inStock}){
    if(inStock){
        return(
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        )
    }else{
        return(
            <tr>
                <td style={{color: "red"}}>{name}</td>
                <td>{price}</td>
            </tr>
        )
    }
}
export default ListElement