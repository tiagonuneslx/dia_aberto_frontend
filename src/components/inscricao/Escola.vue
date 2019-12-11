<template>
  <div style="padding: 1rem 2vw 0">
    <hr />
    <h2 class="title has-text-grey is-uppercase" style="font-size: 0.9rem">
      Informação da Escola
    </h2>
    <div class="columns">
      <div class="column">
        <b-field label="Nome da escola">
          <b-input v-model="nomeEscola" />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Localidade">
          <b-input v-model="localidadeEscola" />
        </b-field>
      </div>
    </div>
    <hr />
    <h2 class="title has-text-grey is-uppercase" style="font-size: 0.9rem">
      Informação da Turma
    </h2>
    <div class="columns">
      <div class="column">
        <b-field label="Ano">
          <b-input v-model="anoEscola" />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Turma">
          <b-input v-model="turmaEscola" />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Número de alunos">
          <b-numberinput controls-position="compact" />
        </b-field>
      </div>
    </div>
    <b-field label="Área científica">
      <b-input v-model="areaCientifica" />
    </b-field>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Escola"
};
</script>

<style scoped></style>
