import { useState } from "react";

export default function Calculator() {
    const [result, setResult] = useState(0);
    const [input, setInput] = useState("");

    const operate = (operation) => {
        const inputVal = parseFloat(input);
        if (isNaN(inputVal)) {
            alert("Please enter a valid number.");
            return;
        }

        switch (operation) {
            case "add": setResult(result + inputVal); break;
            case "subtract": setResult(result - inputVal); break;
            case "multiply": setResult(result * inputVal); break;
            case "divide":
                if (inputVal === 0) {
                    alert("Cannot divide by zero.");
                    return;
                }
                setResult(result / inputVal);
                break;
            default: return;
        }
    };

    return (
        <div className="flex flex-col items-center p-4 border rounded-lg w-80 mx-auto mt-10">
            <h2 className="text-xl font-bold">Calculator</h2>
            <h3 className="text-lg mt-2">Result: <span>{result}</span></h3>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter number"
                className="border p-2 w-full mt-2"
            />
            <div className="mt-4 space-x-2">
                <button onClick={() => operate("add")} className="bg-blue-500 text-white p-2 rounded">Add</button>
                <button onClick={() => operate("subtract")} className="bg-red-500 text-white p-2 rounded">Subtract</button>
                <button onClick={() => operate("multiply")} className="bg-green-500 text-white p-2 rounded">Multiply</button>
                <button onClick={() => operate("divide")} className="bg-yellow-500 text-white p-2 rounded">Divide</button>
            </div>
            <div className="mt-4 space-x-2">
                <button onClick={() => setInput("")} className="bg-gray-400 text-white p-2 rounded">Reset Input</button>
                <button onClick={() => setResult(0)} className="bg-gray-700 text-white p-2 rounded">Reset Result</button>
            </div>
        </div>
    );
}
