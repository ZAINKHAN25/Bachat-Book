import React from 'react';

import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';


// Login Page Function
function LoginPage() {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      display={"flex"}
      gap={10}
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        flex={1}
        minW={200}
        my={5}
        gap={15}
      >
        
        <Box>
          Hey it's a Bachat Book Website
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"start"}
        flex={1}
        minW={200}
        my={5}
        gap={15}
      >
        <Box>

        </Box>

        <Heading
          color={`var(--teal)`}
          fontSize={"45px"}
        >
          Login
        </Heading>


        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"start"}
          my={5}
          gap={15}
          color={`var(--teal)`}
        >

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            gap={10}
          >
            <Text>
              Your Email:
            </Text>
            <Input
              w={500}
              px={15}
              py={10}
              bg={"transparent"}
              border={"2px solid white"}
              color={"white"}
              borderRadius={20}
              outline={"none"}
              type={'email'}
              placeholder={"Your Email..."}
              />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            gap={10}
          >
            <Text
            >
              Your Password:
            </Text>
            <Input
              w={500}
              px={15}
              py={10}
              bg={"transparent"}
              color={"white"}
              border={"2px solid white"}
              borderRadius={20}
              outline={"none"}
              type={'password'}
              placeholder={"Your Password..."}
            />
          </Box>
          <Button
            ms={"auto"}
            mt={10}
            border={"none"}
            borderRadius={20}
            px={25}
            py={8}
            fontSize={20}
            cursor={"pointer"}
            _hover={{ bg: `#0badad` }}
            bg={`var(--teal)`}
            transition={".3s"}
            color={"white"}
          >
            Login
          </Button>

        </Box>


      </Box>

    </Box >
  )
}

export default LoginPage;