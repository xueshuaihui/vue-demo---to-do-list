<template>
  <div id="app">
    <h3>{{msg}}</h3>
    <input v-model="newmsg" @keyup.enter="addlist" />
    <ul class="lists">
      <li v-for="(item, index) in msgarr" :key="index" @click="updataType(index)" :class="className(item.type)">
        {{item.text}}
        <span>{{type(item.type)}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import storage from "./localstorage"
export default {
  name: 'app',
  data () {
    return {
      msg: '待办事件列表',
      newmsg: '',
      msgarr: storage.get()
    }
  },
  methods: {
    addlist(){
      this.msgarr.push( {"text": this.newmsg, type: false} );
      storage.save(this.msgarr);
      this.newmsg = "";
    },
    updataType(index){
      this.msgarr[ index ].type = true;
      storage.save(this.msgarr);
    },
    type(type){
      return type?'完成':'未完成';
    },
    className(type){
      return type?'del':'';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.lists li {
  cursor: pointer;
  text-align: left;
  
}
.lists li span {
    float: right;
}
.lists li.del {
  color: #eeeeee;
}
</style>
