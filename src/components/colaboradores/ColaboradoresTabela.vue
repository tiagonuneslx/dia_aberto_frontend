<template>
  <div>
    <b-table
      :data="colaboradores"
      ref="table"
      @click="toggleDetails"
      @details-open="closeOtherDetails"
      hoverable
      striped
      detailed
      paginated
      per-page="5"
      default-sort="codigo"
      sort-icon="menu-up"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-table-column field="nome" label="Nome" sortable>
          {{ props.row.nome }}</b-table-column
        >
        <b-table-column label="Preferências">
          <ul
            v-if="
              props.row.preferencia_departamento || props.row.preferencia_tarefa
            "
            class="disc"
          >
            <li v-if="props.row.preferencia_departamento">
              Preferência
              <strong>{{
                importancia[props.row.preferencia_departamento_importancia]
              }}</strong>
              em
              {{ props.row.preferencia_departamento }}
            </li>
            <li v-if="props.row.preferencia_tarefa">
              Preferência
              <strong>{{
                importancia[props.row.preferencia_tarefa_importancia]
              }}</strong>
              {{ props.row.preferencia_atividade ? "na" : "em" }}
              {{ props.row.preferencia_tarefa }}
              {{ props.row.preferencia_atividade }}
            </li>
          </ul>
          <span v-else>(Sem preferências)</span>
        </b-table-column>
      </template>
      <template slot="detail" slot-scope="props">
        <div class="content">
          <div style="font-size: 15px">
            <p><strong>Tarefas:</strong></p>
            <b-table :data="props.row.tarefas">
              <template slot-scope="session_props">
                <b-table-column field="inicio" label="Horário" width="120">
                  {{ moment(session_props.row.inicio).format("hh:mm") }} -
                  {{ moment(session_props.row.fim).format("hh:mm") }}
                </b-table-column>
                <b-table-column field="nome" label="Tarefa">
                  {{ session_props.row.nome }}
                </b-table-column>
                <b-table-column label="Ações" centered
                  ><a><b-icon icon="close-box" type="is-danger"/></a
                ></b-table-column>
              </template>
            </b-table>
            <div class="columns" style="margin-top: 1rem">
              <div class="column">
                <b-field>
                  <b-select placeholder="Tarefa a atribuir..." expanded>
                    <option
                      >09:00 - 10:00: Auxiliar na atividade "Observação
                      Microscópica"</option
                    >
                    <option
                      >09:30 - 10:30: Auxiliar na atividade "Introdução a
                      Python"</option
                    >
                  </b-select>
                </b-field>
              </div>
              <div class="column">
                <b-button
                  type="is-success"
                  icon-left="account-arrow-left"
                  outlined
                  @click="atribuirTarefa"
                  >Atribuir Tarefa</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "ColaboradoresTabela",
  data() {
    return {
      colaboradores: require("../../fixtures/colaboradores.json").map(
        model => model.fields
      ),
      moment: require("moment"),
      importancia: {
        a: "alta",
        m: "média",
        b: "baixa"
      }
    };
  },
  methods: {
    toggleDetails(row) {
      this.$refs.table.toggleDetails(row);
    },
    closeOtherDetails(row) {
      this.colaboradores.forEach(proposal => {
        row !== proposal && this.$refs.table.closeDetailRow(proposal);
      });
      this.$refs.table.openDetailRow(row);
    },
    atribuirTarefa() {
      this.$buefy.toast.open("Tarefa atribuída!");
    }
  }
};
</script>

<style lang="scss">
ul.disc {
  list-style-type: disc;
}
.label {
  font-weight: normal;
}
.table.is-hoverable tbody > tr:not(.is-selected):not(.detail):hover {
  cursor: pointer;
}
</style>
