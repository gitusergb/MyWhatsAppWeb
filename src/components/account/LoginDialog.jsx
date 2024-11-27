import React , { useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import {Typography, List, ListItem, Box, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode as jwt_decode} from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api';

const dialogStyle = {
    marginTop: '12%',
    height: '95%',
    width: '60%',
    maxWidth: '100',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}
const Component = styled(Box)`
    display: flex; 
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const QRCOde = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0 50px'
});

const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    margin-bottom: 25px;
    /* font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif; */
    font-family:inherit;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;
const LoginDialog = () => {
    const { setAccount,
        showloginButton, 
        setShowloginButton, 
        setShowlogoutButton 
    } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        // console.log('Login Success:', res);
        let decoded = jwt_decode(res.credential);
        //console.log('Login Info:', decoded);
        setAccount(decoded);
        // setShowloginButton(false);
        // setShowlogoutButton(true);
         await addUser(decoded);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };


  return (
    <Dialog
    open={true}
    PaperProps={{ sx: dialogStyle }}
    // BackdropProps={{style: {backgroundColor: 'unset'}}}
    hideBackdrop={true}
            maxWidth={'md'}
    >
<Component>
    <Container>
        <Title>To use MyWhatsApp on your computer:</Title>
        <StyledList>
            <ListItem>1. Open MyWhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and select MyWhatsApp Web</ListItem>
            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
        </StyledList>
    </Container>
    <Box style={{position:'relative'}}>
        <QRCOde src={qrCodeImage} alt="QR Code" />
        <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)'}}>
            {/* { showloginButton ? */}
                <GoogleLogin
                    buttonText=""
                    onSuccess={onLoginSuccess}
                    onError={onLoginFailure}
                /> 
                {/* : null} */}
        </Box>
    </Box>
</Component>
</Dialog>
  )
}

export default LoginDialog