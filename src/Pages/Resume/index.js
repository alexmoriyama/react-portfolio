import React from 'react'
import "./style.css"
import resume from '../../assets/resume.jpg'

export default function Resume() {
    return (
        <main id="resume">
        <img src={resume} className="resumejpg"/>
        </main>
    )
}