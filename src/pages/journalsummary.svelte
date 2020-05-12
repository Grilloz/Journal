<script>
  import { url } from '@sveltech/routify';
  import { ThisMonth } from '../store.js';
  let testlink = 'My Test';
</script>

<div><a href={$url('/')}>Home</a></div>
<div><a href={$url('/journalsummary')}>Summary</a></div>
<div><a href={$url('/collection/future')}>Future Log</a></div>
<div><a href={$url('/collection/:month', {month: $ThisMonth})}>Monthly Log</a></div>
<div><a href={$url('/:test', {test: testlink})}>{testlink}</a></div>
<div><a href={$url('/redirect')}>Redirect</a></div>