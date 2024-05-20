"use client";
import React from 'react';
import './who-we-are.css';
import Image from 'next/image'

export default function PastProjects() {
    return (
      <div className="everything">
        <div >
            <h2 className="title">&middot; WHO WE ARE &middot;</h2>
          
            <p className="mission-statement">
                DISC started as a student group in 2017 with the goal of 
                expanding Northwestern students' perceptions of the capabilities 
                of technology. Since then, we've gathered a diverse group of student 
                leaders interested in using technology to make a positive impact 
                on the world. We recognize the power of collaboration across difference, 
                and look for the right balance of technical and non-technical skills 
                when we work together. We do this by assembling project teams of hardworking 
                students, and challenging them to grow as they work for community clients 
                in the Evanston/Chicago area.
            </p>

            <Image className="exec-photo" src={"/DISC-picnic-2023.png"} width={500} height={500} alt="Exec Photo"/>
        </div>
      </div>
    );
    }