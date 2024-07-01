// const commonGuard = (to, from, next) => {
//   const encryptedUser = localStorage.getItem("user");
//   const user = encryptedUser
//     ? JSON.parse(EncryptServices.decrypt(encryptedUser))
//     : null;
//   if (user) {
//     if (user.role == "research" && to.path == "/research-check") {
//       next("/research-list");
//     }
//     next();
//   } else {
//     next("/login");
//   }
// };

const routes = [
  {
    path: "/",
    name: "Home",
    component: import("../layouts/MainLayout.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: import("../views/index.vue"),
      },
      {
        path: "/student",
        name: "Student",
        component: import("../views/student.vue"),
      },
      {
        path: "/table",
        name: "Table",
        component: import("../views/dataTable.vue"),
      },
    ],
  },
];

export default routes;
