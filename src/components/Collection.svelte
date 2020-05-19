<script>
  import {getCollection} from "../lib/db.js";
  import Note from "./Note.svelte";

  export let name
  let notes = getCollection(name);
</script>

{#each notes as note}
<Note note={note} />
{/each}