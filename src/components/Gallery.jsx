import axios from "axios"
import { useEffect, useState } from "react"
function Gallery() {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10").then((response) => {
      setPhotos(response.data)
    })
  }, [])
  return (
    <div>
      {
      photos ? photos.map(({id, url, thumbnailUrl}) => (
       <img src={thumbnailUrl} key={id} />
      )) 
    :
    <h1>Loading...</h1>
    }
    </div>
  )
}

export default Gallery
