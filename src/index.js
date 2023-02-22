import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './components/page/Page';
import Inicio from './components/inicio/Inicio';
import Perfil from './components/perfil/Perfil';
import Ajustes from './components/ajustes/Ajustes';
import Ranking from './components/ranking/Ranking';
import Responder from './components/responder/Responder';
import Perguntar from './components/perguntar/Perguntar';
import Notificacoes from './components/notificacoes/Notificacoes';
import Comunidade from './components/comunidade/Comunidade';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([ // change to dynamic, path = path, element Page page=page
    {
        path: "/",
        element: <Page page={<Inicio />} />,
    },
    {
        path: "inicio",
        element: <Page page={<Inicio />} />,
    },
    {
        path: "perfil",
        element: <Page page={<Perfil />} />,
    },
    {
        path: "ajustes",
        element: <Page page={<Ajustes />} />,
    },
    {
        path: "ranking",
        element: <Page page={<Ranking />} />,
    },
    {
        path: "notificacoes",
        element: <Page page={<Notificacoes />} />,
    },
    {
        path: "perguntar",
        element: <Page page={<Perguntar />} />,
    },
    {
        path: "responder",
        element: <Page page={<Responder />} />,
    },
    {
        path: "comunidade",
        element: <Page page={<Comunidade />} />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
