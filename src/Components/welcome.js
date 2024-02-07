import { Box, Button, Text } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <>
      <Box id="welcome_text">
        <Text fontSize={"5xl"} fontWeight={"bold"}>
          Welcome To <span style={{ color: "#7e481c" }}>Eleg@ncy</span>
        </Text>
        <Text fontSize={"3xl"}>
          Elegancy Fashion website created using React js.
        </Text>
        <Button id="welcome_btn">Shop now</Button>
      </Box>
    </>
  );
};

export default Welcome;
