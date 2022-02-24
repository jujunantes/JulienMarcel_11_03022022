import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'

function CarouselLogement(props) {
    const totalImages = props.enrLogement.pictures.length
    const [numeroImage, compteurImage] = useState(0)

    return (
        <div className='conteneurCarousel'>
            <Carousel indicators={false} className="styleCarousel" onSlid={compteurImage}>
                {props.enrLogement.pictures.map((image,index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100 stylePhotosCarousel"
                                src={image}
                                alt={props.enrLogement.title + '-' + index}
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <div className="numeroImage">{numeroImage + 1}/{totalImages}</div>
        </div>
    )
}

export default CarouselLogement