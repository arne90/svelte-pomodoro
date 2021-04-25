<script>
  import Countdown from "./Countdown.svelte";
import TimerControlMenu from "./TimerControlMenu.svelte";
  import TimerOptionsMenu from "./TimerOptionsMenu.svelte";

  export let minutes = 25;
  export let seconds = 0;
  export let startTimer = false;

</script>

<TimerOptionsMenu bind:minutes bind:seconds />
<Countdown bind:minutes bind:seconds bind:startTimer/>
<TimerControlMenu bind:startTimer/>
