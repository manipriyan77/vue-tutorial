const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      myFullname: '',
    };
  },
  watch: {
    name(value) {
      if (value === '') {
        //value is the lastest value of the data property
        this.myFullname === '';
      } else {
        //   this.myFullname = value + ' ' + 'GS';
        this.myFullname = value + ' ' + 'GS';
      }
    },
  },
  computed: {
    // fullName() {
    //   console.log('renderinf');
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'GS';
    // },
  },
  methods: {
    addCount(num) {
      console.log('add');

      this.counter = this.counter + num;
    },
    reduceCount(num) {
      console.log('reduce');

      this.counter = this.counter - num;
    },
    setName(e, lastName) {
      console.log('setNasme');

      this.name = e.target.value;
    },
    submitForm(event) {
      console.log('form');

      event.preventDefault();
    },

    resetInput() {
      console.log('reset');

      this.name = '';
    },
    getFullName() {
      console.log('fullname');

      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'GS';
    },
  },
});

app.mount('#events');
