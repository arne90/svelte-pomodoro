<script>
  import { modal } from "../../stores.js";
  import Modal from "../Modal/Modal.svelte";
  import SettingsMenuButtons from "./SettingsMenuButtons.svelte";
</script>

<Modal show={$modal}>
  <SettingsMenuButtons />
</Modal>
