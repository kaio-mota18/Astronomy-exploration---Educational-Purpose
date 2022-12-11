import React, { Fragment, useState } from 'react'
import './style.css'

function Form() {
  // Função para declarar os estados que serão mudados com as informações recebidas pelo formulário
  const [form, setForm] = useState({
    email: ''
  })

  function handleChange(event) {
    event.preventDefault()
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  // Função que será utlizada para checar se o formulário foi enviado
  const [submitted, setSubmitted] = useState(false)

  // Função para cehcar se o formulário foi validado
  const [valid, setValid] = useState(false)

  function validatedAndSubmitted(event) {
    event.preventDefault()
    setSubmitted(true)
    if (form.email !== '') {
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
              <form onSubmit={validatedAndSubmitted}>
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
            <div>
              <span>
                <p className="allright">Thank you for subscribing!</p>
              </span>
              <form onSubmit={validatedAndSubmitted}>
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
  }
}

export default Form
