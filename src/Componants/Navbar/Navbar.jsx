import { Link } from "react-scroll";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun } from "react-icons/fa";
import Resume from "../Assets/Omkar_Walavalkar_Resume.pdf";
import { Link as ReatLink } from "react-router-dom";
import React from "react";

class ResumeButton extends React.Component {
  render() {
    const resumeUrl = Resume;
    return (
      <ReatLink id="resume-button-1" to={resumeUrl} target="_blank" download>
        <Button
          className="nav-link resume"
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

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box>
      <Flex
        id="nav-menu"
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Heading
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"cursive"}
            color={useColorModeValue("gray.600", "white")}>
            Omkar
          </Heading>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}>
          <ResumeButton />

          <IconButton
            display={{ base: "none", md: "inline-flex" }}
            icon={isDark ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            isRound={true}></IconButton>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        // < key={navItem.label}>
        <Link to={navItem.id} className={navItem.className} key={navItem.label}>
          <Button
            p={2}
            fontSize={"sm"}
            fontWeight={500}
            color={linkColor}
            bg={"transparent"}
            _hover={{
              textDecoration: "none",
              transform: "scale(1.05, 1.05)",
              borderRadius: "5px",
              bg: "teal.400",
              color: "white",
              _dark: {
                bg: "teal.300",
              },
            }}>
            {navItem.label}
          </Button>
        </Link>
        // </>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, className, id }) => {
  return (
    <Stack spacing={4}>
      <Flex
        // className={className}
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}>
        <Link
          to={id}
          // className={className}
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}>
          {label}
        </Link>
      </Flex>
    </Stack>
  );
};
const NAV_ITEMS = [
  {
    label: "Home",
    id: "home",
    className: "nav-link home",
  },
  {
    label: "About",
    id: "about",
    className: "nav-link about",
  },
  {
    label: "Skills",
    id: "skills",
    className: "nav-link skills",
  },
  {
    label: "Project",
    id: "projects",
    className: "nav-link projects",
  },
  {
    label: "Contact",
    id: "contact",
    className: "nav-link contact",
  },
];
