import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actions from 'modules/auth/authActions';

const AuthServerError = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (dispatch) {
			dispatch(actions.doSignout());
		}
	}, [dispatch]);

	return (
		<div className="auth option2">
			<div className="auth_left">
				<div className="card">
					<div className="card-body text-center">
						<div className="display-3 text-muted mb-5"><i className="si si-exclamation"></i> 403</div>
						<h1 className="h3 mb-3">Oops.. You just found an error page..</h1>
						<p className="h6 text-muted font-weight-normal mb-3">We are sorry but your request contains bad syntax and cannot be fulfilled&hellip;</p>
						<Link className="btn btn-primary" to="/login">
							<i className="fe fe-arrow-left mr-2"></i>Go back
							</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AuthServerError;
