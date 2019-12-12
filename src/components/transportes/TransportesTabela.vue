<template>
  <div>
    <b-table
      :data="transportes"
      ref="table"
      hoverable
      striped
      detailed
      @click="toggleDetails"
      @details-open="closeOtherDetails"
      default-sort="submission_date"
      sort-icon="menu-up"
      paginated
      per-page="10"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-table-column field="escola" label="Escola" sortable>
          {{ props.row.escola }}
        </b-table-column>
        <b-table-column field="localidade" label="Localidade" sortable>
          {{ props.row.localidade }}
        </b-table-column>
        <b-table-column field="campus" label="Campus" sortable>
          {{ props.row.campus }}
        </b-table-column>
        <b-table-column field="hora_partida" label="Horário" width="120">
          {{ moment(props.row.hora_partida).format("hh:mm") }} -
          {{ moment(props.row.hora_chegada).format("hh:mm") }}
        </b-table-column>
        <b-table-column label="Estado">
          <span
            v-if="props.row.estado === 'Publicado'"
            class="tag is-success"
            style="width: 7rem; font-size: small"
          >
            {{ props.row.estado }}
          </span>
          <span
            v-if="props.row.estado === 'Por publicar'"
            class="tag is-warning"
            style="width: 7rem; font-size: small"
          >
            {{ props.row.estado }}
          </span>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "TransportesTabela",
  props: {
    transportes: []
  },
  data() {
    return {
      moment: require("moment")
    };
  },
  methods: {
    toggleDetails(row) {
      this.$refs.table.toggleDetails(row);
    },
    closeOtherDetails(row) {
      this.transportes.forEach(proposal => {
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
