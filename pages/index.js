import { Container } from '@chakra-ui/react';
import TestMagic from './magic/TestMagic'
import GrayMatter from './grayMatter/GrayMatter'
export default function Home() {
  
  return (
   <Container maxW="container.xl" centerContent>
     {/* <GrayMatter/> */}
     <TestMagic/>
   </Container>
  )
}
