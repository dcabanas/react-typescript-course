import {type ModalHandle} from "./Modal.tsx";
import {type FormEvent, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {bookSession, type SessionItem} from "../store/sessions-slice.ts";

type Field = {
    id: string,
    name: string,
    type: string,
    label: string
}

type FormProps = {
    fields: Field[]
    loadedSession: SessionItem
}

function Form({fields, loadedSession}: FormProps) {
    const modalRef = useRef<ModalHandle>(null);
    const dispatch = useAppDispatch()
    const bookedSessions = useAppSelector(state => state.sessions.items)

    const alreadyBooked = bookedSessions.find(bs => bs.id == loadedSession.id) != undefined

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log('SUBMIT')
        event.preventDefault()

        dispatch(bookSession(loadedSession))
        event.currentTarget?.reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {fields.map(field =>
                    <div key={field.id} className="control">
                        <label htmlFor={field.id}>{field.label}</label>
                        <input {...field}/>
                    </div>
                )}
                <p className="actions">
                    <button type="button" className="button button--text-only"
                            onClick={modalRef.current?.close}>Cancel
                    </button>
                    {! alreadyBooked && <button type="submit" className="button">Book Session</button>}
                </p>
            </form>
        </>
    )
}

export default Form