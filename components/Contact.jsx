import { useState } from "react";
import styles from "./contact.module.css";
import Footer from "./Footer";

export default function Contact({ theme }) {
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

  let themeStyle = {};
  if (theme === "dark") {
    themeStyle = {
      h2: "#1cc8ff", // blue
      para: "#f1f1f1", // white
      submit: "#ff1c60", // red
      input: "#1B2229",
      inputText: "#f1f1f1",
    };
  } else {
    themeStyle = {
      h2: "#ff1c60", //red
      para: "#565656", // white
      submit: "#1cc8ff", // blue
      input: "#FFFFFF",
      inputText: "#565656",
    };
  }

  return (
    <>
      <section className={styles.contact_section} id="contact">
        <section className={styles.wrapper}>
          <h2 style={{ color: themeStyle.h2 }}>Get In Touch.</h2>
          <div className={styles.contact_columns}>
            <div style={{ color: themeStyle.para }}>
              <h3>Everyone likes to get mail.</h3>
              <p>
                If you have a software developer position in your organisation
                you would like to discuss with me, or if you have an internship
                or even a shadowing opportunity, please contact me.
              </p>
              <p>My CV is available on request.</p>
            </div>

            <div>
              {messageSubmitted ? (
                <div className={styles.confirmSent}>
                  <h3 style={{ color: themeStyle.submit }}>Message Sent</h3>
                  <p style={{ color: themeStyle.para }}>
                    Thank's for contacting me. {<br />} I'll be in touch.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleEmailForm}
                  className={styles.contactForm}
                  style={{ color: themeStyle.para }}
                >
                  <article>
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      required
                      placeholder="Your Name"
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                      style={{
                        background: themeStyle.input,
                        color: themeStyle.inputText,
                      }}
                    />
                  </article>
                  <article>
                    <label htmlFor="email">Email Address</label>

                    <input
                      id="email"
                      type="email"
                      value={email}
                      required
                      placeholder="eg. mark@facebook.com"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      style={{
                        background: themeStyle.input,
                        color: themeStyle.inputText,
                      }}
                    />
                  </article>
                  <article>
                    <label htmlFor="message">Message</label>

                    <textarea
                      id="message"
                      value={message}
                      required
                      placeholder="eg. You're amazing..."
                      onChange={(event) => {
                        setMessage(event.target.value);
                      }}
                      style={{
                        background: themeStyle.input,
                        color: themeStyle.inputText,
                      }}
                    />
                  </article>
                  <button
                    type="submit"
                    style={{ background: themeStyle.submit }}
                  >
                    Send Message
                  </button>
                  <p>All fields are required</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}
