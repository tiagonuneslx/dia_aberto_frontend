<template>
  <div class="columns">
    <div class="column is-3">
      <ActivitiesLeftMenu/>
    </div>
    <div class="column">
      <nav aria-label="breadcrumbs" class="breadcrumb">
        <ul>
          <li>
            <router-link to="/">Início</router-link>
          </li>
          <li class="is-active">
            <a aria-current="page" href="#">Atividades</a>
          </li>
        </ul>
      </nav>
      <ActivityListFixture/>
    </div>
  </div>
</template>

<script>
  import ActivityListFixture from "../components/fixtures/ActivityList.vue";
  import ActivitiesLeftMenu from "../components/ActivitiesLeftMenu.vue";

  export default {
    components: {
      ActivityListFixture,
      ActivitiesLeftMenu
    }
  };
</script>
