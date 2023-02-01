<script lang="ts">
    let count: number = 0;
    $: doubled = count * 2;
    $: quadrupled = doubled * 2;
</script>

<p>Count: {count}</p>
<p>Doubled: {doubled}</p>
<p>Quadrupled: {quadrupled}</p>
<button on:click={()=>{ count++ }}>Increase Count</button>