<script>
  import { workDuration, selectedDuration, sessionDuration } from "../../stores.js";

  $: minutes = $selectedDuration/60;
  $: seconds = $selectedDuration%60;

  $: if ($sessionDuration === 0) { // Handles fastforwarding
    minutes = $selectedDuration/60;
    seconds = $selectedDuration%60;
  }

  export let startTimer;
  let timer = null;

  function tick() {
    if (minutes === 0 && seconds === 0) {
      // Finished
      console.log("Timer is done, something should happen!");
      $sessionDuration = 0;
      startTimer = false;
      return;
    }
    if (seconds === 0) {
      minutes -= 1;
      seconds = 60;
    }
    seconds -= 1;
    // EVERY SECOND
    $sessionDuration ++;
    $workDuration ++;

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


</script>

<section>
  <p>{(minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds)}</p>
</section>
