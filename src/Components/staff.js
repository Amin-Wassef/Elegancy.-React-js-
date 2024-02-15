import { Avatar, Center, VStack } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Caroline from "../Assets/Caroline.jpg";
import Mellicent from "../Assets/Mellicent.jpg";
import Jane from "../Assets/Jane.jpg";
import Georgina from "../Assets/Georgina.jpeg";
import Michael from "../Assets/Michael.jpg";
import Raoul from "../Assets/Raoul.jpg";

const staff = [
  {
    face: Mellicent,
    member_name: "Mellicent",
    title: "Sales Manager",
    key: 1,
  },
  {
    face: Caroline,
    member_name: "Caroline",
    title: "Product Manager",
    key: 2,
  },
  {
    face: Michael,
    member_name: "Michael",
    title: "General Manager",
    key: 3,
  },
  {
    face: Georgina,
    member_name: "Georgina",
    title: "Business Analyst",
    key: 4,
  },
  {
    face: Raoul,
    member_name: "Raoul",
    title: "Finance Manager",
    key: 5,
  },
  {
    face: Jane,
    member_name: "Jane",
    title: "Administrator",
    key: 6,
  },
];

const avatar = staff.map(({ face, member_name, title, key }) => {
  return (
    <VStack
      key={key}
      paddingTop={"50px"}
      backgroundColor={"blackAlpha.600"}
      minHeight={"70vh"}
      minWidth={"100%"}
    >
      <Center>
        <Avatar
          name={member_name}
          src={face}
          size={"2xl"}
          borderColor={"blanchedalmond"}
          borderWidth={"medium"}
        />
      </Center>
      <Center id="staff_name">{member_name}</Center>
      <Center id="staff_title">{title}</Center>
      <Center id="staff_quote" width={"75vw"} style={{ textAlign: "center" }}>
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat
        nullam tortor quis elit lacus. Sed pharetra ultrices ex, non gravida
        odio. Vestibulum in metus hendrerit"
      </Center>
    </VStack>
  );
});

const Staff = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      arrows={false}
      showDots={true}
      autoPlay={true}
      autoPlaySpeed={7000}
    >
      {avatar}
    </Carousel>
  );

  /**
  Manual Method
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    setActiveIndex(newIndex);
    console.log(activeIndex);
  };
  return (
    <>
      <div
        style={{
          height: "70vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 0.3s",
            transform: `translateX(calc(-${activeIndex} * 100%))`,
          }}
        >
          {avatar}
        </div>
        <Center>
          {staff.map((index, key) => {
            return (
              <span
                key={key}
                className={`material-symbols-outlined ${
                  staff.indexOf(index) === activeIndex
                    ? "indicator-symbol-avtive"
                    : "indicator-symbol"
                }`}
                style={{
                  fontSize: "16px",
                  transform: "translateY(-500%)",
                  cursor: "default",
                  color: "white",
                }}
                onClick={() => updateIndex(staff.indexOf(index))}
              >
                radio_button_unchecked
              </span>
            );
          })}
        </Center>
      </div>
    </>
  );
  */
};

export default Staff;
