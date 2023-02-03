<script lang="ts">
    import { user } from "../data/UserLoginStore";
    $: authenticated = $user.loggedIn;
</script>
{#if authenticated}
    <div>
        <p>Contenido súper secreto</p>
        <p>Esta parte solo es visible para usuarios autenticados.</p>
    </div>
{:else}
    <div>
        <button on:click={()=> user.login()}>Iniciar Sesión</button>
    </div>
{/if}

<style>
    div {
        border: 1px solid blue;
        border-radius: 8px;
        padding: 5px 10px;
    }
</style>