<template>
  <div style="padding: 1rem 2vw 0">
    <hr />
    <h2 class="title has-text-grey is-uppercase" style="font-size: 0.9rem">
      Informação de transporte
    </h2>
    <div class="columns">
      <div class="column">
        <b-field label="Meio de transporte">
          <b-select expanded>
            <option value="comboio">Comboio</option>
            <option value="autocarroProprio">Autocarro Próprio</option>
            <option value="outrosMeios">Outros Meios</option>
          </b-select>
        </b-field>
      </div>
      <div class="column">
        <div class="columns">
          <div class="column">
            <b-field label="Hora de chegada">
              <b-timepicker icon="clock" :increment-minutes="5" editable>
              </b-timepicker>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Hora de partida">
              <b-timepicker icon="clock" :increment-minutes="5" editable>
              </b-timepicker>
            </b-field>
          </div>
        </div>
      </div>
    </div>
    <p style="display: inline-block; padding-right: 2rem">
      Precisam de transporte para efectuar as visitas entre os 3 Campi?
    </p>
    <b-radio
      v-model="precisamTransporteEntreCampi"
      name="name"
      native-value="Não"
    >
      Não
    </b-radio>
    <b-radio
      v-model="precisamTransporteEntreCampi"
      name="name"
      native-value="Sim"
    >
      Sim
    </b-radio>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Transporte",
  data() {
    return {
      precisamTransporteEntreCampi: "Não"
    };
  }
};
</script>
