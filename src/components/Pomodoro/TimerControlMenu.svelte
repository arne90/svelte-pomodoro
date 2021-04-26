<script>
  import { faFastForward } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import {
    selectedDuration,
    workDuration,
    sessionDuration,
  } from "../../stores.js";

  function fastForward() {
    let remainingDuration = $selectedDuration - $sessionDuration;
    workDuration.update((workDuration) => workDuration + remainingDuration);
    sessionDuration.set(0);

    startTimer = false;
  }

  export let startTimer;
</script>

<div>
  <button on:click={() => (startTimer = !startTimer)}>{startTimer? "STOP" : "PLAY"}</button>
  <button on:click={() => fastForward()}>
    <FontAwesomeIcon icon={faFastForward} />
  </button>
</div>
