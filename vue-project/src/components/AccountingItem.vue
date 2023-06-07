<script>
import { mapState } from 'vuex';
import { INCREMENT } from '../consts/mutationTypes.js';

export default {
  computed: {
    ...mapState({
      count: 'count',
      items: 'accountingItems'
    }),
    getItemsByExpensive() {
      return this.$store.getters.getItemsByExpensive(60);
    }
  },

  methods: {
    add() {
      this.$store.commit(INCREMENT);
    }
  }
}
</script>

<template>
  <button @click="add">Add</button>
  <div class="AccountingItem">
    <div>{{ getItemsByExpensive[1].name }}</div>
    <div>{{ count }}</div>
  </div>
  <div class="AccountingItem">
    <div>雞腿便當</div>
    <div>85</div>
  </div>
  <div class="AccountingItem">
    <div>雞腿便當</div>
    <div>85</div>
  </div>
</template>