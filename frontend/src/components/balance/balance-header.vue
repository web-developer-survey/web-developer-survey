<template>
  <v-card-text>
    <strong>{{ title }}</strong>
  </v-card-text>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class BalanceHeader extends Vue {
  @Prop() title: string;

  get addIconTitle(): string {
    return `🔊 ${this.title}`;
  }
}
</script>

<style scoped>
.box {
  background: #c0c0c0;
  border-width: 1px;
  border-color: #ffffff #808080 #808080 #ffffff;
  border-style: solid;
  /*position:absolute;*/
  /*top:50%;*/
  /*left:50%;*/
  /*transform: translate(-50%,-50%);*/
  padding: 1px;
}

div.title {
  height: 18px !important;
  width: 100% !important;
  background: #000080;
  color: #fff;
}

img.title {
  float: left;
}

p.title {
  margin: 2px 0 0 1px !important;
  float: left !important;
  font-family: Tahoma !important;
  font-weight: bold !important;
  font-size: 11px !important;
  line-height: 1rem !important;
}

.title button {
  position: absolute;
  right: 3px;
  top: 3px;
  margin: 2px 2px 2px 0;
  float: right;
  width: 14px;
  height: 13.5px;
  background: #c0c0c0;
  border-width: 1px;
  border-color: #ffffff #808080 #808080 #ffffff;
  padding: 0;
  font-size: 9px;
  font-weight: bold;
  font-family: Tahoma;
  text-align: center;
  focus: none;
}

div.body {
  padding: 13px 12px 12px;
  height: 100%;
  width: calc(100% - 26px);
  display: inline-block;
}

div.body p {
  font-family: 'MS Sans Serif' !important;
  font-size: 18px !important;
}

div.body button {
  font-family: 'MS Sans Serif';
  font-size: 11px;
  outline: 1px solid #000000;
  background: #c0c0c0;
  border-width: 1px;
  border-style: solid;
  border-color: #ffffff #808080 #808080 #ffffff;
  padding: 4px 10px;
  margin: 20px auto 3px;
  display: block;
  position: relative;
  bottom: 0px;
}
</style>
