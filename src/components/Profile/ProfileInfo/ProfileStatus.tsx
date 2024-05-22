import React, { ChangeEvent } from 'react'

type ProfileStatusProps = {
	status: string
	updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusProps> {
	state = {
		editMode: false,
		status: this.props.status,
	}

	toggleEditMode = () => {
		this.setState({
			editMode: !this.state.editMode,
		})
		this.props.updateStatus(this.state.status)
	}

	onStatusChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			status: event.currentTarget.value,
		})
	}

	componentDidUpdate(
		prevProps: Readonly<ProfileStatusProps>,
		prevState: Readonly<{}>,
		snapshot?: any
	): void {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status,
			})
		}
	}

	render() {
		return (
			<>
				{this.state.editMode ? (
					<div>
						<input
							onChange={this.onStatusChangeHandler}
							autoFocus={true}
							onBlur={this.toggleEditMode}
							value={this.state.status}
						></input>
					</div>
				) : (
					<div>
						<span onDoubleClick={this.toggleEditMode}>
							{this.props.status || 'No status'}
						</span>
					</div>
				)}
			</>
		)
	}
}

export default ProfileStatus
