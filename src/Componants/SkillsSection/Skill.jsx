import React from "react";

import {
  Box,
  Center,
  chakra,
  Image,
  Link,
  SimpleGrid,
  Stat,
  useColorModeValue,
} from "@chakra-ui/react";

function SkillCard({ img, name }) {
  return (
    <Stat
      className="skills-card"
      alignContent={"center"}
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      bg={useColorModeValue("gray.100", "gray.700")}
      rounded={"lg"}>
      <Center
        my={"auto"}
        color={useColorModeValue("gray.800", "gray.200")}
        className="skills-card-img">
        <Image src={img} width={"60%"} />
      </Center>

      <Center mt={{ base: 2, md: 4 }} className="skills-card-name">
        <Link>
          <b>{name}</b>
        </Link>
      </Center>
    </Stat>
  );
}

export default function Skill() {
  return (
    <Box
      id="skills"
      maxW="7xl"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}>
        Skills
      </chakra.h1>
      <SimpleGrid
        columns={{ base: 2, md: 4, lg: 6 }}
        spacing={{ base: 5, lg: 8 }}>
        <SkillCard
          img={"https://cdn-icons-png.flaticon.com/512/174/174854.png"}
          name={"HTML"}
        />
        <SkillCard
          img={
            "https://mohitkss.github.io/static/media/css3.845e8eb63836bef093cf.png"
          }
          name={"CSS"}
        />
        <SkillCard
          img={
            "https://mohitkss.github.io/static/media/js.3dfb665e058d08c99f28.png"
          }
          name={"Javascript"}
        />
        <SkillCard
          img={
            "https://mohitkss.github.io/static/media/git.b1472a80b81e487179cf.png"
          }
          name={"Git/Github"}
        />
        <SkillCard
          img={
            "https://mohitkss.github.io/static/media/react.22d1f2096ed82cab7a8a.png"
          }
          name={"ReactJS"}
        />
        <SkillCard
          img={
            "https://mohitkss.github.io/static/media/redux.7fec6369cecd1cbd44d6.png"
          }
          name={"Redux"}
        />
        <SkillCard
          img={
            "https://mohitkss.github.io/static/media/mongodb.4f7af09e6354d51beec8.png"
          }
          name={"MongoDB"}
        />
        <SkillCard
          img={
            "https://mohitkss.github.io/static/media/nodejs.b508473ad71a31ce2fae.png"
          }
          name={"NodeJS"}
        />

        {/* <SkillCard img={""} name={""} /> */}
      </SimpleGrid>
    </Box>
  );
}
