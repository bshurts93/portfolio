import React from "react";
import Thumbnail from "../Display/Thumbnail";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/twitter"
        image="https://picsum.photos/200"
        title="Twitter Newsfeed"
        category="Mobile App"
      />
      <Thumbnail
        link="/airbnb"
        image="https://picsum.photos/200"
        title="Airbnb Experiences"
        category="Website"
      />
      <Thumbnail
        link="/photoshop"
        image="https://picsum.photos/200"
        title="Photoshop Redesign"
        category="Desktop App"
      />
    </div>
  );
}

export default Projects;
