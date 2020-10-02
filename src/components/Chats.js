import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
	return (
		<div class="chats">
			<Chat
				name="Sumit"
				message="Whats up!"
				timestamp="40 seconds ago"
				profilePic="https://media-exp1.licdn.com/dms/image/C5103AQHAuyWk3HEfEg/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=uT0UdTfW0YYGJdouE59Cb_PKK6A5v8Q3TSSM6oRIctY"
			/>
			<Chat
				name="miley"
				message="okay!"
				timestamp="3 weeks ago"
				profilePic="https://static.toiimg.com/thumb/msid-77594117,imgsize-94601,width-800,height-600,resizemode-75/77594117.jpg"
			/>
		</div>
	);
};

export default Chats;
