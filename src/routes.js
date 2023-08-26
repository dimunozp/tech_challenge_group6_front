import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Compras from "./components/compras/compras";
import Ventas from "./components/ventas/ventas";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
    {
        name: "Ventas",
        layout: "/admin",
        path: "/ventas",
        icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
        component: Ventas,
    },
    {
        name: "Compras",
        layout: "/admin",
        path: "/compras",
        icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
        component: Compras,
    },
];

export default routes;
