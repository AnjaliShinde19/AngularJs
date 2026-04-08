import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Directives } from './directives/directives';
import { Events } from './events/events';
import { DataBindings } from './data-bindings/data-bindings';
import { AttributeBindings } from './attribute-bindings/attribute-bindings';
import { TemplateForm } from './template-form/template-form';
import { ReactiveFormDemo } from './reactive-form-demo/reactive-form-demo';
import { BuyTickets } from './buy-tickets/buy-tickets';

import { DynamicLazyLoading } from './dynamic-lazy-loading/dynamic-lazy-loading';
import { NestedChildDemo } from './nested-child-demo/nested-child-demo';
import { ProductDetail } from './nested-child-demo/product-detail/product-detail';
import { ProductOverview } from './nested-child-demo/product-overview/product-overview';
import { ProductSpec } from './nested-child-demo/product-spec/product-spec';

import { Logger } from './logger/logger';
import { HttpClientDemo } from './http-client-demo/http-client-demo';
import { DbJsonCrud } from './db-json-crud/db-json-crud';

import { Forbidden } from './forbidden/forbidden';
import { NotFoundComponent } from './not-found-component/not-found-component';

import { authGuard } from './Guard/auth-guard';
import { unsavedChangesGuard } from './Guard/unsaved-changes-guard';
import { nestedChildGuardGuard } from './Guard/nested-child-guard-guard';
import { cAnLoadModuleGuard } from './Guard/can-load-module-guard';

import { RxJsObservable } from './rx-js-observable/rx-js-observable';
import { ChangeDetectionStretegies } from './change-detection-stretegies/change-detection-stretegies';

import { MaterialsDemo } from './materials-demo/materials-demo';

export const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirect
    { path: '', component: Home, title: 'Home Page' },
    { path: 'Directives', component: Directives, title: 'Directives' },
    { path: 'Events', component: Events, title: 'Events', canActivate: [authGuard] },
    { path: 'DataBindings', component: DataBindings, title: 'Data Bindings', canActivate: [authGuard] },
    { path: 'AttributeBindings/:id', component: AttributeBindings, title: 'Attribute Bindings' },

    {
        path: 'TemplateForm', component: TemplateForm, title: 'Template Form'
        //, canActivate: [authGuard]
        , canDeactivate: [unsavedChangesGuard]
    },
    { path: 'ReactiveForm', component: ReactiveFormDemo, title: 'Reactive Forms', canActivate: [authGuard] },
    { path: 'DynamicForm', component: BuyTickets, title: 'Dynamic Form' },

    //Route base lazy loading:-
    {
        path: 'admin', loadComponent: () => import('./admin/admin').then(m => m.Admin), title: 'Admin',
        canActivate: [authGuard]
    },

    //Dynamic Component Lazy Loading (Without Routing)
    {
        path: 'DynamicLazyLoading', component: DynamicLazyLoading, title: 'DynamicLazyLoading',
        // canActivate: [authGuard] ,
        canMatch: [cAnLoadModuleGuard]
    },

    //Nested Child component
    {
        path: 'NestedChildDemo', // Parent component
        component: NestedChildDemo,
        // canActivate: [authGuard],
        canActivateChild: [nestedChildGuardGuard],
        children:
            [ // Child routes
                {
                    path: 'product-detail/:id',
                    component: ProductDetail,
                    title: 'Product Detail',
                    children:
                        [ // Nested child routes
                            { path: 'overview', component: ProductOverview, title: 'Product Overview' },
                            { path: 'spec', component: ProductSpec, title: 'Product Spec' },
                        ]
                }
            ]
    },

    { path: 'Logger', component: Logger, title: '' },

    { path: 'HttpClientDemo', component: HttpClientDemo, title: 'HttpClient Demo' },
    { path: 'DbJsonCrud', component: DbJsonCrud, title: 'DbJson Crud' },

    { path: 'RxJsObservable', component: RxJsObservable, title: 'RxJs & Observable' },
    { path: 'ChangeDetectionStretegies', component: ChangeDetectionStretegies, title: 'Change Detection Strategy' },

    { path: 'MaterialsDemo', component: MaterialsDemo, title: 'Materials Demo' },


    { path: 'forbidden', component: Forbidden }, //unauthorized access will be directed to this route
    { path: '**', component: NotFoundComponent } // Wildcard route for unmatched paths
];
