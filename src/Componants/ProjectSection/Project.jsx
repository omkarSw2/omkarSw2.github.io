import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  chakra,
  Icon,
  useColorModeValue,
  Wrap,
  WrapItem,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import myntra from "../Assets/Screenshot 2023-06-01 180829.png";
import shopnow from "../Assets/shopnow.png";
import runfast from "../Assets/runfast.png";
import gardenguru from "../Assets/gardenguru.png";
import { FaCss3Alt, FaHtml5, FaGithub, FaLink, FaReact } from "react-icons/fa";
import { SiTypescript, SiChakraui } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { Link } from "react-router-dom";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction="row" align="center">
      <Tooltip fontWeight={600} label={text} placement="bottom">
        <Flex
          w={8}
          h={8}
          align="center"
          justify="center"
          rounded="full"
          bg={iconBg}>
          {icon}
        </Flex>
      </Tooltip>
    </Stack>
  );
};

const Projectarr = [
  {
    id: 1,
    image: myntra,
    description:
      "Discover the latest fashion trends, shop for clothing, accessories,and footwear, and enjoy a seamless shopping experience with Myntra.",
    name: "Myntra Clone",
    github: "https://github.com/omkarSw2/interesting-cushion-8854",
    live: "https://myntra-omkar.netlify.app/",
    tools: [
      {
        id: 1,
        name: "HTML",
        color: "orange",
        icon: FaHtml5,
      },
      {
        id: 2,
        name: "CSS",
        color: "blue",
        icon: FaCss3Alt,
      },
      {
        id: 3,
        name: "Javascript",
        color: "yellow",
        icon: SiJavascript,
      },
    ],
  },
  {
    id: 2,
    image: shopnow,
    description:
      "Discover the latest fashion trends, shop for clothing, accessories,and footwear, and enjoy a seamless shopping experience with Myntra.",
    name: "Shop Now",
    github: "https://github.com/Rinkesh375/flying-word-4664",
    live: "https://shop-now-eight.vercel.app/",
    tools: [
      {
        id: 1,
        name: "HTML",
        color: "orange",
        icon: FaHtml5,
      },
      {
        id: 2,
        name: "CSS",
        color: "blue",
        icon: FaCss3Alt,
      },
      {
        id: 3,
        name: "Javascript",
        color: "yellow",
        icon: SiJavascript,
      },
      {
        id: 4,
        name: "React",
        color: "blue",
        icon: FaReact,
      },
      {
        id: 5,
        name: "TypeScript",
        color: "blue",
        icon: SiTypescript,
      },
    ],
  },
  {
    id: 3,
    image: runfast,
    description:
      "Discover the latest fashion trends, shop for clothing, accessories,and footwear, and enjoy a seamless shopping experience with Myntra.",
    name: "Run Fast",
    github: "https://github.com/abhimanyulp/Run-Fast",
    live: "https://wonderful-bubblegum-6d57d1.netlify.app/",
    tools: [
      {
        id: 1,
        name: "HTML",
        color: "orange",
        icon: FaHtml5,
      },
      {
        id: 2,
        name: "CSS",
        color: "blue",
        icon: FaCss3Alt,
      },
      {
        id: 3,
        name: "Javascript",
        color: "yellow",
        icon: SiJavascript,
      },
    ],
  },
  {
    id: 4,
    image: gardenguru,
    description:
      "Discover the latest fashion trends, shop for clothing, accessories,and footwear, and enjoy a seamless shopping experience with Myntra.",
    name: "Garden Guru",
    github: "https://github.com/pashupati-singh/true-mine-3269/tree/main",
    live: "https://idyllic-hamster-829ab7.netlify.app/",
    tools: [
      {
        id: 1,
        name: "HTML",
        color: "orange",
        icon: FaHtml5,
      },
      {
        id: 2,
        name: "CSS",
        color: "blue",
        icon: FaCss3Alt,
      },
      {
        id: 3,
        name: "Javascript",
        color: "yellow",
        icon: SiJavascript,
      },
      {
        id: 4,
        name: "Chakra-UI",
        color: "cyan",
        icon: SiChakraui,
      },
      {
        id: 5,
        name: "React",
        color: "blue",
        icon: FaReact,
      },
    ],
  },
];

export default function Project() {
  return (
    <Container maxW="5xl" py={12} id="projects">
      <chakra.h1 textAlign="center" fontSize="4xl" py={10} fontWeight="bold">
        Projects
      </chakra.h1>
      {Projectarr?.map((el) => (
        <SimpleGrid
          key={el.id}
          m={4}
          className="project-card"
          bg={"blackAlpha.200"}
          columns={{ base: 1, md: 2 }}
          spacing={10}
          borderRadius={"lg"}
          padding={{ base: 4, md: 8 }}>
          <Flex>
            <Image
              rounded="md"
              alt="feature image"
              src={`${el.image}`}
              objectFit="cover"
            />
          </Flex>
          <Stack spacing={4}>
            <Heading className="project-title">{el.name}</Heading>
            <Text
              color="gray.500"
              fontSize="lg"
              className="project-description">
              {el.description}
            </Text>
            <Wrap>
              {el.tools?.map((pro) => (
                <ToolFeature
                  key={pro.id}
                  tool={pro}
                  class="project-tech-stack"
                />
              ))}
            </Wrap>
            <Flex ml={4}>
              <Link to={el.github} className="project-github-link">
                <Button
                  ml={4}
                  leftIcon={<FaGithub />}
                  colorScheme="gray"
                  variant="solid">
                  Github
                </Button>
              </Link>
              <Link to={el.live} className="project-deployed-link">
                <Button
                  ml={4}
                  leftIcon={<FaLink />}
                  colorScheme="linkedin"
                  variant="solid">
                  Live
                </Button>
              </Link>
            </Flex>
          </Stack>
        </SimpleGrid>
      ))}
    </Container>
  );
}

function ToolFeature({ tool }) {
  const iconBg = useColorModeValue(`${tool.color}.100`, `${tool.color}.900`);

  return (
    <WrapItem>
      <Feature
        // key={tool.id}
        icon={<Icon as={tool.icon} color={`${tool.color}.500`} w={5} h={5} />}
        iconBg={iconBg}
        text={tool.name}
      />
    </WrapItem>
  );
}
