<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="title is-6 has-text-centered">Informação da Sessão</h1>
        <div class="columns">
          <div class="column">
            <b-field label="Horário de Início">
              <b-timepicker
                placeholder="De"
                icon="clock"
                editable
                :increment-minutes="30"
              />
            </b-field>
            <b-field label="Máximo de Participantes">
              <b-numberinput controls-position="compact" />
            </b-field>
          </div>
          <div class="column">
            <b-field label="Horário de Fim">
              <b-timepicker
                placeholder="Até"
                icon="clock"
                editable
                :increment-minutes="30"
              />
            </b-field>
            <b-field label="Colaboradores Requeridos">
              <b-numberinput controls-position="compact" />
            </b-field>
          </div>
        </div>
      </div>
      <div class="column is-offset-1">
        <h1 class="title is-6 has-text-centered">Requerimentos de Espaço</h1>
        <div class="columns" style="margin-bottom: 0">
          <div class="column">
            <b-field>
              <b-checkbox>
                Sala
              </b-checkbox>
            </b-field>
            <b-field>
              <b-checkbox>
                Computadores
              </b-checkbox>
            </b-field>
            <b-field>
              <b-checkbox>
                Laboratório
              </b-checkbox>
            </b-field>
          </div>
          <div class="column">
            <b-field>
              <b-checkbox>
                Anfiteatro
              </b-checkbox>
            </b-field>
            <b-field>
              <b-checkbox>
                Pavilhão
              </b-checkbox>
            </b-field>
            <b-field>
              <b-checkbox>
                Ar Livre
              </b-checkbox>
            </b-field>
          </div>
        </div>
        <b-field>
          <b-input placeholder="Outros" />
        </b-field>
      </div>
    </div>
    <div class="has-text-centered" style="margin-top: 2rem">
      <b-button style="margin-right: 1rem" icon-left="close">Limpar</b-button>
      <b-button type="is-success" icon-left="plus">Adicionar Sessão</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdicionarSessao"
};
</script>

<style scoped></style>
