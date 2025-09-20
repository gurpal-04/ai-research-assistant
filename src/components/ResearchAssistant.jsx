import { useState } from "react";
import { runAI } from "../utils/aiClient";

export default function ResearchAssistant() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = async (apiType) => {
    const result = await runAI(apiType, input);
    setOutput(result.text);
  };

  return (
    <div className="p-4 w-96 bg-white rounded-2xl shadow-md">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste or highlight text..."
        className="w-full h-24 border rounded p-2"
      />

      <div className="flex flex-wrap gap-2 mt-3">
        <button onClick={() => handleClick("summarizer")}>📑 Summarize</button>
        <button onClick={() => handleClick("translator")}>🌍 Translate</button>
        <button onClick={() => handleClick("proofreader")}>📝 Proofread</button>
        <button onClick={() => handleClick("rewriter")}>✏️ Rewrite</button>
        <button onClick={() => handleClick("prompt")}>💡 Ask AI</button>
      </div>

      {output && (
        <div className="mt-4 p-2 border rounded bg-gray-50">
          <strong>Result:</strong>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}
