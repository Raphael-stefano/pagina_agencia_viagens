import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FormularioPagina from "../paginas/formulario";
import Home from "../paginas/home";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/formulario' element={<FormularioPagina/>} />
            </Routes>
        </BrowserRouter>
    )
}