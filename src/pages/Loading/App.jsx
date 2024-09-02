import { Box } from '@chakra-ui/react';
import React from 'react';
import { PuffLoader } from 'react-spinners';

function LoadinPage() {
    return (
        <Box
            w={"100vw"}
            height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"fixed"}
            top={0}
            left={0}
            bg={"rgba(0,0,0,80%)"}
            overflow={"hidden"}
        >
            <PuffLoader
                size={150}
                color={'var(--teal)'}
            />
        </Box>
    )
}

export default LoadinPage