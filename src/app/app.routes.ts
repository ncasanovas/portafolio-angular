import { RouterModule, Routes } from '@angular/router';
import { 
    AboutComponent,
    PortafolioComponent,
    ItemComponent
} from  './components/index.paginas';
import { SearchComponent } from './pages/search/search.component';

const app_routes: Routes  = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ItemComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});