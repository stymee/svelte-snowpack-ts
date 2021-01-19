<script lang="ts">
    import dayjs from 'dayjs';
    import {onMount} from 'svelte';

    export let location: object;

    let nowTime: string = '';

    onMount(() => {
        //console.log('Home location', location);
        const interval = setInterval(() => {
            nowTime = dayjs(Date.now()).format('ddd M/D/YY h:mm:ss.SSS a');
        }, 10);
        return () => {
            clearInterval(interval);
        };
    });
</script>

<h4>Test111! {nowTime}</h4>
