import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiFolder, FiGithub } from "react-icons/fi";

function ProjectCard({ title, techstack, description, links = {} }) {
    return (
        <div className="cursor-pointer">
            <Link href="#">
                <div className="text-lg my-3 bg-[#112240] rounded p-6 hover:-translate-y-2 transition-transform md:max-w-sm max-w-md group leading-[1.3]">
                    <div className="links flex items-center justify-between mb-6">
                        <div className="text-5xl text-green-400">
                            <FiFolder />
                        </div>
                        {links && (
                            <div className="flex items-center space-x-4">
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
                    <h5 className="text-2xl font-semibold text-[#ccd6f6] my-4 group-hover:text-green-400">
                        {title}
                    </h5>
                    <p className="max-w-prose bg-[#112240] rounded">
                        {description}
                    </p>
                    <ul
                        className={`project__techstack flex flex-wrap gap-4 font-custom-mono text-sm mt-4`}
                    >
                        {techstack.map((tech, index) => (
                            <li key={index + "projCard"}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </Link>
        </div>
    );
}

export default ProjectCard;
