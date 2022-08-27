let arraySort = require('array-sort');
import fetch from 'cross-fetch';
export const state = () => ({
  post:[
    {text: 'Продумать вид проекта', id:'1', status: false, date : '2014-01-04'},
    {text: 'продумать архитектуру проекта', id:'2', status: false, date : '2014-01-18'},
    {text: 'Настроить окружение', id:'3', status: false, date : '2014-01-10'},
    {text: 'Подготовить серверную часть', id:'4', status: false, date : '2014-02-15'},
    {text: 'Осуществить базовую верстку', id:'5', status: false, date : '2014-01-13'},
    {text: 'Создать логику работы пользовательской части', id:'6', status: true, date : '2014-01-16'},
    {text: 'Протестировать работоспособность приложения', id:'7', status: true, date : '2014-01-25'},
    {text: 'Пофиксить возможные баги', id:'8', status: true, date : '2014-08-28'},
    {text: 'Оформить техническую документацию', id:'9', status: true, date : '2014-01-21'},
    {text: 'Осуществить релиз проекта', id:'10', status: false, date : '2014-01-23'}
  ],
  showDo: [
    {text: 'Продумать вид проекта', id:'1', status: false, date : '2014-01-04'},
    {text: 'продумать архитектуру проекта', id:'2', status: false, date : '2014-01-18'},
    {text: 'Настроить окружение', id:'3', status: false, date : '2014-01-10'},
    {text: 'Подготовить серверную часть', id:'4', status: false, date : '2014-02-15'},
    {text: 'Осуществить базовую верстку', id:'5', status: false, date : '2014-01-13'},
    {text: 'Создать логику работы пользовательской части', id:'6', status: true, date : '2014-01-16'},
    {text: 'Протестировать работоспособность приложения', id:'7', status: true, date : '2014-01-25'},
    {text: 'Пофиксить возможные баги', id:'8', status: true, date : '2014-08-28'},
    {text: 'Оформить техническую документацию', id:'9', status: true, date : '2014-01-21'},
    {text: 'Осуществить релиз проекта', id:'10', status: false, date : '2014-01-23'}
  ],
  sortCurrArg: '',
  sortActive: false
});

export const mutations = {
  filtersList (state, filtList){
    state.showDo = filtList;
  },
  setCompl (state, data) {
    let sendData = {};
    for (let i=0; i<state.showDo.length;i++){
      if(state.showDo[i].id === data) {
        state.showDo[i].status = !state.showDo[i].status
      }
    }
  },
  delTodo (state, data) {
    for (let i=0; i<state.showDo.length;i++){
      if(state.showDo[i].id === data) {
        state.showDo.splice(i,1)
        state.post.splice(i,1)
        console.log(state.showDo)
      }
    }
  },
  createPost (state, data) {
    state.showDo.push(data)
    state.post.push(data)
  },
  sortList (state, sortArg){
    if (sortArg==='Дата') {
      sortArg = 'date';
    } else {
      sortArg = 'status';
    }
    state.sortArr = arraySort(state.showDo, sortArg);
    state.showDo = arraySort(state.showDo, sortArg);
  },
  clearFilt (state) {
    state.showDo = state.post;
  },
};
/*export const actions = {
  GET_TODO () {fetch('/', {headers: {'Access-Control-Allow-Origin':'*'}})
  .then((response) => {
  response.text();
  console.log(response)
  return
  })
}
};*/

