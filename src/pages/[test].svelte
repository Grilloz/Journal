<script>
  import { params } from '@sveltech/routify';
  export let test;

  $: title = decodeURI(test);

  console.log($params);
</script>

<h1> {title} </h1>
<p>This is a test</p>
<p>param is {title}</p>
<code>
{$params}
</code>