<script>
  export let note
</script>

<p>
  {#if note.type == 'task'}
    {#if note.state == 'todo'}
      <span>.</span>
    {:else if note.state == 'done'}
      <span>x</span>
    {:else if note.state == 'migleft'}
      <span>&lt;</span>
    {:else if note.state == 'migright'}
      <span>&gt;</span>
    {:else}
      <span />
    {/if}
  {:else if note.type == 'event'}
    <span>o</span>
  {:else}
    <span>-</span>
  {/if}
  <span><{note.text}/span>
</p>
