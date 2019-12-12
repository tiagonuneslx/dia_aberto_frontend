<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item :to="{ name: 'inicio' }" class="logo" tag="router-link">
        <img alt="Dia Aberto" src="../assets/img/logo-navbar.png" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <template
        v-for="(separador, index) in separadores[$store.state.utilizador]"
      >
        <b-navbar-item
          :key="index"
          :to="{ name: separador.nome }"
          class="is-tab router-link"
          tag="router-link"
        >
          {{ separador.descricao }}
        </b-navbar-item>
      </template>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <b-dropdown
          v-model="navigation"
          position="is-bottom-left"
          aria-role="menu"
        >
          <span slot="trigger" role="button">
            <b-button
              style="margin-right: 0.9rem"
              type="is-text"
              class="has-badge-rounded has-badge-warning"
              :data-badge="$store.state.notificacoes.length"
            >
              <b-icon icon="bell" />
            </b-button>
          </span>

          <b-dropdown-item custom aria-role="menuitem">
            <strong>Notificações</strong>
          </b-dropdown-item>
          <hr class="dropdown-divider" />
          <div
            v-for="(notificacao, index) in $store.state.notificacoes"
            :key="index"
          >
            <b-dropdown-item has-link aria-role="menuitem">
              <a style="width: 18rem; white-space: initial;">
                {{ notificacao }}
              </a>
            </b-dropdown-item>
            <b-dropdown-item separator />
          </div>
          <div v-if="$store.state.notificacoes.length === 0">
            <b-dropdown-item custom>
              <div class="has-text-grey">
                Não tem novas notificações!
              </div>
            </b-dropdown-item>
            <b-dropdown-item separator />
          </div>
          <b-dropdown-item>
            <u>Ver todas as notificações</u>
          </b-dropdown-item>
        </b-dropdown>
        <b-dropdown aria-role="list" position="is-bottom-left">
          <b-button type="is-text" style="margin-right: 0.9rem" slot="trigger">
            <b-icon icon="account-circle" />
          </b-button>
          <b-dropdown-item aria-role="listitem" disabled
            >Participante Individual</b-dropdown-item
          >
          <b-dropdown-item
            aria-role="listitem"
            @click="mudarUtilizador('professorSecundario')"
            >Professor Secundário</b-dropdown-item
          >
          <b-dropdown-item aria-role="listitem" disabled
            >Colaborador</b-dropdown-item
          >
          <b-dropdown-item
            aria-role="listitem"
            @click="mudarUtilizador('professorUniversitario')"
            >Professor Universitário</b-dropdown-item
          >
          <b-dropdown-item
            aria-role="listitem"
            @click="mudarUtilizador('coordenador')"
            >Coordenador</b-dropdown-item
          >
          <b-dropdown-item
            aria-role="listitem"
            @click="mudarUtilizador('administrador')"
            >Administrador</b-dropdown-item
          >
        </b-dropdown>
        <b-button icon-left="logout-variant">
          Sair
        </b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      separadores: {
        administrador: [
          {
            nome: "atividades",
            descricao: "Atividades"
          },
          {
            nome: "inscricoes",
            descricao: "Inscrições"
          },
          {
            nome: "transportes",
            descricao: "Transportes"
          },
          {
            nome: "almocos",
            descricao: "Almoços"
          },
          {
            nome: "configuracao do dia aberto",
            descricao: "Configuração do Dia Aberto"
          }
        ],
        professorSecundario: [
          {
            nome: "inscricao",
            descricao: "Minha Inscrição"
          }
        ],
        professorUniversitario: [
          {
            nome: "minhas atividades",
            descricao: "Minhas Atividades"
          }
        ],
        coordenador: [
          {
            nome: "atividades do departamento",
            descricao: "Atividades do Departamento"
          },
          {
            nome: "inscricoes",
            descricao: "Inscrições"
          },
          {
            nome: "colaboradores",
            descricao: "Colaboradores"
          },
          {
            nome: "tarefas",
            descricao: "Tarefas"
          }
        ]
      }
    };
  },
  methods: {
    mudarUtilizador(utilizador) {
      this.$store.commit("mudarUtilizador", utilizador);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../buefy";

.router-link.router-link-exact-active {
  @extend .navbar-item.is-tab:focus;
  color: $primary;
}
</style>
