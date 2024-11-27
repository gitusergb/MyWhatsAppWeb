import React from 'react'
import { Box, InputBase, styled } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
// import SearchIcon from '@mui/icons-material/Search';

const Component = styled(Box)`
    background: #fff;
    height: 45px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
`;

const Wrapper = styled(Box)`
    position: relative; 
    background-color: #f0f2f5;
    margin: 0 13px;
    width: 100%;
    border-radius: 10px;
`;

const Icon = styled(Box)`
    position: absolute;
    color: #919191;
    padding: 8px;
    height: 100%;
   
`;
      
const InputField = styled(InputBase) `
    height: 15px;
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    font-size: 14px;
    
`;

const Search = ({ setText }) => {
  return (
    <Component>
    <Wrapper>
        <Icon>
            <SearchIcon fontSize="small"/>
        </Icon>
        <InputField
            placeholder="Search or start new chat"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => setText(e.target.value)}
        />
    </Wrapper>
</Component>
  )
}

export default Search