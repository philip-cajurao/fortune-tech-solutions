


const Section = ({ ref, content, id, container = false }) => {
    return (
        <section
            ref={ref}
            id={id}
            className={`mx-auto ${container ? "container" : ""}`}
        >
            {content}
        </section>
    );
}

export default Section;
