<script>
import Topbar from '../components/Topbar.svelte';
import AuthOnly from '../components/AuthOnly.svelte';

</script>

<Topbar />
<div>
    <p>Esta parte es visible para todos.</p>
</div>
<AuthOnly />

<style>
    div {
        border: 1px solid blue;
        border-radius: 8px;
        padding: 5px 10px;
    }
</style>
