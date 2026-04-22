import {CarouselCertificates} from '../layout/Carousel.jsx'

export const Certificate = () => {
    return(
        <div className="certificate" id='my-certificates'>
            <h1 className="title-projects" >Certificados Obtenidos</h1>
            <div className="place-certificate">
                <CarouselCertificates></CarouselCertificates>
            </div>
        </div>
    )
}
