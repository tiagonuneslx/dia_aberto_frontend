<template>
  <div>
    <nav aria-label="breadcrumbs" class="breadcrumb" style="margin-left: 20px">
      <ul>
        <li>
          <router-link to="/">Início</router-link>
        </li>
        <li class="is-active">
          <a aria-current="page" href="#">Propostas de Atividade</a>
        </li>
      </ul>
    </nav>
    <CoordinatorDepartmentActivityProposal />
  </div>
</template>

<script>
import CoordinatorDepartmentActivityProposal from "../components/fixtures/CoordinatorDepartmentActivityProposalList.vue";

export default {
  components: {
    CoordinatorDepartmentActivityProposal
  }
};
</script>
