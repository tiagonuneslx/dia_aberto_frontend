<template>
  <div>
    <b-table
      :data="activities"
      default-sort="submission_date"
      detailed
      hoverable
      paginated
      per-page="10"
      sort-icon="menu-up"
    >
      <template slot-scope="props">
        <b-table-column field="name" label="Nome" sortable width="300">
          {{ props.row.name }}
        </b-table-column>
        <b-table-column
          field="submission_date"
          label="Submetido a"
          sortable
          width="200"
        >
          {{ props.row.submission_date }}
        </b-table-column>
        <b-table-column field="submission_state" label="Estado" sortable>
          <span
            :class="state[props.row.submission_state].color"
            class="tag text"
            style="width: 7rem; font-size: small"
          >
            {{ state[props.row.submission_state].description }}
          </span>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    activities: []
  },
  data() {
    return {
      state: {
        A: { description: "Aceite", color: "is-success" },
        P: { description: "Pendente", color: "is-warning" },
        R: { description: "Rejeitada", color: "is-danger" }
      }
    };
  }
};
</script>
