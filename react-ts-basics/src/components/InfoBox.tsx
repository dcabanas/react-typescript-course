import {type FC, type ReactNode} from "react";

type Severity = 'low' | 'medium' | 'high'

/*
    The Interfaces approach, or the Types + Union approach
    tackles the problem where severity is an optional prop
    and the case that needs it is mandatory
 */
interface InfoBoxProps {
    children: ReactNode
}

interface WarningBoxProps extends InfoBoxProps {
    mode: 'warning'
    severity: Severity
}

interface HintBoxProps extends InfoBoxProps {
    mode: 'hint'
}


const InfoBox: FC<WarningBoxProps | HintBoxProps> = (props) => {
    const {mode, children} = props

    if (mode == "hint") {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        )
    }

    const {severity} = props

    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}

export default InfoBox