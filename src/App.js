import React, { useRef, useState } from 'react'
import './App.css';
import Gallery from './components/gallery/gallery.component';
import Search from './components/search/search.component';

const App = () => {

  const [search, setSearch] = useState("")
  const [gifs, setGifs] = useState([])

  const endpoint = useRef("trending")

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value)
  }

  const handleSearch = () => {
    setGifs([])
    endpoint.current = "search"
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Giphy scroller</h1>
      </header>
      <Search handleChange={handleChange} defaultValue="search giphy..." handleSearch={handleSearch} />
      <Gallery endpoint={endpoint.current} gifs={gifs} setGifs={setGifs} query={search}/>
    </div>
  );
}

export default App;
