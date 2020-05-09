<script>
  import { url } from '@sveltech/routify';
  let testlink = 'My Test';
</script>

<a href={$url('/')}>Home</a>
<a href={$url('/prova')}>Prova</a>
<a href={$url('/:test', {test: testlink})}>{testlink}</a>
<a href={$url('/redirect')}>Redirect</a>
<slot />
