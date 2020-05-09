<script>
  export let test;

  $: title = decodeURI(test);
</script>

<h1> {title} </h1>
<p>This is a test</p>
<p>param is {title}</p>