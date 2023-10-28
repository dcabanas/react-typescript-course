import {type FC, type PropsWithChildren} from "react";

/*interface CourseGoalProps {
    title: string,
    children: ReactNode
}*/

//type CourseGoalProps = PropsWithChildren<{title: string}>

interface CourseGoalProps extends PropsWithChildren {
    title: string
    id: number
    onDelete: (id: number) => void
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