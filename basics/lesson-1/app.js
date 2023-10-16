// !! VANILLA JS

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// buttonEl.addEventListener('click', function () {
//   const enteredValue = inputEl.value;
//   const listItemElement = document.createElement('li');
//   listItemElement.textContent = enteredValue;
//   listEl.appendChild(listItemElement);
//   inputEl.value = '';
// });

// !! USING VUE
Vue.createApp({
  data: function () {
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal: function () {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
  },
}).mount('#app');
