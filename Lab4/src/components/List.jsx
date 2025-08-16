import ListElement from "./ListElement";
import CategoryHeader from "./categoryHeading";
function List({item, viewStock}){
    let rows = [];
    let lastCategory = " ";
    item.forEach(element => {
        if(!(viewStock && !element.inStock)){
        if(element.category != lastCategory){
            rows.push(<CategoryHeader category={element.category} key = {element.category}></CategoryHeader>)
        }
        lastCategory = element.category;
        rows.push(<ListElement listelement name = {element.name} price = {element.price} inStock={element.inStock}></ListElement>)
        console.log(element);
    }
    });
return(
    <>
    {rows}
    </>
)
}
export default List