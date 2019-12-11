<template>
  <div>
    <b-menu style="margin-bottom: 1rem">
      <b-menu-list label="Filtros Colaborador">
        <b-field>
          <b-autocomplete
            placeholder="Nome do Colaborador"
            keep-first
            icon="magnify"
            v-model="nomeAtividade"
            :data="atividadesComFiltro"
            field="name"
          >
            <template slot="empty">Colaborador não encontrado</template>
          </b-autocomplete>
        </b-field>
        <b-field>
          <b-autocomplete
            placeholder="Código do Colaborador"
            keep-first
            icon="magnify"
          >
            <template slot="empty">Colaborador não encontrado</template>
          </b-autocomplete>
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
            <small>Mais Filtros de Colaborador</small>
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
      <b-menu-list label="Filtros Tarefa">
        <b-field>
          <b-autocomplete
            placeholder="Nome da Tarefa"
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
          <b-select placeholder="Tipo de Tarefa" icon="magnify" expanded>
            <option
              v-for="(opcao, index) in estadosSubmissao"
              :value="opcao"
              :key="index"
              >{{ $store.state.estadoSubmissao[opcao].descricao }}</option
            >
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
            <small>Mais Filtros de Tarefa</small>
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
  </div>
</template>

<script>
export default {
  name: "ColaboradoresMenuLateral"
};
</script>
