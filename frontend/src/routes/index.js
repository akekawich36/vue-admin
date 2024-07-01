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
    breadcrumbName: "Home",
    component: import("../layouts/MainLayout.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        breadcrumbName: "Home",
        component: import("../views/index.vue"),
      },
      {
        path: "/student",
        breadcrumbName: "Student",
        component: import("../views/student.vue"),
      },
      {
        path: "/table",
        breadcrumbName: "Table",
        component: import("../views/dataTable.vue"),
      },
    ],
  },
];

export default routes;
