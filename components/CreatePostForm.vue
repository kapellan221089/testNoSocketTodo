<template>
  <v-card flat >
    <div class="modal-mask ">
      <!--<v-row>
        <v-col cols="9">
        <v-card-subtitle class="textDate">
          <h3 class="createWin">Создать новую задачу</h3>
        </v-card-subtitle>
        </v-col>
        <v-col cols="3">
          <button 
          class="modalClose d-flex justify-center align-center"
          @click="$emit('close'); clearForm()"
          >
          <icon class="closeModalIcon" >
            mdi-close
          </icon>
          </button>
        </v-col>
      <v-row class="modalTextField align-center">
        <v-text-field
            placeholder="Введите описание"
            label="Описание"
            outlined
            v-model="form.descriptions"
            v-on:input="validDescriptionCheck"
            :rules="rules.descriptions"
        ></v-text-field>
        <div class="addBtn">
        <v-btn
          class="btn align-center"
          @click ="$emit('close');createPost(),clearForm()"
          :disabled="!formIsValid"
          >
            <p class="btnCreate align-center">Создать</p>
        </v-btn>
        </div>
      </v-row>
      </v-row>-->
    <div class="createWind">
      <p class="head">Создать новую задачу</p>
      <button class="closeBtn"
        @click="$emit('close'); clearForm()"
      >
        <img
          src="../static/Vector 4.png"
          alt="triangle with all three sides equal"
          class="clsIcon"/>
      </button>
      <span class="descr">Описание</span>
      <input class="descrBody"
        placeholder="Введите описание"
        v-model="form.descriptions">
      <button class="createBtn"
        @click ="$emit('close');createPost(),clearForm()"
      >
        <span class="crtBtnText">Создать</span>
      </button>
    </div>
    </div>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data(){
    return {
      date:'',
      rules: {
      descriptions: [val => val.length < 50 || 'Максимальная длина 50 символов', val => val.length > 1 || 'Минимальная длина 2 символа']
      },
      defaultForm: {
      autor:'',
      descriptions : ''
      },
      form:{
        autor:'',
        descriptions : ''
      },
      formIsValid: false,
    }
  },
  methods: {
    createPost(){
      let now = new Date();
      let t = now.toISOString().split('T')[0];
      this.$store.commit('createPost', {
        text: this.form.descriptions,
        id: Math.round(Math.random()*Math.random()*576).toString(),
        status: false,
        textStatus: 'В работе',
        date: t
      });
    },
    clearForm(){
      this.form.descriptions = '';
    },
    validDescriptionCheck() {
      if(this.form.descriptions.length < 2 || this.form.descriptions.length > 49){
        this.formIsValid=false;
        this.descriptionsValid=false;
      } else {
          this.descriptionsValid = true;
          this.formIsValid=true;
      }
    }
  },
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(4px);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  box-sizing: border-box;
  position: absolute;
  width: 400px;
  height: 281px;
  margin-left: 720px;
  margin-right: 600px;
  margin-bottom: 310px;
  margin-top: 309px;
  background: #FFFFFF;
  border: 1px solid #DDE2E4;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
}

.createWind {
  box-sizing: border-box;
  position: absolute;
  width: 400px;
  height: 281px;
  left: 600px;
  top: 309px;
  background: #FFFFFF;
  border: 1px solid #DDE2E4;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
}

.head {
  position: absolute;
  width: 236px;
  height: 24px;
  left: 40px;
  top: 40px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 132%;
  color: #16191D;
}

.descr {
  position: absolute;
  width: 74px;
  height: 14px;
  left: 40px;
  top: 94px;
  font-family: 'AGAvantGardeCyr';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #16191D;
}

.descrBody {
  box-sizing: border-box;
  position: absolute;
  left: 40px;
  right: 0%;
  top: 113px;
  bottom: 0%;
  width: 319px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #DDE2E4;
  border-radius: 8px;
  padding-left: 16px;
  padding-top: 0px;
  font-family: 'Vela Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 132%;
  color: #000000;
}

.closeBtn {
  position: absolute;
  background: #314B99;
  border-radius: 5px;
  width: 22px;
  height: 22px;
  top:40px;
  right: 40px;
}

.form {
  background-color: #E8EAF6;
}

.addBtn {
  margin-left: 100px;
  margin-right: 100px;
}

.createBtn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 40px;
  gap: 10px;
  position: absolute;
  width: 153px;
  height: 48px;
  left: 124px;
  top: 183px;
  background: #F0F5FF;
  border-radius: 8px;
}

.crtBtnText {
  font-family: 'Vela Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 132%;
  color: #314B99;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.clsIcon{
  position:absolute;
  width: 10px;
  height: 10px;
  left: 6px;
  top: 6px;
  bottom: 8px;
}
</style>