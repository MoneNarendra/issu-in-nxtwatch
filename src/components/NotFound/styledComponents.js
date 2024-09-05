import styled from 'styled-components'

export const TrendingVideosSerchContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
  min-height: 90vh;
`

export const ErrorHeading = styled.h1`
  color: ${props => (props.lightTheme ? '#00000' : '#ffffff')};
`

export const TrendingMainContainer = styled.div`
  color: ${props => (props.lightTheme ? '#00000' : '#ffffff')};
`