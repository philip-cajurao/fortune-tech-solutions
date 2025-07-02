
const Section = ({ ref = null, content, id, container = false }) => {
    return (
        <section
            ref={ref}
            id={`section${id}`}
            className={`mx-auto py-16 ${container ? "container" : ""}`}
        >
            {content}
        </section>
    );
}

export default Section;
