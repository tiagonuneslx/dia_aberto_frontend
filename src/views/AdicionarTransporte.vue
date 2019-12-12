<template>
  <div id="top">
    <nav aria-label="breadcrumbs" class="breadcrumb">
      <ul>
        <li>
          <router-link :to="{ name: 'inicio' }">Início</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'transportes' }">Transportes</router-link>
        </li>
        <li class="is-active">
          <router-link :to="{ name: 'adicionar transporte' }"
            >Adicionar Transporte</router-link
          >
        </li>
      </ul>
    </nav>
    <div style="padding: 3rem 2vw 1rem">
      <b-steps type="is-success">
        <b-step-item label="Adicionar Transporte" icon="train-car">
          <div style="padding: 1rem 2vw 0">
            <hr />
            <div class="column is-offset-3 is-6">
              <b-field label="Escola">
                <b-input v-model="Escola" />
              </b-field>
              <b-field label="Localidade">
                <b-input v-model="Localidade" />
              </b-field>
              <b-field label="Campus">
                <b-select expanded>
                  <option>Gambelas</option>
                  <option>Penha</option>
                </b-select>
              </b-field>
              <div class="columns">
                <div class="column">
                  <b-field label="Número de autocarros">
                    <b-numberinput controls-position="compact" />
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Número de lugares">
                    <b-numberinput controls-position="compact"
                  /></b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Horário de partida">
                    <b-timepicker
                      placeholder="De"
                      icon="clock"
                      editable
                      :increment-minutes="5"
                    />
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Horário de chegada">
                    <b-timepicker
                      placeholder="Até"
                      icon="clock"
                      editable
                      :increment-minutes="5"
                    />
                  </b-field>
                </div>
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
                  :to="{ name: 'transportes' }"
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
                  Adicionar Transporte
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
  name: "Adicionar Transporte",
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
        message: "Tem a certeza que quer adicionar o transporte?",
        cancelText: "Cancelar",
        confirmText: "Confirmar",
        type: "is-success",
        onConfirm: () => this.confirmado()
      });
    },
    confirmado() {
      this.$buefy.toast.open("Transporte adicionado!");
      this.$store.commit(
        "adicionarNotificacao",
        "O transporte foi adicionado com sucesso!"
      );
      this.$router.push({ name: "transportes" });
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
