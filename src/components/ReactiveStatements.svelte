<script lang="ts">
    let count: number = 0;
    let prevCount: number = 0;
    let countWentUp: boolean = false;

    $: console.log(`Count ${count}`);
    $: {
        countWentUp = prevCount < count;
        prevCount = count;
    };
</script>

<p>Count: {count}</p>
<p>Count went {countWentUp ? 'up' : 'down'}</p>
<button on:click={()=>{ count++ }}>Increase</button>
<button on:click={()=>{ count-- }}>Decrease</button>