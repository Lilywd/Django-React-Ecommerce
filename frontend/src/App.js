import {useEffect, useState} from "react"
function App() {
  const [category, setCategory] = useState()

  useEffect(()=>{
    async function fetchProducts() {
    const results = await fetch('http://localhost:8000/api/category_list/')
    const categories_results = await results.json()
    console.log(categories_results.map((data)=>data.name))
    setCategory(categories_results.map((data)=>data.name))
    }
    fetchProducts()
  }, [])
  return (
    <div className="App">
      <h1>E-commerce Frontend</h1>
      {category.map((data)=> (
        <li key={data.id}>{data}</li>
      ))}
    </div>
  );
}

export default App;
