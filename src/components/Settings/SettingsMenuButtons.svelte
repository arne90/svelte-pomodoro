<script>
  import { getContext } from 'svelte';
  import Popup from './Popup.svelte';
  import PopupLong from './PopupLong.svelte';
  const { open } = getContext('simple-modal');

	import { faCog } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";

  const showSettingsMenu = () => {
		open(Popup);
	};
	const showPopupLong = () => {
		open(PopupLong, { message: "It's a popup with long text!" });
	};

	// showSettingsMenu();
	
</script>

<section>
	
	<button on:click={showSettingsMenu}><FontAwesomeIcon icon={faCog} /></button>
	<br/>
	<button on:click={showPopupLong}>Show a popup with long text!</button>

</section>

<style>
	section {
		padding-top: 0.5em;
	}	
</style>