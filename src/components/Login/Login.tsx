import s from './Login.module.css'
import { LoginReduxForm } from './LoginForm/LoginForm'

export const Login = () => {
	const onSubmit = (formData: any) => {
		console.log(formData)
	}

	return (
		<div className={s.loginWrapper}>
			<h1 className={s.loginTitle}>Sign in</h1>
			<p className={s.loginDescription}>Please enter your login and password</p>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}
