import axios from "axios"
import { useEffect, useState } from "react"
import Gallery from "./components/Gallery"
function App() {
  // const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
  //     setPosts(response.data)
  //   })
  // }, [])
  return (
    <div className="App">
      {/* {
      posts ? posts.map(({userId, title, body}) => (
       <div style={{border: '1px solid black', margin: '10px 0'}}>
        <h1>User ID: {userId}</h1>
        <h2>Title: {title}</h2>
        <p>{body}</p>
       </div> 
      )) 
    :
    <h1>Loading...</h1>
    } */}
    <Gallery />
    </div>
  )
}

export default App
