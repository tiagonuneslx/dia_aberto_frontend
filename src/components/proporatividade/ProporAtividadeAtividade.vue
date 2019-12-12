<template>
  <div style="padding: 1rem 2vw 0">
    <hr />
    <h2 class="title has-text-grey is-uppercase" style="font-size: 0.9rem">
      Informação de atividade
    </h2>
    <div class="columns">
      <div class="column">
        <b-field label="Nome da Atividade">
          <b-input />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Tipo de Atividade">
          <b-select expanded>
            <option> Atividade Laboratorial </option>
            <option> Palestra </option>
            <option> Tertúlia </option>
          </b-select>
        </b-field>
      </div>
    </div>
    <b-field label="Descrição">
      <b-input maxlength="300" type="textarea" />
    </b-field>
    <hr />
  </div>
</template>

<script>
export default {
  name: "ProporAtividadeAtividade"
};
</script>
