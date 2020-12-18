import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getAPI } from '../../utils/api';
import GifCard from '../gifCard/gif-card.component';

import useStyles from './gallery.styles';

const Gallery = ({ url, offset, gifs, setGifs, title }) => {

    const classes = useStyles();
    console.log('gifs', gifs)
    console.log("url", url)

    const loadGifs = async () => {

        getAPI(`${url}&offset=${offset.current}`)
            .then(response => setGifs(prevState => [...prevState, ...response.data]))
            .catch(error => console.log(error))

        offset.current = offset.current + 9
    }

    return (
        <div className={classes.container}>
            <div className={classes.galleryWrapper}>
                <h3 className={classes.title}>{title}</h3>
                <InfiniteScroll
                    className={classes.scroller}
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
        </div>
    )
}

export default Gallery;