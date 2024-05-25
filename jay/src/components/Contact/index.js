import React, { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//import Loader from 'react-loader-spinner';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const formRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1cbxo1a ',
      'template_msunkvr ',
      formRef.current,
      ' VuZGZ81iQYpflm1MS'
    ).then(
      () => {
        alert('Message successfully sent!');
        window.location.reload(false);
      },
      (error) => {
        console.error('Failed to send the message:', error);
        alert('Failed to send the message, please try again');
      }
    );
  };

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am interested in freelance opportunities - especially on ambitious
          or large projects. However, if you have any other requests or
          questions, don't hesitate to contact me using the form below.
        </p>
        <div className="contact-form">
          <form ref={formRef} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="info-map">
        Jared Otieno Maindi,
        <br />
        Kenya,
        <br />
        Nairobi <br />
        Spine Rd <br />
        <br />
        <span>jaredotieno8@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={[-1.8463, 36.7794]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[-1.8463, 36.7794]}>
            <Popup>Jared lives here, come over for a cup of coffee :)</Popup>
          </Marker>
        </MapContainer>
      </div>
      <Loader type="Pacman" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Contact;


