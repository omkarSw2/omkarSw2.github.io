import {
  Box,
  Center,
  Flex,
  Image,
  SimpleGrid,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import image from "../Assets/Home_img21.JPG";

const testimonials = [
  {
    id: 1,
    name: "Omkar W.",
    role: "Musician",
    content:
      "I am Full Stack Web Developer My name is Omkar Walavalkar, I am from Belgaum, Karnataka. Passionate Full Stack Web Developer with skills in the HTML,CSS,JavaScript, MERN stack, I have learned Full Stack Web Development in Masai school. Skilled in problem- solving and execution of software tasks from start to finish. I look forward to joining a company where I can contribute to individual and company growth..",
  },
];

function TestimonialCard({ name, content }) {
  return (
    <Flex
      id="user-detail-intro"
      boxShadow={"lg"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("blue.100", "gray.800")}
      _after={{
        content: '""',
        position: "absolute",
        height: "21px",
        width: "29px",
        left: "35px",
        top: "-10px",
        backgroundSize: "cover",
      }}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "640px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
      }}>
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}>
        <chakra.p
          fontFamily={"Inter"}
          fontWeight={"medium"}
          fontSize={"15px"}
          pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontFamily={"Work Sans"} fontWeight={"bold"} fontSize={14}>
          {name}
        </chakra.p>
      </Flex>
    </Flex>
  );
}

const About = () => {
  return (
    <div className="about section" id="about">
      <Box maxW="4xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}>
          About
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <Center>
            <Image
              className="home-img"
              rounded={"lg"}
              borderRadius="full"
              boxSize="200px"
              src={image}
              alt="Dan Abramov"
              objectFit={"cover"}
            />
          </Center>
          <Box>
            {testimonials.map((cardInfo) => (
              <TestimonialCard {...cardInfo} key={cardInfo.id} />
            ))}
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default About;

/**
 * 
 *    <Image
          className="home-img"
          rounded={"md"}
          alt={"feature image"}
          src={
            "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
          objectFit={"cover"}
        />
 */
