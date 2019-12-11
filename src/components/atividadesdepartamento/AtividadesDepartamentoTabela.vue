<template>
  <div>
    <b-table
      :data="proposals"
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
        <b-table-column field="name" label="Nome" sortable>
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
        <b-table-column field="creator" label="Criador" sortable>
          {{ props.row.creator }}
        </b-table-column>
      </template>
      <template slot="detail" slot-scope="props">
        <div class="content">
          <div style="font-size: 15px">
            <p><strong>Nome: </strong>{{ props.row.name }}</p>
            <p><strong>Criador:</strong> {{ props.row.creator }}</p>
            <p>
              <strong>Data de submissão:</strong>
              {{ props.row.submission_date }}
            </p>
            <p>
              <strong>Estado de submissão:</strong>
              {{ state[props.row.submission_state].description }}
            </p>
            <p>
              <strong>Tipo de Atividade:</strong> {{ props.row.activity_type }}
            </p>
            <p><strong>Descrição:</strong> {{ props.row.description }}</p>
            <p><strong>Campus:</strong> {{ props.row.campus }}</p>
            <p>
              <strong>Entidade Organizacional:</strong>
              {{ props.row.organizational_entity }}
            </p>
            <p><strong>Departamento:</strong> {{ props.row.department }}</p>
            <p><strong>Sessões:</strong></p>
            <b-table :data="props.row.sessions">
              <template slot-scope="session_props">
                <b-table-column field="datetime" label="Dia">
                  {{ moment(session_props.row.datetime).format("DD/MM/YYYY") }}
                </b-table-column>
                <b-table-column field="datetime" label="Hora">
                  {{ moment(session_props.row.datetime).format("hh:mm") }}
                </b-table-column>
                <b-table-column field="duration" label="Duração">
                  {{ session_props.row.duration }} min
                </b-table-column>
                <b-table-column
                  field="max_students"
                  label="Máximo de participantes"
                >
                  {{ session_props.row.max_students }}
                </b-table-column>
                <b-table-column field="place" label="Espaço">
                  {{
                    session_props.row.place
                      ? session_props.row.place
                      : "Por alocar"
                  }}
                </b-table-column>
              </template>
            </b-table>
          </div>

          <div
            v-if="props.row.submission_state === 'P'"
            style="margin-top: 13px"
          >
            <b-button
              type="is-success"
              style="margin-right: 10px"
              icon-left="check"
              @click="confirm"
              >Aceitar</b-button
            >
            <b-button
              type="is-danger"
              icon-left="delete"
              @click="confirmCustomDelete"
              >Rejeitar</b-button
            >
          </div>
          <div v-else style="margin-top: 13px">
            <b-button
              type="is-primary"
              style="margin-right: 10px"
              icon-left="pencil"
              >Propor alteração</b-button
            >
          </div>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "AtividadesDepartamentoTabela",
  data() {
    const proposals = require("../../fixtures/atividades.json").map(
      model => model.fields
    );
    return {
      proposals,
      moment: require("moment"),
      state: {
        A: { description: "Aceite", color: "is-success" },
        P: { description: "Pendente", color: "is-warning" },
        R: { description: "Rejeitada", color: "is-danger" }
      }
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
    },
    confirm() {
      this.$buefy.dialog.confirm({
        message:
          "Tem a certeza que deseja aceitar o pedido de criação da atividade?",
        cancelText: "Cancelar",
        confirmText: "Confirmar",
        type: "is-success",
        onConfirm: () => this.$buefy.toast.open("Atividade aceite!")
      });
    },
    confirmCustomDelete() {
      this.$buefy.dialog.confirm({
        title: "Rejeitar Atividade",
        message:
          "Tem a certeza que deseja <b>Rejeitar</b> a ativdade? Esta ação não pode ser revertida!",
        cancelText: "Cancelar",
        confirmText: "Rejeitar",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.prompt()
      });
    },
    prompt() {
      this.$buefy.dialog.prompt({
        message: `<p>Por favor, indique a razão pela qual rejeitou a atividade.</p>
                  <small>Esta será enviada para o professor que a propôs.</small>`,
        inputAttrs: {
          placeholder: "Indique o motivo..."
        },
        trapFocus: true,
        cancelText: "Cancelar",
        confirmText: "Enviar",
        onConfirm: value => this.$buefy.toast.open("Atividade rejeitada!")
      });
    }
  }
};
</script>

<style lang="scss">
.table.is-hoverable tbody > tr:not(.is-selected):not(.detail):hover {
  cursor: pointer;
}
</style>
