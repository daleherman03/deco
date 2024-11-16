import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider } from 'react-router-dom';
import Router from './router';
import './main.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router = {Router} />
)
