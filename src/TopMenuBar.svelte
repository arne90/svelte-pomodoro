<script>
function myTest() {
  console.log("lol");
}

function myTest2() {
  console.log("lolzz");
}
</script>

<style>
.top-menu-row {
  display: flex; justify-content: flex-end
}

.top-menu-button {
  color: red;
}
</style>

<section class="top-menu-row">

<button on:click={myTest} class="top-menu-button">This is a button</button>

<button on:click={myTest2}>This is another button</button>
</section>