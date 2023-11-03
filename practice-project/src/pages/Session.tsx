import {useParams} from 'react-router-dom';

import {SESSIONS} from '../dummy-sessions.ts';
import {useRef} from "react";
import Modal, {type ModalHandle} from "../components/Modal.tsx";
import Form from "../components/Form.tsx";

const fields = [
    {
        id: "name",
        name: "name",
        type: "text",
        label: "Your Name"
    },
    {
        id: "email",
        name: "email",
        type: "email",
        label: "Your Email"
    }
]

export default function SessionPage() {
    const params = useParams<{id: string}>();
    const modalRef = useRef<ModalHandle>(null);

    const sessionId = params.id;
    const loadedSession = SESSIONS.find((session) => session.id === sessionId);

    if (! loadedSession) {
        return (
            <main id="session-page">
                <p>No session found!</p>
            </main>
        );
    }

    return (
        <main id="session-page">
            <Modal ref={modalRef} title="Book Session">
                <Form fields={fields}/>
            </Modal>
            <article>
                <header>
                    <img
                        src={loadedSession.image}
                        alt={loadedSession.title}
                    />
                    <div>
                        <h2>{loadedSession.title}</h2>
                        <time dateTime={new Date(loadedSession.date).toISOString()}>
                            {new Date(loadedSession.date).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            })}
                        </time>
                        <p>
                            <button className="button" onClick={modalRef.current?.open}>Book Session</button>
                        </p>
                    </div>
                </header>
                <p id="content">{loadedSession.description}</p>
            </article>
        </main>
    );
}
