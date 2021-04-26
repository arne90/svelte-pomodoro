<script>
  import { workGoal } from "../../stores.js";

	let hours = 0;
	let minutes = 0;
	let seconds = 0;
</script>

<section>
  <h2>Settings {$workGoal}</h2>
  <p>Adjust settings as you wish.</p>
  <label>
		Hours: 
    <input type="number" bind:value={hours} min="0" max="24" />
		Minutes: 
    <input type="number" bind:value={minutes} min="0" max="60" />
		Seconds: 
    <input type="number" bind:value={seconds} min="0" max="60" />


    <input type="range" bind:value={$workGoal} min="0" max="10" step="0.5" />
  </label>
  <h1>The count is {$workGoal}</h1>
</section>

<style>
  h2 {
    font-size: 2rem;
    text-align: center;
  }
</style>
