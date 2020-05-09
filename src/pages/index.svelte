<script>
    
  import { url } from '@sveltech/routify';
  let testlink = 'My Test';

</script>

<a href={$url('/prova')}>Prova</a>
<a href={$url('/:test', {test: testlink})}>{testlink}</a>

