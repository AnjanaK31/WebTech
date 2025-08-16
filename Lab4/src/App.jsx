
import './App.css'
import ListContainer from './components/ListContainer'
function App() {
  const food = [{category: "fruits", name: "Apple", price:10, inStock: true},
    {category: "fruits", name: "Banana", price:20, inStock: false},
    {category: "fruits", name: "Grapes", price:100, inStock: true},
    {category: "vegetable", name: "Potato", price:30, inStock: false},
    {category: "vegetable", name: "Carrot", price:40, inStock: true},
    {category: "vegetable", name: "Peas", price:50, inStock: false}
  ]

  return (
    <>
    <ListContainer items = {food}></ListContainer>
    </>

  )
}

export default App
