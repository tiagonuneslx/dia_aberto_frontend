<template>
  <div>
    <b-table
      :data="proposals"
      ref="table"
      hoverable
      detailed
      @click="toggleDetails"
      @details-open="closeOtherDetails"
      default-sort="submission_date"
      sort-icon="menu-up"
      paginated
      striped
      per-page="10"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-table-column field="name" label="Nome" sortable width="50%">
          {{ props.row.name }}
        </b-table-column>
        <b-table-column field="activity_type" label="Tipo" sortable>
          {{ props.row.activity_type }}
        </b-table-column>
        <b-table-column field="campus" label="Campus" sortable>
          {{ props.row.campus }}
        </b-table-column>
        <b-table-column field="organizational_entity" label="E.O." sortable>
          {{ props.row.organizational_entity }}
        </b-table-column>
        <b-table-column field="department" label="Dep." sortable>
          {{ props.row.department }}
        </b-table-column>
      </template>
      <template slot="detail" slot-scope="props">
        <div class="content">
          <div style="font-size: 15px">
            <p>{{ props.row.description }}</p>
            <p><strong>Responsável:</strong> {{ props.row.creator }}</p>
            <b-table :data="props.row.sessions">
              <template slot-scope="session_props">
                <b-table-column field="datetime" label="Hora">
                  {{ moment(session_props.row.datetime).format("hh:mm") }}
                </b-table-column>
                <b-table-column field="duration" label="Duração">
                  {{ session_props.row.duration }} min
                </b-table-column>
                <b-table-column field="vagas" label="Vagas">
                  {{ session_props.row.vagas }}
                </b-table-column>
                <b-table-column field="place" label="Espaço">
                  {{
                    session_props.row.place
                      ? session_props.row.place
                      : "Por alocar"
                  }}
                </b-table-column>
                <b-table-column label="Inscrever">
                  <b-field>
                    <b-numberinput
                      class="no-margin-bottom"
                      style="width: 7rem; margin-bottom: 0"
                      controls-position="compact"
                      min="0"
                      v-model="n[session_props.row.id]"
                    />
                  </b-field>
                </b-table-column>
              </template>
            </b-table>
          </div>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "SessoesDisponiveisTabela",
  data() {
    const proposals = require("../../../../fixtures/atividades.json").map(
      model => model.fields
    );
    return {
      proposals,
      moment: require("moment"),
      state: {
        A: { description: "Aceite", color: "is-success" },
        P: { description: "Pendente", color: "is-warning" },
        R: { description: "Rejeitada", color: "is-danger" }
      },
      n: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  },
  methods: {
    toggleDetails(row) {
      this.$refs.table.toggleDetails(row);
    },
    closeOtherDetails(row) {
      this.proposals.forEach(proposal => {
        row !== proposal && this.$refs.table.closeDetailRow(proposal);
      });
      this.$refs.table.openDetailRow(row);
    }
  }
};
</script>

<style lang="scss">
.table.is-hoverable tbody > tr:not(.is-selected):not(.detail):hover {
  cursor: pointer;
}
</style>
