import React from 'react'
import "./style.css"
import project1 from "../../assets/project-one.jpg";
import project2 from "../../assets/hashtag adulting.jpg";
import project3 from "../../assets/employeetrackerdemo.jpg";
import Template from "../../components/ProjectCard.js"

export default function Portfolio() {
    return (
        <main className = "Portfolio">
            <h2>Portfolio</h2>
                <section className = 'projectCards'>
                    <Template
                    name = "Brewvey"
                    pic={project1}
                    text="This is my project one!"
                    link = "https://github.com/alexmoriyama/brewvey"
                    />
                    <Template
                    name = "Hashtag Adulting"
                    pic={project2}
                    text="This is my project two!"
                    link = "https://github.com/alexmoriyama/hashtag-adulting"
                    />
                    <Template
                    name = "Employee Tracker Demo"
                    pic={project3}
                    text="This is my employee tracker demo!"
                    link = "https://github.com/alexmoriyama/employee-tracker"
                    />
                </section>
        </main>
            )
}