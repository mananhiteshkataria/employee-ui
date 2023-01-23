# EmployeeUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

<<<<<<< HEAD
Made angular-app to interact with Spring API i made [Spring-DB-App]('https://github.com/mananhiteshkataria/spring-db-app')
=======
Made angular-app to interact with Spring API i made [spring-db-app](https://github.com/mananhiteshkataria/spring-db-app)
>>>>>>> 7358fae1bf6ee8fabb877f8d2171a81f505c23ad

Adding RouterLink so that you can load the components based on the links instead of showing all the components in a single root component.

``` html
 <a routerLink = "/store">Store</a>
 <a routerLink = "/update">Update</a>
  <a routerLink = "/find">Find</a>
  <a routerLink = "/find-all">FindAll</a>

```
 These Links must Load Components which are configured in router i.e. app.routing.module.ts
``` typescript
 const routes : Routes =[
   {path:'store',component:StoreComponent},
   {path:'update',component:UpdateComponent},
   {path:'findAll',component:FindAllComponent},
   {path:'find',component:FindComponent},
   {path:'',component:FindAllComponent}   // usefull for home page
 ]
 ```
