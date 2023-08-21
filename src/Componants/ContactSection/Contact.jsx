// import React from "react";
import GitHubCalendar from "react-github-calendar";
import {
  Box,
  Center,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stat,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

function StatsCard({ title, links, stat, icon, ids }) {
  return (
    <Stat
      alignContent={"center"}
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}>
      <Center
        my={"auto"}
        color={useColorModeValue("gray.800", "gray.200")}
        alignContent={"center"}>
        {icon}
      </Center>
      <Center>
        <Text fontWeight={"medium"} isTruncated>
          {title}
        </Text>
      </Center>
      <Center pl={{ base: 2, md: 4 }}>
        <Link id={ids} href={links} isExternal>
          {stat}
        </Link>
      </Center>
    </Stat>
  );
}

export default function Contact() {
  return (
    <Box
      maxW="7xl"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      id="contact">
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}>
        Contact Me
      </chakra.h1>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"You can contact me on LinkedIn"}
          stat={"omkar-walavalkar"}
          links={"https://www.linkedin.com/in/omkar-walavalkar-385b18251/"}
          icon={<FaLinkedin size={"3em"} />}
          ids={"contact-linkedin"}
        />
        <StatsCard
          title={"Here is My Phone Number"}
          stat={"+91 9986062050"}
          link={"+91 9986062050"}
          icon={<FaPhoneAlt size={"3em"} />}
          ids={"contact-phone"}
        />
        <StatsCard
          title={"You can Simply mail me just by clicking on my email"}
          stat={"omkarwalavalkar23@gmail.com"}
          links={"omkarwalavalkar23@gmail.com"}
          icon={<MdEmail size={"3em"} />}
          ids={"contact-email"}
        />
        <StatsCard
          title={"Belgaum,Karnataka"}
          stat={"View on Google Map"}
          links={
            "https://www.google.co.in/maps/place/Belagavi,+Karnataka/@15.866981,74.3436234,11z/data=!3m1!4b1!4m6!3m5!1s0x3bbf669f5095362f:0x7e34b31edcdefb5f!8m2!3d15.8496953!4d74.4976741!16zL20vMDM1ejRw?entry=ttu"
          }
          icon={<MdLocationPin size={"3em"} />}
        />
        <StatsCard
          title={"Github"}
          stat={"omkarSw2"}
          links={"https://github.com/omkarSw2"}
          ids={"contact-github"}
          icon={<BsGithub size={"3em"} />}
        />
      </SimpleGrid>

      <Container maxW={"7xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {/* <Center pt={{ base: 4, md: 8 }}> */}
          <img
            id="github-top-langs"
            // align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=omkarSw2&layout=compact&exclude_repo=Lybrate-Website-Clone-Version-2.0,Lybrate-Website-Clone,Adidas-Clone&hide=Shell&border_radius=0&theme=dark"
            alt="omkarSw2"
            width={"100%"}
          />
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcSet="https://streak-stats.demolab.com?user=omkarSw2&theme=dark"
            />
            <img
              id="github-streak-stats"
              src="https://streak-stats.demolab.com/?user=omkarSw2&theme=default%27%20to%20include%20%27github-readme-streak-stats.herokuapp.com"
              alt="omkar-states"
              width={"100%"}
            />
          </picture>
          <img
            id="github-stats-card"
            // align="center"
            src="https://github-readme-stats.vercel.app/api?username=omkarSw2&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en&theme=dark"
            alt="omkarSw2"
            width={"100%"}
          />
          {/* <Center width={"100%"} pt={{ base: 4, md: 8 }}> */}
          <GitHubCalendar
            username="omkarSw2"
            className="react-activity-calendar"
            style={{ fontSize: "20px" }}
          />

          {/* </Center> */}
          {/* </Center> */}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
