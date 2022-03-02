import { Magic, RPCErrorCode } from 'magic-sdk';
import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';


export default function Profile({ }) {
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [networt, setNetwork] =useState()

  const handleLogout = async () => {
    const users = new Magic('pk_live_A79A3660365BAD4D');
    await users.user.logout();
  };

  const UserData = async () => {
    const users = new Magic("pk_live_A79A3660365BAD4D", {
      network: "rinkeby"
    });
    const provider = new ethers.providers.Web3Provider(users.rpcProvider);
    try {

      setEmail(data.email)
      setPhone(data.phoneNumber)
      console.log(data)
      console.log(provider)
      const userMetadata = await users.user.getMetadata()
      setEmail(data.email)
      const signer = provider.getSigner();
      const network = await provider.getNetwork();
      setNetwork(network)
      const userAddress = await signer.getAddress();
      const userBalance = ethers.utils.formatEther(
        await provider.getBalance(userAddress)
      );

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    UserData()
  });

  return (
    <Container maxW="container.xl" centerContent >
      <Box padding={10} border="1px solid black" mt="100px">
        <Heading> Welcome</Heading>
        <Text>Email:{email}</Text>
        <Button type="submit" onClick={() => handleLogout()}>Logout</Button>
      </Box>
    </Container>
  )
}