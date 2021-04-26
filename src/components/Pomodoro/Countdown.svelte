<script>
  import { workDuration, selectedDuration, sessionDuration } from "../../stores.js";
  import { beforeUpdate, afterUpdate } from 'svelte';


  $: minutes = $selectedDuration/60;
  $: seconds = $selectedDuration%60;

  console.log({seconds});
  $: console.log($selectedDuration);
  $: console.log(minutes);
  $: console.log(seconds);

  $: if (sessionDuration === 0) {
    minutes = $selectedDuration/60;
    seconds = 0;
  }

  // let seconds = 0;
  export let startTimer;

  // beforeUpdate(() => {
    
  // })

  // afterUpdate(() => {
  //   if (sessionDuration === 0) {
  //     console.log("Session duration is 0");
  //   }
    
	// });



  var timer = null;

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
