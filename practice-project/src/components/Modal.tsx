import {forwardRef, type ReactNode, useImperativeHandle, useState} from 'react';
import {createPortal} from "react-dom";

type ModalProps = {
    title: string
    children: ReactNode
}

export type ModalHandle = {
    open: () => void
    close: () => void
}


const Modal = forwardRef<ModalHandle, ModalProps>(function Modal({title, children}, ref) {
    const [show, setShow] = useState(true)

    console.log(show)

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                console.log('OPEN')
                setShow(true)
            },
            close: () => {
                console.log('CLOSE')
                setShow(false)
            }
        }
    })

    return (
        show &&
        createPortal(
            <div className="modal">
                <h2>{title}</h2>
                {children}
            </div>,
            document.getElementById("modal-root")!
        )
    );
})

export default Modal;
