function TabContent({
    heading: { headingPlain, headingHighlighted },
    timeline,
    paragraphs,
}) {
    return (
        <div>
            <h4 className="text-2xl font-medium text-[#ccd6f6] mb-2">
                {headingPlain}{" "}
                <span className="text-green-400">{headingHighlighted}</span>
            </h4>
            <span className="timeline font-custom-mono">{timeline}</span>
            {paragraphs &&
                paragraphs.map((para, index) => (
                    <p
                        className="sm:text-lg my-3 pl-8 relative before:content-['▹'] before:text-2xl before:block before:absolute before:left-0 before:text-green-400 max-w-prose"
                        key={index}
                    >
                        {para}
                    </p>
                ))}
        </div>
    );
}

export default TabContent;
