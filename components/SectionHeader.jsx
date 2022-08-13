function SectionHeader({ highlight, title, centered = false }) {
    return (
        <h3
            className={`section__head text-3xl font-semibold text-[#ccd6f6] flex items-center space-x-4 mb-10 mt-4 max-w-4xl ${
                centered && "mx-auto"
            }`}
        >
            <span>
                <span className="text-green-400 mr-1 font-custom-mono font-normal">
                    {highlight}
                </span>{" "}
                {title}
            </span>
            <hr className="grow border border-slate-600 bg-slate-600 " />
        </h3>
    );
}

export default SectionHeader;
