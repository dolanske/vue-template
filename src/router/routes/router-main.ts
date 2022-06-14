import Main from "../views/Main.vue"


export default [
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Main" }
  },
  {
    path: "/",
    name: "Main",
    component: Main,
    meta: {
      title: "Hello World",
    }
  },
]