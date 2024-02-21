const StoreStatus = () => {
  let localDateTime = new Date();

  let egyptCurrentDay = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    timeZone: "Africa/Cairo",
  }).format(localDateTime);

  let egyptCurrentTime = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    hour12: false,
    timeZone: "Africa/Cairo",
  }).format(localDateTime);

  if (
    (egyptCurrentDay === "Sunday" ||
      egyptCurrentDay === "Monday" ||
      egyptCurrentDay === "Tuesday" ||
      egyptCurrentDay === "Wednesday" ||
      egyptCurrentDay === "Thursday") &&
    egyptCurrentTime >= 8 &&
    egyptCurrentTime < 22
  ) {
    return (
      <div style={{ fontWeight: "bold" }}>
        Now: &nbsp;<span style={{ color: "green" }}>Open</span>
      </div>
    );
  } else if (
    egyptCurrentDay === "Friday" &&
    egyptCurrentTime >= 10 &&
    egyptCurrentTime < 18
  ) {
    return (
      <div style={{ fontWeight: "bold" }}>
        Now: &nbsp;<span style={{ color: "green" }}>Open</span>
      </div>
    );
  } else {
    return (
      <div style={{ fontWeight: "bold" }}>
        Now: &nbsp;<span style={{ color: "red" }}>Close</span>
      </div>
    );
  }
};

export default StoreStatus;
