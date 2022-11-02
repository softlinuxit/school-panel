import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Menu from './view/menu/Menu';
import { PublicRoutes } from 'router/Route';
import { Switch, Route, withRouter } from 'react-router-dom';
import {
	notificationMenuAction,
	languageMenuAction,
	authMenuAction,
	toggle3DotMenuAction,
	pagesMenuAction, mailMenuAction, dropDownMenuAction
} from './modules/settings/settingsAction';
import PublicRoute from 'router/PublicRoute';
import Message from 'view/shared/message';
import settingSelector from 'modules/settings/settingSelector';
import authSelectors from 'modules/auth/authSelector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			closeRightbarClass: "close_rightbar"
		};
	}
	componentDidMount() {
		Message.registerNotistakEnqueueSnackbar(
			toast
		);
	}
	UNSAFE_componentWillMount() {
		const ww = document.body.clientWidth;
		if (ww < 1530) {
			this.setState({ closeRightbarClass: "close_rightbar" })
		} else if (ww >= 1531) {
			this.setState({ closeRightbarClass: "" })
		};
		document.addEventListener("mousedown", this.hideLeftSidebarProxy, false);

	}
	componentWillUnmount() {
		document.removeEventListener("mousedown", this.hideLeftSidebarProxy, false);
	}
	hideLeftSidebarProxy = e => {
		const { dispatch } = this.props

		if (this.leftSidebar.contains(e.target)) {
			dispatch(authMenuAction(false))
			dispatch(pagesMenuAction(false))
			dispatch(languageMenuAction(false))
			dispatch(mailMenuAction(false))
			dispatch(notificationMenuAction(false))
			dispatch(dropDownMenuAction(false))
			dispatch(toggle3DotMenuAction(false))
			return;
		}
	};
	render() {
		if (this.props.loading) {
			return <div />;
		}
		const { closeRightbarClass } = this.state
		const { isBoxLayout, gradientColor, darkMode, darkSidebar, rtl,
			toggleLeftBar, themeColor, fontType, iconColor, currentUser } = this.props

		return (
			<div
				ref={leftSidebar => {
					this.leftSidebar = leftSidebar;
				}}
				className={`${isBoxLayout ? "boxlayout " : ""}${darkSidebar ? "sidebar_dark " : ""}${gradientColor ? "gradient " : ""}${iconColor ? "iconcolor " : ""}${darkMode ? "dark-mode " : ""}${toggleLeftBar ? "offcanvas-active " : ""} ${"right_tb_toggle "}${rtl ? "rtl " : ""}${fontType} ${closeRightbarClass} theme-${themeColor}`}>

				<Switch>
					{PublicRoutes.map(
						(route, index) => (
							<PublicRoute key={index} exact={route.exact} path={route.path} component={route.component} currentUser={currentUser} />
						)
					)}
					<Route component={Menu} />
				</Switch>
				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={true}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</div>
		);
	}
}

function select(state) {
	return {
		loading: authSelectors.selectLoadingInit(state),
		toggleLeftBar: settingSelector.selectisToggleLeftBar(state),
		currentUser: authSelectors.selectCurrentUser(state),
		toggleRightBar: settingSelector.selectisToggleRightBar(state),
		themeColor: settingSelector.selectthemeColor(state),
		darkMode: settingSelector.selectisDarkMode(state),
		darkSidebar: settingSelector.selectisDarkSidebar(state),
		iconColor: settingSelector.selectisIconColor(state),
		gradientColor: settingSelector.selectisGradientColor(state),
		isBoxLayout: settingSelector.selectisBoxLayout(state),
		rtl: settingSelector.selectisRtl(state),
		fontType: settingSelector.selectisFont(state)
	};
}


export default withRouter(connect(select)(App));