<template>
  <v-container class="do">
    <v-col cols="12">
      <v-hover v-slot="{ hover }">
        <div class="todo"
          :elevation="hover ? 12 : 2"
        >
          <v-row>
            <v-col cols="1" class="checkBlock align-center">
              <div class="check d-flex justify-center align-center" v-bind:class="{checkComp : status, checkNotComp: !status}" @click="$emit('setCompl')">
                  <img class="checkBox" v-if="status"
                  src="../static/Vector 13.png"
                  alt="triangle with all three sides equal"/>
              </div>
            </v-col>
            <v-col cols="7" class="descrField">
              <v-card-subtitle class="text">
                {{text}}
              </v-card-subtitle>
            </v-col>
            <v-col cols="3" class="statusField">
              <v-card-subtitle class="text" v-bind:class="{ compl: status, work: !status }">
                {{status? 'Выполнено': 'В работе'}}
              </v-card-subtitle>
            </v-col>
            <v-col cols="1">
              <v-card-subtitle class="textDate">
                {{date}}
              </v-card-subtitle>
            </v-col>
          </v-row>
        </div>
      </v-hover>
    </v-col>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    name: String,
    text: String,
    date: String,
    status: Boolean,
    id: String
  },
  data () {
    return {
      isModalVisible: false,
      post: {
        name:this.name,
        text: this.text,
        id: this.id
      }
    }; 
  },
  methods: {
    remove() {
      this.$socket.emit("createMessage", {
        text: this.text,
          id: this.id
        });
    },
    upd() {
      this.$socket.emit("updatePost", {
          status: !this.status,
          id: this.id
      });
    },
    delTodo () {
      this.$store.commit('delTodo', this.select);
    },
    showModal() {
      this.isModalVisible = true;
    },
    close(){
      this.isModalVisible = false;
    }
  }
}
</script>

<style>
  .ma-2 {
    z-index: 7;
  }
  .text {
    padding: 6px;
    font-family: 'Vela Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 132%;
  }
  .textDate {
    font-family: 'Vela Sans';
    font-style: normal;
    font-weight: 400;
    padding: 6px;
    font-size: 14px;
    line-height: 132%;
    text-align: end;
  }
  .do {
    border-bottom: 1px solid #EEEBE9;
    border-top: 1px solid #EEEBE9;
    padding: 0px;
    min-width: 1300px;
  }
  div.container {
    padding: 0px;
  }
  .do :hover {
    background: #F6F9FF;
  }
  .compl {
    color: #134EC1;
    padding-left: 185px;
  }
  .work {
    color: #F89B11;
    padding-left: 185px;
  }
  .check {
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(19, 78, 193, 0.15);
  }
  .checkComp {
    border: 1px solid #134EC1
  }
  .checkNotComp {
    border : 1px solid #F89B11
  }
  .checkBox {
    width: 8.5px;
    height: 9.5px;
    color:#134EC1
  }
  .delTodoBtn{
    box-sizing: border-box;
    width: 22px;
    height: 22px;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    border-radius: 50%;
    border: 1px solid #eb0909;
    box-shadow: 0px 4px 4px rgba(19, 78, 193, 0.15);
  }
  .checkBlock {
    max-width: 82.5px;
    padding-top: 17px;
  }
</style>