import "../App.css";
import { useRef, useEffect } from "react";
import { Flex, HStack, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { IconButton } from "@chakra-ui/react";

const socials = [
  {
    icon: faTwitter,
    url: "https://twitter.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://linkedin.com",
  },
  {
    icon: faInstagram,
    url: "http://instagram.com",
  },
  {
    icon: faFacebook,
    url: "http://facebook.com",
  },
];

const logos = socials.map(({ icon, url }) => {
  return (
    <a id="nav-1-links" href={url} key={url}>
      <FontAwesomeIcon icon={icon} size="1x" />
    </a>
  );
});

const search = () => {
  return (
    <IconButton
      colorScheme="blue"
      aria-label="Search database"
      icon={<SearchIcon />}
    />
  );
};

const Nav1 = () => {
  const nav1Ref = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = nav1Ref.current;

      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-60px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="nav1" ref={nav1Ref}>
      <Flex marginRight={20} marginLeft={20}>
        <HStack className="nav-1-contact" spacing={4}>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            <FontAwesomeIcon icon={faEnvelope} />
            <span> </span>
            contact@gmail.com
          </a>
          <a>
            <FontAwesomeIcon icon={faPhone} />
            <span> </span>
            +2 01285645963
          </a>
        </HStack>
        <Spacer />
        <HStack spacing={5} color={"white"}>
          {logos}
        </HStack>
      </Flex>
    </nav>
  );
};

export default Nav1;
