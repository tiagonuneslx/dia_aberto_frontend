<template>
  <div style="padding: 1rem 2vw 0">
    <hr />
    <h2 class="title has-text-grey is-uppercase" style="font-size: 0.9rem">
      Docente responsável 1
    </h2>
    <div class="columns">
      <div class="column">
        <b-field label="Nome">
          <b-input v-model="nome" />
        </b-field>
      </div>
      <div class="column">
        <b-field label="E-mail">
          <b-input v-model="email" />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Telemóvel/Telefone">
          <b-input v-model="telemovel" />
        </b-field>
      </div>
    </div>
    <b-button icon-left="plus">Outro docente</b-button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Responsaveis"
};
</script>
