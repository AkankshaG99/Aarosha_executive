const RoomTypes = () => {
    return (
        <section
            className="
                w-full
                px-4
                py-16

                sm:px-5
                sm:py-20

                md:px-8
                md:py-24

                lg:px-10
                lg:py-28
            "
        >
            {/* =========================
                ROOM CARDS
            ========================== */}

            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-[1400px]
                    grid-cols-1
                    gap-5

                    sm:gap-6

                    md:grid-cols-2
                    md:gap-6

                    lg:gap-7
                "
            >
                {/* =========================
                    EXECUTIVE ROOM
                ========================== */}

                <div
                    className="
                        flex
                        min-h-[300px]
                        flex-col
                        justify-between
                        bg-white
                        p-6

                        sm:min-h-[320px]
                        sm:p-7

                        md:min-h-[340px]
                        md:p-8

                        lg:min-h-[360px]
                        lg:p-9

                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                    "
                >
                    <div>
                        {/* Eyebrow */}
                        <span
                            className="
                                mb-4
                                block
                                text-[10px]
                                font-medium
                                tracking-[2.5px]
                                text-[#777]

                                sm:mb-5
                            "
                        >
                            ROOM TYPE 01
                        </span>

                        {/* Title */}
                        <h3
                            className="
                                mb-4
                                font-['Playfair_Display']
                                text-[28px]
                                font-medium
                                leading-tight
                                text-[#111]

                                sm:text-[30px]

                                md:text-[32px]

                                lg:text-[34px]
                            "
                        >
                            Executive Rooms
                        </h3>

                        {/* Description */}
                        <p
                            className="
                                max-w-[460px]
                                text-[13px]
                                leading-[1.7]
                                text-[#777]

                                sm:text-[14px]
                            "
                        >
                            Comfortable rooms designed for business
                            travellers and guests seeking a convenient
                            modern stay.
                        </p>
                    </div>

                    {/* Button */}
                    <a
                        href="https://wa.me/919527089757?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Executive%20Rooms."
                        target="_blank"
                        rel="noreferrer"
                        className="
                            mt-8
                            inline-flex
                            w-fit
                            items-center
                            gap-4
                            bg-[#111]
                            px-4
                            py-3
                            text-[11px]
                            font-medium
                            text-white
                            transition-all
                            duration-300

                            hover:bg-[#333]
                            hover:gap-5

                            sm:mt-10
                        "
                    >
                        <span>
                            Enquire About Executive Rooms
                        </span>

                        <span className="text-sm">
                            ↗
                        </span>
                    </a>
                </div>

                {/* =========================
                    LAKESIDE ROOM
                ========================== */}

                <div
                    className="
                        flex
                        min-h-[300px]
                        flex-col
                        justify-between
                        bg-white
                        p-6

                        sm:min-h-[320px]
                        sm:p-7

                        md:min-h-[340px]
                        md:p-8

                        lg:min-h-[360px]
                        lg:p-9

                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                    "
                >
                    <div>
                        {/* Eyebrow */}
                        <span
                            className="
                                mb-4
                                block
                                text-[10px]
                                font-medium
                                tracking-[2.5px]
                                text-[#777]

                                sm:mb-5
                            "
                        >
                            ROOM TYPE 02
                        </span>

                        {/* Title */}
                        <h3
                            className="
                                mb-4
                                font-['Playfair_Display']
                                text-[28px]
                                font-medium
                                leading-tight
                                text-[#111]

                                sm:text-[30px]

                                md:text-[32px]

                                lg:text-[34px]
                            "
                        >
                            Lakeside Rooms
                        </h3>

                        {/* Description */}
                        <p
                            className="
                                max-w-[460px]
                                text-[13px]
                                leading-[1.7]
                                text-[#777]

                                sm:text-[14px]
                            "
                        >
                            Spacious accommodation surrounded by a
                            peaceful environment and beautiful lakeside
                            views.
                        </p>
                    </div>

                    {/* Button */}
                    <a
                        href="https://wa.me/919527089757?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Lakeside%20Rooms."
                        target="_blank"
                        rel="noreferrer"
                        className="
                            mt-8
                            inline-flex
                            w-fit
                            items-center
                            gap-4
                            bg-[#111]
                            px-4
                            py-3
                            text-[11px]
                            font-medium
                            text-white
                            transition-all
                            duration-300

                            hover:bg-[#333]
                            hover:gap-5

                            sm:mt-10
                        "
                    >
                        <span>
                            Enquire About Lakeside Rooms
                        </span>

                        <span className="text-sm">
                            ↗
                        </span>
                    </a>
                </div>
            </div>

            {/* =========================
                BOTTOM IMAGE
            ========================== */}

            <div
                className="
                    mx-auto
                    mt-12
                    h-[300px]
                    w-full
                    max-w-[1400px]
                    overflow-hidden

                    sm:mt-14
                    sm:h-[350px]

                    md:mt-16
                    md:h-[420px]

                    lg:mt-20
                    lg:h-[500px]
                "
            >
                <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
                    alt="Aarosha Executive"
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-[1.03]
                    "
                />
            </div>
        </section>
    );
};

export default RoomTypes;