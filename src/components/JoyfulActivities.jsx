import {
    FaGamepad,
    FaCamera,
    FaFish,
    FaBirthdayCake,
    FaFire,
} from "react-icons/fa";

import bornfire from "../assets/bornfire.jpg";

const JoyfulActivities = () => {
    const activities = [
        {
            icon: <FaGamepad />,
            title: "Indoor & Outdoor Games",
            description:
                "Have fun with family and friends with a variety of indoor and outdoor games for all ages.",
        },
        {
            icon: <FaCamera />,
            title: "Photography",
            description:
                "Capture beautiful memories surrounded by greenery, peaceful views and natural beauty.",
        },
        {
            icon: <FaFish />,
            title: "Fishing",
            description:
                "Enjoy a peaceful fishing experience and spend quality time close to nature.",
        },
        {
            icon: <FaBirthdayCake />,
            title: "Birthday Celebrations",
            description:
                "Celebrate special moments with your loved ones and create unforgettable birthday memories.",
        },
        {
            icon: <FaFire />,
            title: "Bonfire Evenings",
            description:
                "Gather around a warm bonfire, enjoy conversations and create memorable evenings under the open sky.",
        },
    ];

    return (
        <section
            id="activities"
            className="
                bg-[#faf8f4]
                px-[18px]
                py-[70px]

                sm:px-5
                sm:py-[85px]

                lg:py-[110px]
            "
        >
            <div className="mx-auto max-w-[1200px]">

                {/* =========================
                    HEADER
                ========================== */}

                <div
                    className="
                        mx-auto
                        mb-[45px]
                        max-w-[700px]
                        text-center

                        sm:mb-[55px]

                        lg:mb-[65px]
                    "
                >
                    <span
                        className="
                            mb-[15px]
                            inline-block
                            text-[11px]
                            font-semibold
                            tracking-[3px]
                            text-[#ec8c0e]

                            sm:text-[13px]
                        "
                    >
                        EXPERIENCES AT AAROSHA
                    </span>

                    <h2
                        className="
                            mb-5
                            text-[34px]
                            font-medium
                            leading-[1.15]
                            text-[#252525]

                            sm:text-[40px]

                            lg:text-[48px]
                        "
                    >
                        Joyful Activities,
                        <br />
                        <span className="italic text-[#ec8c0e]">
                            Memorable Moments
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            max-w-[620px]
                            text-[14px]
                            leading-[1.8]
                            text-[#777]

                            sm:text-[15px]

                            lg:text-base
                        "
                    >
                        Make the most of your stay with exciting activities,
                        peaceful experiences and special moments with your
                        loved ones.
                    </p>
                </div>

                {/* =========================
                    MAIN CONTENT
                ========================== */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-10

                        md:grid-cols-2
                        md:gap-[35px]

                        lg:gap-[55px]
                    "
                >

                    {/* =========================
                        IMAGE
                    ========================== */}

                    <div
                        className="
                            group
                            relative
                            h-[400px]
                            overflow-hidden
                            rounded-[4px]

                            sm:h-[480px]

                            md:h-[550px]

                            lg:h-[600px]
                        "
                    >
                        <img
                            src={bornfire}
                            alt="Outdoor activities and bonfire surrounded by nature"
                            className="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-700
                                ease-out
                                group-hover:scale-105
                            "
                        />

                        {/* Image Overlay */}
                        <div
                            className="
                                absolute
                                bottom-[20px]
                                left-[20px]
                                bg-black/65
                                px-[18px]
                                py-3
                                text-[13px]
                                tracking-[1px]
                                text-white
                                backdrop-blur-[5px]

                                sm:bottom-[25px]
                                sm:left-[25px]
                                sm:px-[22px]
                                sm:py-[14px]
                                sm:text-sm
                            "
                        >
                            Enjoy Every Moment
                        </div>
                    </div>

                    {/* =========================
                        ACTIVITIES
                    ========================== */}

                    <div
                        className="
                            flex
                            flex-col
                            justify-center
                        "
                    >
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className={`
                                    group
                                    flex
                                    gap-[16px]
                                    border-b
                                    border-black/[0.09]
                                    py-[22px]
                                    transition-all
                                    duration-300

                                    sm:gap-[22px]
                                    sm:py-[25px]

                                    ${index === 0 ? "pt-0" : ""}
                                    ${index === activities.length - 1 ? "border-b-0" : ""}
                                `}
                            >

                                {/* Icon */}
                                <div
                                    className="
                                        flex
                                        h-[48px]
                                        min-h-[48px]
                                        w-[48px]
                                        min-w-[48px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#ec8c0e]/10
                                        text-[19px]
                                        text-[#ec8c0e]
                                        transition-all
                                        duration-300

                                        sm:h-[54px]
                                        sm:min-h-[54px]
                                        sm:w-[54px]
                                        sm:min-w-[54px]
                                        sm:text-[21px]

                                        group-hover:rotate-[-5deg]
                                        group-hover:scale-105
                                        group-hover:bg-[#ec8c0e]
                                        group-hover:text-white
                                    "
                                >
                                    {activity.icon}
                                </div>

                                {/* Details */}
                                <div className="min-w-0 flex-1">

                                    {/* Title + Number */}
                                    <div
                                        className="
                                            flex
                                            items-start
                                            justify-between
                                            gap-3
                                        "
                                    >
                                        <h3
                                            className="
                                                mb-2
                                                text-[17px]
                                                font-semibold
                                                leading-[1.3]
                                                text-[#292929]

                                                sm:text-[19px]
                                            "
                                        >
                                            {activity.title}
                                        </h3>

                                        <span
                                            className="
                                                shrink-0
                                                pt-1
                                                text-[11px]
                                                font-semibold
                                                tracking-[1px]
                                                text-[#ec8c0e]/50

                                                sm:text-xs
                                            "
                                        >
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p
                                        className="
                                            text-[13px]
                                            leading-[1.7]
                                            text-[#777]

                                            sm:text-sm
                                        "
                                    >
                                        {activity.description}
                                    </p>

                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default JoyfulActivities;