const TimeBanner = () => {
  /*const min = document.getElementById("minutes");
  const date = new Date();
  console.log(date);*/
  return (
    <div className="time-banner">
      <div className="time-left" id="minutes">
        Only 49 minutes left 😃
      </div>
      <div className="estimated-time">
        (Estimated delivery: Dec 12, 01:37 PM)
      </div>
    </div>
  );
};

export default TimeBanner;
