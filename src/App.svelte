<script>
  import Profile from "./Profile.svelte";
  import Todos from "./Todos.svelte";

  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";
  import TopMenubar from "./TopMenuBar.svelte";
  import Countdown from "./components/Pomodoro/Countdown.svelte";
  import TimerOptionsMenu from "./components/Pomodoro/TimerOptionsMenu.svelte";
  import Pomodoro from "./components/Pomodoro/Pomodoro.svelte";

import Settings from "./components/Settings/Settings.svelte";
import IndexModal from "./components/Modal/IndexModal.svelte";

  let user;

  const unsubscribe = authState(auth).subscribe((u) => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<section>
  <Settings />
  <Pomodoro />
  <IndexModal />
  
  <!-- {#if user}
    <Profile {...user} />
    <button on:click={() => auth.signOut()}>Logout</button>
    <hr />
    <Todos uid={user.uid} />
  {:else}
    <button on:click={login}> Signin with Google </button>
  {/if} -->
</section>
