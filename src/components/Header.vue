<template>
  <b-navbar variant="white"
            type="light"
            sticky>
    <b-navbar-nav class="ml-auto mr-5">
      <b-nav-item-dropdown class="ml-5"
                           text="text"
      >
        <template class="position-absolute dropdown-menu-right"
                  v-slot:button-content>
          <b-icon class="caretDownCustom"
                  icon="caret-down"
                  font-scale="0.7"
          ></b-icon>
          <span>
            John Doe
          </span>
          <b-icon class="personCustom ml-2"
                  icon="person"
                  font-scale="1"
          ></b-icon>
        </template>
        <b-dropdown-item class="dropdownGroup" href="#" exact>
          <b-icon class="dropdownItemIcon"
                  icon="person-fill"
                  font-scale="1"
          ></b-icon>
          Личный кабинет
        </b-dropdown-item>

        <b-dropdown-item class="dropdownGroup" href="#" exact>
          <b-icon class="dropdownItemIcon"
                  icon="gear-fill"
                  font-scale="1"
          ></b-icon>
          Настройки
        </b-dropdown-item>

        <b-dropdown-item class="dropdownGroup" href="#" exact>
          <b-icon class="dropdownItemIcon"
                  icon="door-open"
                  font-scale="1"
          ></b-icon>
          Выйти
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>

.caretDownCustom {}

.personCustom {
  width: 30px;
  height: 30px;
  padding: 2px;
  margin-right: 5px;
  border-color: #afcbf6;
  border-radius: 50%;
  background-color: #afcbf6
}

.dropdownGroup {
  display: flex;
  display: -moz-flex;
  display: -webkit-flex;
  display: -o-flex;
  justify-content: space-between;
  align-items: center;
}
.dropdownItemIcon {
  margin-right: 10px;
}
</style>
