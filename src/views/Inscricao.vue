<template>
  <div id="top">
    <nav aria-label="breadcrumbs" class="breadcrumb">
      <ul>
        <li>
          <router-link to="/">Início</router-link>
        </li>
        <li class="is-active">
          <router-link to="/inscricao">Minha Inscrição</router-link>
        </li>
      </ul>
    </nav>
    <div style="padding: 3rem 2vw 1rem">
      <b-steps type="is-success">
        <b-step-item label="Responsáveis" icon="account">
          <Responsaveis />
        </b-step-item>
        <b-step-item label="Escola" icon="school">
          <Escola />
        </b-step-item>
        <b-step-item label="Transporte" icon="train-car">
          <Transporte />
        </b-step-item>
        <b-step-item label="Almoço" icon="food-apple">
          <Almoco />
        </b-step-item>
        <b-step-item label="Sessões" icon="calendar-check">
          <Sessoes />
        </b-step-item>
        <b-step-item label="Submissão" icon="check">
          <SubmissaoInscricao />
        </b-step-item>

        <template slot="navigation" slot-scope="{ previous, next }">
          <div class="column is-8 is-offset-2">
            <div class="level">
              <div class="level-left">
                <b-button
                  v-if="!previous.disabled"
                  outlined
                  icon-left="chevron-left"
                  @click.prevent="previous.action"
                  v-scroll-to="'#top'"
                >
                  Anterior
                </b-button>
                <b-button
                  v-else
                  tag="router-link"
                  :to="{ name: 'inicio' }"
                  outlined
                  v-scroll-to="'#top'"
                >
                  Cancelar
                </b-button>
              </div>
              <div class="level-right">
                <b-button
                  v-if="!next.disabled"
                  outlined
                  size="is-large"
                  type="is-success"
                  icon-right="forward"
                  @click.prevent="next.action"
                  v-scroll-to="'#top'"
                >
                  Próximo
                </b-button>
                <b-button
                  v-else
                  outlined
                  size="is-large"
                  type="is-success"
                  @click.prevent="submeter"
                >
                  Submeter Inscrição
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
import Responsaveis from "../components/inscricao/Responsaveis";
import Escola from "../components/inscricao/Escola";
import Transporte from "../components/inscricao/Transporte";
import Almoco from "../components/inscricao/Almoco";
import Sessoes from "../components/inscricao/Sessoes";
import SubmissaoInscricao from "../components/inscricao/SubmissaoInscricao";
export default {
  name: "Inscricao",
  components: {
    SubmissaoInscricao,
    Sessoes,
    Almoco,
    Transporte,
    Escola,
    Responsaveis
  },
  data() {
    return {
      campos: []
    };
  },
  methods: {
    submeter() {
      this.$buefy.dialog.confirm({
        message: "Tem a certeza que submeter a inscrição no Dia Aberto?",
        cancelText: "Cancelar",
        confirmText: "Confirmar",
        type: "is-success",
        onConfirm: () => this.confirmado()
      });
    },
    confirmado() {
      this.$buefy.toast.open("Inscrição concluída!");
      this.$store.commit(
        "adicionarNotificacao",
        "A sua inscrição foi concluída com sucesso!"
      );
      this.$router.push({ name: "inicio" });
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
