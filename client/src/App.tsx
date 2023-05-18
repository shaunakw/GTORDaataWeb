import { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

function App() {
  const url = "ws://localhost:3001";
  const { sendMessage, lastMessage, readyState } = useWebSocket(url);
  const [messages, setMessages] = useState<MessageEvent<any>[]>([]);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessages((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage]);

  return (
    <div>
      {readyState === ReadyState.OPEN ? (
        <>
          <div>Connection open</div>
          <button onClick={() => sendMessage(JSON.stringify({ type: "test" }))}>
            Test
          </button>
          {messages.map((message, idx) => (
            <p key={idx}>{message.data}</p>
          ))}
        </>
      ) : (
        <div>Connecting...</div>
      )}
    </div>
  );
}

export default App;
