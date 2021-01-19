<script lang='ts'>
    import { onMount } from "svelte";

    export let location: object;

    onMount(() => {
        console.log('Home location', typeof(location), location);
    });
</script>
<h2>Home again!!!!</h2>
