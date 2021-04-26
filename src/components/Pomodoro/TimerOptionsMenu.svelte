<script>
  import { selectedDuration, sessionDuration } from "../../stores.js";

  function setDuration(value) {
    sessionDuration.set(0);
    selectedDuration.set(0); // set to 0 to reset the value --> force state to change in other components
    selectedDuration.set(value);
  }
</script>

<section>
  <button on:click={() => setDuration(25 * 60)}>25 minutes</button>
  <button on:click={() => setDuration(5 * 60)}>5 minute break</button>
  <button on:click={() => setDuration(15 * 60)}>15 minute break</button>
</section>
