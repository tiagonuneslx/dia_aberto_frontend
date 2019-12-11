<template>
  <div style="padding: 1rem 2vw 0">
    <hr />
    <h2 class="title has-text-grey is-uppercase" style="font-size: 0.9rem">
      Informação de almoço
    </h2>
    <b-field
      label="Cantina da Penha (Preço Aluno: €2.80, Preço Docente: €4.25)"
    >
      <b-numberinput controls-position="compact" />
    </b-field>
    <b-field
      label="Cantina de Gambelas (Preço Aluno: €2.80, Preço Docente: €4.25)"
    >
      <b-numberinput controls-position="compact" />
    </b-field>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Almoco"
};
</script>

<style scoped></style>
