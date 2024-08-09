import React, { useRef, useState } from 'react';
import style from "./contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa"; // Updated import
import { FaWhatsappSquare } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  
  // Removed sendEmail function

  const closeModal = () => {
    setShowModal(false);
    setMessage('');
  };

  return (
    <section className={style.contact} id="contact">
      <h4>Let's Talk</h4>
      <h2>Connect With Me</h2>
      <div className={style.contact_box}>
        <div className={style.contact_chat_box}>
          <div className={style.chat_box_01}>
            <div className={style.chat_box_content}><p id={style.icon}><MdEmail /></p></div>
            <div className={style.chat_box_content}><p>Email</p></div>
            <div className={style.chat_box_content}><p>prakashvishnuabc@gmail.com</p></div>
            <div className={style.chat_box_content}><a id={style.anchor_chat_boc_content} href="mailto:prakashvishnuabc@gmail.com" target="_blank" rel="noopener noreferrer">Send Message</a></div>
          </div>
          <div className={style.chat_box_02}>
            <div className={style.chat_box_content}><p id={style.icon}><FaInstagramSquare /></p></div> {/* Updated icon */}
            <div className={style.chat_box_content}> <p>Instagram</p></div>
            <div className={style.chat_box_content}><p>@i_vishu_raj</p></div>
            <div className={style.chat_box_content}><a id={style.anchor_chat_boc_content} href="https://www.instagram.com/i_vishu_raj/?hl=en" target="_blank" rel="noopener noreferrer">Send Message</a></div>
          </div>
          <div className={style.chat_box_03}>
            <div className={style.chat_box_content}><p id={style.icon}><FaWhatsappSquare /></p></div>
            <div className={style.chat_box_content}><p>Whatsapp</p></div>
            <div className={style.chat_box_content}><p>+91-7050354791</p></div>
            <div className={style.chat_box_content}><a id={style.anchor_chat_boc_content} href="https://api.whatsapp.com/send?phone=7050354791" target="_blank" rel="noopener noreferrer">Send Message</a></div>
          </div>
        </div>
        <form ref={form} className={style.contact_input_box}>
          <span className={style.notice}>The form is currently unavailable. Please contact via WhatsApp, Email.</span>
          <label htmlFor={style.name} id={style.label_name}>Name:</label>
          <input type="text" name="name" placeholder='Your Full Name' id={style.name} required />
          <label htmlFor={style.email}>Email:</label>
          <input type="email" name="email" placeholder='Your Email' id={style.email} required />
          <label htmlFor={style.message}>Message:</label>
          <textarea name="message" id={style.message} placeholder='Your Message' required />
          <button type="submit" id={style.btn_msg}  >
           
          </button>

        </form>

        {showModal && (
          <div className={style.modalOverlay}>
            <div className={style.modal}>
              <div className={style.modalContent}>
                <p>{message}</p>
                <button onClick={closeModal} className={style.closeButton}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
