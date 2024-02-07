import { Box, Button, Circle, Image } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dress from "../Assets/dress.jpg";
import coat from "../Assets/coat.jpg";
import scarf from "../Assets/scarf.webp";
import shoes from "../Assets/shoes.webp";
import bag from "../Assets/bag.webp";
import pijamas from "../Assets/pijamas.jpg";
import suites from "../Assets/suites.webp";
import SectionTitle from "./section_titles";
import SectioSubtitle from "./section_subtitles";
import SectionDescription from "./section_descriptions";

const pdts = [
  {
    img: dress,
    p_name: "Dresses",
    key: 1,
  },
  {
    img: coat,
    p_name: "Coats",
    key: 2,
  },
  {
    img: scarf,
    p_name: "Scarves",
    key: 3,
  },
  {
    img: shoes,
    p_name: "Shoes",
    key: 4,
  },
  {
    img: bag,
    p_name: "Bags",
    key: 5,
  },
  {
    img: pijamas,
    p_name: "Pijamas",
    key: 6,
  },
  {
    img: suites,
    p_name: "Suites",
    key: 7,
  },
];

const products = pdts.map(({ img, p_name, key }) => {
  return (
    <Box key={key} minWidth={"340px"} height={"340px"} paddingY={"40px"}>
      <Circle>
        <Box style={{ transform: "transitionY(-15%)" }}>
          <Image
            id="pdt_img"
            src={img}
            align={"center"}
            style={{
              width: "250px",
              height: "250px",
            }}
          />
          <Button id="pdt_img_btn">{p_name}</Button>
        </Box>
      </Circle>
    </Box>
  );
});

const Categories = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box id="portfolio_box" height={"80vh"} bgColor={"white"}>
      <Box transform={"translateY(100px)"}>
        <SectionTitle width={"110px"}>Portfolio</SectionTitle>
        <SectioSubtitle>
          Check our&nbsp;
          <span style={{ color: "#106eea" }}>Portfolio</span>
        </SectioSubtitle>
        <SectionDescription>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat
          nullam tortor quis elit lacus
        </SectionDescription>

        <Carousel responsive={responsive} infinite={true} swipeable={true}>
          {products}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Categories;
