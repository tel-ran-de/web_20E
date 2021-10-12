import React from 'react'
import Gallery from 'react-gallery-designer'

export default props => {

    const img = [
        'https://p4.wallpaperbetter.com/wallpaper/193/556/883/car-neon-chevrolet-corvette-race-cars-hd-wallpaper-preview.jpg',
        'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
        'https://images7.alphacoders.com/588/thumb-1920-588644.jpg'
    ]

    const settings = {
        speed: 1500,
        thumbnails: true
    };

    const images = img.map( i => ({
        src: i
    }) )

    return (
        <div>
            <Gallery settings={settings} images={images} />
        </div>
    )
}