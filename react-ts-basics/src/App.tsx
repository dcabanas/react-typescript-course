import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg'
import React, {useState} from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";

export interface CourseGoalInterface {
    title: string,
    description: string,
    id: number
}

const handleAddGoal = (setGoals: React.Dispatch<React.SetStateAction<CourseGoalInterface[]>>) => {
    setGoals((prevGoals) => {
        const newGoal: CourseGoalInterface = {
            id: Math.random(),
            title: 'Learn React + TS',
            description: 'Learn it in depth!'
        }
        return [...prevGoals, newGoal]
    })
}

const handleDeleteGoal = (id: number, setGoals: React.Dispatch<React.SetStateAction<CourseGoalInterface[]>>) => {
    setGoals((prevGoals) => {
        prevGoals.filter((goal) => goal.id !== id)
    })
}

export default function App() {
    const [goals, setGoals] = useState<Array<CourseGoalInterface>>([])

    return (
        <main>
            <Header image={{src: goalsImg, alt: 'A list of goals'}}>
                <h1>Your Course Goals</h1>
            </Header>
            <button onClick={() => handleAddGoal(setGoals)}>Add Goal</button>
            <CourseGoalList goals={goals} onDelete={(id: number) => handleDeleteGoal(id, setGoals)}/>
        </main>
    );
}
