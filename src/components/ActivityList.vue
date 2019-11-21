<template>
  <div>
    <b-table
            :data="activities"
            default-sort="submissionDate"
            hoverable
            paginated
            per-page="10"
            sort-icon="menu-up"
    >
      <template slot-scope="props">
        <b-table-column field="name" label="Nome" sortable width="600">
          {{ props.row.name }}
        </b-table-column>
        <b-table-column
                field="submissionDate"
                label="Submetido a"
                sortable
                width="400"
        >
          {{ props.row.submissionDate }}
        </b-table-column>
        <b-table-column field="submissionState" label="Estado" sortable>
          <span class="tag is-warning text" style="font-size: small">
            {{ props.row.submissionState }}
          </span>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stateDescriptions: {
          A: "Aceite",
          P: "Pendente",
          R: "Rejeitada"
        }
      };
    },
    apollo: {
      activities: {
        query: require("../graphql/Activities.gql"),
        update(data) {
          return data.activities.edges.map(activity => {
            return {
              name: activity.node.name,
              submissionDate: activity.node.submissionDate,
              submissionState: this.stateDescriptions[
                  activity.node.submissionState
                  ]
            };
          });
        }
      }
    }
  };
</script>
