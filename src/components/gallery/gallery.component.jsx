import React, { useEffect, useState, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getAPI } from '../../utils/api';
import GifCard from '../gifCard/gif-card.component';

import useStyles from './gallery.styles';

const Gallery = ({ endpoint, query, gifs, setGifs }) => {
    const classes = useStyles();
    const offset = useRef(0);
    console.log('offset', offset.current)
    console.log('gifs', gifs)
    console.log("endpoint", endpoint)

    const loadGifs = async () => {
        if (endpoint === "trending") {
            getAPI(`https://api.giphy.com/v1/gifs/trending?api_key=KU304SCxltM7TA3lecV28vBV0Rv4A5XE&limit=9&offset=${offset.current}`)
                .then(response => setGifs(prevState => [...prevState, ...response.data]))
                .catch(error => console.log(error))
        } else if (endpoint === "search") {
            getAPI(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=KU304SCxltM7TA3lecV28vBV0Rv4A5XE&limit=9&offset=${offset.current}`)
                .then(response => setGifs(prevState => [...prevState, ...response.data]))
                .catch(error => console.log(error))
        }

        offset.current = offset.current + 9
    }

    useEffect(() => {
        loadGifs()
    }, [])

    return (
        <div className={classes.wrapper}>
            <InfiniteScroll 
                dataLength={gifs.length}
                next={loadGifs}
                hasMore={true}
                loader={<h4>one sec...</h4>}
            >
                <div className={classes.gallery}>
                    {
                        gifs.length ?
                            gifs.map(item => {
                                const { images } = item;

                                if (images.fixed_height.width < images.fixed_height.height) {

                                    return (
                                        <GifCard src={images.fixed_width.mp4} key={item.id} id={item.id} />
                                    )
                                }

                                return (
                                    <GifCard src={images.fixed_height.mp4} key={item.id} id={item.id} />
                                )

                            })
                            : null
                    }
                </div>
            </InfiniteScroll>

        </div>
    )
}

export default Gallery;