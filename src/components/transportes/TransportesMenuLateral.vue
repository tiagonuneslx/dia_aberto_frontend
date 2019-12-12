<template>
  <div>
    <b-menu>
      <b-menu-list label="Filtros Transporte">
        <b-field>
          <b-autocomplete
            placeholder="Nome da escola"
            keep-first
            icon="magnify"
            v-model="transporte"
            :data="transportesComFiltro"
            field="escola"
          >
            <template slot="empty">Escola não encontrada</template>
          </b-autocomplete>
        </b-field>
        <b-field>
          <b-autocomplete
            placeholder="Nome da localidade"
            keep-first
            icon="magnify"
            v-model="localidade"
            :data="localidadesComFiltro"
            field="localidade"
          >
            <template slot="empty">Escola não encontrada</template>
          </b-autocomplete>
        </b-field>
        <b-field>
          <b-select placeholder="Campus" expanded>
            <option v-for="(opcao, index) in campus" :value="opcao" :key="index"
              >{{ opcao }}
            </option>
          </b-select>
        </b-field>
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
        <b-field>
          <b-select placeholder="Estado" expanded>
            <option v-for="(opcao, index) in estado" :value="opcao" :key="index"
              >{{ opcao }}
            </option>
          </b-select>
        </b-field>
        <b-menu-item>
          <template slot="label">
            <b-icon class="is-pulled-right" :icon="'plus'" />
            <small>Mais Filtros de Transporte</small>
          </template>
        </b-menu-item>
      </b-menu-list>
    </b-menu>
  </div>
</template>

<script>
export default {
  name: "TransportesMenuLateral",
  props: {
    transportes: []
  },
  data() {
    return {
      transporte: "",
      localidade: ""
    };
  },
  computed: {
    transportesComFiltro() {
      return this.transportes.filter(atividade => {
        return (
          atividade.escola
            .toString()
            .toLowerCase()
            .indexOf(this.transporte.toLowerCase()) >= 0
        );
      });
    },
    localidadesComFiltro() {
      return this.transportes.filter(atividade => {
        return (
          atividade.localidade
            .toString()
            .toLowerCase()
            .indexOf(this.localidade.toLowerCase()) >= 0
        );
      });
    },
    campus() {
      return [
        ...new Set(this.transportes.map(atividade => atividade.campus))
      ].sort();
    },
    estado() {
      return [
        ...new Set(this.transportes.map(atividade => atividade.estado))
      ].sort();
    }
  }
};
</script>

<style lang="scss">
.menu-list .is-not-menu a.is-active {
  background-color: white;
  color: black;
}
</style>
