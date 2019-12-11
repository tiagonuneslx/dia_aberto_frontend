<template>
  <table class="table">
    <thead>
      <tr>
        <th>Horário</th>
        <th>Inscritos</th>
        <th>Atividade</th>
        <th>Espaço</th>
        <th>Campus</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>14:30 - 16:00</td>
        <td class="has-text-centered">
          <b-field>
            <b-numberinput
              v-model="inscritos1"
              min="0"
              style="width: 7rem"
              controls-position="compact"
            />
          </b-field>
        </td>
        <td>Introdução a Pyhton</td>
        <td>CP Anfiteatro C</td>
        <td>Gambelas</td>
        <td class="has-text-centered">
          <a><b-icon icon="close-box" type="is-danger"/></a>
        </td>
      </tr>
      <tr>
        <td>14:30 - 16:30</td>
        <td class="has-text-centered">
          <b-field>
            <b-numberinput
              v-model="inscritos2"
              min="0"
              style="width: 7rem"
              controls-position="compact"
            />
          </b-field>
        </td>
        <td>Fomos longe demais?</td>
        <td>CP Anfiteatro D</td>
        <td>Gambelas</td>
        <td class="has-text-centered">
          <a><b-icon icon="close-box" type="is-danger"/></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "SesoesEscolhidasTabela",
  data() {
    return {
      inscritos1: 15,
      inscritos2: 20
    };
  }
};
</script>
