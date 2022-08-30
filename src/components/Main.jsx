import mainDog_1 from "../assets/images/main-dog-1.jpg"
import mainDog_2 from "../assets/images/main-dog-2.jpg"
import mainDog_3 from "../assets/images/main-dog-3.jpg"
import mainDog_4 from "../assets/images/main-dog-4.jpg"
import ImageGallery from "react-image-gallery"
import {useState} from "react"

export default function Main(props) {
  const [arrows, setArrows] = useState(false)
  const items = [{
    original: mainDog_1,
    loading: 'lazy',
    originalHeight: '530',
  },
    {
      original: "https://avatars.mds.yandex.net/i?id=b660191313374dda471f979cccb58264-5008775-images-thumbs&n=13",
      loading: 'lazy',
      originalHeight: '530',
    },
    {
      original: mainDog_2,
      loading: 'lazy',
      originalHeight: '530',
    },
    {
      original: mainDog_3,
      loading: 'lazy',
      originalHeight: '530',
    },
    {
      original: mainDog_4,
      loading: 'lazy',
      originalHeight: '530',
    },
  ]
  return (
    <main className="main container">
      <div className="main-intro">
        <div className="main-intro-heading">
          <h2 style={{marginBottom: 10}}>Hey there, mthfckrs</h2>
          <h3 style={{marginBottom: 10}}>Look at my doges here</h3>
          <p>You must have underestimated dogs, they're great! Imagine you got a friend, who never betrays you (after
            right trainings), who can protect you, your family, your house, isn't it amazing?</p>
        </div>
        <div className="main-intro-image" onMouseEnter={() => setArrows(true)}
             onMouseLeave={() => setArrows(false)}>
          <ImageGallery key={1} items={items} showNav={arrows} showBullets={true} autoPlay={true} lazyLoad={true}/>
        </div>
      </div>
    </main>
  )
}