<template>
  <b-menu>
    <b-menu-list label="Menu">
      <b-menu-item icon="information-outline" label="Info"></b-menu-item>
      <b-menu-item
              :active="isActive"
              :expanded="isActive"
              @click="isActive = !isActive"
              icon="settings"
      >
        <template slot="label" slot-scope="props">
          Configurações
          <b-icon
                  :icon="props.expanded ? 'menu-down' : 'menu-up'"
                  class="is-pulled-right"
          >
          </b-icon>
        </template>
        <b-menu-item icon="account" label="Utilizadores"></b-menu-item>
        <b-menu-item icon="cellphone-link">
          <template slot="label">
            Plataforma
            <b-dropdown
                    aria-role="list"
                    class="is-pulled-right"
                    position="is-bottom-left"
            >
              <b-icon icon="dots-vertical" slot="trigger"></b-icon>
              <b-dropdown-item aria-role="listitem">Gucci</b-dropdown-item>
              <b-dropdown-item aria-role="listitem"
              >Just so gucci
              </b-dropdown-item
              >
            </b-dropdown>
          </template>
        </b-menu-item>
        <b-menu-item
                disabled
                icon="cash-multiple"
                label="Contribuições"
        ></b-menu-item>
      </b-menu-item>
      <b-menu-item icon="account" label="Minha conta">
        <b-menu-item label="Dados da conta"></b-menu-item>
        <b-menu-item label="Outros dados"></b-menu-item>
      </b-menu-item>
    </b-menu-list>
    <b-menu-list label="Ações">
      <b-menu-item label="Sair"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
  export default {
    data() {
      return {
        isActive: true
      };
    },
    name: "ActivitiesLeftMenu"
  };
</script>
