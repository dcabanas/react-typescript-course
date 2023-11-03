import {NavLink} from "react-router-dom";
import {useRef} from "react";
import Modal, {type ModalHandle} from "./Modal.tsx";
import UpcomingSessions from "./UpcomingSessions.tsx";
import {useAppSelector} from "../store/hooks.ts";

function Header() {
    const modalRef = useRef<ModalHandle>(null);
    const bookedSessions = useAppSelector()

    return (
        <header id="main-header">
            <h1>ReactMentoring</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Our Mission</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sessions">Browse Sessions</NavLink>
                    </li>
                    <li>
                        <button className="button" onClick={modalRef.current?.open}>Upcoming Sessions</button>
                    </li>
                </ul>
            </nav>
            <Modal ref={modalRef} title="Upcoming Sessions">
                <UpcomingSessions bookedSessions={bookedSessions}/>
                <button className="button" onClick={modalRef.current?.close}>
                    Close
                </button>
            </Modal>
        </header>
    );
}

export default Header;