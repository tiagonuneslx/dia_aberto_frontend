<template>
  <div>
    <b-table
      :data="sessoes"
      hoverable
      default-sort="datetime"
      sort-icon="menu-up"
      striped
    >
      <template slot-scope="props">
        <b-table-column field="datetime" label="Horário" sortable>
          {{ moment(props.row.datetime).format("hh:mm") }} -
          {{
            moment(props.row.datetime)
              .add(props.row.duration, "minutes")
              .format("hh:mm")
          }}
        </b-table-column>
        <b-table-column field="duration" label="Duração" sortable>
          {{ props.row.duration }} min
        </b-table-column>
        <b-table-column field="max_students" label="Vagas">
          {{ props.row.max_students }}
        </b-table-column>
        <b-table-column field="collaborators_required" label="Colaboradores">
          {{ props.row.collaborators_required }}
        </b-table-column>
        <b-table-column
          field="place_specifications"
          label="Requerimentos Espaço"
        >
          <ul class="requerimentos">
            <li
              v-for="(spec, index) in props.row.place_specifications"
              :key="index"
            >
              {{ spec }}
            </li>
          </ul>
        </b-table-column>
        <b-table-column label="Ações" centered>
          <b-icon icon="close-box" type="is-danger" />
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "SessoesTabela",
  props: {
    sessoes: []
  },
  data() {
    return {
      moment: require("moment")
    };
  }
};
</script>

<style lang="scss" scoped>
ul.requerimentos {
  list-style: disc;
}
</style>
