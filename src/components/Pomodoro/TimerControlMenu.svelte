<script>
  import { faFastForward } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
  import { workGoal, selectedDuration, workDuration, sessionDuration } from "../../stores.js";

  function fastForward() {
    let remainingDuration = $selectedDuration - $sessionDuration;
    workDuration.update(workDuration => workDuration + remainingDuration);
    sessionDuration.set(0);
    

    startTimer = false;
  }

  export let startTimer;
</script>

<button on:click={() => (startTimer = true)}>PLAY</button>
<button on:click={() => (startTimer = false)}>STOP</button>
<button on:click={() => fastForward()}
  ><FontAwesomeIcon icon={faFastForward} /></button
>
