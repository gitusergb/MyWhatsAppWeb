import React , { useContext } from 'react'
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import LoginDialog from './account/LoginDialog'
import ChatDialog from './chat/ChatDialog';
import { AccountContext } from '../context/AccountProvider';

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 220px;
    box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
    background: #00bfa5;
    height: 200px;
    box-shadow: none;
`;
const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;


const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    
    <Component>
        {/*hi gb this is Messenger */}
  {
      account ?    
      <>  
      <Header>
            <Toolbar>
            </Toolbar>
      </Header> 
      <ChatDialog />
      </>
      :
      <>
        <LoginHeader>
            <Toolbar>
            </Toolbar>
        </LoginHeader> 
        <LoginDialog />
      </>
      
   
         }
    </Component>
    
  )
}

export default Messenger