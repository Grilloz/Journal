<script>
  import { url, params } from '@sveltech/routify'
  import { parseISO, formatISO, format, addMonths, subMonths } from 'date-fns'
  import { ThisMonth } from '../../store.js'
  import Collection from "../../components/Collection.svelte";

  export let month

  $: title = format(parseISO(month), 'MMMM, yyyy')
  $: next = formatISO(addMonths(parseISO(month), 1), { representation: 'date' })
  $: previous = formatISO(subMonths(parseISO(month), 1), {
    representation: 'date',
  })
</script>

<style>
  h1 {
    font-family: 'Fredericka the Great', cursive;
    /*color: $title-color;*/
  }

  p {
    font-family: 'Caveat', cursive;
  }
</style>

<h1>{title} Diary</h1>
<p>month: {month}</p>

<Collection name={month} />

<div>
  <a href={$url('/collection/:month', { month: previous })}>Previous Month</a>
</div>
<div>
  <a href={$url('/collection/:month', { month: next })}>Next Month</a>
</div>
{#if month != $ThisMonth}
  <div>
    <a href={$url('/collection/:month', { month: $ThisMonth })}>
      Back to Monthly Lob
    </a>
  </div>
{/if}
