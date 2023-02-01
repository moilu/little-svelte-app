<script lang="ts">
  import { fade } from "svelte/transition";
  
  let tareas: string[] = [];
  let nuevaTarea: string = '';

  function addTodo(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      tareas = [...tareas, nuevaTarea];
      nuevaTarea = '';
    }
  }
</script>
    
  <label for="">
    Nueva tarea
    <input 
      type="text" 
      bind:value={nuevaTarea}
      on:keyup={addTodo}
    >
  </label>
  {#if tareas.length === 0}
    <p>¿En qué quieres concentrarte?</p>
  {:else}
    <h4>¿Qué hacer a continuación?</h4>
    <ul>
      {#each tareas as tarea}
        <li transition:fade>{tarea}</li>
      {/each}
    </ul>
  {/if}
  
<style>
  input {
    padding: 5px 10px;
  }
  li {
    list-style: none;
  }
  ul {
    padding: 5px 0;
  }
</style>