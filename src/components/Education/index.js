import React, { useState } from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
      padding: 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
      font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  background: ${({ active }) => active ? "#854CE6" : "#eee"};
  color: ${({ active }) => active ? "#fff" : "#333"};
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #854CE6;
    color: #fff;
  }
`;


const Index = () => {
  const [filter, setFilter] = useState("all");

  const filteredData = education.filter(item => 
    filter === "all" ? true : item.type === filter
  );

  return (
    <Container id="education">
      <Wrapper>
        <Title>Education And Certifications</Title>
        <Desc>
          My education and certifications showcase my technical growth and achievements.
        </Desc>

        {/* Filter Buttons */}
        <FilterButtons>
          <Button active={filter==="all"} onClick={()=>setFilter("all")}>All</Button>
          <Button active={filter==="education"} onClick={()=>setFilter("education")}>Education</Button>
          <Button active={filter==="certification"} onClick={()=>setFilter("certification")}>Certifications</Button>
        </FilterButtons>

        <TimelineSection>
          <Timeline>
            {filteredData.map((edu, index) => (
              <TimelineItem key={edu.id}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={edu}/>
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== filteredData.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  )
}

export default Index
