import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import {SignupComponent} from './pages/signup/signup.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {AdminGuard} from './guards/admin/admin.guard';
import {DashboardComponent} from './pages/admin/dashboard/dashboard.component';
import {WelcomeComponent} from  './pages/admin/welcome/welcome.component';
import { ListCategorysComponent } from './pages/admin/list-categorys/list-categorys.component';
import { NewCategorysComponent } from './pages/admin/new-categorys/new-categorys.component';
import { ViewCategorysComponent } from './pages/admin/view-categorys/view-categorys.component';
import { ListProductsComponent } from './pages/admin/list-products/list-products.component';
import { NewProductsComponent } from './pages/admin/new-products/new-products.component';
import { ViewProductsComponent } from './pages/admin/view-products/view-products.component';
import { ViewEmployeesComponent } from './pages/admin/view-employees/view-employees.component';
import { EditCategorysComponent } from './pages/admin/edit-categorys/edit-categorys.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';
import { ListEmployeesComponent } from './pages/admin/list-employees/list-employees.component';
import { NewEmployessComponent } from './pages/admin/new-employess/new-employess.component';
import { EditEmployessComponent } from './pages/admin/edit-employess/edit-employess.component';
import { ListBranchOfficeComponent } from './pages/admin/list-branch-office/list-branch-office.component';
import { NewBranchOfficeComponent } from './pages/admin/new-branch-office/new-branch-office.component';
import { ViewBranchOfficeComponent } from './pages/admin/view-branch-office/view-branch-office.component';
import { EditBranchOfficeComponent } from './pages/admin/edit-branch-office/edit-branch-office.component';

const routes:Routes=[

  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path : 'list-category',
        component : ListCategorysComponent
      },
      {
        path:'add-category',
        component:NewCategorysComponent
      },
      {
        path:'view-category',
        component:ViewCategorysComponent
      },
      {
        path:'edit-category/:id',
        component:EditCategorysComponent
      },

      {
        path:'list-product',
        component:ListProductsComponent
      },
      {
        path:'add-product',
        component:NewProductsComponent
      },
      {
        path:'view-product',
        component:ViewProductsComponent
      },
      {
        path:'edit-product/:id',
        component:EditProductComponent
      },



      {
        path:'list-employee',
        component:ListEmployeesComponent
      },
      {
        path:'add-employee',
        component:NewEmployessComponent
      },
      {
        path:'view-employee',
        component:ViewEmployeesComponent
      },
      {
        path:'edit-employee/:id',
        component:EditEmployessComponent
      },

      {
        path:'list-branch-office',
        component:ListBranchOfficeComponent
      },
      {
        path:'add-branch-office',
        component:NewBranchOfficeComponent
      },
      {
        path:'view-branch-office',
        component:ViewBranchOfficeComponent
      },
      {
        path:'edit-branch-office/:id',
        component:EditBranchOfficeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
