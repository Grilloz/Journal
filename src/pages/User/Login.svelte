<script>
  import { User } from '../../store.js'
  import { goto } from '@sveltech/routify'

  function login(event) {
    $User = 'Paperino'
    $goto('/index')
  }
</script>

<div>
  <button on:click={login}>Login</button>
</div>
