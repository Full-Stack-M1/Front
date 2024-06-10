import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
// import { authGuard } from './guards/auth.guard';

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
        path: 'search',
        loadComponent: () => import('./pages/search-page/search-page.component'),
        canActivate: [authGuard]
    },
    {
        path: 'conversations',
        loadComponent: () => import('./pages/conversations-page/conversations-page.component'),
        canActivate: [authGuard]
    },
    {
        path: 'create-conversation',
        loadComponent: () => import('./pages/create-conversation/create-conversation.component'),
        canActivate: [authGuard]
    },
    {
        path: 'conversation/:id',
        loadComponent: () => import('./pages/conversation-page/conversation-page.component'),
        canActivate: [authGuard]
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found-page/not-found-page.component')
    }
    
    // exemple de guard quand j'en aurai l'utilité
    // {
    //     path: 'admin',
    //     loadComponent: () => import('./pages/admin-page/admin-page.component'),
    //     canActivate: [authGuard]
    // }
];
