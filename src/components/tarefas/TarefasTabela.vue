<template>
  <div>
    <b-table
      :data="tarefas"
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
        <b-table-column field="inicio" label="Horário" sortable width="120">
          {{ moment(props.row.inicio).format("hh:mm") }} -
          {{ moment(props.row.fim).format("hh:mm") }}</b-table-column
        >
        <b-table-column field="nome" label="Nome" sortable>
          {{ props.row.nome }}</b-table-column
        >
        <b-table-column field="tipo" label="Tipo" sortable>
          <span style="text-transform: capitalize">{{
            props.row.tipo
          }}</span></b-table-column
        >
        <b-table-column field="estado" label="Estado" sortable>
          <span
            :class="estado[props.row.estado].color"
            class="tag text"
            style="width: 7rem; font-size: small"
          >
            {{ estado[props.row.estado].description }}
          </span>
        </b-table-column>
        <b-table-column label="Ações" centered
          ><a><b-icon icon="close-box" type="is-danger"/></a
        ></b-table-column>
      </template>
      <template slot="detail" slot-scope="props">
        <div class="content">
          <div style="font-size: 15px">
            <div v-if="props.row.estado === 'P'">
              <div class="columns">
                <div class="column">
                  <b-field>
                    <b-select placeholder="Colaborador a atribuir..." expanded>
                      <option>João Mateus</option>
                      <option>Pedro Magalhães</option>
                      <option>Lucas Faísca</option>
                      <option>Nuno Faria</option>
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
            <div v-else>
              Atribuída ao colaborador João Mateus.
            </div>
          </div>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "TarefasTabela",
  data() {
    return {
      tarefas: require("../../fixtures/tarefas.json").map(
        model => model.fields
      ),
      moment: require("moment"),
      estado: {
        A: { description: "Atribuída", color: "is-success" },
        P: { description: "Por atribuir", color: "is-warning" }
      }
    };
  },
  methods: {
    toggleDetails(row) {
      this.$refs.table.toggleDetails(row);
    },
    closeOtherDetails(row) {
      this.tarefas.forEach(proposal => {
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
</style>

<style lang="scss">
.table.is-hoverable tbody > tr:not(.is-selected):not(.detail):hover {
  cursor: pointer;
}
</style>
