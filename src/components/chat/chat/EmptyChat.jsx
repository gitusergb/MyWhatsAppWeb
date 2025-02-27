import React from 'react'
import { emptyChatImage } from '../../../constants/data';
import { Box, styled, Typography, Divider } from '@mui/material';

const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100%;
`;

const Container = styled(Box)`
    padding: 0 200px;
`;
    
const Image = styled('img')({
    marginTop: 100,
    width: 400
})
   
const Title = styled(Typography)`
    margin-top: 25px 0 10px 0;
    font-size: 32px;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
`;

const SubTitle = styled(Typography)`
    font-family: inherit;
    font-size: 14px;
    color: #667781;
    font-weight: 400;
`;

const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
`;
const EmptyChat = () => {
  return (
    <Component>
      {/* gb this is EmptyChat */}
            <Container>
                <Image src={emptyChatImage} alt="empty" />
                <Title>WhatsApp Web</Title>
                <SubTitle>Now send and receive messages without keeping your phone online.</SubTitle>
                <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time. </SubTitle>
                <StyledDivider />
            </Container>
        </Component>
  
  )
}

export default EmptyChat