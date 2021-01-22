import React, { useState, useRef, useEffect } from 'react'
import './App.css';
import Gallery from './components/gallery/gallery.component';
import Search from './components/search/search.component';
import Modal from './components/modal/modal.component';

import { getAPI } from './utils/api';

const INITIAL_MODAL_STATE = {images: {original: {}}, user: {}}
const TRENDING_ENDPOINT = `https://api.giphy.com/v1/gifs/trending?api_key=KU304SCxltM7TA3lecV28vBV0Rv4A5XE&limit=9`
const SEARCH_ENDPOINT = `https://api.giphy.com/v1/gifs/search`

const App = () => {

  const offset = useRef(0);
  const location = useRef({endpoint: "trending", query: ""})

  const [search, setSearch] = useState("")
  const [gifs, setGifs] = useState([])
  const [url, setUrl] = useState(`https://api.giphy.com/v1/gifs/trending?api_key=KU304SCxltM7TA3lecV28vBV0Rv4A5XE&limit=9`)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(INITIAL_MODAL_STATE)

  console.log(gifs)

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value)
  }

  const handleEnterKey = (event) => {
    if (event.charCode === 13) {
      handleSearch()
    }
  }

  const handleSearch = async () => {
    const newUrl = `${SEARCH_ENDPOINT}?q=${search}&api_key=KU304SCxltM7TA3lecV28vBV0Rv4A5XE&limit=9`
    handleNewEndpoint(newUrl, "search", search)
  }

  const handleTrending = async () => {
    const newUrl = TRENDING_ENDPOINT
    handleNewEndpoint(newUrl, "trending", "")
  }

  const handleNewEndpoint = (newUrl, endpoint, query) => {
    setUrl(newUrl)
    setSearch(query)
    getAPI(`${newUrl}&offset=0`)
            .then(response => setGifs([...response.data]))
            .catch(error => console.log(error))

    offset.current = 9
    location.current = {endpoint, query}
  }

  const handleModalClose = (event) => {
    if (event.target.id === "modal") {
      setModalOpen(false)
      setModalContent(INITIAL_MODAL_STATE)
    }
  }

  const handleGifClick = (event) => {
    const { id } = event.target
    setModalContent(gifs.find(item => item.id === id))
    setModalOpen(true)
  }

  useEffect(() => {
    getAPI(TRENDING_ENDPOINT)
            .then(response => setGifs(response.data))
            .catch(error => console.log(error))

    offset.current = 9
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1" onClick={handleTrending}>Giphy scroller</h1>
      </header>
      <Search handleChange={handleChange} placeholder="search giphy..." handleSearch={handleSearch} handleEnterKey={handleEnterKey} value={search} />
      <Gallery 
        url={url} 
        setUrl={setUrl} 
        offset={offset} 
        gifs={gifs} 
        setGifs={setGifs} 
        title={
            location.current.endpoint === "trending" ?
              "what's trending now" :
              `top results for "${location.current.query}"`
          }
        handleGifClick={handleGifClick}
      />
      <Modal handleClose={handleModalClose} open={modalOpen} source={modalContent} />
    </div>
  );
}

export default App;
