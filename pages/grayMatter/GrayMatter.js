import matter from "gray-matter"
import { useEffect } from "react";
import { Box, Text, Heading, } from "@chakra-ui/react";

export default function GrayMatter({ }) {
  const str = '---\ntitle: Content 1\n---\nThis is an excerpt.\n---\nThis is content';
  const file = matter(str, { excerpt: true })

  useEffect(() => {
    console.log(matter('---\ntitle: Front Matter\n---\nThis is the content.'))
    console.log(matter.stringify("Sample Front Matter", { title: 'Home' }))
    console.log(file)
  })
  return(
    <Box>
      <Heading size="xl" mb={4}>Gray Matter</Heading>
      <Text>Data: {file.data.title}</Text>
      <Text>Content: {file.content}</Text>
    </Box>
  )
}