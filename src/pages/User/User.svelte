<script>
  import { User } from '../../store.js'
  import { goto } from '@sveltech/routify'

  function logout(event) {
    $User = ''
    $goto('/User/Login')
  }
</script>

<h1>Hello {$User}</h1>
<button on:click={logout}>Logout</button>
