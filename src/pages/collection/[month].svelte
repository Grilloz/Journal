<script>
  import { url, params } from '@sveltech/routify';
  import { parseISO, formatISO, format, addMonths, subMonths } from 'date-fns';
  import { ThisMonth } from '../../store.js';
  export let month;

  $: title = format(parseISO(month), "MMMM, yyyy");
  $: next = formatISO(addMonths(parseISO(month), 1), {representation: 'date'});
  $: previous = formatISO(subMonths(parseISO(month), 1), {representation: 'date'});
  

</script>

<h1>{title} Diary</h1>
<p>Some dummy test</p>
<div><a href={$url('/collection/:month', {month: previous})}>Previous Month</a></div>
<div><a href={$url('/collection/:month', {month: next})}>Next Month</a></div>
 {#if month != $ThisMonth}
<div><a href={$url('/collection/:month', {month: $ThisMonth})}>Back to Monthly Lob</a></div>
{/if}