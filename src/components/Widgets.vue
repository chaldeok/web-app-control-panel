<template>
  <b-row>
    <b-col class="square"
           v-for="widget in widgets"
           v-bind:key="widget.name"
    >
      <h5>{{ widget.name }}</h5>
      <span>{{ widget.quantity + "K"}}</span>
      <b-link class="widgetsNavLink">Подробнее</b-link>
    </b-col>
  </b-row>
<!--  <b-row lg="5"
         md="9"
         sm="9"
         class="d-flex flex-wrap justify-content-around align-items-between">
    <b-col class="d-flex flex-column plate border rounded text-break
                text-white justify-content-center align-items-center bg-primary
                py-lg-0 py-2"
           cols="6"
           v-for="widget in widgets"
           v-bind:key="widget.name"
    >
      <h5>{{ widget.name }}</h5>
      <span>{{ widget.quantity + "K"}}</span>
      <b-link style="color: white">Подробнее</b-link>
    </b-col>
  </b-row>-->
</template>

<script>
export default {
  name: 'Widgets',
  data () {
    return {
      widgets: [
        {
          name: 'Заказы',
          quantity: 1.7
        },
        {
          name: 'Распродажа',
          quantity: 24.2
        },
        {
          name: 'Онлайн',
          quantity: 17.7
        },
        {
          name: 'Общие',
          quantity: 24.2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .square {
    display: flex;
    display: -o-flex;
    display: -webkit-flex;
    display: -moz-flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
    width: 150px;
    padding: 20px;
    margin: 10px;
    border-radius: 6px;
    background-color: #82b1ff;
    color: white;
    transition: background-color .2s ease;
    cursor: pointer;
    &:hover {
      background-color: darken(#82b1ff, 10%);
    }
    h5 {
      font-size: 20px;
    }
    span {
      margin-bottom: 8px;
      font-size: 24px;
    }
    .widgetsNavLink {
      font-size: 12px;
      color: white;
    }
  }
</style>
