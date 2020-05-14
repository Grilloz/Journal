<script>
  import { formatDistance, subDays, format, add,addMonths } from 'date-fns'
  import { it } from 'date-fns/locale'
  import { ToDay, ThisWeek, ThisMonth } from '../store.js'

  let datastr = formatDistance(subDays(new Date(), 3), new Date())
  let today = new Date()
  let mese = format(today, 'MMMM yyyy', {locale: it})
  let prossimo = format(add(today, {months: 1}), 'MMMM yyyy', {locale: it});

  let result = addMonths(new Date(2020, 0, 1), 1);
                     


</script>

<style lang="scss">
    @import '../css/theme.scss';
    $primary-color: #5f80c2;

    h1 {
        color: $primary-color;
    }
    h2 {
        color: $title-color;
    }
</style>

<h1>Prova</h1>
<h2>{datastr}</h2>
<p>{prossimo}</p>
<p>{mese}</p>
<p></p>
<p>{result}</p>
<h2>{$ToDay}</h2>
<h2>{$ThisWeek}</h2>
<h2>{$ThisMonth}</h2>