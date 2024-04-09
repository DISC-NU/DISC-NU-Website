import * as React from 'react';

function PastProjects() {
  return (
    <div>
      {/* ----------- SECTION HEADER --------------- */}
      {/* //todo: confirm CSS that we want too apply to all section headers */}
      {/* //todo: ask Paula about if she's pushed the fonts */}
      <h2 className="home-page-subsection-title">Past Projects</h2>

      {/* ----------- START OF IMAGE GALLERY ------------ */}
      {/* //todo: look into project photos that we can upload here */}
      <div className="flex flex-row" id="past-projects-gallery">
        
        {/* Vertical Image (like an app) */}
        <img src="https://placehold.co/60x135" id="vertical-proj-img"></img>

        {/* Horizontal Image (like a website) */}
        <div className = "flex flex-col" id="big-horizontal-proj-img">
          <img src="https://placehold.co/60x40"></img>

          {/* Two Smaller Horizontal Images */}
          <div className="flex flex-row">
            <img src="https://placehold.co/60x40" id="small-left-horizontal-proj-img"></img>
            <img src="https://placehold.co/60x40" id="small-right-horizontal-proj-img"></img>
          </div>
        </div>
      </div>
      {/* ----------- END OF IMAGE GALLERY ------------ */}

    </div>
  );
}

export default PastProjects();
