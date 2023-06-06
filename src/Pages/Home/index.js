import React from 'react'
import "./style.css"
import Pic from "../../assets/pic.jpg"

export default function Home() {
    return (
        <div className="container home">
        <div className="row">
          <section className="col m-5">
            <div className="container w_card">
              <h1 style={{ padding: '25px 20px 0 20px'}}>
                <img src= {Pic}/>
                <strong>Welcome!</strong>, Lorem ipsum dolor sit amet. Vel eaque veritatis qui odit culpa in error recusandae. Et possimus quod qui similique illo qui mollitia dolore ut saepe doloribus sed voluptas earum. Sit numquam nisi vel enim neque a molestiae exercitationem ea sequi asperiores qui ullam dolorem ea quidem alias qui quod tenetur. Eos perspiciatis voluptas non voluptate numquam quo enim nostrum nam voluptas repellat quo dolor omnis qui ipsa recusandae.
              </h1>
            </div>
          </section>
        </div>
        </div>
    )
}