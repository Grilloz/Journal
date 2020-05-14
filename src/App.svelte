<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
</script>

<style global lang="scss">

    @import './css/theme.scss';

* {
        font-family: 'Raleway', sans-serif;
    }

    h1 {
        font-family: 'Fredericka the Great', cursive;
        color: $title-color;
    }

    p {
        font-family: 'Caveat', cursive;
    }
</style>

<Router {routes} />