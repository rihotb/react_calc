import React from "react";

const Time = () => {
  const today = new Date();
  let hour = today.getHours();
  hour = ("0" + hour).slice(-2);
  let minute = today.getMinutes();
  minute = ("0" + minute).slice(-2);

  const now = `${hour} : ${minute}`;

  return <div>{now}</div>;
};

export default Time;
