import {
    FaBed,
    FaMapMarkerAlt,
    FaWifi,
    FaShieldAlt,
    FaConciergeBell,
    FaParking,
} from "react-icons/fa";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaBed />,
            title: "Comfortable Rooms",
            description:
                "Thoughtfully designed rooms with modern amenities to make your stay comfortable and relaxing.",
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Prime Location",
            description:
                "Conveniently located with easy access to nearby business hubs, attractions, restaurants and essential services.",
        },
        {
            icon: <FaWifi />,
            title: "High-Speed Wi-Fi",
            description:
                "Stay connected with reliable high-speed Wi-Fi, perfect for work, entertainment and staying in touch.",
        },
        {
            icon: <FaShieldAlt />,
            title: "Safe & Secure",
            description:
                "Your comfort and security matter to us. Enjoy a peaceful stay in a safe and welcoming environment.",
        },
        {
            icon: <FaConciergeBell />,
            title: "Warm Hospitality",
            description:
                "Our team is committed to providing friendly, attentive service throughout your stay.",
        },
        {
            icon: <FaParking />,
            title: "Convenient Parking",
            description:
                "Enjoy hassle-free parking facilities so you can focus on making the most of your stay.",
        },
    ];

    return (
        <section
            id="why-choose-us"
            className="
                w-full
                bg-[#faf8f4]
                px-4
                py-16

                sm:px-5
                sm:py-20

                md:px-8
                md:py-24

                lg:px-10
                lg:py-[100px]
            "
        >
            <div
                className="
                    mx-auto
                    w-full
                    max-w-[1200px]
                "
            >
                {/* =========================
                    HEADER
                ========================== */}

                <div
                    className="
                        mx-auto
                        mb-12
                        max-w-[700px]
                        text-center

                        sm:mb-14

                        md:mb-16
                    "
                >
                    {/* Subtitle */}

                    <span
                        className="
                            mb-3
                            inline-block
                            text-[11px]
                            font-semibold
                            tracking-[2.5px]
                            text-[#ec8c0e]

                            sm:text-[12px]

                            md:text-[13px]
                            md:tracking-[3px]
                        "
                    >
                        WHY AAROSHA EXECUTIVE
                    </span>

                    {/* Heading */}

                    <h2
                        className="
                            mb-4
                            text-[34px]
                            font-medium
                            leading-[1.15]
                            tracking-[-1px]
                            text-[#252525]

                            sm:text-[38px]

                            md:text-[42px]

                            lg:text-[48px]
                            lg:tracking-[-1.5px]
                        "
                    >
                        A Stay Designed
                        <br />
                        <span className="italic text-[#ec8c0e]">
                            For You
                        </span>
                    </h2>

                    {/* Description */}

                    <p
                        className="
                            mx-auto
                            max-w-[620px]
                            text-[14px]
                            leading-[1.8]
                            text-[#777]

                            sm:text-[15px]

                            md:text-[16px]
                        "
                    >
                        Whether you're travelling for business or leisure,
                        Aarosha Executive combines comfort, convenience and
                        thoughtful hospitality to make every stay memorable.
                    </p>
                </div>

                {/* =========================
                    FEATURES GRID
                ========================== */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-4

                        sm:gap-5

                        md:grid-cols-2
                        md:gap-5

                        lg:grid-cols-3
                        lg:gap-6
                    "
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="
                                group
                                relative
                                flex
                                gap-4
                                overflow-hidden
                                rounded-[4px]
                                border
                                border-black/[0.06]
                                bg-white
                                p-6

                                transition-all
                                duration-300

                                hover:-translate-y-1
                                hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]

                                sm:gap-5
                                sm:p-7

                                md:p-8
                            "
                        >
                            {/* Orange left border */}

                            <span
                                className="
                                    absolute
                                    left-0
                                    top-0
                                    h-0
                                    w-[3px]
                                    bg-[#ec8c0e]

                                    transition-all
                                    duration-300

                                    group-hover:h-full
                                "
                            />

                            {/* =========================
                                ICON
                            ========================== */}

                            <div
                                className="
                                    flex
                                    h-[48px]
                                    w-[48px]
                                    min-w-[48px]
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#ec8c0e]/10
                                    text-[19px]
                                    text-[#ec8c0e]

                                    transition-all
                                    duration-300

                                    group-hover:rotate-3
                                    group-hover:bg-[#ec8c0e]
                                    group-hover:text-white
                                    group-hover:scale-105

                                    sm:h-[52px]
                                    sm:w-[52px]
                                    sm:min-w-[52px]
                                    sm:text-[20px]

                                    md:h-[54px]
                                    md:w-[54px]
                                    md:min-w-[54px]
                                "
                            >
                                {feature.icon}
                            </div>

                            {/* =========================
                                CONTENT
                            ========================== */}

                            <div className="min-w-0 flex-1">
                                <h3
                                    className="
                                        mb-2
                                        text-[17px]
                                        font-semibold
                                        leading-tight
                                        text-[#292929]

                                        sm:text-[18px]

                                        md:text-[19px]
                                    "
                                >
                                    {feature.title}
                                </h3>

                                <p
                                    className="
                                        text-[13px]
                                        leading-[1.7]
                                        text-[#777]

                                        sm:text-[14px]
                                    "
                                >
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;