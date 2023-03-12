import Image from 'next/image'
import React from 'react'

export default function Projects() {
 const mediaSrc = [
    "https://www.youtube.com/embed/T7pncBw2tuA",
    "https://www.youtube.com/embed/T7pncBw2tuA",
    "https://www.youtube.com/embed/8QadPRPG6tA",
    "https://www.youtube.com/embed/0-_k00h96FY"
  ]

  return (
    <section >
      <div>
        <h1>filter by </h1>
        <ul>
          <li>
          All
        </li>
          <li>
          Angola
        </li>
          <li>Benin</li>
        </ul>
      </div>
      <div className='grid grid-cols-3'>
      {mediaSrc.map((media) => <div>
        <div className=''>
           <iframe width='550' height='200'  src={media} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      {/* */}
    </div>)}
     
        
                 </div>
     </section>
  )
}
