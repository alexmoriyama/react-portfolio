import React from 'react'
import "./style.css"

export default function Contact() {
    return (
        <section>
        <h2 className="d-flex justify-content-center">Contact Me!</h2>
        <form className="d-flex justify-content-center">
        <input type="text" placeholder="name" id="name"/>
          <input type="text" placeholder="email" id="email"/>
          <input type="text" placeholder="message" id="message"/>
        </form>
      </section>
    )
}