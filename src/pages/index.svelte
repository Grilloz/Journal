<script>
  import { goto } from '@sveltech/routify'
  import { StartingPage } from '../store.js'
  console.log($StartingPage)
  $goto($StartingPage)
</script>

<h1>Home</h1>
