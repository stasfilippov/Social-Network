import React from 'react'

type ProfileStatusProps = {
	status: string
}

class ProfileStatus extends React.Component<ProfileStatusProps> {
	state = {
		editMode: false,
	}

	toggleEditMode = () => {
		console.log(this)

		this.setState({
			editMode: !this.state.editMode,
		})
	}
	render() {
		return (
			<>
				{this.state.editMode ? (
					<div>
						<input
							autoFocus={true}
							onBlur={this.toggleEditMode}
							value={this.props.status}
						></input>
					</div>
				) : (
					<div>
						<span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
					</div>
				)}
			</>
		)
	}
}

export default ProfileStatus
