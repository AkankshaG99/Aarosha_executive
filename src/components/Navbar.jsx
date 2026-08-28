import { useState } from "react";
import Logo1 from "../assets/nobgLogo.png";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });

        setMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        setMenuOpen(false);
    };

    const navItems = [
        { label: "Home", action: scrollToTop },
        { label: "Rooms", action: () => scrollToSection("rooms") },
        { label: "Experience", action: () => scrollToSection("activities") },
        { label: "Why Us", action: () => scrollToSection("why-choose-us") },
        { label: "Location", action: () => scrollToSection("location") },
    ];

    return (
        <header
            className="
                fixed
                left-0
                top-0
                z-[9999]
                w-full
                border-b
                border-[#ec8c0e]/20
                shadow-[0_4px_25px_rgba(0,0,0,0.18)]
                backdrop-blur-[10px]
            "
            style={{
                background:
                    "linear-gradient(90deg, #472801 0%, #4d2d04 20%, #5c3707 55%, #6b410a 100%)",
                WebkitBackdropFilter: "blur(10px)",
            }}
        >
            {/* =========================
                NAVBAR CONTAINER
            ========================== */}

            <div
                className="
                    mx-auto
                    flex
                    h-[70px]
                    w-full
                    items-center
                    justify-between
                    gap-3
                    px-4

                    sm:h-[74px]
                    sm:px-5

                    lg:h-[78px]
                    lg:w-[93%]
                    lg:px-0
                "
            >
                {/* =========================
                    LOGO
                ========================== */}

                <button
                    type="button"
                    onClick={scrollToTop}
                    className="
                        flex
                        h-[58px]
                        w-[105px]
                        shrink-0
                        cursor-pointer
                        items-center
                        justify-center
                        transition
                        duration-300
                        hover:scale-105

                        sm:h-[62px]
                        sm:w-[125px]

                        lg:h-[65px]
                        lg:w-[155px]
                    "
                    aria-label="Go to homepage"
                >
                    <img
                        src={Logo1}
                        alt="Aarosha Executive"
                        className="h-full w-full object-contain"
                    />
                </button>

                {/* =========================
                    DESKTOP NAVIGATION
                ========================== */}

                <nav
                    className="
                        hidden
                        items-center
                        gap-5

                        lg:flex
                        lg:gap-7

                        xl:gap-[38px]
                    "
                >
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            type="button"
                            onClick={item.action}
                            className="
                                group
                                relative
                                px-1
                                py-2
                                text-[13px]
                                font-medium
                                text-[#ec8c0e]
                                transition-all
                                duration-300

                                hover:-translate-y-0.5
                                hover:text-white

                                xl:text-[15px]
                            "
                        >
                            {item.label}

                            <span
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-[2px]
                                    w-0
                                    rounded-full
                                    bg-[#ec8c0e]
                                    transition-all
                                    duration-300
                                    group-hover:w-full
                                "
                            />
                        </button>
                    ))}
                </nav>

                {/* =========================
                    DESKTOP WHATSAPP
                ========================== */}

                <a
                    href="https://wa.me/919527089757?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Executive%20Rooms."
                    target="_blank"
                    rel="noreferrer"
                    className="
                        ml-auto
                        hidden
                        items-center
                        justify-center
                        whitespace-nowrap
                        rounded-full
                        border
                        border-[#ec8c0e]/55
                        bg-[#ec8c0e]/10
                        px-3
                        py-[9px]
                        text-[12px]
                        font-semibold
                        text-[#ec8c0e]
                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:border-[#ec8c0e]
                        hover:bg-[#ec8c0e]
                        hover:text-white
                        hover:shadow-[0_8px_25px_rgba(236,140,14,0.35)]

                        lg:flex
                        lg:px-4
                        lg:text-[13px]
                        xl:px-[19px]
                    "
                >
                    <span className="mr-2 text-sm">
                        <FaWhatsapp
                            className="
                            transition-all
                            duration-300
                            group-hover:rotate-[15deg]
                            group-hover:scale-110
                        "
                        />
                    </span>

                    Enquire on WhatsApp
                </a>

                {/* =========================
                    MOBILE MENU BUTTON
                ========================== */}

                <button
                    type="button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        text-[25px]
                        text-[#ec8c0e]
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:text-white

                        lg:hidden
                    "
                    aria-label={
                        menuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* =========================
                MOBILE MENU
            ========================== */}

            <div
                className={`
                    absolute
                    left-0
                    top-[70px]
                    w-full
                    overflow-hidden
                    border-t
                    border-[#ec8c0e]/15
                    bg-[#472801]/98
                    shadow-[0_12px_25px_rgba(0,0,0,0.25)]
                    backdrop-blur-[15px]
                    transition-all
                    duration-300

                    sm:top-[74px]

                    lg:hidden

                    ${menuOpen
                        ? "visible max-h-[500px] translate-y-0 opacity-100"
                        : "invisible max-h-0 -translate-y-2 opacity-0"
                    }
                `}
            >
                <nav className="flex flex-col px-4 py-3 sm:px-5">

                    {navItems.map((item, index) => (
                        <button
                            key={item.label}
                            type="button"
                            onClick={item.action}
                            className={`
                                w-full
                                px-3
                                py-4
                                text-left
                                text-[14px]
                                font-medium
                                text-[#ec8c0e]
                                transition-all
                                duration-200
                                hover:pl-5
                                hover:text-white

                                ${index !== navItems.length - 1
                                    ? "border-b border-[#ec8c0e]/10"
                                    : ""
                                }
                            `}
                        >
                            {item.label}
                        </button>
                    ))}

                    {/* Mobile WhatsApp */}
                    <a
                        href="https://wa.me/919527089757?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Executive%20Rooms."
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="
                            mt-4
                            flex
                            w-full
                            items-center
                            justify-center
                            rounded-full
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            text-[#ec8c0e]
                            transition-all
                            duration-300
                            transition-all duration-300
                            hover:text-white
                            hover:bg-[#ec8c0e]
                            hover:border-[#ec8c0e]
                            hover:shadow-[0_8px_25px_rgba(236,140,14,0.35)]
                            hover:-translate-y-0.5
                        "
                        style={{ border: "1px solid rgba(236, 140, 14, 0.55)", color: "#ec8c0e", background: "rgba(236, 140, 14, 0.08)" }}
                    >
                        Enquire on WhatsApp
                    </a>

                </nav>
            </div>
        </header>
    );
};

export default Navbar;