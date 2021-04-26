<script>
  export const test = () => console.log('testing');

  export const formatTimeBasedOnSeconds = (input) => {
    let hours = Math.trunc(input / (60 * 60));
    if (hours < 10) hours = "0" + hours;
    let minutes = Math.trunc((input / 60) % 60);
    if (minutes < 10) minutes = "0" + minutes;
    let seconds = input % 60;
    if (seconds < 10) seconds = "0" + seconds;
    console.log("Kim K is ugly lol");
    return hours + ":" + minutes + ":" + seconds;
  };
</script>