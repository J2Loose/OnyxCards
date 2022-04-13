import React from 'react'
import { DashboardContainer, DashboardWrap, Title, DashboardBody, DashboardCard, CardHeader, CardBody, CardSection, CardTitle, SectionWrapper } from './DashboardElements'


const Dash = () => {



    return (
        <>
          <DashboardContainer>
            <DashboardWrap>
                <Title>
                    Dashboard
                </Title>
            </DashboardWrap> 
            <DashboardBody>
                <DashboardCard>
                  <CardBody>
                  <CardHeader>What will you do today?</CardHeader>
                      <CardSection>
                        <SectionWrapper to='/create'>
                          <CardTitle >Create Deck</CardTitle>
                        </SectionWrapper>
                      </CardSection>
                      <CardSection>
                        <SectionWrapper to='/play'>
                          <CardTitle>Play</CardTitle>
                        </SectionWrapper>
                      </CardSection>
                      <CardSection>
                        <SectionWrapper to='/stats'>
                          <CardTitle>Stats(WIP)</CardTitle>
                        </SectionWrapper>
                      </CardSection>
                  </CardBody> 
                </DashboardCard>  
            </DashboardBody>   
          </DashboardContainer>  
        </>
    )
}

export default Dash
