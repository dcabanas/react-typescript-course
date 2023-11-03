import {SESSIONS} from '../dummy-sessions.ts';
import {useState} from "react";
import Session from "../components/Session.tsx";

export default function SessionsPage() {

    const [sessions, _] = useState(SESSIONS)

    return (
        <main id="sessions-page">
            <header>
                <h2>Available mentoring sessions</h2>
                <p>
                    From an one-on-one introduction to React's basics all the way up to a
                    deep dive into state mechanics - we got just the right session for
                    you!
                </p>
            </header>
            <ul id="sessions-list">
                {sessions.map(({id, image, title, summary}) =>
                    <Session key={id} id={id} image={image} title={title} summary={summary}/>
                )}
            </ul>
        </main>
    );
}
