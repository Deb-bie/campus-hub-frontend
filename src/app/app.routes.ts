import { Routes } from '@angular/router';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { authGuard } from './guards/auth-guard';
import { Profile } from './components/profile/profile';
import { ExploreEvents } from './components/explore-events/explore-events';
import { EventDetails } from './components/event-details/event-details';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home page'
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
    {
        path: 'profile',
        component: Profile,
        title: 'Profile page',
        canActivate: [authGuard]
    }, 
    {
        path: 'explore',
        component: ExploreEvents,
        title: 'Explore Events'
    },
    {
        path: 'events/:id',
        component: EventDetails,
        title: 'Event Details',
    }

];
