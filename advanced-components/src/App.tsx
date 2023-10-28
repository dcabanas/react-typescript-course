import {useRef} from "react";
import Form, {type FormHandle} from "./components/Form.tsx";
import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";

function App() {
    //const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<FormHandle>(null);

    function handleSave(data: unknown) {
        /*
            The usage of "as" Type Assertion should be avoided to tell Typescript
            the type of certain data in situations where is impossible for Typescript
            to infer the final type.
            Instead, a better approach is to use Guards to narrow it down (below)

            const extractedData = data as {name: string, age: string}
         */
        if (! data || typeof data !== 'object' || ! ('name' in data) || ! ('age' in data)) {
            return;
        }
        console.log(data)
        formRef.current!.clear()
    }

    return (
        <main>
            {/*<p>
                <Button el="button">A Button</Button>
            </p>
            <p>
                <Button el="anchor" href='https://google.com'>A Link</Button>
            </p>*/}
            {/*<Container>Click me</Container>*/}
            {/*<Input id="test" label="Test" ref={inputRef}/>*/}
            <Form onSave={handleSave} ref={formRef}>
                <Input id="name" label="Name" type="text"/>
                <Input id="age" label="Age" type="number"/>
                <p>
                    <Button el="button">
                        Save
                    </Button>
                </p>
            </Form>
        </main>
    )
}

export default App;
