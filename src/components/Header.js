import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import logo from "../tinder-logo.png";

function Header({ backButton }) {
	const history = useHistory();
	return (
		<div className="header">
			{backButton ? (
				<IconButton onClick={() => history.replace(backButton)}>
					<ArrowBackIosIcon fontSize="large" className="header__icon" />
				</IconButton>
			) : (
				<IconButton>
					<PersonIcon className="header__icon" fontSize="large" />
				</IconButton>
			)}

			<Link to="/">
				<img className="header__logo" src={logo} alt="tinder logo" />
			</Link>
			<Link className="" to="/chat">
				<IconButton>
					<ForumIcon className="header__icon" fontSize="large" />
				</IconButton>
			</Link>
		</div>
	);
}

export default Header;
