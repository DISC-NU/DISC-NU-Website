"use client";
import React from 'react';
import './past-projects.css';
import Image from 'next/image'


//
// PhotoGallery Input
//
// This variable will be used as input into the PhotoGallery
// component in order to display past photos relating to past
// DISC projects. To adjust what 9 photos are displayed, simply
// alter the file paths and alt text in each of the following
// subarrays. However, please note that the 3x3 layout is
// currently hardcoded. Thus, altering the number of photos
// being displayed will require altering the PhotoGallery
// and/or PhotoColumn components.
//


const photoColumns = [
 [
   { src: "/rainbows-for-all-children-data-visualizer.png", text: "Rainbows for All Children Data Visualizer" },
   { src: "/old-showcase-photo2.png", text: "your project description here!" },
   { src: "/old-showcase-photo3.png", text: "your project description here!" }
 ],
 [
   { src: "/old-showcase-photo1.png", text: "your project description here!" },
   { src: "/good-news-partners.png", text: "Good News Partners Database Interface" },
   { src: "/old-showcase-photo6.png", text: "your project description here!" }
 ],
 [
   { src: "/fossil-free-nu.png", text: "Fossil Free NU Website" },
   { src: "/old-showcase-photo4.png", text: "your project description here!" },
   { src: "/winter-2023-showcase-photo1.jpg", text: "your project description here!" }
 ]
];


//
// Photo
//
// This function takes a photo source (file path, URL, etc.) and
// its alt text, returning a div with the image. If the user IS
// hovering over the image, then they will see a text description
// of the project in the photo instead.
//
function Photo( {src, text} ) {
 return (
   <div className="photo-container">
    
     <div className="photo">
       <Image className="image" src={src} width={500} height={500} alt="images"/>
     </div>


     <div className="overlay">
       <p className="text">{text}</p>
     </div>


   </div>
 );
}

//
// PhotoColumn
//
// This function takes an array of 3 arrays, where each subarray
// contains a photo source (file path, URL, etc.) and its alt text,
// and formats them into a column (using CSS in past-projects.css).
//
function PhotoColumn( {photosArray} ) {
return (
  <div className="column">
    {photosArray.map((photo, index) => (
      <Photo key={index} src={photo.src} text={photo.text}/>
    ))}
  </div>
);
}

//
// PhotoGallery
//
// This function takes an array of 3 arrays, where each subarray
// represents PhotoColumns, and formats these columns side-by-side
// in order to form a gallery of 3x3 photos (using CSS in past-projects.css).
// The 3x3 grid is aesthetically staggered (rather than being a grid).
//
function PhotoGallery( {photoColumns} ) {
return (
  <div className="photo-gallery">
    {photoColumns.map((photoColumn, index) => (
      <PhotoColumn key={index} photosArray={photoColumn}/>
    ))}
  </div>
);
}

//
// PastProjects
//
// This function returns the PastProjects component, which displays
// the section heading "PAST PROJECTS" followed by a gallery of 9 photos
// depicting past DISC projects.
//
export default function PastProjects() {
return (
  <div className="everything">
    <div className="container1">
      <h2 className="title">&middot; PAST PROJECTS &middot;</h2>
      <PhotoGallery photoColumns = {photoColumns} />
    </div>
  </div>
);
}
