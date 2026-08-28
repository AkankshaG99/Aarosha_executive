const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919527089757?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Executive%20Rooms."
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="
                fixed
                right-3
                bottom-3
                z-[999]

                flex
                items-center
                justify-center
                gap-2

                rounded-full
                bg-[#20c76a]
                px-4
                py-3

                text-[12px]
                font-medium
                text-white

                shadow-[0_5px_25px_rgba(0,0,0,0.15)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#1caf5c]
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.22)]

                active:scale-95

                sm:right-5
                sm:bottom-5
                sm:px-5
                sm:py-3

                md:right-6
                md:bottom-6
            "
        >
            {/* Icon */}
            <span
                className="
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/70

                    text-[10px]

                    transition-transform
                    duration-300

                    group-hover:rotate-12
                "
            >
                ☎
            </span>

            <span className="whitespace-nowrap">
                Enquire
            </span>
        </a>
    );
};

export default WhatsAppButton;