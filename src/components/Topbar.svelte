<script lang="ts">
    import { user } from "../data/UserLoginStore";
</script>
<div>
    {#if $user.loggedIn}
        <p>{$user.name}</p>
    {:else}
        <p>No haz iniciado sesión</p>
    {/if}
</div>
<style>
    div {
        background-color: lightgrey;
        border-radius: 8px;
        padding: 5px 10px;
        text-align: right;
    }
</style>