<template>
  <div id="top">
    <nav aria-label="breadcrumbs" class="breadcrumb">
      <ul>
        <li>
          <router-link :to="{ name: 'inicio' }">Início</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'minhas atividades' }"
            >Minhas Atividades</router-link
          >
        </li>
        <li class="is-active">
          <router-link :to="{ name: 'propor atividade' }"
            >Propor Atividade</router-link
          >
        </li>
      </ul>
    </nav>
    <div style="padding: 3rem 2vw 1rem">
      <b-steps type="is-success">
        <b-step-item label="Atividade" icon="flask">
          <ProporAtividadeAtividade />
        </b-step-item>
        <b-step-item label="Sessões" icon="calendar-check">
          <ProporAtividadeSessoes />
        </b-step-item>
        <b-step-item label="Submissão" icon="check">
          <SubmissaoAtividade />
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
                  :to="{ name: 'minhas atividades' }"
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
                  Submeter Atividade
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
import ProporAtividadeAtividade from "../components/proporatividade/ProporAtividadeAtividade";
import ProporAtividadeSessoes from "../components/proporatividade/ProporAtividadeSessoes";
import SubmissaoAtividade from "../components/proporatividade/SubmissaoAtividade";
export default {
  name: "ProporAtividade",
  components: {
    SubmissaoAtividade,
    ProporAtividadeSessoes,
    ProporAtividadeAtividade
  },
  methods: {
    submeter() {
      this.$buefy.dialog.confirm({
        message:
          "Tem a certeza que submeter a proposta de criação da atividade?",
        cancelText: "Cancelar",
        confirmText: "Confirmar",
        type: "is-success",
        onConfirm: () => this.confirmado()
      });
    },
    confirmado() {
      this.$buefy.toast.open("Atividade proposta!");
      this.$store.commit(
        "adicionarNotificacao",
        "A atividade foi proposta com sucesso!"
      );
      this.$router.push({ name: "minhas atividades" });
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
