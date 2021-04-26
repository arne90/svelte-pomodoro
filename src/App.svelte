<script>
  import { authState } from "rxfire/auth";
  import Main from "./components/FrontPage/Main.svelte";
  import { auth,googleProvider } from "./firebase";


  let user;
  const unsubscribe = authState(auth).subscribe((u) => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<Main />