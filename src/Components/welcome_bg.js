import ScrollOverlay from "./overlay";
import Welcome from "./welcome";
import profile from "../Assets/profile.jpg";

const Welcome_bg = () => {
  return (
    <ScrollOverlay backgroundImage={profile} Y={652} height={"82%"} scroll={50}>
      <Welcome />
    </ScrollOverlay>
  );
};

export default Welcome_bg;
