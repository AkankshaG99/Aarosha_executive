import heroImage from "../assets/FrontImage.PNG";

const Hero = () => {
    const scrollToRooms = () => {
        document.getElementById("rooms")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section
            className="
                relative
                flex
                min-h-[620px]
                h-[100svh]
                items-center
                overflow-hidden
                text-white

                sm:min-h-[650px]

                lg:min-h-[680px]
                lg:h-screen
            "
        >

            {/* =========================
                BACKGROUND
            ========================= */}
            <div
                className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    bg-no-repeat
                "
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            />

            {/* =========================
                OVERLAY
            ========================= */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/75
                    via-black/45
                    to-black/20

                    sm:from-black/70
                    sm:via-black/40
                    sm:to-black/20
                "
            />

            {/* =========================
                CONTENT
            ========================= */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    px-5
                    pt-16

                    sm:px-8
                    sm:pt-20

                    md:ml-auto
                    md:mr-[5%]
                    md:w-[90%]
                    md:max-w-[720px]
                    md:px-0
                    md:text-right
                    
                    lg:max-w-[760px]
                    lg:pt-80

                "
            >

                {/* =========================
                    HEADING
                ========================= */}
                <h3
                    className="
                        mb-5
                        max-w-[600px]
                        text-[20px]
                        font-medium
                        leading-[1.02]
                        tracking-[-2px]

                        sm:mb-6
                        sm:text-[50px]

                        md:ml-auto
                        md:text-[38px]

                        lg:text-[70px]

                        xl:text-[62px]
                    "
                >
                    A Modern Stay,
                    <br />
                    Designed for Comfort.
                </h3>

                {/* =========================
                    DESCRIPTION
                ========================= */}
                <p
                    className="
                        max-w-[500px]
                        text-[13px]
                        leading-[1.7]
                        text-white/85

                        sm:text-[14px]

                        md:ml-auto
                        md:text-[15px]
                    "
                >
                    Discover comfortable accommodation at Aarosha Executive,
                    with modern Executive Rooms and spacious Lakeside Rooms
                    near Pune.
                </p>

                {/* =========================
                    BUTTONS
                ========================= */}
                <div
                    className="
                        mt-7
                        flex
                        w-full
                        flex-col
                        gap-3

                        sm:mt-8
                        sm:w-auto
                        sm:flex-row

                        md:justify-end
                    "
                >

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/919527089757?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Executive%20Rooms."
                        target="_blank"
                        rel="noreferrer"
                        className="
                            inline-flex
                            min-h-[48px]
                            w-full
                            items-center
                            justify-center
                            gap-4
                            bg-white
                            px-5
                            py-3
                            text-[12px]
                            font-medium
                            text-black
                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:bg-[#ec8c0e]
                            hover:text-white

                            sm:w-auto
                            sm:min-w-[180px]
                        "
                    >
                        <span>
                            Enquire on WhatsApp
                        </span>

                        <span className="text-base">
                            ↗
                        </span>
                    </a>

                    {/* Explore Rooms */}
                    <button
                        type="button"
                        onClick={scrollToRooms}
                        className="
                            inline-flex
                            min-h-[48px]
                            w-full
                            items-center
                            justify-center
                            gap-4
                            border
                            border-white/70
                            px-5
                            py-3
                            text-[12px]
                            font-medium
                            text-white
                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:bg-white
                            hover:text-black

                            sm:w-auto
                            sm:min-w-[150px]
                        "
                    >
                        <span>
                            Explore Rooms
                        </span>

                        <span className="text-base">
                            ↓
                        </span>
                    </button>

                </div>

            </div>
        </section>
    );
};

export default Hero;