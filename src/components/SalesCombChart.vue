<script>
import { Bar } from 'vue-chartjs'

export default {
  name: 'SalesCombChart',
  extends: Bar,
  props: [
    'data',
    'options'
  ],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>

<style scoped>

</style>
