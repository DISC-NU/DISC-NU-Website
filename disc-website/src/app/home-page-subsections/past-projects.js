import * as React from 'react';
//todo: try to find an image grid in tailwind instead cuz material UI requires installs (try out shad??)


function PastProjects() {
  return (
    <div>
      {/* ----------- SECTION HEADER --------------- */}
      {/* //todo: confirm CSS that we want too apply to all section headers */}
      {/* //todo: ask Paula about if she's pushed the fonts */}
      {/* //todo: also confirm  */}
      <h2 className="home-page-subsection-title">Past Projects</h2>

      {/* ----------- START OF IMAGE GALLERY ------------ */}
      {/* //todo: look into project photos that we can upload here */}
      {/* //todo: ask Amy for guidance on making the gallery responsive */}
      <div className="flex flex-row" id="past-projects-gallery">
        
        {/* Vertical Image (like an app) */}
        <img src="https://placehold.co/60x120"></img>

        {/* Horizontal Image (like a website) */}
        <div className = "flex flex-col">
          <img src="https://placehold.co/60x40"></img>

          {/* Two Smaller Horizontal Images */}
          <div className="flex flex-row">
            <img src="https://placehold.co/60x40"></img>
            <img src="https://placehold.co/60x40"></img>
          </div>
        </div>
      </div>
      {/* ----------- END OF IMAGE GALLERY ------------ */}

    </div>
  );
}

export default PastProjects();
