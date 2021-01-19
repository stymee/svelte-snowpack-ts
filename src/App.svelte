<script lang="typescript">
    import {Router, Route} from 'svelte-routing';
    import dayjs from 'dayjs';
    import {onMount} from 'svelte';
    import Nav from './components/Nav.svelte';
    import Test1 from './components/Test1.svelte';
    import Home from './components/Home.svelte';

    let count: number = 0;
    let nowTime: string = '';
    const url: string = '';
    const basepath: string = '';

    onMount(() => {
        const interval = setInterval(() => {
            count++;
            nowTime = dayjs(Date.now()).format('ddd M/D/YY h:mm:ss a');
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });
</script>

<Router {url} {basepath}>
    <div class="App">
        <Nav />
        <header class="App-header">
            <img src="/logo.svg" class="App-logo" alt="logo" />
            <p>Edit <code>src/App.svelte</code> and save to reload.</p>
            <p>Page has been open for <code>{count}</code> seconds.</p>
            <p>
                <a
                    class="App-link"
                    href="https://svelte.dev"
                    target="_blank"
                    rel="noopener noreferrer"> Learn Svelte 12345 </a>
            </p>

            <Route path="test" component={Test1} />
            <Route path="/" component={Home} />
        </header>
    </div>
</Router>

<style>
    :global(body) {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    .App {
        text-align: center;
    }
    .App code {
        background: #0002;
        padding: 4px 8px;
        border-radius: 4px;
    }
    .App p {
        margin: 0.4rem;
    }

    .App-header {
        background-color: #f9f6f6;
        color: #333;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
    }
    .App-link {
        color: #ff3e00;
    }
    .App-logo {
        height: 36vmin;
        pointer-events: none;
        margin-bottom: 3rem;
        animation: App-logo-spin infinite 1.6s ease-in-out alternate;
    }
    @keyframes App-logo-spin {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.06);
        }
    }
</style>
