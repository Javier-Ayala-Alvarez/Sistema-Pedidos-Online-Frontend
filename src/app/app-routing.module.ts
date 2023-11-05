import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';

import {ProfileComponent} from './pages/customer/profile/profile.component';
import {HomeComponent} from './components/home/home.component';
import {SignupComponent} from './pages/signup/signup.component';
import {AdminGuard} from './guards/admin/admin.guard';
import {DashboardComponent} from './pages/admin/dashboard/dashboard.component';
import {ListCategorysComponent} from './pages/admin/list-categorys/list-categorys.component';
import {NewCategorysComponent} from './pages/admin/new-categorys/new-categorys.component';
import {ViewCategorysComponent} from './pages/admin/view-categorys/view-categorys.component';
import {ListProductsComponent} from './pages/admin/list-products/list-products.component';
import {NewProductsComponent} from './pages/admin/new-products/new-products.component';
import {ViewProductsComponent} from './pages/admin/view-products/view-products.component';
import {ViewEmployeesComponent} from './pages/admin/view-employees/view-employees.component';
import {EditCategorysComponent} from './pages/admin/edit-categorys/edit-categorys.component';
import {EditProductComponent} from './pages/admin/edit-product/edit-product.component';
import {ListEmployeesComponent} from './pages/admin/list-employees/list-employees.component';
import {NewEmployessComponent} from './pages/admin/new-employess/new-employess.component';
import {EditEmployessComponent} from './pages/admin/edit-employess/edit-employess.component';
import {ListBranchOfficeComponent} from './pages/admin/list-branch-office/list-branch-office.component';
import {NewBranchOfficeComponent} from './pages/admin/new-branch-office/new-branch-office.component';
import {ViewBranchOfficeComponent} from './pages/admin/view-branch-office/view-branch-office.component';
import {EditBranchOfficeComponent} from './pages/admin/edit-branch-office/edit-branch-office.component';
import {ListCompanyComponent} from './pages/admin/list-company/list-company.component';
import {EditCompanyComponent} from './pages/admin/edit-company/edit-company.component';
import {NormalGuard} from './guards/normal/normal.guard';
import {CustomerDashboardComponent} from './pages/customer/customer-dashboard/customer-dashboard.component';
import {EditProfileComponent} from './pages/customer/edit-profile/edit-profile.component';
import {CusPlatoComponent} from './cus-plato/cus-plato.component';
import {CusModalProductoComponent} from './cus-modal-producto/cus-modal-producto.component';
import {CusCardsComponent} from './cus-cards/cus-cards.component';
import {CusDatosGeneralesComponent} from './cus-datos-generales/cus-datos-generales.component';
import {CusIniciarSesionComponent} from './cus-iniciar-sesion/cus-iniciar-sesion.component';
import {NgModule} from '@angular/core';
import {ListPlatoComponent} from "./pages/admin/list-plato/list-plato.component";
import {ViewPlateDetailsComponent} from "./pages/admin/view-plate-details/view-plate-details.component";
import {NewPlatoComponent} from "./pages/admin/new-plato/new-plato.component";
import {EditPlateComponent} from "./pages/admin/edit-plate/edit-plate.component";
import { DeliveryDashboardComponent } from './pages/delivery/delivery-dashboard/delivery-dashboard.component';
import { DeliveryGuard } from './guards/delivery/delivery.guard';
import { CocinaDashboardComponent } from './pages/cocina/cocina-dashboard/cocina-dashboard.component';
import { CocinaGuard } from './guards/cocina/cocina.guard';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { CocinaWelcomeComponent } from './pages/cocina/cocina-welcome/cocina-welcome.component';
import { CocinaPedidosComponent } from './pages/cocina/cocina-pedidos/cocina-pedidos.component';
import { DeliveryWelcomeComponent } from './pages/delivery/delivery-welcome/delivery-welcome.component';
import { DeliveryPedidosComponent } from './pages/delivery/delivery-pedidos/delivery-pedidos.component';
import { AppComponent } from './app.component';
import {MapViewComponent} from "./maps/Componets/map-view/map-view.component";
import { VentasComponent } from './pages/customer/ventas/ventas.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',

  },
  {
    path: 'mapa',
    component: MapViewComponent,
    pathMatch: 'full',
  },
  {
    path: 'Carrito',
    component: CusCardsComponent,
    pathMatch: 'full',

  },
  {
    path: 'Login',
    component: CusIniciarSesionComponent,
    pathMatch: 'full',

  },
  {
    path: 'IniciarSesion',
    component: CusIniciarSesionComponent,
    pathMatch: 'full',

  },
  {
    path: 'DatosGenerales',
    component: CusDatosGeneralesComponent,
    pathMatch: 'full',

  },
  {
    path: 'Productos/:id',
    component: CusPlatoComponent,
    pathMatch: 'full',

  }, {
    path: 'ProductosModal/:id',
    component: CusModalProductoComponent,
    pathMatch: 'full',

  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {

    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path:'welcome',
        component:WelcomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'list-category',
        component: ListCategorysComponent
      },
      {
        path: 'add-category',
        component: NewCategorysComponent
      },
      {
        path: 'view-category',
        component: ViewCategorysComponent
      },
      {
        path: 'edit-category/:id',
        component: EditCategorysComponent
      },

      {
        path: 'list-product',
        component: ListProductsComponent
      },
      {
        path: 'add-product',
        component: NewProductsComponent
      },
      {
        path: 'view-product',
        component: ViewProductsComponent
      },
      {
        path: 'edit-product/:id',
        component: EditProductComponent
      },

      //path for plate components
      {
        path: 'list-plate',
        component: ListPlatoComponent
      },
      {
        path: 'add-plate',
        component: NewPlatoComponent
      },
      {
        path: 'view-plate/:id',
        component: ViewPlateDetailsComponent
      },
      {
        path: 'edit-plate/:id',
        component: EditPlateComponent
      },
      //End path for plate components
      {
        path: 'list-employee',
        component: ListEmployeesComponent
      },
      {
        path: 'add-employee',
        component: NewEmployessComponent
      },
      {
        path: 'view-employee',
        component: ViewEmployeesComponent
      },
      {
        path: 'edit-employee/:id',
        component: EditEmployessComponent
      },

      {
        path: 'list-branch-office',
        component: ListBranchOfficeComponent
      },
      {
        path: 'add-branch-office',
        component: NewBranchOfficeComponent
      },
      {
        path: 'view-branch-office',
        component: ViewBranchOfficeComponent
      },
      {
        path: 'edit-branch-office/:id',
        component: EditBranchOfficeComponent
      },

      {
        path: 'list-company',
        component: ListCompanyComponent
      },
      {
        path: 'edit-company/:id',
        component: EditCompanyComponent
      }
    ]
  },
  {
    path:'delivery-dashboard',
    component:DeliveryDashboardComponent,
    canActivate:[DeliveryGuard],
    children:[
      {
        path:'delivery-welcome',
        component:DeliveryWelcomeComponent
      },
      {
        path:'delivery-pedidos',
        component:DeliveryPedidosComponent
      }
    ]
  },
  {
    path:'cocina-dashboard',
    component:CocinaDashboardComponent,
    canActivate:[CocinaGuard],
    children:[
      {
        path:'cocina-welcome',
        component:CocinaWelcomeComponent
      },
      {
        path:'cocina-pedidos',
        component:CocinaPedidosComponent
      }
    ]
  },
  {
    path: 'customer-dashboard',
    component: CustomerDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'Category',
        component: HomeComponent
      },
      {
        path: 'DatosGenerales',
        component: CusDatosGeneralesComponent
      },
      {
        path: 'MostrarVenta/:id',
        component: CusDatosGeneralesComponent
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent
      },{
        path: 'Productos/:id',
        component: CusPlatoComponent,


      },{
        path: 'Ventas',
        component: VentasComponent,


      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
