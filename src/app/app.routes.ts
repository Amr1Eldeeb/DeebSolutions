import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
      },
      {
        path: 'solutions',
        loadComponent: () => import('./pages/solutions/solutions').then(m => m.SolutionsComponent)
      },
      {
        path: 'services',
        loadComponent: () => import('./pages/services/services').then(m => m.ServicesComponent)
      },
      {
        path: 'industries',
        loadComponent: () => import('./pages/industries/industries').then(m => m.IndustriesComponent)
      },
      {
        path: 'products',
        loadComponent: () => import('./pages/products/products').then(m => m.ProductsComponent)
      },
      {
        path: 'portfolio',
        loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.PortfolioComponent)
      },
      {
        path: 'case-studies',
        loadComponent: () => import('./pages/case-studies/case-studies').then(m => m.CaseStudiesComponent)
      },
      {
        path: 'resources',
        loadComponent: () => import('./pages/resources/resources').then(m => m.ResourcesComponent)
      },
      {
        path: 'blog',
        loadComponent: () => import('./pages/blog/blog').then(m => m.BlogComponent)
      },
      {
        path: 'careers',
        loadComponent: () => import('./pages/careers/careers').then(m => m.CareersComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent)
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];
