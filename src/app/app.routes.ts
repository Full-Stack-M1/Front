import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page.component')
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login-page/login-page.component')
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register-page/register-page.component')
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found-page/not-found-page.component')
    },
    // {
    //     path: 'admin',
    //     loadComponent: () => import('./pages/admin-page/admin-page.component'),
    //     canActivate: [authGuard]
    // }
];
