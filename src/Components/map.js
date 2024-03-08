import { Box } from "@chakra-ui/react";
import SectionTitle from "./section_titles";
import SectioSubtitle from "./section_subtitles";
import SectionDescription from "./section_descriptions";
import StoreStatus from "./store_status";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

const Map = () => {
  return (
    <Box id="location_box" height={"110vh"} bgColor={"white"}>
      <Box transform={"translateY(100px)"}>
        <SectionTitle width={"90px"}>Location</SectionTitle>
        <SectioSubtitle>
          Where you can&nbsp;
          <span style={{ color: "#106eea" }}>Find us</span>
        </SectioSubtitle>
        <SectionDescription>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat
          nullam tortor quis elit lacus
        </SectionDescription>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20%",
            rowGap: "20px",
          }}
        >
          <div>
            <p className="location-titles" id="E-S">
              Eleg@ncy Store
            </p>
            <br />
            <p>
              <StoreStatus />
            </p>
            <br />
            <p>
              <FontAwesomeIcon icon={faCalendarDays} size="xs" />
              &nbsp;<span className="location-titles">Open</span>
              <br />
              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  Sunday
                  <br />
                  Monday
                  <br />
                  Tuesday
                  <br />
                  Wednesday
                  <br />
                  Thursday
                  <br />
                  Friday
                  <br />
                </div>

                <div>
                  8:00 am - 10:00 pm
                  <br />
                  8:00 am - 10:00 pm
                  <br />
                  8:00 am - 10:00 pm
                  <br />
                  8:00 am - 10:00 pm
                  <br />
                  8:00 am - 10:00 pm
                  <br />
                  10:00 am - 6:00 pm
                  <br />
                </div>
              </div>
            </p>
            <br />
            <p>
              <FontAwesomeIcon icon={faCalendarDays} size="xs" />
              &nbsp;<span className="location-titles">Close</span>
              <br />
              <span>Saturday</span>
            </p>
            <br />
            <p>
              <FontAwesomeIcon icon={faLocationPin} size="xs" />
              &nbsp;<span className="location-titles">Adress location</span>
              <br />
              <span>
                17 Abd El-Qader Ragab Basha, Abu an Nawatir,
                <br /> Sidi Gaber, Alexandria Governorate, Egypt
              </span>
            </p>
          </div>
          <iframe
            id="map"
            width="600"
            height="400"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=17%20Abd%20El-Qader%20Ragab%20Basha,%20Abu%20an%20Nawatir,%20Sidi%20Gaber,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Alexandria%20Governorate%2021648,%20Egypt+(My%20BEle@ncy%20Store)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
      </Box>
    </Box>
  );
};

export default Map;