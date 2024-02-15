import { Flex, HStack, Input, Spacer, Text, Avatar } from "@chakra-ui/react";

const links = [
  {
    li: "Home",
    href: "#nav1",
    id: "nav1",
    key: 1,
  },
  {
    li: "Products",
    href: "#portfolio_box",
    id: "portfolio_box",
    key: 2,
  },
  {
    li: "About",
    href: "#about_box",
    id: "about_box",
    key: 3,
  },
  {
    li: "Team",
    href: "#team_box",
    id: "team_box",
    key: 4,
  },
  {
    li: "Location",
    href: "#location_box",
    id: "location_box",
    key: 4,
  },
];

const handleClick = (anchor) => (e) => {
  e.preventDefault();
  const id = `${anchor}`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const nav2_links = links.map(({ li, href, id, key }) => {
  return (
    <a key={key} href={href} onClick={handleClick(id)}>
      {li}
    </a>
  );
});

const Nav2 = () => {
  return (
    <nav id="nav2" className="nav2_shadow">
      <Flex style={{ padding: "15px" }}>
        <Text id="logo" fontSize={"4xl"} as={"b"}>
          Eleg<span style={{ color: "#1E90FF" }}>@</span>ncy
          <span style={{ color: "#1E90FF" }}>.</span>
        </Text>
        <Spacer />
        <Input
          focusBorderColor="black"
          borderColor="#696969"
          placeholder="🔍 Search for a product here.."
          id="search"
        />
        <Spacer />
        <HStack spacing={8} marginRight={5}>
          {nav2_links}
          <Avatar width={"35x"} height={"35px"} boxShadow={"md"} />
        </HStack>
      </Flex>
    </nav>
  );
};

export default Nav2;
