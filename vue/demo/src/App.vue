<template>
  <div id="app">
    <h5>v-for循环</h5>
    <ul>
      <li v-for="(value, index) in array">index：{{index}}，value：{{value.name}}</li>
    </ul>
    <!---第二个的参数为键名，第三个参数为索引-->
    <ul>
      <li v-for="(value, key, index) in object">index：{{index}}，key：{{key}}，value：{{value}}</li>
    </ul>
    <h5>computed计算属性</h5>
    <div> computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。在性能上computed优于methods,当不需要缓存时可用methods。</div>
    <div>
      <p>原始字符串: {{ message }}</p>
      <p>计算后反转字符串: {{ reversedMessageComputed }}</p>
      <p>使用方法后反转字符串: {{ reversedMessageMethods() }}</p>
    </div>
    <select v-model="site">
      <option value="Google http://www.google.com">Google http://www.google.com</option>
      <option value="baidu http://www.baidu.co">baidu http://www.baidu.com</option>
      <option value="网易 http://www.163.com">网易 http://www.163.com</option>
    </select>
    <div>{{site}}</div>
    <div>
      <input v-model="filterText" />
      <ul>
        <li v-for="value in obj">{{myfilter(value.label)}}</li>
      </ul>
    </div>
    <div>
      <input v-model="opt" @blur="add()"/>
      <ul>
        <li v-for="item in arr">
          {{ item }}
        </li>
      </ul>
      <input type="button" v-on:click="deleteMsg" value="删除" />
    </div>
    <appHello></appHello>
  </div>
</template>

<script>
import appHello from './components/appHello.vue'
export default {
  name: 'app',
  components: {
    appHello
  },
  data () {
    return {
      array: [
        { name: 'Runoob' },
        { name: 'Google' },
        { name: 'Taobao' }
      ],
      object: {
        name: '菜鸟教程',
        url: 'http://www.runoob.com',
        slogan: '学的不仅是技术，更是梦想！'
      },
      message: 'hello',
      name: 'Foo',
      url: 'Bar',
      filterText: '',
      obj: [
        {value: 0, label: 'beijing'},
        {value: 1, label: 'shanghai'},
        {value: 2, label: 'guangdong'},
        {value: 3, label: 'zhejiang'},
        {value: 4, label: 'jiangshu'}
      ],
      arr: [ '北京', '上海', '广东', '深圳' ],
      opt: ''
    }
  },
  computed: {
    reversedMessageComputed: function () {
      return this.message.split("").reverse().join("");
    },
    site: {
      // getter
      get: function () {
        return 'name：' + this.name + '，' +  'url：' + this.url;
      },
      //setter
      set: function (newVal) {
        var names = newVal.split(" ");
        this.name = names[0];
        this.url = names[names.length - 1];
      }
    }
  },
  methods: {
    reversedMessageMethods: function () {
      return this.message.split("").reverse().join("");
    },
    myfilter: function (value) {
      if(value.indexOf(this.filterText) != -1) {
        return value;
      }
    },
    add: function () {
      //vm.$set( target, key, value )
      this.$set(this.arr, this.arr.length, this.opt);
    },
    deleteMsg: function () {
      this.$delete(this.arr, this.arr.length-1);
    }
  }
}
</script>

<style>

</style>
