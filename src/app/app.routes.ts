import { Routes } from '@angular/router';
import { Register } from './components/register/register';
import { Login } from './components/login/login';

export const routes: Routes = [
    {
        path: '',
        component: Register,
        title: 'Register page'
    },
    {
        path: 'login',
        component: Login,
        title: 'Login page'
    },

];
