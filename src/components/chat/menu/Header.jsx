import React,{ useContext, useState } from 'react'
import { Box, styled } from '@mui/material';
 import { Chat as MessageIcon } from '@mui/icons-material';

//  import ChatIcon from '@mui/icons-material/Chat';
import { AccountContext } from '../../../context/AccountProvider';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';


let dp="";
const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    /* & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    } */
    & :first-of-type {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;
    
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { account } = useContext(AccountContext);
  // console.log(account.picture)
  
  const toggleDrawer = () => { setOpenDrawer(true);}
  return (
    <>
      {/* Hey gb! I am Header */}
    
            <Component>
                <Image src={`${account.picture}`} alt='dp' onClick={() => toggleDrawer()} />
                <Wrapper>
                  <MessageIcon />
                  {/* */}
                      <HeaderMenu />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
      
    </>
  )
}

export default Header