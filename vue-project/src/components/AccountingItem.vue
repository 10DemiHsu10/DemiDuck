<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      count: 'count',
      items: 'accountingItems'
    }),
    getItemsByExpensive() {
      return this.$store.getters.getItemsByExpensive;
    }
  }
}
</script>

<template>
  <div class="AccountingItem">
    <div>{{ getItemsByExpensive[0].name }}</div>
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