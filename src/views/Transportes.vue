<template>
  <div>
    <nav aria-label="breadcrumbs" class="breadcrumb">
      <ul>
        <li>
          <router-link to="/">Início</router-link>
        </li>
        <li class="is-active">
          <router-link to="/transportes">Transportes</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Transportes"
};
</script>
