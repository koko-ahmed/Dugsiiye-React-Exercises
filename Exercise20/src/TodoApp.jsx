
import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: input.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-violet-100 flex justify-center items-start px-4 py-10">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-6 sm:p-10">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          My Todo List
        </h1>

        {/* Input Section */}
        <div className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="Add a new todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTodo();
            }}
            className="flex-1 min-w-0 border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
          />

          <button
            onClick={addTodo}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl cursor-pointer transition"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="bg-gray-50 rounded-xl p-4 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-4 min-w-0">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 accent-blue-500 cursor-pointer"
                />

                <span
                  className={`break-words ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </span>
              </div>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-600 hover:text-red-800 cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default TodoApp;
