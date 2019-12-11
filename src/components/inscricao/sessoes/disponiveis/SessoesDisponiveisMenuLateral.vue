<template>
  <div>
    <b-menu style="margin-bottom: 1rem">
      <b-menu-list label="Filtros Atividade">
        <b-field>
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
        <b-field>
          <b-select placeholder="Tipo de Atividade" expanded>
            <option
              v-for="(opcao, index) in tiposAtividade"
              :value="opcao"
              :key="index"
              >{{ opcao }}
            </option>
          </b-select>
        </b-field>
        <b-field>
          <b-select placeholder="Campus" expanded>
            <option v-for="(opcao, index) in campus" :value="opcao" :key="index"
              >{{ opcao }}
            </option>
          </b-select>
        </b-field>
        <b-menu-item
          class="is-not-menu"
          :expanded="maisFiltrosAtividade"
          @click="maisFiltrosAtividade = !maisFiltrosAtividade"
        >
          <template slot="label" slot-scope="props">
            <b-icon
              class="is-pulled-right"
              :icon="props.expanded ? 'minus' : 'plus'"
            />
            <small>Mais Filtros de Atividade</small>
          </template>
          <b-field>
            <b-datepicker
              placeholder="Submetido depois de..."
              icon="calendar-today"
            >
            </b-datepicker>
          </b-field>
          <b-field>
            <b-datepicker
              placeholder="Submetido antes de..."
              icon="calendar-today"
            >
            </b-datepicker>
          </b-field>
        </b-menu-item>
      </b-menu-list>
    </b-menu>
    <b-menu>
      <b-menu-list label="Filtros Sessão">
        <div class="columns" style="margin-bottom: 0">
          <b-field class="column" style="margin-bottom: 0">
            <b-timepicker
              placeholder="De"
              icon="clock"
              editable
              :increment-minutes="30"
            >
            </b-timepicker>
          </b-field>
          <b-field class="column">
            <b-timepicker
              placeholder="Até"
              icon="clock"
              editable
              :increment-minutes="30"
            >
            </b-timepicker>
          </b-field>
        </div>
        <b-field label="Mínimo de vagas">
          <b-numberinput v-model="number" controls-position="compact" min="0" />
        </b-field>
        <b-menu-item
          class="is-not-menu"
          :expanded="maisFiltrosSessao"
          @click="maisFiltrosSessao = !maisFiltrosSessao"
        >
          <template slot="label" slot-scope="props">
            <b-icon
              class="is-pulled-right"
              :icon="props.expanded ? 'minus' : 'plus'"
            />
            <small>Mais Filtros de Sessão</small>
          </template>
        </b-menu-item>
      </b-menu-list>
    </b-menu>
  </div>
</template>

<script>
export default {
  name: "SessoesDisponiveisMenuLateral",
  data() {
    return {
      maisFiltrosAtividade: false,
      maisFiltrosSessao: false,
      nomeAtividade: "",
      atividades: require("../../../../fixtures/atividades.json").map(
        model => model.fields
      )
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
    tiposAtividade() {
      return [
        ...new Set(this.atividades.map(atividade => atividade.activity_type))
      ].sort();
    },
    campus() {
      return [
        ...new Set(this.atividades.map(atividade => atividade.campus))
      ].sort();
    },
    estadosSubmissao() {
      return [
        ...new Set(this.atividades.map(atividade => atividade.submission_state))
      ].sort();
    }
  }
};
</script>

<style lang="scss">
.label {
  font-weight: normal;
}
.menu-list .is-not-menu a.is-active {
  background-color: white;
  color: black;
}
</style>
