<script>
  import { getCollection } from '../lib/db.js'
  import Note from './Note.svelte'

  export let name
  $: notes = getCollection(name)
</script>

<p>collection name: {name}</p>
{#each notes as note}
  <Note {note} />
{/each}
