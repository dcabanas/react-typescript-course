import {type FC} from 'react';
import {type CourseGoalInterface} from "../App.tsx";
import CourseGoal from "./CourseGoal.tsx";


interface CourseGoalListProps {
    goals: CourseGoalInterface[]
    onDeleteGoal: (id: number) => void
}

const CourseGoalList: FC<CourseGoalListProps> = ({goals, onDeleteGoal}) => {
    return (
        <ul>
            {goals.map(({id, title, description}) =>
                <li key={id}>
                    <CourseGoal title={title} id={id} onDelete={onDeleteGoal}>
                        {description}
                    </CourseGoal>
                </li>
            )}
        </ul>
    );
};

export default CourseGoalList;
