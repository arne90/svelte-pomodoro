<script>
  import { workGoal, selectedDuration, workDuration, sessionDuration, workGoalHours } from "../../stores.js";

  $: formatTimeBasedOnSeconds = (input) => {
    let hours = Math.trunc(input/(60*60));
    if (hours < 10) hours = "0" + hours;
    let minutes = Math.trunc(input/60%60);
    if (minutes < 10) minutes = "0" + minutes;
    let seconds = input%60;
    if (seconds < 10) seconds = "0" + seconds;
    return hours + ":" + minutes + ":" + seconds;
  }
</script>

<p>Selected duration is: {$selectedDuration}</p>
<p>Seconds passed is: {$sessionDuration}</p>
<progress value={$sessionDuration/($selectedDuration)} />

<p>Work goal is: {$workGoal}</p>
<p>Your work goal is set to: {formatTimeBasedOnSeconds($workGoal)}</p>
<p>You have been working for: {formatTimeBasedOnSeconds($workDuration)}</p>
<progress value={$workDuration/($workGoal)} />

<style>
  progress {
    display: block;
    width: 50%;
  }
</style>
