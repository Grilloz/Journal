<script>
  import { url } from '@sveltech/routify'
  import { User } from '../store.js'
  let testlink = 'My Test'
</script>

<a href={$url('/')}>Home</a>
<a href={$url('/prova')}>Prova</a>
<a href={$url('/:test', { test: testlink })}>{testlink}</a>
{#if !$User}
  <a href={$url('/User/Login')}>Login</a>
{:else}
  <a href={$url('/User/User')}>{$User}</a>
{/if}
<slot />
