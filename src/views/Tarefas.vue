<template>
  <div class="columns">
    <div class="column is-3">
      <TarefasMenuLateral :atividades="atividades" />
    </div>
    <div class="column">
      <nav aria-label="breadcrumbs" class="breadcrumb">
        <ul>
          <li>
            <router-link to="/">Início</router-link>
          </li>
          <li class="is-active">
            <router-link :to="{ name: 'tarefas' }">Tarefas</router-link>
          </li>
        </ul>
      </nav>
      <b-button
        icon-left="plus"
        tag="router-link"
        :to="{ name: 'adicionar tarefa' }"
        style="margin-bottom: 1rem; margin-right: 20px"
        type="is-success"
        outlined
        >Adicionar Tarefa</b-button
      >
      <b-button icon-left="account-arrow-right" style="margin-bottom: 1rem"
        >Atribuir tarefas automaticamente</b-button
      >
      <TarefasTabela :activities="atividades" />
    </div>
  </div>
</template>

<script>
import TarefasMenuLateral from "../components/tarefas/TarefasMenuLateral";
import TarefasTabela from "../components/tarefas/TarefasTabela";
export default {
  name: "Tarefas",
  components: { TarefasTabela, TarefasMenuLateral }
};
</script>
