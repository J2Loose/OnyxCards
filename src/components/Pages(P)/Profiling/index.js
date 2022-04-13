import React from 'react'
import { ProfileContainer, ProfileWrap, Title, ProfileCard, ProfileImg, ProfileUserName, TextWrapper, Wrapper, ProfileYearGroup } from './ProfileElements'
import img from './defaultpic.jpg'
import { useAuth } from '../../../contexts/AuthContext'

export default function Profiling() {
    const { currentUser } = useAuth()

    return (
        <div>
            <ProfileContainer>
                <ProfileWrap>
                    <Title>Profile</Title>
                </ProfileWrap>
                <ProfileCard>
                    <ProfileImg src={img} />
                    <TextWrapper>
                        <ProfileUserName>{currentUser.email}</ProfileUserName>
                        <ProfileYearGroup>Year 13</ProfileYearGroup>
                    </TextWrapper>
                </ProfileCard>

            </ProfileContainer>
        </div>
    )
}
