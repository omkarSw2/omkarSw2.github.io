// const HomeSection = () => {
import React from "react";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Highlight,
  Button,
} from "@chakra-ui/react";

import home from "../Assets/home1.svg";

import Resume from "../Assets/Omkar_Walavalkar_Resume.pdf";
import { Link as ReatLink } from "react-router-dom";

const handleClick = () => {
  window.open(
    `https://drive.google.com/file/d/1h2cU7RP0jl1yO96R5P-YQMNO5oZ_K4JU/view`,
    "_blank",
    "noopener",
    "noreferer"
  );
};
class ResumeButton extends React.Component {
  render() {
    const resumeUrl = Resume;
    return (
      <ReatLink id="resume-button-2" to={resumeUrl} target="_blank" download>
      <Button
        onClick={handleClick}
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"teal.400"}
        _dark={{
          background: "teal.300",
          color: "white",
        }}
        _hover={{
          bg: "teal.400",
          _dark: {
            bg: "teal.300",
          },
        }}>
        Resume
      </Button>
       </ReatLink>
    );
  }
}

const Home = () => {
  return (
    <Container maxW={"5xl"} py={12} id="home">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading id="user-detail-name">Hello 👋.</Heading>
          <Text
            color={"gray.500"}
            fontWeight={600}
            fontSize={"lg"}
            id="user-detail-intro">
            <Highlight
              query={["Omkar", "Walavalkar"]}
              styles={{ color: "red", fontSize: "4xl" }}>
              I'm Omkar Walavalkar. Aspiring Full Stack Web Developer at Masai
              School, Life Long Learner.
            </Highlight>
          </Text>
          <Stack direction={"row"} spacing={4}>
            {/* <Link
              href="https://drive.google.com/file/d/1h2cU7RP0jl1yO96R5P-YQMNO5oZ_K4JU/view?usp=share_link"
              isExternal>
              <Button
                id="resume-button-2"
                rightIcon={<FaEye />}
                colorScheme="teal"
                variant="solid">
                View Resume
              </Button>
            </Link> */}

            <ResumeButton />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={home}

            // objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
