import React, { useState, useEffect, useMemo } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    //componentDidMount() コンポーネントが初めて描画されるタイミング
    const interval = setInterval(() => setTime(new Date()), 1000);
    //componentWillUnmount()　コンポーネントが破棄されるタイミング
    return () => {
      clearInterval(interval);
    };
  }, []);

  const format = useMemo(() => {
    const hour = time.getHours();
    const minute = time.getMinutes();

    return `${("0" + hour).slice(-2)}:${("0" + minute).slice(-2)}`;
  }, [time]);

  return <div>{format}</div>;
};

export default Time;
