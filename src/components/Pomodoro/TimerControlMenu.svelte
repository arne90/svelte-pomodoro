<script>
  export let startTimer;
</script>

<button on:click={() => (startTimer = true)}>PLAY</button>
<button on:click={() => (startTimer = false)}>STOP</button>
