document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".logo_rows");
    if (!container) return;
    const boxes = Array.from(container.querySelectorAll(".LOGO_WRP"));
    const CLONE_COUNT = 3;
    for (let i = 0; i < CLONE_COUNT; i++) {
        boxes.forEach((box) => {
            container.appendChild(box.cloneNode(true));
        });
    }
    const scrollDistance = container.scrollWidth / 2;
    const SPEED = 30;
    const duration = scrollDistance / SPEED;
    const animation = gsap.to(container, {
        x: -scrollDistance,
        duration: duration,
        ease: "linear",
        repeat: -1,
    });
    container.addEventListener("mouseenter", () => animation.pause());
    container.addEventListener("mouseleave", () => animation.resume());
});

document.addEventListener("DOMContentLoaded", function () {
    const MultipleSlider = () => {
        const MultipleSliders = document.querySelectorAll(".prodCardSlider");
        MultipleSliders.forEach((slider, index) => {
            const prevArrow = slider.parentElement.querySelector(".prev");
            const nextArrow = slider.parentElement.querySelector(".next");
            new Swiper(slider, {
                effect: 'slide',
                speed: 1000,
                allowTouchMove: false,
                navigation: {
                    nextEl: nextArrow,
                    prevEl: prevArrow,
                },
                breakpoints: {
                    150: {
                        slidesPerView: 1.3,
                        spaceBetween: 10
                    },
                    576: {
                        slidesPerView: 2.3,
                        spaceBetween: 15
                    },
                    769: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1025: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },

                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                }
            });
        });
    };
    MultipleSlider();
});

document.addEventListener("DOMContentLoaded", function () {
    const MultipleSlider = () => {
        const MultipleSliders = document.querySelectorAll(".reviwsSlider");
        MultipleSliders.forEach((slider, index) => {
            const prevArrow = slider.parentElement.querySelector(".prev");
            const nextArrow = slider.parentElement.querySelector(".next");
            new Swiper(slider, {
                effect: 'slide',
                speed: 1000,
                allowTouchMove: false,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                navigation: {
                    nextEl: nextArrow,
                    prevEl: prevArrow,
                },
                breakpoints: {
                    150: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    769: {
                        slidesPerView: 2.2,
                        spaceBetween: 20,
                    },
                    1025: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },

                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                }
            });
        });
    };
    MultipleSlider();
});