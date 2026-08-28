import {
    FaInstagram,
    FaWhatsapp,
    FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo1 from "../assets/nobgLogo.png";

const Footer = () => {
    return (
        <footer className="bg-[#111] px-5 pt-14 pb-5 text-white sm:px-8 sm:pt-16 md:px-10 md:pt-20">

            {/* Main Footer */}
            <div
                className="
                    mx-auto flex max-w-[1400px]
                    flex-col gap-12
                    pb-12
                    sm:gap-14 sm:pb-14
                    md:gap-16 md:pb-[70px]
                    lg:flex-row lg:items-start lg:justify-between lg:gap-20
                "
            >

                {/* Brand */}
                <div className="w-full max-w-[400px]">

                    {/* Logo */}
                    <div
                        className="
                            mb-5 flex
                            w-[125px]
                            items-center
                            sm:mb-6 sm:w-[145px]
                            md:w-[155px]
                        "
                    >
                        <img
                            src={Logo1}
                            alt="Aarosha Executive"
                            className="h-auto w-full object-contain"
                        />
                    </div>

                    <p
                        className="
                            max-w-[360px]
                            text-[13px]
                            leading-[1.7]
                            text-[#999]
                            sm:text-sm
                        "
                    >
                        A modern stay designed for comfort,
                        convenience and memorable experiences.
                    </p>

                </div>

                {/* Footer Links */}
                <div
                    className="
                        grid grid-cols-2
                        gap-8
                        sm:gap-12
                        md:gap-20
                        lg:flex lg:gap-[100px]
                    "
                >

                    {/* Explore */}
                    <div className="flex flex-col gap-3">

                        <span
                            className="
                                mb-2
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-[1.5px]
                                text-white
                                sm:text-[11px]
                            "
                        >
                            Explore
                        </span>

                        <a
                            href="#rooms"
                            className="
                                w-fit
                                text-[13px]
                                text-[#999]
                                transition-colors
                                duration-200
                                hover:text-white
                            "
                        >
                            Rooms
                        </a>

                        <a
                            href="#activities"
                            className="
                                w-fit
                                text-[13px]
                                text-[#999]
                                transition-colors
                                duration-200
                                hover:text-white
                            "
                        >
                            Experience
                        </a>

                        <a
                            href="#location"
                            className="
                                w-fit
                                text-[13px]
                                text-[#999]
                                transition-colors
                                duration-200
                                hover:text-white
                            "
                        >
                            Location
                        </a>

                        <a
                            href="#why-choose-us"
                            className="
                                w-fit
                                text-[13px]
                                text-[#999]
                                transition-colors
                                duration-200
                                hover:text-white
                            "
                        >
                            Why Us
                        </a>

                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-3">

                        <span
                            className="
                                mb-2
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-[1.5px]
                                text-white
                                sm:text-[11px]
                            "
                        >
                            Contact
                        </span>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/aarosha_stay?igsi=dGMxdTFrdDM3bnIx&utm_source=qr"
                            target="_blank"
                            rel="noreferrer"
                            className="
                                flex w-fit
                                items-center gap-2
                                text-[13px]
                                text-[#999]
                                transition-colors
                                duration-200
                                hover:text-white
                            "
                        >
                            <FaInstagram className="shrink-0 text-[15px]" />
                            <span>Instagram</span>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/919527089757?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Executive%20Rooms."
                            target="_blank"
                            rel="noreferrer"
                            className="
                                flex w-fit
                                items-center gap-2
                                text-[13px]
                                text-[#999]
                                transition-colors
                                duration-200
                                hover:text-white
                            "
                        >
                            <FaWhatsapp className="shrink-0 text-[15px]" />
                            <span>WhatsApp</span>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:info@aaroshaexecutive.com"
                            className="
                                flex w-fit
                                items-center gap-2
                                text-[13px]
                                text-[#999]
                                transition-colors
                                duration-200
                                hover:text-white
                            "
                        >
                            <MdEmail className="shrink-0 text-[16px]" />
                            <span className="break-all">Email</span>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+919527089757"
                            className="
                                flex w-fit
                                items-center gap-2
                                text-[13px]
                                text-[#999]
                                transition-colors
                                duration-200
                                hover:text-white
                            "
                        >
                            <FaPhoneAlt className="shrink-0 text-[13px]" />
                            <span className="whitespace-nowrap">
                                +91 9527089757
                            </span>
                        </a>

                    </div>

                </div>

            </div>

            {/* Bottom Footer */}
            <div
                className="
                    mx-auto flex max-w-[1400px]
                    flex-col
                    gap-3
                    border-t border-[#333]
                    pt-5
                    text-[11px]
                    text-[#666]
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:gap-2
                "
            >

                <span>
                    © {new Date().getFullYear()} Aarosha Executive
                </span>

                <span>
                    Designed for comfort.
                </span>

            </div>

        </footer>
    );
};

export default Footer;