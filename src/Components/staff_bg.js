import staff from "../Assets/staff.jpg";
import Staff from "./staff";

const Staff_bg = () => {
  return (
    <>
      <img
        src={staff}
        style={{
          position: "absolute",
          zIndex: -1,
          height: "70vh",
          width: "100%",
        }}
      />
      <Staff />
    </>
  );
};
export default Staff_bg;
