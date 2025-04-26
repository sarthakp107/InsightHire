const { createApp } = Vue
const app = createApp(App)
app.component('JobList', JobList)
app.component('JobDetail', JobDetail)
app.component('JobOverview', JobOverview)
app.component('ApplicationForm', ApplicationForm)
app.component('ToDoList', ToDoList)
app.use(router)
app.mount('#app')