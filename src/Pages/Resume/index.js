import React from 'react'
import "./style.css"
import resume from '../../assets/resume.jpg'

export default function Resume() {
    return (
        <main className="d-flex justify-content-center">
        <img src={resume}/>
        </main>
    )
}