<script>
  import { workGoal, selectedDuration, workDuration, sessionDuration } from "../../stores.js";
</script>

<p>Selected duration is: {$selectedDuration}</p>
<p>Seconds passed is: {$sessionDuration}</p>
<progress value={$sessionDuration/($selectedDuration)} />

<p>Work goal is: {$workGoal}</p>
<progress value={$workDuration/($workGoal)} />

<style>
  progress {
    display: block;
    width: 50%;
  }
</style>
