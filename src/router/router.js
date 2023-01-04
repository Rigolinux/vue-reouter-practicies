import { random } from "core-js/core/number";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/pokemon",
    name: "Pokemon",
    component: () =>
      import(
        /*webpackChunkName:"PokemonListPage" */ "@/modules/pokemon/layouts/PokemonLayout.vue"
      ),
    children: [
      {
        name: "Home",
        path: "home",
        component: () =>
          import(
            /*webpackChunkName:"PokemonListPage" */ "@/modules/pokemon/pages/ListPage"
          ),
      },
      {
        path: "pokemonid/:id",
        name: "PokemonPage",
        props: (route) => {
          const id = parseInt(route.params.id);
          return isNaN(id) ? { id: 1 } : { id };
        },
        component: () =>
          import(
            /*webpackChunkName:"PokemonPage" */ "@/modules/pokemon/pages/PokemonPage"
          ),
      },
      {
        path: "about",
        name: "pokeAbout",
        component: () =>
          import(
            /*webpackChunkName:"AboutPage" */ "@/modules/pokemon/pages/AboutPage"
          ),
      },
    ],
  },
  {
    path: "/dbz",
    name: "DBZ",
    component: () => import(/*webpackChunkName:"DBZLayout" */ "@/modules/dbz/layouts/dbLayou.vue"),
    children: [
        {
            path: "characters",
            name: "Characters",
            component: () => import(/*webpackChunkName:"CharactersPage" */ "@/modules/dbz/pages/Characters.vue"),
        },
        {
            path: "db-about",
            name: "dbAbout",
            component: () => import(/*webpackChunkName:"AboutPage" */ "@/modules/dbz/pages/About.vue"),
        },
        {
            path: "",
            redirect: "characters",
        }

    ],
  },
  {
    path: "/:pathMatch(.*)*",

    component: () =>
      import(
        /*webpackChunkName:"NotFoundPage" */ "@/modules/shared/pages/NotFoundPage"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//guard sincrono
// router.beforeEach((to, from, next) => {
//   const random = Math.random() * 100;
//   if (random > 50) {
//     console.log("Acceso permitido");
//     next();
//   }
//   else{
//     console.log("Acceso denegado");
//     next({name: "Home"});
//   }
// });

//guard asincrono
const canAccess = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const random = Math.random() * 100;
      if (random > 50) {
        console.log("Acceso permitido");
        resolve(true);
      } else {
        console.log("Acceso denegado");
        resolve(false);
      }
    }, 3000);
  });
}; 

router.beforeEach(async (to, from, next) => {
  const authorized = await canAccess();
  if (authorized) {
    next();
  } else {
    next({ name: "Home" });
  }
});
export default router;
