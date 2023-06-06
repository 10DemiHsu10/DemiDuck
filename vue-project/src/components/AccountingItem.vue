<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      count: 'count',
      items: 'accountingItems'
    })
  }
}
</script>

<template>
  <div class="AccountingItem">
    <div>{{ items[1].name }}</div>
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