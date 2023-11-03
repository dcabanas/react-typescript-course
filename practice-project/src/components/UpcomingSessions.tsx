import {useAppDispatch} from "../store/hooks.ts";
import {cancelSession} from "../store/sessions-slice.ts";

export type BookedSession = {
    id: string
    title: string
    summary: string
}

type UpcomingSessionsProps = {
    bookedSessions: BookedSession[]
}

function UpcomingSessions({bookedSessions}: UpcomingSessionsProps) {

    const dispatch = useAppDispatch()

    const handleSessionCancel = (id: string) => {
        dispatch(cancelSession(id))
    }

    return (
        <ul>
            {bookedSessions.length == 0 ? 'No upcoming sessions.'
                :
                bookedSessions.map(({id, title, summary}) =>
                    <li key={id}>
                        <article className="upcoming-session">
                            <div>
                                <h3>{title}</h3>
                                <p>{summary}</p>
                            </div>
                            <p className="actions">
                                <button className="button button--text-only"
                                        onClick={() => handleSessionCancel(id)}>Cancel
                                </button>
                            </p>
                        </article>
                    </li>
                )}
        </ul>
    );
}

export default UpcomingSessions;