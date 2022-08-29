<template>
    <!--<v-row class="name">
      <v-col cols="11" class="align-center">
        <div class="title pa-2">To do list</div>
      </v-col>
      <v-col class="justify-end align-center" cols="1">
        <div class="justify-end align-center">
          <v-btn
            class="addBtn "
            fab
            dark
            color="#D6DBEB"
            small
            justifu
            @click="showCreate"
          >
            <v-icon color="black">
              mdi-plus
            </v-icon>
          </v-btn>
          <CreatePost
            @close='close'
            v-show="createVisible"
          />
        </div>
      </v-col>
    </v-row >
    <v-row class="top">
      <v-col cols="9" class="align-center">
        <v-text-field 
          class="textField" 
          placeholder="Введите описание для поиска задачи" 
          prepend-icon="mdi-magnify" 
          append-icon="mdi-close"
          @click:append="clear"
          @input='filt(), filtSort()' 
          v-model="inpVal"
        >
        </v-text-field>
      </v-col>
      <v-col cols="3">
        <v-row>
          <v-col cols="6" class="d-flex align-center">
            <p class="sort">
              Сортировать по:
            </p>
          </v-col>
          <v-col cols="6" class="d-flex align-start sortField">
            <p class="sort">
              <v-select class="selField"
                :items="items"
                v-model="select"
                @change="sort()"
              ></v-select>
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="tableTop" cols="12">
      <v-col cols="6">
        <v-card-subtitle class="textField bord" style="margin-left:200px">
          Описание
        </v-card-subtitle>
      </v-col>
      <v-col cols="2" >
        <v-card-subtitle class="textField bord" style="margin-left:170px">
          Статус
        </v-card-subtitle>
      </v-col>
      <v-col cols="4" >
        <v-card-subtitle class="textField bord" style="margin-left:250px">
          Дата
        </v-card-subtitle>
      </v-col>
    </v-row>
    <v-row>
      <Post v-for="p in showDo" :key="p.text"
        @setCompl = "setCompl(p.id)"
        @delTodo = 'delTodo(p.id)'
        :name = "p.name"
        :text = "p.text"
        :date = "p.date"
        :status = "p.status"
        :id = "p.id" 
      />
    </v-row>-->
    <div class="main">
      <p class="top"> To do list</p>
      <CreatePost
            @close='close'
            v-show="createVisible"
          />
      <button class="addBtn" style="margin-left: 0px" @click="showCreate">
        <img
          src="../static/Rectangle 19.png"
          alt="triangle with all three sides equal"
          class="addF"/>
        <img
          src="../static/Rectangle 20.png"
          alt="triangle with all three sides equal"
          class="addS"/>
      </button>
      <div class="row1">
        <Post v-for="p in showDo" :key="p.text"
          @setCompl = "setCompl(p.id)"
          @delTodo = 'delTodo(p.id)'
          :name = "p.name"
          :text = "p.text"
          :date = "p.date"
          :status = "p.status"
          :id = "p.id" />
      </div>
      <div class="line1">

      </div>
      <div class="line2">
        
      </div>
      <div class="line3">
        
      </div>
      <p class="sortTag">Сортировать по:</p>
      <p class="descTag">Описание</p>
      <p class="statusTag">Статус</p>
      <p class="dateTag">Дата</p>
      <img
        src="../static/Vector.png"
        alt="triangle with all three sides equal"
        class="serchIcon"/>
      <input class="input"
        type="text"
        placeholder="Начните вводить описание для поиска"
        v-model="inpVal"
        @input='filt(), filtSort()'>
      <select class="sortField"
        :items="items"
        v-model="select"
        @change="sort()"
        >
        <option v-for="item in items" v-bind:key="item">{{item}}</option>
      </select>
      <div>
        <img
          src="../static/Vector 9.png"
          alt="triangle with all three sides equal"
          class="shevron"/>
      </div>
    </div>

</template>

<script>
import Post from '@/components/Post';
import CreatePost from '@/components/CreatePostForm';
import{mapState} from 'vuex';
import Vue2Filters from 'vue2-filters'


export default {
  methods:{
    showCreate() {
      console.log('sdafasf')
      this.createVisible = !this.createVisible;
    },
    close(){
      this.createVisible = false;
    },
    setCompl(data) {
      this.$store.commit('setCompl', data);
    },
    delTodo (data) {
      this.$store.commit('delTodo', data);
    },
    filt () {
      let filtList = this.filterBy(this.post, this.inpVal, 'text');
      console.log(filtList)
      this.$store.commit('filtersList', filtList);
    },
    sort () {
      this.$store.commit('sortList', this.select);
    },
    filtSort(){
      if(this.select != '') {
        this.$store.commit('sortList', this.select);
      }
    },
    clear () {
      this.$store.commit('clearFilt');
      this.inpVal = '';
    }
  },
  mixins: [Vue2Filters.mixin],
  mounted () {
    let initArr = JSON.parse(localStorage.getItem('items'))
    this.$store.commit('init', initArr);
  },
  data () {
    return {
      createVisible: false,
      inpVal:'',
      items : ['Статус', 'Дата'],
      select:'',
    };
  },
  computed: mapState(["showDo", "post"]),
  components: { Post, CreatePost}  
}
</script>

<style>
  .main {
    position: relative;
    width: 1600px;
    height: 900px;
    background: #FFFFFF;
  }

  .top {
    position: absolute;
    width: 113px;
    height: 32px;
    left: 190px;
    top: 104px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 132%;
    color: #16191D;
  }

  .serchIcon{
    position: absolute;
    left: 11.88%;
    right: 87%;
    top: 18.89%;
    bottom: 79.11%;
  }

  .addBtn{
    position: absolute;
    width: 40px;
    height: 40px;
    left: 1410px;
    right: 150px;
    top: 100px;
    margin-left: 0px;
    margin-right: 0px;
    background: #D6DBEB;
    border-radius: 50%;
  }

  .row1 {
    position: absolute;
    width: 1300px;
    height: 58px;
    left: 150px;
    top: 267px;
  }

  .line1 {
    position: absolute;
    width: 1px;
    height: 32px;
    left: 230px;
    top: 218px;
    background: #C4C4C4;
  }

  .line2 {
    position: absolute;
    width: 1px;
    height: 32px;
    left: 1168px;
    top: 218px;
    background: #C4C4C4;
  }

  .line3 {
    position: absolute;
    width: 1px;
    height: 32px;
    left: 1320px;
    top: 218px;
    background: #C4C4C4;
  }

  .sortTag {
    position: absolute;
    width: 112px;
    height: 18px;
    left: 1280px;
    top: 170px;
    font-family: 'Vela Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 132%;
    color: #16191D;
  }

  .descTag {
    position: absolute;
    left: 251px;
    top: 228px;
    bottom: 654px;
    right: 1283px;
    width: 66px;
    height: 18px;
    font-family: 'Vela Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 132%;
    color: #16191D;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .statusTag {
    position: absolute;
    left: 1189px;
    top: 228px;
    bottom: 654px;
    width: 66px;
    height: 18px;
    font-family: 'Vela Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 132%;
    color: #16191D;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .dateTag {
    position: absolute;
    left: 1341px;
    top: 228px;
    bottom: 654px;
    right: 1283px;
    width: 66px;
    height: 18px;
    font-family: 'Vela Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 132%;
    color: #16191D;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .input {
    position: absolute;
    width: 250px;
    height: 18px;
    left: 224px;
    top: 170px;
    font-family: 'Vela Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 132%;
  }

  .sortField {
    position: absolute;
    min-width: 55px;
    height: 18px;
    left: 1395px;
    top: 170px;
    font-family: 'Vela Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 132%;
    color: #16191D;
  }

  .addF {
    position: absolute;
    left: 47.5%;
    right: 47.5%;
    top: 25%;
    bottom: 25%;
  }

  .addS {
    position: absolute;
    left: 25%;
    right: 20%;
    top: 47.5%;
    bottom: 2.5%;
    background: #314B99;
  }

  .selectText {
    position: absolute;
    min-width: 33px;
    height: 18px;
    left: 1400px;
    top: 170px;
    font-family: 'Vela Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 132%;
    color: #16191D;
  }
  .shevron {
    position: absolute;
    width: 12px;
    height: 6px;
    left: 1438px;
    top: 176px;
  }
</style>