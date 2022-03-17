import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroVideo from '../components/Hero/HeroVideo'
import Services from '../components/Services/Services'
import Brands from '../components/Brands/Brands'
import Slider from "react-slick";
import React, { Component } from "react";
import WhyRBI from '../components/WhyRBI/WhyRBI'
import Testomonials from '../components/Testomonials/Testomonials'
import Founders from '../components/Founders/Founders'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Instagram from 'instagram-web-api';
import Policies from '../components/Policies/Policies'


export default function Home() {

  return (

    
   
    <div className='h-screen w-full'>
      <HeroVideo videoSrc='homeBackground.mp4' textArray={[
        " Create",
        " Source",
        " Influence",
        " Manage",
        "Analyse",
        "Succeed",
        " Create",
        " Source",
        " Influence",
        " Manage",
        "Analyse",
        "Succeed",
        
      ]} />
      <Services />
      <Brands />
      <WhyRBI />
      <Testomonials />
      <Founders />
      <Contact />
      <Footer/>
      <Policies />
    </div>
  )
}

// export async function getStaticProps(context) {
//   const client = new Instagram({ username: 'test', password: 'test' })
//   await client.login()

//   const photos = await client.getPhotosByUsername({
//               username: 'test',
//           })

//           const posts = photos.user.edge_owner_to_timeline_media.edges.slice(0,2)

//           return {
//                       props: {
//                           posts,
//                       }, // will be passed to the page component as props
//                   };
//               }


// export default class AutoPlayMethods extends Component {
//   constructor(props) {
//     super(props);
  
//   }
  
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000
//     };
//     return (
//       <div>
//         <Slider ref={slider => (this.slider = slider)} {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//         <div style={{ textAlign: "center" }}>
//         </div>
//       </div>
//     );
//   }
// }