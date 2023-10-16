const app = Vue.createApp({
  data: function () {
    return {
      courseGoalA: 'Finish the course',
      courseGoalB: 'Finish the course and Master Vue',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount('#user-goal');
