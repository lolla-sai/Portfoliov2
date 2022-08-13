import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../public/logo.png";
import headerStyles from "../styles/Header.module.css";

function Header() {
    const [scrollPos, setScrollPos] = useState(0);

    const navLinks = [
        {
            label: "About",
            url: "#about",
        },
        {
            label: "Blog",
            url: "/blog",
        },
        {
            label: "Work",
            url: "#eduandexp",
        },
        {
            label: "Contact",
            url: "#contact",
        },
    ];

    function scrollEventHandler(e) {
        setScrollPos(window.scrollY);
    }

    useEffect(() => {
        document.addEventListener("scroll", scrollEventHandler);
        return () => {
            document.removeEventListener("scroll", scrollEventHandler);
        };
    }, []);
    return (
        <nav
            className={`flex justify-between py-4 md:px-12 px-6 items-center fixed z-40 w-full left-0 top-0 right-0  ${
                scrollPos &&
                "shadow shadow-[rgba(2,12,27,0.7)] backdrop-blur-sm"
            }`}
        >
            <div className="nav__brand">
                <Link href="/">
                    <a>
                        <Image
                            src={logo}
                            layout="fixed"
                            width="50"
                            height="50"
                            objectFit="cover"
                            alt="brand"
                        />
                    </a>
                </Link>
            </div>
            <ul className="sm:flex text-[#ccd6f6] space-x-8 items-center font-custom-mono text-[0.9rem] hidden">
                {navLinks &&
                    navLinks.map((navLink, index) => (
                        <li
                            className={`hover:text-green-400 transition-colors`}
                            key={index + "navLink"}
                        >
                            <Link href={navLink.url}>
                                <a>
                                    <span className="text-green-400 mr-1">
                                        0{index + 1}.
                                    </span>
                                    {navLink.label}
                                </a>
                            </Link>
                        </li>
                    ))}

                <button
                    className={`p-2 text-[#ccd6f6] border-green-400 border-2 hover:bg-green-400 hover:text-black transition-colors rounded ${headerStyles.navLink}`}
                >
                    Resume
                </button>
            </ul>
        </nav>
    );
}

export default Header;

// {
//     navLinks &&
//         navLinks.map((navLink, index) => (
//             <li
//                 className={`hover:text-green-400 transition-colors ${headerStyles.navLink} -translate-y-10`}
//                 key={index + "navLink"}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//             >
//                 <span className="text-green-400 mr-1">0{index + 1}.</span>
//                 <Link href={navLink.url}>{navLink.label}</Link>
//             </li>
//         ));
// }
