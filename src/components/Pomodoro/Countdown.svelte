<script>
  import { onMount } from "svelte";
  export let minutes;
  export let seconds;
  export let startTimer;
  $: shownSeconds = seconds < 10 ? "0" + seconds : seconds;
  $: shownMinutes = minutes < 10 ? "0" + minutes : minutes;


  var timer = null;

  function tick() {
    if (minutes === 0 && seconds === 0) {
      // Finished
      startTimer = false;
      return;
    }
    if (seconds === 0) {
      minutes -= 1;
      seconds = 60;
    }
    seconds -= 1;
    start(); // restart the timer
  }

  function start() {
    timer = setTimeout(tick, 10);
  }

  function stop() {
    clearTimeout(timer);
  }

  $: if (startTimer) {
    start();
  } else {
    stop();
  }

  // return () => {
  //   clearInterval(interval);
  // };

  // if (minutes < 10) {
  //   $shownMinutes = "0" + minutes;
  // } else {
  //   $shownMinutes = minutes;
  // }
  // if (seconds < 10) {
  //   $shownSeconds = "0" + seconds.toString();
  // } else {
  //   $shownSeconds = seconds;
  // }

  console.log({ shownMinutes });
</script>

<section>
  <p>{shownMinutes + ":" + shownSeconds}</p>
</section>
