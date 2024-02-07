import { Center } from "@chakra-ui/react";

const SectionTitle = ({ width, children }) => {
  return (
    <Center id="section_titles" width={width}>
      {children}
    </Center>
  );
};

export default SectionTitle;
