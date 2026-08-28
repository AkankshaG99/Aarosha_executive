import sittingArea from "../assets/sittingArea.PNG";
import lakeview from "../assets/lakeview.PNG";
import Reception from "../assets/Reception.PNG"
import Room1 from "../assets/Room1.PNG";
import hangingChair from "../assets/hangingChair.PNG"
const Gallery = () => {
    const images = [
        {
            src: sittingArea,
            alt: "Hotel interior",
        },
        {
            src: lakeview,
            alt: "Hotel interior",
        },
        {
            src: Reception,
            alt: "Hotel building",
        },
        {
            src: Room1,
            alt: "Hotel room",
        },
        {
            src: hangingChair,
            alt: "Hotel interior",
        },
    ];

    return (
        <section
            id="experience"
            className="
                w-full
                px-4
                pt-4
                pb-16

                sm:px-6
                sm:pt-6
                sm:pb-20

                md:px-8
                md:pt-8
                md:pb-24

                lg:px-10
                lg:pt-[30px]
                lg:pb-[120px]
            "
        >

            {/* =========================
                LARGE IMAGE
            ========================= */}
            <div
                className="
                    group
                    mb-4
                    h-[280px]
                    overflow-hidden

                    sm:mb-5
                    sm:h-[380px]

                    md:h-[480px]

                    lg:h-[650px]
                "
            >
                <img
                    src={images[0].src}
                    alt={images[0].alt}
                    loading="lazy"
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.04]
                    "
                />
            </div>

            {/* =========================
                GALLERY GRID
            ========================= */}
            <div
                className="
                    grid
                    grid-cols-1
                    gap-4

                    sm:grid-cols-2
                    sm:gap-5

                    lg:grid-cols-[0.7fr_1.3fr_1fr]
                    lg:grid-rows-[280px_280px]
                "
            >

                {/* Image 1 */}
                <div
                    className="
                        group
                        h-[240px]
                        overflow-hidden

                        sm:h-[250px]

                        lg:h-auto
                        lg:row-span-2
                    "
                >
                    <img
                        src={images[1].src}
                        alt={images[1].alt}
                        loading="lazy"
                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.04]
                        "
                    />
                </div>

                {/* Image 2 */}
                <div
                    className="
                        group
                        h-[240px]
                        overflow-hidden

                        sm:h-[250px]

                        lg:h-auto
                    "
                >
                    <img
                        src={images[2].src}
                        alt={images[2].alt}
                        loading="lazy"
                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.04]
                        "
                    />
                </div>

                {/* Image 3 */}
                <div
                    className="
                        group
                        h-[240px]
                        overflow-hidden

                        sm:h-[250px]

                        lg:h-auto
                    "
                >
                    <img
                        src={images[3].src}
                        alt={images[3].alt}
                        loading="lazy"
                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.04]
                        "
                    />
                </div>

                {/* Image 4 */}
                <div
                    className="
                        group
                        h-[240px]
                        overflow-hidden

                        sm:h-[250px]

                        lg:h-auto
                    "
                >
                    <img
                        src={images[4].src}
                        alt={images[4].alt}
                        loading="lazy"
                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.04]
                        "
                    />
                </div>

            </div>
        </section>
    );
};

export default Gallery;