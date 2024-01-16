import { useState } from "react";

function NewTodoForm({ addTodo }) {
    const INITIAL_STATE = {
        text: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    // Form data change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">
                Text:
                <textarea
                    type="text"
                    name="text"
                    id="text"
                    value={formData.text}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default NewTodoForm;