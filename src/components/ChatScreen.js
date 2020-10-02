import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

const ChatScreen = () => {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([
		{
			name: "Miley",
			image:
				"https://static.toiimg.com/thumb/msid-77594117,imgsize-94601,width-800,height-600,resizemode-75/77594117.jpg",
			message: "whats up",
		},
		{
			name: "Miley",
			image:
				"https://static.toiimg.com/thumb/msid-77594117,imgsize-94601,width-800,height-600,resizemode-75/77594117.jpg",
			message: "Hows it going",
		},
		{
			message: "Hello, Everything is great. How's you?",
		},
	]);

	const handleSend = (e) => {
		e.preventDefault();
		setMessages([...messages, { message: input }]);
		setInput("");
	};
	return (
		<div className="chatScreen">
			<p className="chatScreen__timestamp">
				YOU MATCHED WITH ELLEN ON 10/08/20
			</p>
			{messages.map((message) => (
				<div className="chatScreen__message">
					{message.name && (
						<Avatar
							className="chatScreen__image"
							alt={message.name}
							src={message.image}
						/>
					)}

					<p
						className={`chatScreen__Text ${
							!message.name && "chatScreen_textUser"
						} `}
					>
						{message.message}
					</p>
				</div>
			))}
			<div>
				<form className="chatScreen__input">
					<input
						onChange={(e) => setInput(e.target.value)}
						value={input}
						className="chatScreen__inputField"
						placeholder="Type a message..."
						type="text"
					/>
					<button
						type="submit"
						onClick={handleSend}
						className="chatScreen__inputButton"
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default ChatScreen;
