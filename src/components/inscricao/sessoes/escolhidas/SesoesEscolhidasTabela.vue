<template>
  <b-table
    :data="sessoes.filter(sessao => $store.state.inscritos[sessao.id] > 0)"
  >
    <template slot-scope="props">
      <b-table-column field="datetime" label="Horário"
        >{{ moment(props.row.datetime).format("HH:mm") }} -
        {{
          moment(props.row.datetime)
            .add(props.row.duration, "minutes")
            .format("HH:mm")
        }}</b-table-column
      >
      <b-table-column field="datetime" label="Inscritos">
        <b-field>
          <b-numberinput
            v-model="inscritos[props.row.id]"
            min="0"
            style="width: 7rem"
            controls-position="compact"
            @change="mudarInscritos(props.row.id, inscritos[props.row.id])"
          />
        </b-field>
      </b-table-column>
      <b-table-column field="atividade" label="Atividade">
        {{ props.row.atividade }}
      </b-table-column>
      <b-table-column field="place" label="Espaço">
        {{ props.row.place ? props.row.place : "Por alocar" }}
      </b-table-column>
      <b-table-column field="campus" label="Campus">
        {{ props.row.campus }}
      </b-table-column>
      <b-table-column label="Ações" centered>
        <a><b-icon icon="close-box" type="is-danger"/></a>
      </b-table-column>
    </template>
    <template slot="empty">
      <p class="has-text-grey">Ainda não há sessões escolhidas</p>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "SesoesEscolhidasTabela",
  data() {
    return {
      inscritos1: 15,
      inscritos2: 20,
      moment: require("moment"),
      sessoes: require("../../../../fixtures/sessoes.json").map(
        sessao => sessao.fields
      ),
      inscritos: this.$store.state.inscritos
    };
  },
  methods: {
    mudarInscritos(id, inscritos) {
      this.$store.commit("mudarInscritos", id, inscritos);
    }
  }
};
</script>
