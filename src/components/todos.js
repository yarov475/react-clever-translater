import React from "react";
import axios from 'axios';
import LevelPicker from "./languageLevel";
import Options from "./translateOPtions";
import TextToIPA from "text-to-ipa";

/**
 * The main function gather ol features
 * @returns {JSX.Element}
 * @constructor
 */
export default function Todos() {
    const [todos, setTodos] = React.useState(['concuer the vorld']);
    return (
        <>
            <ToTranslate
                todos={todos}
            />
            <TodoList
                todos={todos}
            />
            <AddTodo
                setTodos={setTodos}
            />
            <LevelPicker/>
            <Options/>
        </>
    )


}

/**
 * This function render the number of translated words

 */
function ToTranslate(props) {
    return <div>Total Todos:{props.todos.length} </div>;
}

/**
 * render the list of translated words
 * @param {Object}todos
 * @returns {JSX.Element}
 * @constructor
 */
function TodoList({todos}) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo}>{todo}</li>
            ))}
        </ul>
    );
}

function AddTodo(props) {

    /**
     * Take the value of input
     * translate the value
     *
     */

    function handleSubmit(event) {
        event.preventDefault();
        const todo = event.target.elements.todo.value;
        // TextToIPA.lookup('word'); // > wɚˈd

        /**
         * take the value of input post it to libretranslate and apdate todo list
         */
        const translateText = () => {
            let data = {
                q: todo,
                source: "en",
                target: "ru"
            }
            axios.post(`https://libretranslate.de/translate`, data)
                .then((response) => {
                    props.setTodos(prevTodos => [...prevTodos, `${todo}  -  ${response.data.translatedText} `])
                })

        }

        translateText()


    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="todo"/>
            <button type="submit">Add Todo</button>
        </form>
    );
}
