import {type ComponentPropsWithoutRef, type FormEvent, forwardRef, useImperativeHandle, useRef} from "react";

export type FormHandle = {
    clear: () => void
}

interface FormProps extends ComponentPropsWithoutRef<'form'> {
    onSave: (vale: unknown) => void
}

const Form = forwardRef<FormHandle, FormProps>(({onSave, children, ...otherProps}, ref) => {
    const formRef = useRef<HTMLFormElement>(null)

    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log('CLEARING')
                formRef.current!.reset()
            }
        }
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData)
        onSave(data)
        formRef.current!.reset()
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={formRef}>
            {children}
        </form>
    )
})

export default Form