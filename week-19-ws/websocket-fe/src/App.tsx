import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessages] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connected");
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      console.log("Received Message: ", message.data);
      setLatestMessages(message.data);
    };

    return () => {
      socket.close()
    }
  }, []);

  if (!socket) {
    return <div>Connecting to the Socket server...</div>;
  }

  // if(latestMessage.length > 1 ){
  //   return <div>
  //     No message received
  //   </div>
  // }

  return (
    <>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          socket.send(input);
        }}
      >
        Send
      </button>
      {latestMessage}
    </>
  );
}

export default App;
