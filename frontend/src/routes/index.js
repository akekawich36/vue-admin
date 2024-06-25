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
    component: import('../layouts/MainLayout.vue'),
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        component: import('../views/index.vue'),
      },
    ],
  },
];

export default routes;
