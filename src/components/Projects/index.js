import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Full-Or-MERN' ?
            <ToggleButton active value="Full-Or-MERN" onClick={() => setToggle('Full-Or-MERN')}>Full Stack'S </ToggleButton>
            :
            <ToggleButton value="Full-Or-MERN" onClick={() => setToggle('Full-Or-MERN')}>Full Stack'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Front-End' ?
            <ToggleButton active value="Front-End" onClick={() => setToggle('Front-End')}>Front-End APP'S</ToggleButton>
            :
            <ToggleButton value="Front-End" onClick={() => setToggle('Front-End')}>Front-End APP'S</ToggleButton>
          }
          <Divider />
          
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project , key) => (
              <ProjectCard key={key} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project , key) => (
              <ProjectCard key={key} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects