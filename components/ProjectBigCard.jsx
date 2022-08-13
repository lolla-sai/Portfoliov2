import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";

function ProjectBigCard({
    image: { imageURL, width, height, lquip = "" },
    title,
    description,
    techstack,
    links = {},
    reverse = false,
}) {
    return (
        <div className="grid grid-cols-12 grid-rows-1 items-center md:mb-24 mb-8">
            <div
                className={`${
                    reverse
                        ? "md:col-start-6 md:col-end-13"
                        : "md:col-start-1 md:col-end-8"
                } col-start-1 col-end-13 row-start-1 row-end-1 -------- z-10 relative md:before:hover:bg-transparent before:md:duration-75 group md:before:absolute md:before:w-full md:before:h-full md:before:bg-[#00ffc8]/20 md:before:z-30 md:before:inset-0 h-full w-full md:h-auto brightness-50 md:brightness-100`}
            >
                <Image
                    src={imageURL}
                    layout="fill"
                    className="rounded overflow-hidden md:grayscale md:group-hover:grayscale-0 md:transition-all md:delay-75 block md:hidden"
                    objectFit="cover"
                    alt="ProjectSnap"
                />
                <Image
                    src={imageURL}
                    width={width}
                    height={height}
                    layout="responsive"
                    className="rounded overflow-hidden md:grayscale md:group-hover:grayscale-0 md:transition-all md:delay-75 hidden md:block"
                    objectFit="cover"
                    alt="ProjectSnap"
                />
            </div>
            <div
                className={`${
                    reverse
                        ? "md:col-start-1 md:col-end-7 md:text-left"
                        : "md:col-start-7 md:col-end-13 md:text-right"
                } text-center sm:text-left sm:p-12 p-6 md:p-0 col-start-1 col-end-13 row-start-1 row-end-1 z-30`}
            >
                <p className="font-custom-mono text-green-400">
                    Featured Project
                </p>
                <h3 className="text-3xl font-semibold text-[#ccd6f6] mb-2">
                    {title}
                </h3>
                <p className="sm:text-lg text-[15px] md:my-6 max-w-prose md:bg-[#112240] rounded md:p-6 md:shadow md:hover:shadow-xl">
                    {description}
                </p>
                {techstack && (
                    <ul
                        className={`project__techstack mt-4 flex flex-wrap gap-4 font-custom-mono text-sm justify-center sm:justify-start md:justify-start ${
                            !reverse && "md:justify-end"
                        }`}
                    >
                        {techstack.map((tech, index) => (
                            <li key={index + "big"}>{tech}</li>
                        ))}
                    </ul>
                )}
                {links && (
                    <div
                        className={`project__links flex items-center space-x-4 mt-6 justify-center sm:justify-start md:justify-start ${
                            !reverse && " md:justify-end"
                        }`}
                    >
                        {links.github && (
                            <Link href={links.github}>
                                <a className="text-xl text-white hover:text-green-400">
                                    <FiGithub />
                                </a>
                            </Link>
                        )}
                        {links.live && (
                            <Link href={links.live}>
                                <a className="text-xl text-white hover:text-green-400">
                                    <BsBoxArrowUpRight />
                                </a>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectBigCard;
