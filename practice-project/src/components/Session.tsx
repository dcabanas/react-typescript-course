import {NavLink} from "react-router-dom";

type SessionProps = {
    id: string,
    image: string,
    title: string,
    summary: string,
}

function Session({id, image, title, summary}: SessionProps) {
    return (
        <article className="session-item">
            <img src={image} alt={title}/>
            <div className="session-data">
                <div>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                </div>
                <p className="actions">
                    <NavLink className="button" to={`/sessions/${id}`}>Learn More</NavLink>
                </p>
            </div>
        </article>
    );
}

export default Session;