<script>
  import Countdown from "./Countdown.svelte";
  import TimerControlMenu from "./TimerControlMenu.svelte";
  import TimerOptionsMenu from "./TimerOptionsMenu.svelte";
  import { selectedDuration } from "../../stores.js";

  // export let minutes = $selectedDuration;
  // export let seconds = 0;
  export let startTimer = false;
</script>

<TimerOptionsMenu />
<Countdown bind:startTimer />
<TimerControlMenu bind:startTimer />
