import React, { FC, memo } from 'react';
import './LoginForm.scss';
import { login } from '~/store/auth/actions';
import { Formik } from 'formik';

const LoginForm: FC = () => {
	return (
		<Formik
			initialValues={{ username: '', password: '' }}
			validate={(values: { username: string; password: string }) => {
				const errors: { username: string; password: string } = {
					username: '',
					password: '',
				};

				if (!values.username.trim()) {
					errors.username = 'Required field';
				}

				if (!values.password.trim()) {
					errors.password = 'Required field';
				}

				return errors;
			}}
			onSubmit={(values: any, { setSubmitting }: any) => {
				setSubmitting(false);

				const authData = {
					email: values.username,
					password: values.password,
				};

				login(authData, false);
			}}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
				<form onSubmit={handleSubmit} className="sign_form">
					<div className="form_fields">
						<div className="field_block">
							<input
								type="text"
								name="username"
								placeholder="Username"
								aria-label="Username"
								value={values.username}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<span className="error_hint">{errors.username && touched.username && errors.username}</span>
						</div>

						<div className="field_block">
							<input
								type="password"
								name="password"
								placeholder="Password"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<span className="error_hint">{errors.password && touched.password && errors.password}</span>
						</div>
					</div>

					<button className="sign_btn" type="submit">
						<span>Login</span>
					</button>
				</form>
			)}
		</Formik>
	);
};

export default memo(LoginForm);
