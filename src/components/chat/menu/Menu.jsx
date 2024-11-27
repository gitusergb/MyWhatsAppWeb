import React,{ useState } from 'react'
import { Box } from '@mui/material';
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';

const Menu = () => {
  const [text, setText] = useState('');
  return (
    <Box> 
        {/* Hey gb! this is Menu */}
        <Header />
        <Search  setText={setText} />
        <Conversations text={text} />
    </Box>
  )
}

export default Menu