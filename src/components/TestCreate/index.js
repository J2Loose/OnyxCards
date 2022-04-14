import React from 'react'
import {
    TestContainer,
    TestNavbar,
    TestBody,
    Title,
    SearchWrapper
} 
from './testCreateElements'

const TestCreate = () => {

    return (
        <TestContainer>
            <TestNavbar>
                <Title>Create and Search through your decks</Title>
            </TestNavbar>
            <TestBody>
                <SearchWrapper>
                    <Search></Search>
                </SearchWrapper>
            </TestBody>
        </TestContainer>
    )
}

export default TestCreate