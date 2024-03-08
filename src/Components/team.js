import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import SectionTitle from "./section_titles";
import SectioSubtitle from "./section_subtitles";
import SectionDescription from "./section_descriptions";
import Paul from "../Assets/Paul.jpg";
import Irene from "../Assets/Irene.jpg";
import Celine from "../Assets/Celine.jpg";
import John from "../Assets/John.jpg";

const team = [
  {
    portrait: Paul,
    member_name: "Paul Nicolas",
    title: "CEO",
    key: 1,
  },
  {
    portrait: Irene,
    member_name: "Irene Adhiambo",
    title: "Public Relations",
    key: 2,
  },
  {
    portrait: Celine,
    member_name: "Celine Christopher",
    title: "Designer",
    key: 3,
  },
  {
    portrait: John,
    member_name: "John Broke",
    title: "Team Manager",
    key: 4,
  },
];

const member = team.map(({ portrait, member_name, title, key }) => {
  return (
    <Box key={key} borderRadius={25} id="team_stack">
      <Image
        src={portrait}
        width={"260px"}
        height={"330"}
        borderTopRadius={25}
      />
      <Box bg={"whitesmoke"} height={"70px"} borderBottomRadius={25}>
        <VStack>
          <Text fontSize={20} fontWeight={"bold"}>
            {member_name}
          </Text>
          <Text fontSize={16} color={"GrayText"}>
            {title}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
});

const Team = () => {
  return (
    <Box id="team_box" height={"110vh"} bgColor={"white"}>
      <Box transform={"translateY(100px)"}>
        <SectionTitle width={"90px"}>Team</SectionTitle>
        <SectioSubtitle>
          Our Wonderful&nbsp;
          <span style={{ color: "#106eea" }}>Team</span>
        </SectioSubtitle>
        <SectionDescription>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat
          nullam tortor quis elit lacus
        </SectionDescription>
        <Center width={"100%"}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "7%",
              rowGap: "35px",
              width: "100%",
              justifyContent: "center",
            }}
            spacing={"105px"}
          >
            {member}
          </div>
        </Center>
      </Box>
    </Box>
  );
};

export default Team;
