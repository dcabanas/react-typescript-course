import {type ModalHandle} from "./Modal.tsx";
import {type FormEvent, useRef} from "react";
import {useAppDispatch} from "../store/hooks.ts";
import {bookSession} from "../store/sessions-slice.ts";

type Field = {
    id: string,
    name: string,
    type: string,
    label: string
}

type FormProps = {
    fields: Field[]
}

function Form({fields}: FormProps) {
    const modalRef = useRef<ModalHandle>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useAppDispatch()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log('SUBMIT')
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        dispatch(bookSession(data))
        event.currentTarget?.reset()
    }

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit}>
                {fields.map(field =>
                    <div key={field.id} className="control">
                        <label htmlFor={field.id}>{field.label}</label>
                        <input {...field}/>
                    </div>
                )}
                <p className="actions">
                    <button className="button button--text-only" onClick={modalRef.current?.close}>Cancel</button>
                    <button type="submit" className="button">Book Session</button>
                </p>
            </form>
        </>
    )
}

export default Form