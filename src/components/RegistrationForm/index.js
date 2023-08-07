import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderLastNameField = () => {
    const {lastName, showLastNameError} = this.state
    const clsName = showLastNameError ? 'name-input error' : 'name-input'

    return (
      <div className="inputs-cons">
        <label className="label-name" htmlFor="lname">
          LAST NAME
        </label>

        <input
          type="text"
          id="lname"
          className={clsName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          placeholder="Last name"
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  renderFirstNameField = () => {
    const {firstName, showFirstNameError} = this.state
    const clsName = showFirstNameError ? 'name-input error' : 'name-input'

    return (
      <div className="inputs-cons">
        <label className="label-name" htmlFor="fname">
          FIRST NAME
        </label>

        <input
          type="text"
          id="fname"
          className={clsName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          placeholder="First name"
        />
      </div>
    )
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()

    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state

    return (
      <form className="form-con" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="error-msg">Required</p>}
        {this.renderLastNameField()}
        {showLastNameError && <p className="error-msg">Required</p>}

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(preState => ({
      isFormSubmitted: !preState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderSubmission = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img "
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        {isFormSubmitted
          ? this.renderSubmission()
          : this.renderRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm
