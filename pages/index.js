import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import ProjectBigCard from "../components/ProjectBigCard";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import SideLinks from "../components/SideLinks";
import TabContent from "../components/TabContent";
import dp from "../public/saisameer.jpg";

export default function Home() {
    const [activeButton, setActiveButton] = useState(0);

    let projects = [
        {
            techstack: ["VS Code", "Atom", "Javascript", "React", "Python"],
            description:
                "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
            title: "Halycon Theme",
            image: {
                imageURL:
                    "https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d2194/halcyon.png",
                width: 700,
                height: 438,
            },
            links: {
                github: "https://github.com",
                live: "https://sailolla.netlify.app",
            },
        },
        {
            reverse: true,
            techstack: [
                "React",
                "Styled Components",
                "Express",
                "Spotify API",
                "Heroku",
            ],
            description:
                "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
            title: "Spotify Profile",
            image: {
                imageURL:
                    "https://brittanychiang.com/static/3936989a99991beb6d649d7a7039df60/d2194/demo.png",
                width: 700,
                height: 438,
            },
            links: {
                github: "https://github.com",
                live: "https://sailolla.netlify.app",
            },
        },
    ];

    let educationTabs = [
        {
            tabTitle: "OneShield",
            tabContents: {
                heading: {
                    headingPlain: "Student Intern",
                    headingHighlighted: "@ OneShield",
                },
                timeline: "August 2022",
                paragraphs: [
                    "Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern",
                    " Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript",
                ],
            },
        },
        {
            tabTitle: "Engineering",
            tabContents: {
                heading: {
                    headingPlain: "Bachelor of Engineering (Computer)",
                    headingHighlighted: "@ GEC",
                },
                timeline: "June 2019 - August 2023",
                paragraphs: [
                    " Developed and shipped highly interactive web applications for Apple Music using Ember.js",
                    "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
                    "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
                    "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
                ],
            },
        },
        {
            tabTitle: "Higher Secondary",
            tabContents: {
                heading: {
                    headingPlain: "PCM Science",
                    headingHighlighted: "@ Scout",
                },
                timeline: "January - June 2017",
                paragraphs: [
                    "Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern",
                    " Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript",
                ],
            },
        },
    ];

    return (
        <div className="px-[25px] sm:px-[50px] md:px-[100px] xl:px-[150px] mx-auto ">
            <Head>
                <title>Sai Lolla - Home</title>
                <meta
                    name="description"
                    content="Home - Sai Lolla's Portfolio"
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/logo.png" />
            </Head>

            <Header />
            <SideLinks />

            <section className="max-w-[1000px] mx-auto min-h-screen flex flex-col items-start justify-center md:py-20 py-[100px]">
                <p className="md:text-lg font-custom-mono text-green-400 sm:my-6 my-5">
                    Hi, my name is
                </p>
                <h1 className="responsiveHeading2 text-[#ccd6f6] font-bold leading-[1.1] mb-2">
                    Sai Lolla.
                </h1>
                <h2 className="responsiveHeading2 text-[#8892b0] font-bold leading-[0.9] mt-[10px]">
                    I build things for the web.
                </h2>
                <p className="mt-5 sm:text-xl text-[#8892b0] max-w-[540px]">
                    I’m a software engineer specializing in building (and
                    occasionally designing) exceptional digital experiences.
                    Currently, I’m focused on building accessible,
                    human-centered products at Upstatement.
                </p>
                <button className="py-5 px-7 leading-none md:text-lg my-4 mt-12 text-[#ccd6f6] border-green-400 border hover:bg-green-400 hover:text-black transition-colors rounded font-custom-mono">
                    Check out my projects!
                </button>
            </section>

            <section
                className="max-w-[900px] mx-auto min-h-screen md:py-20 py-[100px]"
                id="about"
            >
                <SectionHeader highlight="01." title="About Me" />
                <div className="grid grid-cols-5 gap-12">
                    <div className="about__text md:col-span-3 col-span-5 sm:text-xl text-[#8892b0]">
                        <p className="mb-4">
                            Hello! My name is Brittany and I enjoy creating
                            things that live on the internet. My interest in web
                            development started back in 2012 when I decided to
                            try editing custom Tumblr themes — turns out hacking
                            together a custom reblog button taught me a lot
                            about HTML & CSS!
                        </p>
                        <p className="my-4">
                            Fast-forward to today, and I’ve had the privilege of
                            working at an advertising agency, a start-up, a huge
                            corporation, and a student-led design studio. My
                            main focus these days is building accessible,
                            inclusive products and digital experiences at
                            Upstatement for a variety of clients.
                        </p>
                        <p className="my-4">
                            I also recently launched a course that covers
                            everything you need to build a web app with the
                            Spotify API using Node & React.
                        </p>
                        <ul className="skills-list grid grid-cols-2 mt-4">
                            <li className="relative before:content-['▹'] before:block before:absolute before:left-0 before:text-green-400 pl-5 text-sm font-custom-mono">
                                JavaScript (ES6+)
                            </li>
                            <li className="relative before:content-['▹'] before:block before:absolute before:left-0 before:text-green-400 pl-5 text-sm font-custom-mono">
                                TypeScript
                            </li>
                            <li className="relative before:content-['▹'] before:block before:absolute before:left-0 before:text-green-400 pl-5 text-sm font-custom-mono">
                                React
                            </li>
                            <li className="relative before:content-['▹'] before:block before:absolute before:left-0 before:text-green-400 pl-5 text-sm font-custom-mono">
                                Eleventy
                            </li>
                            <li className="relative before:content-['▹'] before:block before:absolute before:left-0 before:text-green-400 pl-5 text-sm font-custom-mono">
                                Node.js
                            </li>
                            <li className="relative before:content-['▹'] before:block before:absolute before:left-0 before:text-green-400 pl-5 text-sm font-custom-mono">
                                WordPress
                            </li>
                        </ul>
                    </div>
                    <div className="about__img md:col-span-2 col-span-5">
                        <div className="flex items-center justify-center">
                            <div className="max-w-[280px] z-10 w-full relative after:absolute after:border-2 after:border-green-400   after:rounded after:w-full after:h-full after:left-5 after:top-5 hover:after:left-4 hover:after:top-4 after:transition-all after:delay-150 before:hover:bg-transparent before:duration-75 group after:-z-10 before:absolute before:w-full before:h-full before:bg-[#00ffc8]/20 before:z-30 before:inset-0">
                                <Image
                                    src={dp}
                                    layout="responsive"
                                    className="rounded overflow-hidden grayscale group-hover:grayscale-0 transition-all delay-75"
                                    alt="dp"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="max-w-[750px] mx-auto md:py-20 py-[100px] min-h-screen text-[#8892b0] flex items-center justify-center"
                id="eduandexp"
            >
                <div className="centered-content max-w-full">
                    <SectionHeader
                        highlight="02."
                        title="My Education"
                        centered={true}
                    />

                    <div className="flex sm:flex-row flex-col justify-center space-x-4">
                        <div className="tabs font-custom-mono relative flex sm:flex-col flex-row sm:overflow-visible overflow-auto pb-4 sm:pb-0 text-base">
                            <div
                                className="sidestick translate-y-0 bg-green-400 p-[1px] h-[var(--tab-height)] absolute top-0 left-0 transition-transform duration-300 sm:block hidden"
                                style={{
                                    transform: `translateY(${
                                        activeButton * 50
                                    }px)`,
                                }}
                            ></div>

                            <div
                                className="bottomstick translate-x-0 border-b-2 border-b-green-400 w-[var(--tab-width)] h-[var(--tab-height)] absolute top-0 left-0 transition-transform duration-300 sm:hidden block"
                                style={{
                                    transform: `translateX(${
                                        activeButton * 20
                                    }ch)`,
                                }}
                            ></div>

                            {educationTabs &&
                                educationTabs.map((educationTab, index) => (
                                    <button
                                        className="px-6 whitespace-nowrap h-[var(--tab-height)] flex items-center focus:bg-white/5 hover:bg-white/5 w-[20ch] sm:text-left text-center shrink-0"
                                        key={index + "eduTab"}
                                        onClick={() => setActiveButton(index)}
                                    >
                                        {educationTab.tabTitle}
                                    </button>
                                ))}
                        </div>
                        <div className="content">
                            {educationTabs &&
                                educationTabs.map((educationTab, index) => (
                                    <div
                                        className={`panel-${index} relative ${
                                            activeButton != index && "hidden"
                                        } sm:min-h-[450px] sm:py-0 py-8 `}
                                        key={index + "eduTab2"}
                                    >
                                        <TabContent
                                            {...educationTab.tabContents}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="max-w-[1000px] mx-auto md:py-20 py-[100px] min-h-screen text-[#8892b0]"
                id="projects"
            >
                <SectionHeader highlight="03." title="Some Things I’ve Built" />

                {projects &&
                    projects.map((project, index) => (
                        <ProjectBigCard
                            key={index + "projIndex"}
                            {...project}
                        />
                    ))}

                <h4 className="text-3xl font-semibold text-[#ccd6f6] mb-10 mt-4 text-center">
                    Other Noteworthy Projects
                </h4>

                <div className="smallProjCards grid grid-cols-6 gap-4">
                    <div className="lg:col-span-2 md:col-span-3 col-span-6 mx-auto">
                        <ProjectCard
                            title="Blog App"
                            description="A web app for visualizing personalized Spotify data.
                        View your top artists, top tracks."
                            techstack={["VS Code", "Atom", "Github"]}
                            links={{
                                github: "https://saigithub.com",
                                live: "https://mylink.com",
                            }}
                        />
                    </div>
                    <div className="lg:col-span-2 md:col-span-3 col-span-6 mx-auto">
                        <ProjectCard
                            title="Blog App"
                            description="A web app for visualizing personalized Spotify data.
                        View your top artists, top tracks."
                            techstack={["VS Code", "Atom", "Github"]}
                            links={{
                                github: "https://saigithub.com",
                                live: "https://mylink.com",
                            }}
                        />
                    </div>
                    <div className="lg:col-span-2 md:col-span-3 col-span-6 mx-auto">
                        <ProjectCard
                            title="Blog App"
                            description="A web app for visualizing personalized Spotify data.
                        View your top artists, top tracks."
                            techstack={["VS Code", "Atom", "Github"]}
                            links={{
                                github: "https://saigithub.com",
                                live: "https://mylink.com",
                            }}
                        />
                    </div>
                    <div className="lg:col-span-2 md:col-span-3 col-span-6 mx-auto">
                        <ProjectCard
                            title="Blog App"
                            description="A web app for visualizing personalized Spotify data.
                        View your top artists, top tracks."
                            techstack={["VS Code", "Atom", "Github"]}
                            links={{
                                github: "https://saigithub.com",
                                live: "https://mylink.com",
                            }}
                        />
                    </div>
                    <div className="lg:col-span-2 md:col-span-3 col-span-6 mx-auto">
                        <ProjectCard
                            title="Blog App"
                            description="A web app for visualizing personalized Spotify data.
                        View your top artists, top tracks."
                            techstack={["VS Code", "Atom", "Github"]}
                            links={{
                                github: "https://saigithub.com",
                                live: "https://mylink.com",
                            }}
                        />
                    </div>
                    <div className="lg:col-span-2 md:col-span-3 col-span-6 mx-auto">
                        <ProjectCard
                            title="Blog App"
                            description="A web app for visualizing personalized Spotify data.
                        View your top artists, top tracks."
                            techstack={["VS Code", "Atom", "Github"]}
                            links={{
                                github: "https://saigithub.com",
                                live: "https://mylink.com",
                            }}
                        />
                    </div>
                    <div className="lg:col-span-2 md:col-span-3 col-span-6 mx-auto">
                        <ProjectCard
                            title="Blog App"
                            description="A web app for visualizing personalized Spotify data.
                        View your top artists, top tracks."
                            techstack={["VS Code", "Atom", "Github"]}
                            links={{
                                github: "https://saigithub.com",
                                live: "https://mylink.com",
                            }}
                        />
                    </div>
                </div>
            </section>

            <section
                className="max-w-[1000px] mx-auto md:py-20 py-[100px] min-h-screen text-[#8892b0] grid items-center"
                id="contact"
            >
                <div className="centered_content text-center">
                    <p className="font-custom-mono text-green-400 ">
                        04. What&apos;s next?
                    </p>
                    <h4 className="sm:text-6xl text-5xl text-[#ccd6f6] font-bold leading-tight">
                        Get in Touch
                    </h4>
                    <p className="my-5 sm:text-xl text-slate-400 max-w-prose mx-auto">
                        I’m a software engineer specializing in building (and
                        occasionally designing) exceptional digital experiences.
                        Currently, I’m focused on building accessible,
                        human-centered products at Upstatement.
                    </p>
                    <a
                        href="mailto:saisameer.lolla@gmail.com"
                        className="inline-block p-4 text-lg my-4 text-[#ccd6f6] border-green-400 border-2  hover:bg-green-400 hover:text-black transition-colors rounded font-custom-mono"
                    >
                        Say hello!
                    </a>
                </div>
            </section>

            <footer>
                <p className="font-custom-mono text-center mb-8 text-[#ccd6f6] text-sm max-w-[50ch] mx-auto">
                    Built by <span className="text-green-400">Sai Lolla</span>{" "}
                    with support from{" "}
                    <span className="text-green-400">Vedant Malkarnekar</span>{" "}
                    and <span className="text-green-400">Afaan Shaikh</span>
                </p>
            </footer>
        </div>
    );
}
