import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



import { NavbarComponent } from './components/navbar/navbar.component';

import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';


import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './pages/customer/profile/profile.component';

import { FormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';






import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { authInterceptorProviders } from './services/auth/auth.interceptor';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ListCategorysComponent } from './pages/admin/list-categorys/list-categorys.component';
import { EditCategorysComponent } from './pages/admin/edit-categorys/edit-categorys.component';
import { NewCategorysComponent } from './pages/admin/new-categorys/new-categorys.component';
import { ViewCategorysComponent } from './pages/admin/view-categorys/view-categorys.component';
import { ViewProductsComponent } from './pages/admin/view-products/view-products.component';
import { ListProductsComponent } from './pages/admin/list-products/list-products.component';
import { NewProductsComponent } from './pages/admin/new-products/new-products.component';
import { ViewEmployeesComponent } from './pages/admin/view-employees/view-employees.component';
import { ListCompanyComponent } from './pages/admin/list-company/list-company.component';
import { NewCompanyComponent } from './pages/admin/new-company/new-company.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';
import { ListEmployeesComponent } from './pages/admin/list-employees/list-employees.component';
import { NewEmployessComponent } from './pages/admin/new-employess/new-employess.component';
import { EditEmployessComponent } from './pages/admin/edit-employess/edit-employess.component';
import { ListBranchOfficeComponent } from './pages/admin/list-branch-office/list-branch-office.component';
import { NewBranchOfficeComponent } from './pages/admin/new-branch-office/new-branch-office.component';
import { ViewBranchOfficeComponent } from './pages/admin/view-branch-office/view-branch-office.component';
import { EditBranchOfficeComponent } from './pages/admin/edit-branch-office/edit-branch-office.component';
import { EditCompanyComponent } from './pages/admin/edit-company/edit-company.component';
import { CustomerDashboardComponent } from './pages/customer/customer-dashboard/customer-dashboard.component';
import { CustomerSidebarComponent } from './pages/customer/customer-sidebar/customer-sidebar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EditProfileComponent } from './pages/customer/edit-profile/edit-profile.component';
import { CusPlatoComponent } from './cus-plato/cus-plato.component';
import { CusModalProductoComponent } from './cus-modal-producto/cus-modal-producto.component';
import { CusCardsComponent } from './cus-cards/cus-cards.component';
import { CusDatosGeneralesComponent } from './cus-datos-generales/cus-datos-generales.component';
import { CusIniciarSesionComponent } from './cus-iniciar-sesion/cus-iniciar-sesion.component';
import { CusRegistrarseComponent } from './cus-registrarse/cus-registrarse.component';
import { NewPlatoComponent } from './pages/admin/new-plato/new-plato.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatListModule} from "@angular/material/list";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import { ListPlatoComponent } from './pages/admin/list-plato/list-plato.component';
import { ViewPlateDetailsComponent } from './pages/admin/view-plate-details/view-plate-details.component';
import { EditPlateComponent } from './pages/admin/edit-plate/edit-plate.component';
import { TableWhitDetailsDataComponent } from './components/utils/table-whit-details-data/table-whit-details-data.component';
import { CocinaDashboardComponent } from './pages/cocina/cocina-dashboard/cocina-dashboard.component';
import { DeliveryDashboardComponent } from './pages/delivery/delivery-dashboard/delivery-dashboard.component';
import { DeliverySidebarComponent } from './pages/delivery/delivery-sidebar/delivery-sidebar.component';
import { CocinaSidebarComponent } from './pages/cocina/cocina-sidebar/cocina-sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    WelcomeComponent,
    SidebarComponent,
    ListCategorysComponent,
    EditCategorysComponent,
    NewCategorysComponent,
    ViewCategorysComponent,
    ViewProductsComponent,
    ListProductsComponent,
    NewProductsComponent,
    ViewEmployeesComponent,
    ListCompanyComponent,
    NewCompanyComponent,
    EditProductComponent,
    ListEmployeesComponent,
    NewEmployessComponent,
    EditEmployessComponent,
    ListBranchOfficeComponent,
    NewBranchOfficeComponent,
    ViewBranchOfficeComponent,
    EditBranchOfficeComponent,
    EditCompanyComponent,
    CustomerDashboardComponent,
    CustomerSidebarComponent,
    EditProfileComponent,
CusPlatoComponent,
CusModalProductoComponent,
CusCardsComponent,
CusCardsComponent,
CusDatosGeneralesComponent,
CusIniciarSesionComponent,
CusRegistrarseComponent,
NewPlatoComponent,
ListPlatoComponent,
ViewPlateDetailsComponent,
EditPlateComponent,
TableWhitDetailsDataComponent,
CocinaDashboardComponent,
DeliveryDashboardComponent,
DeliverySidebarComponent,
CocinaSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDialogModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
