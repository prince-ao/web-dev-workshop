<script>
  import Header from '../components/header.svelte'
  import axios from 'axios';
  import {onMount} from 'svelte';

  onMount(() => {
    const val = window.localStorage.getItem("counter");
    counter = Number(val);
  });

  const get = axios.get;
  let counter = 0;

  const updateCounter = async () => {
    const {data} = await get(`/add?current=${counter}`);
    counter = Number(data);
    window.localStorage.setItem("counter", data);
  }
</script>

<Header />

<h1>Click Counter</h1>
{#await counter}
<p>Loading...</p>
{:then}
<p>You've clicked {counter} times</p>
{/await}
<button on:click={updateCounter}>Click</button>

<style>
  :global(*) {
    background-color: bisque;
  }
</style>