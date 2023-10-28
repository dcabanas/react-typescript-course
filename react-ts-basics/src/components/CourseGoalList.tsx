import {type FC, type ReactNode} from 'react';
import {type CourseGoalInterface} from "../App.tsx";
import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";


interface CourseGoalListProps {
    goals: CourseGoalInterface[]
    onDeleteGoal: (id: number) => void
}

const CourseGoalList: FC<CourseGoalListProps> = ({goals, onDeleteGoal}) => {

    if (goals.length == 0) {
        return (
            <InfoBox mode="hint">
                You have no course goals yet. Start adding some!
            </InfoBox>
        )
    }

    let warningBox: ReactNode
    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode="warning" severity="high">
                You're collecting a lot of goals. Don't put too much on your plate!
            </InfoBox>
        )
    }

    return (
        <>
            {warningBox}
            <ul>
                {goals.map(({id, title, description}) =>
                    <li key={id}>
                        <CourseGoal title={title} id={id} onDelete={onDeleteGoal}>
                            {description}
                        </CourseGoal>
                    </li>
                )}
            </ul>
        </>
    );
};

export default CourseGoalList;
