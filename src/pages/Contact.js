import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>Get in Touch</h2>
        <h4>Let's work Together</h4>
        <p>Feel free to reach out to me via email or connect with me on LinkedIn for any inquiries, collaborations, or opportunities.</p>
        <div className="contact-list">
          <li>
            <a href="#">26 Abo Aba Street Oke - ira, Ogba, Lagos, 100212, Nigeria</a>
          </li>
          <li>
            <a href="#">kelechi.denise@gmail.com</a>
          </li>
          <li>
            <a href="#">+2348063234662</a>
          </li>
          <a href="mailto:kelechi.denise@gamil.com">
            <button className="btn">Let's Chat</button>
          </a>  
        </div>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/kelechi-denise" target="_blank"><i className="bx bxl-linkedin"></i></a>
          <a href="https://www.instagram.com/kaceyautos" target="_blank"><i className="bx bxl-instagram"></i></a>
          <a href="https://x.com/DeniseKelechi" target="_blank"><i className="bx bxl-twitter"></i></a>
          <a href="https://github.com/kelechi-aims" target="_blank"><i className="bx bxl-github"></i></a>
          <a href="https://wa.me/2348063234662" target="_blank"><i className="bx bxl-whatsapp"></i></a>
        </div>
      </div>
      
   </section>
  );
}

export default Contact;