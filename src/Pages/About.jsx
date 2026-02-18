import { useState } from "react";
import { Layout } from "../Components/Layout";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import styled from "styled-components";
const background=styled.div`
background-color:${(props)=>props.theme.colors.background}
`
function About() {
  return (
    <>
      
      <Layout>

        <h1>About This Platform</h1>

        <h2>Project Scope</h2>

        <p>
          This platform demonstrates a complete React-based application
          workflow, including routing, global state management, and modular
          component design.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          harum vero libero eius quaerat nostrum quisquam aspernatur, sint
          veniam aut voluptate aliquid nemo minus sunt amet temporibus optio.
          Fugiat enim cum est facere, deserunt commodi sunt consequuntur officia
          dolorem debitis quam accusamus expedita repudiandae consectetur fuga
          aliquid voluptas in. Doloribus esse optio, libero minima, commodi
          nobis aperiam accusamus soluta cupiditate, adipisci tenetur deserunt
          sequi odit perspiciatis animi quos eligendi ut consequuntur alias.
          Ipsa, magnam sed.
        </p>

        <h2>Technical Focus</h2>
        <p>
          The project emphasizes predictable data flow, separation of concerns,
          and scalable architecture commonly used in production environments.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta
          beatae magnam, eos quisquam facilis culpa fugit nobis consequatur
          perspiciatis fuga voluptate! Nulla, dolorem. Harum, quia. Quos
          reprehenderit maxime rem harum culpa sunt. Eveniet pariatur dolor
          aliquid quisquam asperiores ea vel praesentium maxime, molestiae
          perferendis aut nobis obcaecati, delectus adipisci?
        </p>
        <h2>Intended Audience</h2>
        <p>
          This application is intended for developers and learners seeking a
          realistic reference for building and structuring modern React
          projects.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          corporis doloribus iste eos, adipisci ipsa, dolores, voluptatum esse
          quae laudantium reprehenderit aut magni animi consequatur vitae
          perferendis. Nulla quam nostrum fugit natus? Maxime magnam hic nam
          suscipit, exercitationem nesciunt in soluta, similique eos vero dolor
          voluptates obcaecati odit blanditiis porro quidem aperiam quis sunt,
          voluptatibus amet? Vel labore eligendi suscipit quasi expedita
          incidunt earum, doloribus officiis illum reiciendis molestias
          veritatis obcaecati dolores maxime laboriosam deserunt minima
          doloremque laborum recusandae quibusdam!
        </p>
      </Layout>
    </>
  );
}
export { About };
