<script>
  import { workGoal } from "../../stores.js";
	import { afterUpdate } from 'svelte';

	afterUpdate(() => {
		workGoal.set(workGoal_value);
	});

  console.log(workGoal);

  let workGoal_value;

  const unsubscribe = workGoal.subscribe((value) => {
    workGoal_value = value;
  });
</script>

<section>
  <h2>Settings {workGoal_value}</h2>
  <p>Adjust settings as you wish.</p>
  <label>
    <input type="number" bind:value={workGoal_value} min="0" max="10" />
    <input type="range" bind:value={workGoal_value} min="0" max="10" />
  </label>
  <h1>The count is {workGoal_value}</h1>
</section>

<style>
  h2 {
    font-size: 2rem;
    text-align: center;
  }
</style>
