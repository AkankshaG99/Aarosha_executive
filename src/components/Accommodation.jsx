import Room1 from "../assets/Room2.PNG";
import lakesideRoom from "../assets/LakesideRoom.PNG"

const Accommodation = () => {
    const rooms = [
        {
            number: "01",
            title: "Executive Rooms",
            description:
                "Comfortable rooms designed for business travellers and guests looking for a relaxing modern stay.",
            image: Room1,
            alt: "Executive Room",
            whatsapp:
                "https://wa.me/919527089757?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Executive%20Rooms.",
        },
        {
            number: "02",
            title: "Lakeside Rooms",
            description:
                "Spacious accommodation with a peaceful atmosphere and beautiful surroundings for a memorable stay.",
            image:lakesideRoom,
            alt: "Lakeside Room",
            whatsapp:
                "https://wa.me/919527089757?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Lakeside%20Rooms.",
        },
    ];

    return (
        <section
            id="rooms"
            className="
                w-full
                px-4
                py-16

                sm:px-5
                sm:py-20

                md:px-8
                md:py-24

                lg:px-10
                lg:py-[140px]
            "
        >
            <div className="mx-auto w-full max-w-[1400px]">

                {/* =========================
                    SECTION HEADER
                ========================== */}

                <div
                    className="
                        mb-10
                        flex-col
                        gap-5

                        sm:mb-12
                        sm:gap-6

                        md:mb-[50px]

                        lg:flex-row
                        lg:items-end
                        lg:justify-between
                    "
                >
                    {/* Heading */}

                    <div>
                        <span
                            className="
                                mb-3
                                block
                                text-[10px]
                                font-medium
                                tracking-[2.5px]
                                text-[#777]

                                sm:mb-[15px]
                            "
                        >
                            ACCOMMODATION
                        </span>

                        <h2
                            className="
                                font-medium
                                leading-[1]
                                tracking-[-1.5px]
                                text-[#111]

                                text-[38px]

                                sm:text-[48px]

                                md:text-[56px]

                                lg:text-[64px]
                            "
                        >
                            Choose Your Stay
                        </h2>
                    </div>

                    {/* Description */}

                    <p
                        className="
                            text-[13px]
                            leading-[1.7]
                            text-[#777]
                            sm:text-sm
                            lg:mb-1
                        "
                    >
                        Two accommodation options. One comfortable
                        experience.
                    </p>
                </div>

                {/* =========================
                    ROOM GRID
                ========================== */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5

                        sm:gap-6

                        md:grid-cols-2
                        md:gap-[22px]
                    "
                >
                    {rooms.map((room) => (
                        <article
                            key={room.number}
                            className="
                                flex
                                flex-col
                                overflow-hidden
                                bg-white

                                transition-all
                                duration-300

                                hover:-translate-y-1
                                hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                            "
                        >
                            {/* =========================
                                IMAGE
                            ========================== */}

                            <div
                                className="
                                    group
                                    h-[260px]
                                    w-full
                                    overflow-hidden

                                    sm:h-[320px]

                                    md:h-[350px]

                                    lg:h-[420px]
                                "
                            >
                                <img
                                    src={room.image}
                                    alt={room.alt}
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
                                CONTENT
                            ========================== */}

                            <div
                                className="
                                    flex
                                    flex-1
                                    flex-col
                                    items-start
                                    p-5

                                    sm:p-6

                                    md:p-7

                                    lg:p-[30px]
                                "
                            >
                                {/* Number */}

                                <span
                                    className="
                                        text-[10px]
                                        font-medium
                                        text-[#999]
                                    "
                                >
                                    {room.number}
                                </span>

                                {/* Title */}

                                <h3
                                    className="
                                        my-3
                                        font-['Playfair_Display']
                                        text-[27px]
                                        font-medium
                                        leading-tight
                                        text-[#111]

                                        sm:my-[15px]
                                        sm:text-[30px]

                                        md:text-[31px]
                                    "
                                >
                                    {room.title}
                                </h3>

                                {/* Description */}

                                <p
                                    className="
                                        mb-6
                                        max-w-[430px]
                                        text-[13px]
                                        leading-[1.7]
                                        text-[#777]

                                        sm:mb-[25px]
                                        sm:text-sm
                                    "
                                >
                                    {room.description}
                                </p>

                                {/* Button */}

                                <a
                                    href={room.whatsapp}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                        mt-auto
                                        inline-flex
                                        max-w-full
                                        items-center
                                        gap-3
                                        bg-[#111]
                                        px-4
                                        py-3
                                        text-[10px]
                                        font-medium
                                        text-white

                                        transition-all
                                        duration-300

                                        hover:bg-[#333]
                                        hover:gap-4

                                        sm:gap-[22px]
                                        sm:py-[13px]
                                        sm:text-[11px]
                                    "
                                >
                                    <span className="truncate">
                                        Enquire About {room.title}
                                    </span>

                                    <span className="shrink-0 text-sm">
                                        ↗
                                    </span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accommodation;