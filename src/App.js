import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import TinderCard from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/chat/:person">
						<Header backButton="/chat" />
						<ChatScreen />
					</Route>
					<Route path="/chat">
						<Header backButton="/" />
						<Chats />
					</Route>
					<Route path="/">
						<Header />
						<TinderCard />
						<SwipeButtons />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
