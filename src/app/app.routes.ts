import { Routes } from '@angular/router';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home page',
        canActivate: [authGuard]
    },
    {
        path: 'register',
        component: Register,
        title: 'Register page'
    },
    {
        path: 'login',
        component: Login,
        title: 'Login page'
    },

];
