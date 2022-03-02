import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';
import { Box, Button, Heading, VStack, Input, InputLeftAddon, InputGroup, IconButton, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import { FaFacebook, FaGooglePlusSquare, FaDiscord, FaEthereum } from 'react-icons/fa';
import { ethers } from 'ethers';


export default function TestMagic() {
  const [email, setMail] = useState()
  const [phoneNumbers, setPhoneNumbers] = useState()

  const EmailLogin = async () => {
    const users = new Magic('pk_live_A79A3660365BAD4D');
    try {
      await users.auth.loginWithMagicLink({ email: email, redirectURI: 'http://localhost:3001/magic/Profile' })
      console.log(users.user.getMetadata)
    } catch (err) {
      console.log(err)
    }

  }
  // ,redirectURI:'http://localhost:3000/magic/Profile'
  const PhoneNumberLogins = async () => {
    const users = new Magic('pk_live_A79A3660365BAD4D')
    try {
      await users.auth.loginWithSMS({ phoneNumber: phoneNumbers, redirectURI: 'http://localhost:3001/magic/Profile' })
    } catch (err) {
      console.log(err)
    }
  }
  const FaceboolSocialLogin = async () => {
    const users = new Magic('pk_live_A79A3660365BAD4D', {
      extensions: [new OAuthExtension()],
    });
    try {
      await users.oauth.loginWithRedirect({
        provider: 'facebook',
        redirectURI: 'http://localhost:3001/magic/Profile',
        
      });
    } catch (err) {
      console.log(err)
    }
  }
  const GoogleSocialLogin = async () => {
    const users = new Magic('pk_live_A79A3660365BAD4D', {
      extensions: [new OAuthExtension()],
    });
    try {
      await users.oauth.loginWithRedirect({
        provider: 'google',
        redirectURI: 'http://localhost:3001/magic/Profile',
      });
    } catch (err) {
      console.log(err)
    }
  }

  const DiscordSocialLogin = async () => {
    const users = new Magic('pk_live_A79A3660365BAD4D', {
      extensions: [new OAuthExtension()],
    });
    try {
      await users.oauth.loginWithRedirect({
        provider: 'discord',
        redirectURI: 'http://localhost:3001/magic/Profile',
        
      });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Box border="1px solid black" p="20px" mt="100px" align="center">
      <Heading fontSize="4xl">Magic</Heading>
      <VStack align="center" spacing={2}>
        <Heading fontSize="xl">Email</Heading>
        <Input type="email" name="email" onChange={(e) => setMail(e.target.value)} required="required" placeholder="Enter your email" />
        <Button type="submit" onClick={EmailLogin}>Login</Button>
      </VStack>

      <VStack mt="10px" align="center" spacing={2}>
        <Heading fontSize="xl">Phone Number</Heading>
        <InputGroup>
          <InputLeftAddon children='+63' />
          <Input type='tel' type='tel' onChange={(e) => setPhoneNumbers('+63' + e.target.value)} required="required" placeholder="Enter your Phone Number" />
        </InputGroup>
        <Button onClick={PhoneNumberLogins}>Login</Button>
      </VStack>

      <VStack align="center" spacing={2}>
        <Heading fontSize="xl">Social Media</Heading>
        <HStack>
          <IconButton type="submit" onClick={FaceboolSocialLogin} icon={<FaFacebook />} fontSize="2xl" />
          <IconButton type="submit" onClick={GoogleSocialLogin} icon={<FaGooglePlusSquare />} fontSize="2xl" />
          <IconButton type="submit" onClick={DiscordSocialLogin} icon={<FaDiscord />} fontSize="2xl" />
        </HStack>
      </VStack>
    </Box>
  )
}