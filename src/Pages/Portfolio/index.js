import React from 'react'
import "./style.css"
import project1 from "../../assets/project-one.jpg";
import project2 from "../../assets/hashtag adulting.jpg";
import project3 from "../../assets/employeetrackerdemo.jpg";
// import Projects from "src/Pages/Portfolio";

export default function Portfolio() {
    const projects = [
        {
          title: "Brewvey",
          link: "https://github.com/alexmoriyama/brewvey",
          image: project1,
        },
        {
          title: "hashtag adulting",
          link: "https://github.com/alexmoriyama/hashtag-adulting",
          image: project2,
        },
        {
          title: "Employee Tracker",
          link: "https://github.com/alexmoriyama/employee-tracker",
          image: project3,
        },
    ]
    return (
        <section id="portfolio">
        <h2 className="d-flex justify-content-center">Portfolio</h2>
        <ul className="container list-unstyled">
          <div className="row">
            {/* <Projects projects={projects} /> */}
          </div>
        </ul>
      </section>
    )
}