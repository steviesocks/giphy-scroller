import React, { useState, useRef, useEffect } from 'react'
import './App.css';
import Gallery from './components/gallery/gallery.component';
import Search from './components/search/search.component';

import { getAPI } from './utils/api';

const App = () => {

  const offset = useRef(0);
  const endpoint = useRef("trending")
  console.log('offset', offset.current)

  const [search, setSearch] = useState("")
  const [gifs, setGifs] = useState([])
  const [url, setUrl] = useState(`https://api.giphy.com/v1/gifs/trending?api_key=KU304SCxltM7TA3lecV28vBV0Rv4A5XE&limit=9`)

  console.log(search)

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value)
  }

  const handleSearch = async () => {
    const newUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=KU304SCxltM7TA3lecV28vBV0Rv4A5XE&limit=9`
    setUrl(newUrl)

    getAPI(`${newUrl}&offset=0`)
            .then(response => setGifs([...response.data]))
            .catch(error => console.log(error))

    offset.current = 9
    endpoint.current = "search"

  }

  useEffect(() => {
    getAPI(`https://api.giphy.com/v1/gifs/trending?api_key=KU304SCxltM7TA3lecV28vBV0Rv4A5XE&limit=9&offset=0`)
            .then(response => setGifs([...response.data]))
            .catch(error => console.log(error))

    offset.current = 9
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Giphy scroller</h1>
      </header>
      <Search handleChange={handleChange} defaultValue="search giphy..." handleSearch={handleSearch} />
      <Gallery 
        url={url} 
        setUrl={setUrl} 
        offset={offset} 
        gifs={gifs} 
        setGifs={setGifs} 
        title={
            endpoint.current === "trending" ?
              "what's trending now" :
              `top results for "${search}"`
          }
        />
    </div>
  );
}

export default App;
