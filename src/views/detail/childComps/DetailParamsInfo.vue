<template>
  <div v-if="Object.keys(paramsInfo).length !== 0" class="params-info">
    <table
      v-for="(table, index) in paramsInfo.rule.tables"
      :key="index"
      class="params-rule"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="params-set">
      <tr v-for="(item, index) in paramsInfo.info.set" :key="index">
        <td>{{ item.key }}</td>
        <td class="info-value">{{ item.value }}</td>
      </tr>
    </table>
    <div v-if="paramsInfo.info.image" class="params-image">
      <img :src="paramsInfo.info.image[0]" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.params-info {
  padding: 20px 15px;
  border-top: 4px solid rgba(100, 100, 100, 0.1);
  border-bottom: 4px solid rgba(100, 100, 100, 0.1);
}

table {
  /* table-layout: fixed; */
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

table tr {
  /* 合并周围边框，让tr显示出边框 */
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

table td {
  padding: 10px;
  font-size: 14px;
}

.params-rule {
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
}

.params-set td {
  /* 字数过多，自动换行 */
  word-wrap: break-word;
  word-break: break-all;
}

.params-set td:first-child {
  text-align: left;
  white-space: nowrap;
}

.params-set .info-value {
  color: var(--color-high-text);
}

.params-image {
  width: 100%;
}
</style>
