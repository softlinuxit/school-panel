import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import selectors from 'modules/auth/authSelector';
import Swal from 'sweetalert2';
import { withSwalInstance } from 'sweetalert2-react';
import actions from 'modules/auth/authActions';
import * as yup from 'yup';
import { Formik, Field } from 'formik';


const SweetAlert = withSwalInstance(Swal);

const Login = () => {

	let schema = React.useMemo(() => yup.object().shape({
		username: yup.string().required(),
		password: yup.string().required(),
		rememberMe: yup.boolean(),
	}), []);

	const [message, setMessage] = React.useState('');
	const [showDialog, setShowDialog] = React.useState(false);

	const [initialValues] = React.useState({
		username: '',
		password: '',
		rememberMe: true,
	});

	const dispatch = useDispatch();

	const successResponse = useSelector(selectors.selectCurrentUser);
	const errorResponse = useSelector(selectors.selectErrorMessage);

	React.useEffect(() => {
		if (errorResponse) {
			setMessage(errorResponse)
			setShowDialog(true)
		}
		if (successResponse) {
			setMessage("Login Successful")
			setShowDialog(true)
		}
		if (dispatch) {
			dispatch(actions.doClearErrorMessage());
		}
	}, [dispatch, successResponse, errorResponse]);

	const onSubmit = (values) => {
		dispatch(
			actions.doSigninWithEmailAndPassword(
				values.username,
				values.password,
				values.rememberMe
			),
		);
	};

	return (
		<div className="auth option2">
			<div className="auth_left">
				<div className="card">
					<div className="card-body">
						<div className="text-center">
							<Link className="header-brand" to="/">
								<img className="w80" src={`assets/images/graduation.png`} alt="" />
							</Link>
							<div className="card-title mt-3">Login to your school</div>
						</div>
						<Formik
							initialValues={initialValues}
							validationSchema={schema}
							onSubmit={onSubmit}>
							{(form) => {
								return (
									<form onSubmit={form.handleSubmit} >
										<div className="form-group" >
											<Field type="text" name="username" className="form-control" placeholder="Enter username" />
										</div>
										<div className="form-group">
											<Field type="password" name="password" className="form-control" placeholder="Enter Password" />
										</div>
										<div className="form-group">
											<label className="custom-control custom-checkbox">
												<Field type="checkbox" name="rememberMe" className="custom-control-input" />
												<span className="custom-control-label">Remember me</span>
											</label>
										</div>
										<div className="text-center">
											<input className="btn btn-primary btn-block" type="submit" value="Login" />
										</div>
									</form>
								);
							}}
						</Formik>
					</div>
				</div>
			</div>
			<SweetAlert
				type={message === 'Login Successful' ? 'success' : 'error'}
				show={showDialog}
				text={message}
				onConfirm={() => {
					setShowDialog(false)
				}}
			/>
		</div>
	);
}

export default Login;
