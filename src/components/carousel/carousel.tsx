import styles from './carousel.module.scss';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

export interface Slide {
    name: string;
    img: string;
}

interface CarouselProps {
    slides: Slide[],
}


export function Carousel(props: CarouselProps): JSX.Element {
    return (
        <div className={ styles.carouselContainer }>
            <CCarousel controls>
                {props.slides.map((slide) => (
                    <CCarouselItem key={slide.name}>
                        <CImage className="d-block w-100" src={slide.img} alt={slide.name} />
                    </CCarouselItem>
                ))}
            </CCarousel>
        </div>
    );
};
