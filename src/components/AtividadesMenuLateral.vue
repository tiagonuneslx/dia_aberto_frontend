<template>
  <b-menu>
    <b-menu-list label="Atividades">
      <b-menu-item icon="information-outline" label="Lista de atividades" />
    </b-menu-list>
    <b-menu-list label="Filtrar">
      <b-field>
        <b-autocomplete
          placeholder="Nome da Atividade"
          keep-first
          icon="magnify"
          v-model="nomeAtividade"
          :data="atividadesFiltradas"
          field="name"
        >
          <template slot="empty">Atividade não encontrada</template>
        </b-autocomplete>
      </b-field>
      <b-field>
        <b-select placeholder="Tipo de Atividade" icon="magnify" expanded>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </b-select>
      </b-field>
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  name: "ActivitiesLeftMenu",
  props: {
    atividades: []
  },
  data() {
    return {
      isActive: true,
      nomeAtividade: ""
    };
  },
  computed: {
    atividadesFiltradas() {
      return this.atividades.filter(opcao => {
        return (
          opcao.name
            .toString()
            .toLowerCase()
            .indexOf(this.nomeAtividade.toLowerCase()) >= 0
        );
      });
    }
  }
};
</script>
