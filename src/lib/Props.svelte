<script lang="ts">
    import { createEventDispatcher } from "svelte";

    //Así se declaran props
    export let items: string[];
    //Si un prop ^ no se inicializa quiere decir que es obligatoria
    export let showReload: boolean = false;
    export const dispatch = createEventDispatcher();
</script>

{#if showReload}
    <!-- Puedes crear eventos desde dentro de un componente para que el padre ejecute una función -->
    <!-- El primer argumento para la función dispatch que es una asignación de createEventDispatcher recibe 2 argumentos -->
    <!-- Esto es similar a emitir eventos con Vue -->
    <button on:click={()=> dispatch('reload')}>Reload</button>
{/if}
{#each items as item}
    <ul>
        <li>
            <slot item>
                {item}
            </slot>
        </li>
    </ul>
{/each}