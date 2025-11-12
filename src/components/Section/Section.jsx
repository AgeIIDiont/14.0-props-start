export default function Section({ ...prop}) {
    return (
        <section {...prop}>
            <h2>{prop.title}</h2>
            {prop.children}
        </section>
    );
}


