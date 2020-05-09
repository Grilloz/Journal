<script>
  import { beforeUrlChange } from "@sveltech/routify"
  import { formatDistance, subDays } from 'date-fns'

  let datastr = formatDistance(subDays(new Date(), 3), new Date())


</script>

<h1>Prova</h1>
<h2>{datastr}</h2>