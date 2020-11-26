<template>
  <b-row class="" style="height: 350px">
    <b-col lg="12" sm="8">
      <!-- заголовок -->
      <b-row class="d-flex justify-content-between mb-2">
        <b-col cols="5">
          <h6>Аналитика продаж</h6>
          <small
          >Активных
            <b-link class="text-primary font-weight-bold">{{ activeSales + ' проектов' }}</b-link>
          </small>
        </b-col>

        <b-col cols="5">
          <h5 class="d-flex justify-content-end">90</h5>

          <b-dropdown class="period border d-flex justify-content-end rounded bg-white"
                      text="Месяц"
                      variant="white"
          >
            <template v-slot:button-content>
              <b-icon icon="calendar3"></b-icon>
              Месяц
              <b-icon icon="chevron-down" font-scale="0.8"></b-icon>
            </template>
            <b-dropdown-item>Год</b-dropdown-item>
            <b-dropdown-item>Неделя</b-dropdown-item>
          </b-dropdown>
        </b-col>
      </b-row>

      <!-- chart -->
      <sales-comb-chart style="height: 210px"
        v-bind:data="barChartData"
        v-bind:options="barChartOptions"
        v-bind:height="150"
      >

      </sales-comb-chart>

      <!-- легенда -->
      <b-row>
        <b-col>
          <div class="legendItemContainer">
            <div class="legendItem">
              <div class="legendItem__circle legendItem__circle_blue"></div>
              <div class="legendItemName">Предстоящие</div>
            </div>
            <div class="legendItem">
              <div class="legendItem__circle legendItem__circle_yellow"></div>
              <div class="legendItemName">В процессе</div>
            </div>
            <div class="legendItem">
              <div class="legendItem__circle legendItem__circle_gray"></div>
              <div class="legendItemName">Завершенные</div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>/**/
import SalesCombChart from '@/components/SalesCombChart'
export default {
  name: 'CombChart',
  components: { SalesCombChart },
  data () {
    return {
      activeSales: 13,
      barChartData: {
        labels: [
          'янв',
          'фев',
          'март',
          'апр',
          'май',
          'июнь',
          'июль',
          'авг',
          'сент',
          'окт',
          'ноя',
          'дек'
        ],
        datasets: [
          {
            label: 'Предстоящие',
            data: [5, 7, 3, 1, 4, 6, 1, 2, 3, 2, 3, 4],
            backgroundColor: '#536dfe',
            barThickness: 5
          },
          {
            label: 'В Процессе',
            data: [6, 7, 17, 20, 19, 17, 26, 19, 15, 18, 16, 18],
            backgroundColor: '#ffca28',
            barThickness: 7
          },
          {
            label: 'Завершенные',
            data: [6, 6, 6, 8, 9, 12, 10, 18, 24, 24, 27, 26],
            backgroundColor: '#bdbdbd',
            barThickness: 5
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
          labels: {
            boxWidth: 12
          }
        },
        title: {
          display: false
        },
        tooltips: {
          backgroundColor: '#757575'
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: '#bdbdbd'
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: false,
                fontColor: '#bdbdbd'
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.period {
  display: flex;
  display: -o-flex;
  display: -webkit-flex;
  display: -moz-flex;
  justify-content: space-around;
  width: 120px;
  border: 1px solid #bdbdbd;
  border-radius: 3px;
  .btn {
    outline: none;
  }
}

.legend-color {
  width: 0.5em;
  height: 0.5em;
  top: 40%;
  left: 0.3em;
}

.legendItemContainer {
  display: flex;
  display: -o-flex;
  display: -webkit-flex;
  display: -moz-flex;
  justify-content: space-around;
  .legendItem {
    display: flex;
    display: -o-flex;
    display: -webkit-flex;
    display: -moz-flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    font-size: 12px;
    padding: 3px 6px;
    border: 1px solid #bdbdbd;
    border-radius: 3px;
  }
  .legendItem__circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 15px;
  }
  .legendItem__circle_blue {
    background-color: #536dfe;
  }
  .legendItem__circle_yellow {
    background-color: #ffca28;
  }
  .legendItem__circle_gray {
    background-color: #bdbdbd;
  }
}
</style>
