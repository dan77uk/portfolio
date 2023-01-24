import { useState } from "react";
import styles from "./contact.module.css";
import Footer from "./Footer";

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
    <>
      <section className={styles.container} id="contact">
        <div className={styles.contentWrapper}>
          <section className={styles.col1}>
            <h2>Contact Me</h2>
            <h3>Everyone likes to get mail.</h3>
            <p>
              Please get in touch, whether you have a career opportunity you
              believe I would be interested in, or even just to say hello.
            </p>
          </section>

          <section className={styles.col2}>
            {messageSubmitted ? (
              <div className={styles.confirmSent}>
                <h3>Sent</h3>
                <p>Thank's for contacting me. {<br />} I'll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleEmailForm} className={styles.contactForm}>
                <article>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    required
                    placeholder="Your Name"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </article>
                <article>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    required
                    placeholder="Your Email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </article>
                <article>
                  <textarea
                    id="message"
                    value={message}
                    required
                    placeholder="Your Message"
                    onChange={(event) => {
                      setMessage(event.target.value);
                    }}
                  />
                </article>
                <button type="submit">Send Message</button>
                <p>All fields are required</p>
              </form>
            )}
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
}
