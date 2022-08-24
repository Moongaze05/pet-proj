import mainDog_1 from "../assets/images/main-dog-1.jpg"
import mainDog_2 from "../assets/images/main-dog-2.jpg"
import mainDog_3 from "../assets/images/main-dog-3.jpg"
import mainDog_4 from "../assets/images/main-dog-4.jpg"
import ImageGallery from "react-image-gallery"
import { useState } from "react"

export default function Main(props) {
  const [arrows, setArrows] = useState(false)
  const items = [{
    original: mainDog_1
  },
  { original: mainDog_2 },
  { original: mainDog_3 },
  { original: mainDog_4 },
  ]
  return (
    <div className="main">
      <div className="main-intro">
        <div className="main-intro-heading">
          <h2>Hey there, mthfckrs</h2>
          <h3>Look at my doges here</h3>
        </div>
        <div className="main-intro-image" onMouseEnter={() => setArrows(true)} onMouseLeave={() => setArrows(false)} >
          <ImageGallery items={items} showNav={arrows} showBullets={true} autoPlay={true} />
        </div>
      </div>
    </div>
  )
}