import {type FormEvent, useRef} from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

function NewGoal({onAddGoal}: NewGoalProps) {

    const goalRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);

    /*
        Ways to extract information from a Form
        1º: useState() and two-way binding
        2ª: FormData(event.currentTarget) with name attribute on each form field (prefered)
        3ª: useRef()
     */

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        // !-> tells Typescript that for sure the variable won't be null ever
        const enteredGoal = goalRef.current!.value
        const enteredSummary = summaryRef.current!.value

        event.currentTarget.reset()
        onAddGoal(enteredGoal, enteredSummary)
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" ref={goalRef}/>
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" type="text" ref={summaryRef}/>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
}

export default NewGoal;