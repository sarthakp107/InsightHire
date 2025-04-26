const App = {
    template: `
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-4 ">
          <JobList />
        </div>
        <div class="col-md-8">
          <router-view />
        </div>
      </div>
      <div class="mt-3">
      <ApplicationForm />
      </div>
      <ToDoList />
    </div>

    `

}