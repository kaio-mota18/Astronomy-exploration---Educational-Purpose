import React, { Fragment, useState } from 'react'
import './style.css'

function Form() {
  // Função para declarar os estados que serão mudados com as informações recebidas pelo formulário
  const [form, setForm] = useState({
    name: '',
    age: '',
    city: '',
    email: ''
  })

  function handleChange(event) {
    event.preventDefault()
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  // Função que será utlizada para checar se o formulário foi enviado
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  // Função para cehcar se o formulário foi validado
  const [valid, setValid] = useState(false)

  function validatedAndSubmitted(event) {
    event.preventDefault()
    if (
      form.name !== '' &&
      form.city !== '' &&
      form.age !== '' &&
      form.email !== ''
    ) {
      setValid(true)
    } else {
      setValid(false)
    }
  }

  if (submitted === false && valid === false) {
    return (
      <Fragment>
        <div className="main-form-content">
          <div className="form-container">
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-row"
                  placeholder="Full name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  className="form-row"
                  placeholder="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  className="form-row"
                  placeholder="Age"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  className="form-row"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />

                <button className="submit-button" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    )
  } else if (submitted === true && valid === false) {
    return (
      <Fragment>
        <div className="main-form-content">
          <div className="form-container">
            <div>
              <form onSubmit={validatedAndSubmitted}>
                <input
                  type="text"
                  className="form-row-imcomplete"
                  placeholder="Full name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                {submitted && !form.name ? (
                  <span className="imcomplete">
                    Please, enter your full name
                  </span>
                ) : null}

                <input
                  type="text"
                  className="form-row-imcomplete"
                  placeholder="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                />
                {submitted && !form.city ? (
                  <span className="imcomplete">Please, enter your city</span>
                ) : null}

                <input
                  type="text"
                  className="form-row-imcomplete"
                  placeholder="Age"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                />
                {submitted && !form.age ? (
                  <span className="imcomplete">Please, enter your age</span>
                ) : null}

                <input
                  type="text"
                  className="form-row-imcomplete"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {submitted && !form.email ? (
                  <span className="imcomplete">
                    Please, enter a valid email
                  </span>
                ) : null}

                <button className="submit-button" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    )
  } else if (submitted === true && valid === true) {
    return (
      <Fragment>
        <div className="main-form-content">
          <div className="form-container">
            <div className="containersub">
              <strong>
                <p className="text-submitted">Thanks for subscribing!</p>
              </strong>
              <figure className="submitted-figure">
                <img
                  src="https://avatarfiles.alphacoders.com/169/thumb-169513.png"
                  alt="Figure of an astronaut greeting people"
                ></img>
              </figure>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Form
