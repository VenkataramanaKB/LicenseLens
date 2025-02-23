import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import { fetchData } from "../utils/api";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      console.log("Fetching data for:", input);

      const data = await fetchData(input);

      // Save JSON to a text file
      try {
        const textContent = `Software: ${
          data.software || "Unknown"
        }\nLicense: ${data.license || "Not specified"}\nExplanation: ${
          data.explanation || "No details available."
        }`;
        const blob = new Blob([textContent], { type: "text/plain" });
        saveAs(blob, "api-response.txt");
        console.log("File saved successfully as a text file.");
      } catch (fileError) {
        console.error("File saving error:", fileError);
      }

      console.log("API Response:", data); // Log full response

      if (!data.software || !data.license || !data.explanation) {
        console.error("Missing expected fields in API response:", data);
      }

      const responseText = `**Software:** ${
        data.software || "Unknown"
      }\n\n**License:** ${
        data.license || "Not specified"
      }\n\n**Explanation:** ${data.explanation || "No details available."}`;

      setMessages([...newMessages, { text: responseText, sender: "bot" }]);
    } catch (error) {
      console.error("API Error:", error.message);
      setMessages([
        ...newMessages,
        { text: "Error fetching data", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden border border-primaryGreen">
      <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-4 font-bold text-center text-lg shadow-md">
        Software License Chat
      </div>
      <div className="h-80 p-4 overflow-y-auto flex flex-col space-y-3 bg-gray-100">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-3 rounded-lg text-sm max-w-xs break-words shadow-md ${
              msg.sender === "user"
                ? "bg-green-500 text-white self-end"
                : "bg-white text-gray-800 self-start border"
            }`}
          >
            {msg.text.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </motion.div>
        ))}
        {loading && (
          <Loader2 className="animate-spin text-gray-500 self-center" />
        )}
      </div>
      <div className="p-3 border-t flex items-center bg-gray-50">
        <input
          type="text"
          className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md px-4"
          placeholder="Type a software name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-green-500 text-white p-3 rounded-full ml-2 shadow-lg hover:bg-green-600 hover:scale-105 transition-transform"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
