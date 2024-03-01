import { useEffect } from "react";

function Timer({ secondsReamining, dispatch }) {
  const minutes = Math.floor(secondsReamining / 60);
  const seconds = secondsReamining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        //   console.log("tick");
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
