<script>
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'count'
  ])
}
</script>

<template>
  <div class="AccountingItem">
    <div>雞腿便當</div>
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