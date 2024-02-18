import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function CarouselItem() {

    const url = "https://snilax-gym-api.onrender.com/carousel";
    const [carouselItems, setCarouselItems] = useState(() => {
        return JSON.parse(window.localStorage.getItem(url)) || [];
    });
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const images = await response.json();
            setCarouselItems(images);
        }
        fetchData();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 2560, min: 2100 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 2100, min: 1281 },
            items: 3,
            partialVisibilityGutter: 100

        },
        tablet: {
            breakpoint: { max: 1281, min: 741 },
            items: 2,

        },
        mobile: {
            breakpoint: { max: 741, min: 0 },
            items: 1
        }
    };
    const imageElements = carouselItems.map((image) => (
        <div className='frame-card rounded-xl bg-grey-plan mb-5 ml-8' key={image.key}>
            <Link to={`/Classes/${image.name}`}>
                <img className='photo-card' src={image.src} alt="" />
                <div className="frame-container">
                    <div className="frame-title">
                        <img src={image.FrImage} alt="" />
                        <hr />
                        <p className='title-text text-black'>{image.title}</p>
                    </div>
                    <p className='frame-desc text-black'>{image.caption}</p>
                    <div className="frame-complete">
                        <h4 className=' font-black text-black'>Class complete</h4>
                        <p className='text-black'>{image.progress}</p>
                        <div className=" w-10-10 bg-white h-2 rounded-2xl">
                            <div className="w-2-10 bg-orange h-2 rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    ));

    return (
        <>
            <div className="carousel pb-28">
                <Carousel
                    infinite
                    additionalTransfrom={-20}
                    autoPlay={300}
                    arrows
                    className='react-carousel'
                    autoPlaySpeed={3000}
                    draggable={false}
                    responsive={responsive}
                >
                    {imageElements}
                </Carousel>
            </div>
        </>
    );
}

export default CarouselItem;
