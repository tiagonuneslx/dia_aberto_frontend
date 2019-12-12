<template>
  <div id="top">
    <nav aria-label="breadcrumbs" class="breadcrumb">
      <ul>
        <li>
          <router-link :to="{ name: 'inicio' }">Início</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'tarefas' }">Tarefas</router-link>
        </li>
        <li class="is-active">
          <router-link :to="{ name: 'adicionar tarefa' }"
            >Adicionar Tarefa</router-link
          >
        </li>
      </ul>
    </nav>
    <div style="padding: 3rem 2vw 1rem">
      <b-steps type="is-success">
        <b-step-item label="Adicionar Tarefa" icon="account-details">
          <div style="padding: 1rem 2vw 0">
            <hr />
            <div class="column is-offset-3 is-6">
              <div class="columns">
                <div class="column">
                  <b-field label="Horário de Início">
                    <b-timepicker
                      placeholder="De"
                      icon="clock"
                      editable
                      :increment-minutes="5"
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Horário de Fim">
                    <b-timepicker
                      placeholder="Até"
                      icon="clock"
                      editable
                      :increment-minutes="5"
                    />
                  </b-field>
                </div>
              </div>
              <div class="block">
                <b-field label="Tipo de Tarefa:" />
                <b-radio
                  style="margin-right: 1rem"
                  v-model="radio"
                  name="atividade"
                  native-value="Atividade"
                >
                  Atividade
                </b-radio>
                <b-radio
                  style="margin-right: 1rem"
                  v-model="radio"
                  name="percurso"
                  native-value="Percurso"
                >
                  Acompanhar participantes
                </b-radio>
                <b-radio v-model="radio" name="outra" native-value="Outra">
                  Outra
                </b-radio>
              </div>
              <div v-if="radio === 'Atividade'">
                <b-field label="Nome da Atividade:">
                  <b-autocomplete
                    placeholder="Nome da Atividade"
                    keep-first
                    icon="magnify"
                    v-model="nomeAtividade"
                    :data="atividadesComFiltro"
                    field="name"
                  >
                    <template slot="empty">Atividade não encontrada</template>
                  </b-autocomplete>
                </b-field>
              </div>
              <div v-else-if="radio === 'Percurso'">
                <b-field label="Local ou atividade de encontro:">
                  <b-autocomplete
                    placeholder="Indique o encontro..."
                    keep-first
                    icon="magnify"
                    v-model="localEncontro"
                    :data="localEncontroComFiltro"
                    field="name"
                  >
                  </b-autocomplete>
                </b-field>
                <b-field label="Local ou atividade de destino:">
                  <b-autocomplete
                    placeholder="Indique o destino..."
                    keep-first
                    icon="magnify"
                    v-model="localDestino"
                    :data="localDestinoComFiltro"
                    field="name"
                  >
                  </b-autocomplete>
                </b-field>
              </div>
              <div v-if="radio === 'Outra'">
                <b-field label="Descrição da Tarefa">
                  <b-input maxlength="100" type="textarea" />
                </b-field>
              </div>
            </div>
            <hr />
          </div>
        </b-step-item>
        <template slot="navigation">
          <div class="column is-8 is-offset-2">
            <div class="level">
              <div class="level-left">
                <b-button
                  tag="router-link"
                  :to="{ name: 'tarefas' }"
                  outlined
                  v-scroll-to="'#top'"
                >
                  Cancelar
                </b-button>
              </div>
              <div class="level-right">
                <b-button
                  outlined
                  size="is-large"
                  type="is-success"
                  @click.prevent="submeter"
                >
                  Adicionar Tarefa
                </b-button>
              </div>
            </div>
          </div>
        </template>
      </b-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdicionarTarefa",
  data() {
    return {
      radio: null,
      atividades: require("../fixtures/atividades.json").map(
        model => model.fields
      ),
      nomeAtividade: "",
      localEncontro: "",
      localDestino: ""
    };
  },
  computed: {
    atividadesComFiltro() {
      return this.atividades.filter(atividade => {
        return (
          atividade.name
            .toString()
            .toLowerCase()
            .indexOf(this.nomeAtividade.toLowerCase()) >= 0
        );
      });
    },
    localEncontroComFiltro() {
      return this.atividades.filter(atividade => {
        return (
          atividade.name
            .toString()
            .toLowerCase()
            .indexOf(this.localEncontro.toLowerCase()) >= 0
        );
      });
    },
    localDestinoComFiltro() {
      return this.atividades.filter(atividade => {
        return (
          atividade.name
            .toString()
            .toLowerCase()
            .indexOf(this.localDestino.toLowerCase()) >= 0
        );
      });
    }
  },
  methods: {
    submeter() {
      this.$buefy.dialog.confirm({
        message: "Tem a certeza que quer adicionar a tarefa?",
        cancelText: "Cancelar",
        confirmText: "Confirmar",
        type: "is-success",
        onConfirm: () => this.confirmado()
      });
    },
    confirmado() {
      this.$buefy.toast.open("Tarefa adicionada!");
      this.$store.commit(
        "adicionarNotificacao",
        "A tarefa foi adicionada com sucesso!"
      );
      this.$store.commit("carregarTarefa");
      this.$router.push({ name: "tarefas" });
    }
  }
};
</script>

<style lang="scss">
.label {
  font-weight: normal;
}
.b-steps .steps .step-items .step-item .step-details .step-title {
  font-size: 1rem;
}
</style>
