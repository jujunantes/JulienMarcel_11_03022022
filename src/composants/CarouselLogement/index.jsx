import Carousel from 'react-bootstrap/Carousel'

function CarouselLogement(props) {
    const indexLogementInt = parseInt(props.indexLogement)
    return (
    <Carousel>
        {/*
        {window.mesLogements[indexLogementInt].pictures.map((image,index) => {
            return (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="{adresse}"
                        alt="slide"
                    />
                </Carousel.Item>
            )
        })}
    */}
        {/*<ImageBanniere src={require('../../medias/' + props.image + '.png')} />*/}

    </Carousel>
    )
}

export default CarouselLogement