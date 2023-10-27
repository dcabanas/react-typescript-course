import React, {type FC, type PropsWithChildren} from "react";
import {CourseGoalInterface} from "../App.tsx";

/*interface CourseGoalProps {
    title: string,
    children: ReactNode
}*/

//type CourseGoalProps = PropsWithChildren<{title: string}>

interface CourseGoalProps extends PropsWithChildren {
    title: string
    id: number
    onDelete: (id: number) => (id: number, fn: React.Dispatch<React.SetStateAction<CourseGoalInterface[]>>) => void
}

/*
export default function CourseGoal({title, children}: CourseGoalProps) {

    return <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <button>Delete</button>
    </article>
}*/


const CourseGoal: FC<CourseGoalProps> = ({title, id, onDelete, children}) => {

    return <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
}

export default CourseGoal