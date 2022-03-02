import { Magic, RPCErrorCode } from 'magic-sdk';
import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { ethers } from 'ethers';



export default function Profile({ }) {
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()

  const handleLogout = async () => {
    const users = new Magic('pk_live_A79A3660365BAD4D');
    await users.user.logout();
    const metadata = await users.user.getMetadata
    console.log(metadata)
  };

  const UserData = async () => {
    const users = new Magic('pk_live_A79A3660365BAD4D', {
      network: "rinkeby"
    });
    const provider = new ethers.providers.Web3Provider(magic.rpcProvider);

    try {
      const data = await users.user.getMetadata()
      const result = await users.oauth.getRedirectResult();
      setEmail(data.email)
      setPhone(data.phoneNumber)
      console.log(data)
      console.log(result)
    } catch {

    }
  }
  useEffect(() => {
    UserData()
  });

  return (
    <Box>
      <Container maxW="container.xl" centerContent align="center" >
        <Box>
          <Heading> Welcome</Heading>
          <Text>Email:{email}</Text>
          <Text>phoneNumber : {phone}</Text>
          <Button type="submit" onClick={() => handleLogout()}>Logout</Button>
        </Box>
      </Container>
    </Box>
  )
}