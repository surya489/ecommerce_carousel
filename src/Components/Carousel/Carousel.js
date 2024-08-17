import React, { useState, useRef, useEffect } from "react";
import "./Carousel.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const carouselWidthRef = useRef(null);

    useEffect(() => {
        const updateCarouselWidth = () => {
            if (carouselWidthRef.current) {
                setCarouselWidth(carouselWidthRef.current.offsetWidth);
            }
        };

        updateCarouselWidth(); // Set the initial width
        window.addEventListener("resize", updateCarouselWidth);

        return () => {
            window.removeEventListener("resize", updateCarouselWidth);
        };
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const slideWidth = carouselWidth / slides.length;

    return (
        <div className="carousel_wrap" ref={carouselWidthRef}>
            <div className="carousel">
                {slides.map((slide, index) => (
                    <div
                        className="bg_grey slide"
                        key={index}
                        style={{
                            transform: `translateX(-${currentSlide * (slideWidth - 33)}px)`,
                            minWidth: `${slideWidth + 29}px`
                        }}
                    >
                        <div className="slide_img">
                            <img src={slide.img} alt={slide.product_title} />
                        </div>
                        <div>
                            <p className="product_name">{slide.product_title}</p>
                            <p className="price">{slide.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="navigation_arrows">
                <span
                    className={`${currentSlide === 0 ? "disable" : ''} arrow arrow_left`}
                    onClick={currentSlide !== 0 ? prevSlide : null}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </span>
                <span
                    className={`${slides.length === currentSlide + 1 ? 'disable' : ''} arrow arrow_right`}
                    onClick={slides.length !== currentSlide + 1 ? nextSlide : null}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
            </div>
            <div className="pagination">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${index === currentSlide ? "active" : ""} dots`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
