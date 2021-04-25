<script>
  export let minutes;
  export let seconds;
  function setMinutes(value) {
    minutes = value;
    seconds = 0;
  }
</script>

<section>
  <button on:click={() => setMinutes(25)}>25 minutes</button>
  <button on:click={() => setMinutes(5)}>5 minute break</button>
  <button on:click={() => setMinutes(15)}>15 minute break</button>
</section>
