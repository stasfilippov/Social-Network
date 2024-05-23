import { PropsWithChildren } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import s from '../Login.module.css'

const LoginForm = (
	props: PropsWithChildren<InjectedFormProps<{}, {}, string>>
) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.loginForm} action=''>
			<Field name='login' placeholder='Login' component={'input'} />
			<Field name='password' placeholder='Password' component={'input'} />
			<div>
				<Field name='rememberMe' component={'input'} type='checkbox' />
				<span>Remember me</span>
			</div>
			<a href='#'>Forgot password?</a>
			<button type='submit'>Sign in</button>
		</form>
	)
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
