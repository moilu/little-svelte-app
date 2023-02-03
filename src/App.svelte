<script lang="ts">
  import Props from "./lib/Props.svelte";

  function reloadList(): void {
    console.log('Componente fue recargado');
  }
</script>

<Props 
  items={['Aprender Svelte', 'Practicar Svelte']} 
  showReload={true} 
  on:reload={reloadList}
/>