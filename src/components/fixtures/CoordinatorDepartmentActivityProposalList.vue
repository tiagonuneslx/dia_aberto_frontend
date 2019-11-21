<template>
  <div>
    <b-table
            :data="proposals"
            default-sort="submission_date"
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
                width="150"
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
        <b-table-column field="creator" label="Criador" sortable width="200">
          {{ props.row.creator }}
        </b-table-column>
        <b-table-column label="Ações">
          <b-icon icon="check" pack="mdi" type="is-success"/>
          <b-icon icon="text" pack="mdi" type="is-warning"/>
          <b-icon icon="close" pack="mdi" type="is-danger"/>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        proposals: require("../../fixtures/proposals.json").map(
            model => model.fields
        ),
        state: {
          A: {description: "Aceite", color: "is-success"},
          P: {description: "Pendente", color: "is-warning"},
          R: {description: "Rejeitada", color: "is-danger"}
        }
      };
    }
  };
</script>
