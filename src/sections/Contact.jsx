
import { useState } from 'react'
import { profile } from '../data/portfolio.js'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from '../components/Icons.jsx'

const validate = ({ name, email, message }) => {
  const e = {}

  if (name.trim().length < 2) {
    e.name = 'Enter your name (at least 2 characters).'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    e.email = 'Enter a valid email address, like name@example.com.'
  }

  if (message.trim().length < 10) {
    e.message = 'Write a message of at least 10 characters.'
  }

  return e
}

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const onChange = (ev) => {
    const { name, value } = ev.target

    setValues({
      ...values,
      [name]: value,
    })

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }

    setSent(false)
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()

    const found = validate(values)
    setErrors(found)

    if (Object.keys(found).length > 0) {
      return
    }

    setSending(true)
    setSent(false)

    try {
      const response = await fetch('https://formspree.io/f/mnpdpyvd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      })

      if (response.ok) {
        setSent(true)

        setValues({
          name: '',
          email: '',
          message: '',
        })
      } else {
        alert('Unable to send the message. Please try again.')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const details = [
    {
      icon: <MailIcon />,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: profile.linkedin,
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      value: 'View my code',
      href: profile.github,
    },
    {
      icon: <PinIcon />,
      label: 'Location',
      value: profile.location,
    },
  ]

  const field = (name, label, props = {}) => {
    const shared = {
      id: name,
      name,
      value: values[name],
      onChange,
      'aria-invalid': !!errors[name],
      'aria-describedby': errors[name]
        ? `${name}-err`
        : undefined,
    }

    return (
      <div className="field">
        <label htmlFor={name}>{label}</label>

        {name === 'message' ? (
          <textarea
            rows="5"
            {...shared}
          />
        ) : (
          <input
            {...shared}
            {...props}
          />
        )}

        {errors[name] && (
          <p
            className="field__err"
            id={`${name}-err`}
            role="alert"
          >
            {errors[name]}
          </p>
        )}
      </div>
    )
  }

  return (
    <section id="contact" className="section">
      <div className="container">

        <SectionHeading
          title="Contact"
          lead="Open to software engineering opportunities. Send a message and I will reply."
        />

        <div className="contact">

          {/* Contact Details */}
          <Reveal className="card">
            <ul className="contact__list">

              {details.map((d) => (
                <li key={d.label}>
                  <span className="contact__icon">
                    {d.icon}
                  </span>

                  <div>
                    <span className="muted">
                      {d.label}
                    </span>

                    {d.href ? (
                      <a
                        href={d.href}
                        target={
                          d.href.startsWith('http')
                            ? '_blank'
                            : undefined
                        }
                        rel="noreferrer"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p>{d.value}</p>
                    )}
                  </div>
                </li>
              ))}

            </ul>
          </Reveal>

          {/* Send Message Form */}
          <Reveal delay={80} className="card">

            <form onSubmit={onSubmit} noValidate>

              {field('name', 'Name', {
                type: 'text',
                autoComplete: 'name',
                placeholder: 'Enter your name',
              })}

              {field('email', 'Email', {
                type: 'email',
                autoComplete: 'email',
                placeholder: 'Enter your email',
              })}

              {field('message', 'Message', {
                placeholder: 'Write your message here...',
              })}

              <button
                type="submit"
                className="btn btn--primary"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>

              {sent && (
                <p
                  className="field__ok"
                  role="status"
                >
                  Message sent successfully! I will get back to you soon.
                </p>
              )}

            </form>

          </Reveal>

        </div>
      </div>
    </section>
  )
}