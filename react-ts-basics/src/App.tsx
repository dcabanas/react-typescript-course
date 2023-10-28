import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg'
import {useState} from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export interface CourseGoalInterface {
    title: string,
    description: string,
    id: number
}

export default function App() {
    const [goals, setGoals] = useState<Array<CourseGoalInterface>>([])

    const handleAddGoal = (goal: string, summary: string) => {
        setGoals((prevGoals) => {
            const newGoal: CourseGoalInterface = {
                id: Math.random(),
                title: goal,
                description: summary
            }
            return [...prevGoals, newGoal]
        })
    }

    const handleDeleteGoal = (id: number) => {
        setGoals(prevGoals =>
            prevGoals.filter((goal) => goal.id !== id)
        )
    }


    return (
        <main>
            <Header image={{src: goalsImg, alt: 'A list of goals'}}>
                <h1>Your Course Goals</h1>
            </Header>
            <NewGoal onAddGoal={handleAddGoal}/>
            <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
        </main>
    );
}
