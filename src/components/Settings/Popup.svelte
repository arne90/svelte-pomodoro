<script>
  import { workGoal } from "../../stores.js";
</script>

<section>
  <h2>Settings</h2>
  <p>Adjust settings as you wish.</p>

  <label>
    Work hours goal:
    <button on:click={workGoal.incrementHours}>+</button>
    <button on:click={workGoal.decrementHours}>-</button>
    {$workGoal / 60 / 60}
  </label>
</section>

<style>
  h2 {
    font-size: 2rem;
    text-align: center;
  }
</style>
