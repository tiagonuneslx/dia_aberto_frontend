<template>
  <div>
    <hr style="margin: 0" />
    <navbar class="level">
      <b-dropdown class="level-item has-text-centered" aria-role="list">
        <b-button size="is-large" icon-right="menu-down" slot="trigger">
          <span style="font-size: 17px">Atividades</span>
        </b-button>
        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
      </b-dropdown>
      <b-dropdown class="level-item has-text-centered" aria-role="list">
        <b-button size="is-large" icon-right="menu-down" slot="trigger">
          <span style="font-size: 17px">Inscrições</span>
        </b-button>
        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
      </b-dropdown>
      <b-dropdown class="level-item has-text-centered" aria-role="list">
        <b-button size="is-large" icon-right="menu-down" slot="trigger">
          <span style="font-size: 17px">Transportes</span>
        </b-button>
        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
      </b-dropdown>
      <b-dropdown class="level-item has-text-centered" aria-role="list">
        <b-button size="is-large" icon-right="menu-down" slot="trigger">
          <span style="font-size: 17px">Almoços</span>
        </b-button>
        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
      </b-dropdown>
      <b-dropdown class="level-item has-text-centered" aria-role="list">
        <b-button size="is-large" icon-right="menu-down" slot="trigger">
          <span style="font-size: 17px">Configuração do Dia Aberto</span>
        </b-button>
        <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
      </b-dropdown>
    </navbar>
  </div>
</template>

<style lang="scss">
.dropdown-trigger > button {
  background-color: transparent;
  border: none;
}
</style>
