import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./ContactForm.module.css";
const ContactForm = () => {
  const form = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredMail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [touchedFields,setTouchedFields] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setEnteredName(value);
    } else if (name === "email") {
      setEnteredMail(value);
    } else {
      setEnteredMessage(value);
    }
  };
  const handleInputBlur = (event) =>{
    const {name} = event.target;
    if (!touchedFields.includes(name)){
        setTouchedFields((prevFeilds) =>[...prevFeilds,name]);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setTouchedFields(['name','email','message']);
    if (
      enteredName.trim() === "" ||
      enteredEmail.trim() === "" ||
      enteredMessage.trim() === ""
    ) {
      return;
    }
    const formData = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };
    emailjs.sendForm('service_3ho507b', 'template_40pwttw', form.current, 'rdr0qiY_80WfMife7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setEnteredName('');
    setEnteredMail('');
    setEnteredMessage('');
    setTouchedFields([])
    alert("Thank you for reaching out! Your message matters. We'll connect shortly.")
  };
  const isFieldInvalid = (feildName) =>{
    if (feildName ==='name'){
        return enteredName.trim() ==='' && touchedFields.includes(feildName)
    }
    if (feildName ==='email'){
        return (!enteredEmail.trim() || !enteredEmail.includes('@')) && touchedFields.includes(feildName);
        ;
    }
    if (feildName === 'message') {
        return enteredMessage.trim() ==='' &&
         touchedFields.includes(feildName);
    }
    return false
  }
  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className={`${styles["form-control"]} ${isFieldInvalid('name') && styles.invalid}`}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={enteredName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoComplete="off"
        />
        {isFieldInvalid('name') && (
            <p className={styles.error}>Please enter your name.</p>
        )}
      </div>

      <div className={`${styles["form-control"]} ${isFieldInvalid('email') && styles.invalid}`}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={enteredEmail}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoComplete="off"
        />
        {isFieldInvalid('email') && (
            <p className={styles.error}>Please enter a valid email address.</p>
        )}
      </div>

      <div className={`${styles["form-control"]} ${isFieldInvalid('message') && styles.invalid}`}>
        <textarea
          name="message"
          placeholder="Message"
          className={styles.textarea}
          value={enteredMessage}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        ></textarea>
        {isFieldInvalid('message') && (
            <p className={styles.error}>Please enter your message.</p>
        )}
      </div>

      <button className={styles.button}>Send Message</button>
    </form>
  );
};

export default ContactForm;
