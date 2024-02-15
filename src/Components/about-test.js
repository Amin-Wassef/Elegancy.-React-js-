import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faStore } from "@fortawesome/free-solid-svg-icons";
import about from "../Assets/about.webp";
import SectionTitle from "./section_titles";
import SectioSubtitle from "./section_subtitles";
import SectionDescription from "./section_descriptions";

const AboutTest = () => {
  return (
    <Box id="about_box" bgColor={"white"}>
      <Box transform={"translateY(100px)"}>
        <SectionTitle width={"90px"}>About</SectionTitle>
        <SectioSubtitle>
          Find out more&nbsp;
          <span style={{ color: "#106eea" }}>About us</span>
        </SectioSubtitle>
        <SectionDescription>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat
          nullam tortor quis elit lacus
        </SectionDescription>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap-reverse",
          }}
        >
          {/* <Spacer /> */}
          <Box
            // minHeight={"400px"}
            // minWidth={"700px"}
            marginLeft={"1%"}
            marginRight={"1%"}
            // float={"left"}
          >
            <Image id="about_img" src={about} />
          </Box>

          <VStack /*width={"auto"}*/ marginLeft={"1%"} marginRight={"1%"}>
            <Box>
              <Text fontSize={"2xl"} fontWeight={"bold"} color={"#303130"}>
                Sed pharetra ultrices ex, non gravida odio. Vestibulum in metus
                hendrerit, vulputate lacus eget, tempus leo
              </Text>
              <Text color={"gray"}>
                <em>
                  Fusce eleifend mi vitae imperdiet tempor. Nullam non tempor
                  urna. Donec convallis velit at urna vestibulum, vel vehicula
                  enim malesuada.
                </em>
              </Text>
            </Box>

            <Spacer />
            <Spacer />

            <Box>
              <Box>
                <HStack>
                  <Box
                    bgColor={"whitesmoke"}
                    borderWidth={"15px"}
                    borderColor={"whitesmoke"}
                    borderRadius={"100%"}
                    boxShadow="xl"
                  >
                    <FontAwesomeIcon
                      icon={faImages}
                      size="2x"
                      color="#4166f5"
                    />
                  </Box>
                  <Box>
                    <Text
                      fontSize={"20px"}
                      fontWeight={"bold"}
                      color={"#303130"}
                    >
                      Etiam efficitur leo in nibh interdum, id efficitur enim
                      tincidunt
                    </Text>
                    <Text color={"gray"}>
                      Vivamus in ultrices erat. Praesent sit amet gravida enim.
                      Praesent vehicula orci nisl.
                    </Text>
                  </Box>
                </HStack>
              </Box>

              <Spacer />

              <Box>
                <HStack>
                  <Box
                    bgColor={"whitesmoke"}
                    borderWidth={"15px"}
                    borderColor={"whitesmoke"}
                    borderRadius={"100%"}
                    boxShadow="xl"
                  >
                    <FontAwesomeIcon icon={faStore} size="2x" color="#4166f5" />
                  </Box>
                  <Box>
                    <Text
                      fontSize={"20px"}
                      fontWeight={"bold"}
                      color={"#303130"}
                    >
                      Pellentesque aliquam ex sit amet leo pulvinar
                    </Text>
                    <Text color={"gray"}>
                      Proin sagittis porttitor nisl, a tincidunt elit dignissim
                      id. Suspendisse ipsum lacus, fringilla a interdum at,
                      porta vel enim., ultrices auctor. Laoreet magnis justo
                      velit vulputate.
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Box>

            <Spacer />
            <Spacer />

            <Box>
              <Text color={"gray"}>
                Nulla sagittis in sem nec sodales. Mauris tempus risus et
                ultrices tempus. Curabitur ultrices eget tellus vitae lobortis.
                Donec ultrices sed lacus id bibendum. Aenean metus ligula,
                porttitor vel tincidunt vel, porttitor in elit. Fusce malesuada
                orci id ipsum bibendum dapibus. Suspendisse pharetra, nisi ac
                luctus sollicitudin, ipsum urna lobortis justo, nec dignissim
                neque urna a nulla. Curabitur pretium ex dui, ut tempor massa
                tempus eget.
              </Text>
            </Box>
          </VStack>
          <Spacer />
        </div>
      </Box>
    </Box>
  );
};

export default AboutTest;