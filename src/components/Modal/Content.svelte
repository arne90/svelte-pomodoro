<script>
  import { getContext } from 'svelte';
	
  import Popup from './Popup.svelte';
  import PopupLong from './PopupLong.svelte';

  const { open } = getContext('simple-modal');

  const showPopup = () => {
		open(Popup, { message: "It's a popup!" });
	};
	const showPopupLong = () => {
		open(PopupLong, { message: "It's a popup with long text!" });
	};
	
</script>

<section>
	<button on:click={showPopup}>Show a popup!</button>
	<br/>
	<button on:click={showPopupLong}>Show a popup with long text!</button>

</section>

<style>
	section {
		padding-top: 0.5em;
	}	
</style>