<script>
  import { authState } from "rxfire/auth";
  import Pomodoro from "./components/Pomodoro/Pomodoro.svelte";
  import Settings from "./components/Settings/Settings.svelte";
  import { auth, googleProvider } from "./firebase";

  let user;

  const unsubscribe = authState(auth).subscribe((u) => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<section>
  <div class="background">
  <Settings />
  <Pomodoro />
  <!-- <IndexModal /> -->

  <!-- {#if user}
    <Profile {...user} />
    <button on:click={() => auth.signOut()}>Logout</button>
    <hr />
    <Todos uid={user.uid} />
  {:else}
    <button on:click={login}> Signin with Google </button>
  {/if} -->
</div>
</section>

<style>
  div {
    color: white;
    font-family: Georgia, serif;
  }
  .background {
    width: 100%;
    height: 100vh;
    background: black;
  }

 
</style>
