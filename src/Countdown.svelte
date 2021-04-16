<script>
  import { onMount } from "svelte";

  export let minutes = 25;
  let seconds = 0;
  $: shownSeconds = seconds < 10 ? ("0" + seconds) : seconds;
  $: shownMinutes = minutes < 10 ? ("0" + minutes) : minutes;

  onMount(() => {
    const interval = setInterval(() => {
      // console.log({minutes});
      // console.log({seconds});
      if (minutes === 0 && seconds === 0) {
        // Finished
        return;
      }
      if (seconds === 0) {
        minutes -= 1;
        seconds = 60;
      }
      seconds -= 1;
    }, 10);

    return () => {
      clearInterval(interval);
    };
  });

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

<!-- svelte-ignore missing-declaration -->
<section>
  <p>{shownMinutes + ":" + shownSeconds}</p>
</section>
