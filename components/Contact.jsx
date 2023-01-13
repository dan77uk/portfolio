import { useState } from "react";
import styles from "./contact.module.css";

export default function Contact() {
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleEmailForm(event) {
    event.preventDefault();
    const contactMessage = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json. text,plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactMessage),
    }).then((result) => {
      if (result.status === 200) {
        setMessageSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  }

  return (
    <section className={styles.container} id="contact">
      <form onSubmit={handleEmailForm}>
        {messageSubmitted ? (
          <article>
            <h3>Message Sent</h3>
            <p>Thank's for contacting me. I'll be in touch.</p>
          </article>
        ) : (
          <>
            <article>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                required
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </article>
            <article>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </article>
            <article>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                required
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </article>
            <button type="submit">Send Message</button>
            <p>All fields are required</p>
          </>
        )}
      </form>
      <article>
        <h2>How Can I Help?</h2>
        <p>
          I am currently looking for a junior developer position, so if you have
          something you think I may be a good fit for, please drop me a message.
        </p>
        <p>
          Alternatively, if you'd just like to say hello, I'd love to here from
          you.
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/dan-phillips-845a1b205/"
              target="blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/dan77uk" target="blank">
              GitHub
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
