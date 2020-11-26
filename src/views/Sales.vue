<template>
  <b-container class="salesContainer">
    <div class="row">
      <div class="col-md-7 col-sm-7 col-xs-12">
        <div class="combChart">
          <comb-chart-component />
        </div>
      </div>
      <div class="col-md-5 col-sm-5 col-xs-12">
        <div class="widgetsContainer">
          <widgets-component />
        </div>
      </div>
      <div class="col-xs-12 col-sm-8 col-md-8">
        <div class="worldMap">
          <span>На карте</span>
        </div>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="help">
          <div class="help__img"></div>
          <h6>Нужна помощь?</h6>
          <div class="help__question">
            Есть ли у вас проблемы при использовании программы?
          </div>
          <b-link class="help__link">
            Пишите нам
          </b-link>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>

import WidgetsComponent from '@/components/Widgets'
import CombChartComponent from '@/components/CombChart'

export default {
  name: 'Sales',
  components: {
    WidgetsComponent,
    CombChartComponent
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

  .salesContainer {
    display: flex;
    display: -o-flex;
    display: -webkit-flex;
    display: -moz-flex;
    flex-wrap: wrap;
    //justify-content: flex-end;
    width: 75%;
    margin-left: 200px;
    padding: 10px;
    font-family: Montserrat, sans-serif;
  }
  .widgetsContainer {
    display: flex;
    display: -o-flex;
    display: -webkit-flex;
    display: -moz-flex;
    flex-wrap: wrap;
    //width: 33%;
  }

  .worldMap {
    position: relative;
    background-image: url("../assets/img/worldmap.png");
    background-size: cover;
    background-position: center;
    span {
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      padding: 15px;
      border-radius: 4px;
    }
  }
  .worldMap, .help {
    width: 100%;
    height: 300px;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
  }

  .help {
    padding: 15px;
    h6 {
      margin-top: 10px;
      padding: 0;
      text-align: left;
    }
    .help__question {
      display: block;
      font-size: 11px;
      line-height: 13px;
      text-align: left;
    }
    .help__link {
      display: inline-block;
      //width: 40%;
      font-size: 13px;
      background-color: #9fa8da;
      border-radius: 4px;
      margin-top: 15px;
      padding: 5px;
      color: white;
      float: left;
      text-decoration: none;
      transition: background-color .3s ease;
      &:hover {
        background-color: darken(#9fa8da, 10%);
      }
    }
  }
  .help__img {
    background-image: url("../assets/img/help.png");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 60%;
  }
</style>
