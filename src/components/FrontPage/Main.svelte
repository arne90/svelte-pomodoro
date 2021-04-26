<script>
  import Pomodoro from "../Pomodoro/Pomodoro.svelte";
  import Progressbar from "../Progressbar/Progressbar.svelte";

  import Settings from "../Settings/Settings.svelte";

  console.log("I am the background lol");
</script>

<section class="background">
  <div class="wrapper">
    <Settings />
    <Pomodoro />
    <Progressbar />
  </div>
</section>

<style>
  .wrapper {
    background: grey;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    color: white;
    font-family: 'Nunito', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .background {
    width: 100%;
    height: 100vh;
    background: black;
    z-index: -1;
  }
</style>
