import {Helmet} from "react-helmet-async";
import {NavLink, Route, Routes} from "react-router-dom";
import WhatAbout from "../components/WhatAbout";
import WhyAbout from "../components/WhyAbout";
import {activeStyle} from "../components/Header";

export default function About() {
  return (
    <main className="about container">
      <Helmet>
        <title>Auffff about</title>
        <meta name="description" content="Helmet about"/>
      </Helmet>
      <div style={{margin: '0 10px 10px 10px'}}>
        <div className="about-main-heading">
          <h2>About page</h2>
          <h3>Da fuk's this about?!</h3>
        </div>
        <div>
          <NavLink to="./whatabout" className="header-navigation link-hover"
                   style={({isActive}) => isActive ? activeStyle : undefined}>
            What about?
          </NavLink>
          <NavLink to="./whyabout" className="header-navigation link-hover"
                   style={({isActive}) => isActive ? activeStyle : undefined}>
            Why about?
          </NavLink>
        </div>
        <Routes>
          <Route path="/whatabout" element={<WhatAbout/>}/>
          <Route path="/whyabout" element={<WhyAbout/>}/>
        </Routes>
      </div>
    </main>
  )
}