import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './component/home/home.component';
import {AboutUsComponent} from './component/about-us/about-us.component';
import {ContactUsComponent} from "./component/contact-us/contact-us.component";
import {SupplierHomeComponent} from "./component/supplier/supplier-home/supplier-home.component";
import {UpdateInventoryItemComponent} from "./component/supplier/update-inventory-item/update-inventory-item.component";
import {ViewInventoryItemsComponent} from "./component/supplier/view-inventory-items/view-inventory-items.component";
import {ViewOrderDetailsComponent} from "./component/supplier/view-order-details/view-order-details.component";
import {WaiterHomeComponent} from "./component/waiter/waiter-home/waiter-home.component";
import {CreateOrderComponent} from "./component/waiter/create-order/create-order.component";
import {UpdateOrderStatusComponent} from "./component/waiter/update-order-status/update-order-status.component";
import {UpdateTableDetailsComponent} from "./component/waiter/update-table-details/update-table-details.component";
import {ViewTableDetailsComponent} from "./component/waiter/view-table-details/view-table-details.component";


import {
    DeliveryPartnerHomeComponent
} from "./component/delivery-partner/delivery-partner-home/delivery-partner-home.component";
import {
    CreateDeliveryTaskComponent
} from "./component/delivery-partner/create-delivery-task/create-delivery-task.component";
import {
    UpdateDeliveryStatusComponent
} from "./component/delivery-partner/update-delivery-status/update-delivery-status.component";
import {
    ViewPastDeliveriesComponent
} from "./component/delivery-partner/view-past-deliveries/view-past-deliveries.component";
import {ChefHomeComponent} from "./component/chef/chef-home/chef-home.component";
import {UpdateMenuItemsComponent} from "./component/chef/update-menu-items/update-menu-items.component";
import {ViewMenuItemsComponent} from "./component/chef/view-menu-items/view-menu-items.component";
import {ViewFeedbacksComponent} from "./component/chef/view-feedbacks/view-feedbacks.component";
import {CustomerHomeComponent} from "./component/customer/customer-home/customer-home.component";
import {CreateFeedbackComponent} from "./component/customer/create-feedback/create-feedback.component";
import {CreatePaymentComponent} from "./component/customer/create-payment/create-payment.component";
import {ViewPaymentComponent} from "./component/customer/view-payment/view-payment.component";
import {OwnerHomeComponent} from "./component/owner/owner-home/owner-home.component";
import {CreateAccountingComponent} from "./component/owner/create-accounting/create-accounting.component";
import {UpdateAccountingComponent} from "./component/owner/update-accounting/update-accounting.component";
import {ManageAccountingComponent} from "./component/owner/view-accounting/view-accounting.component";
import {CreateBillComponent} from "./component/owner/create-bill/create-bill.component";
import {UpdateBillComponent} from "./component/owner/update-bill/update-bill.component";
import {ManageBillComponent} from "./component/owner/view-bill/view-bill.component";
import {CreateInventoryItemComponent} from "./component/owner/create-inventory-item/create-inventory-item.component";
import {ManageInventoryItemsComponent} from "./component/owner/view-inventory-items/view-inventory-items.component";
import {UpdateSupplierComponent} from "./component/owner/update-supplier/update-supplier.component";
import {ManageSuppliersComponent} from "./component/owner/view-suppliers/view-suppliers.component";
import {CreateTableComponent} from "./component/owner/create-table/create-table.component";
import {ManageTableComponent} from "./component/owner/view-table/view-table.component";
import {UpdatePaymentComponent} from "./component/owner/update-payment/update-payment.component";
import {ManagePaymentsComponent} from "./component/owner/view-payments/view-payments.component";
import {ManageOrdersComponent} from "./component/owner/view-orders/view-orders.component";
import {RestaurantHomeComponent} from "./component/restaurant/restaurant-home/restaurant-home.component";
import {ManageRestaurantComponent} from "./component/restaurant/manage-restaurant/manage-restaurant.component";
import {UpdateRestaurantComponent} from "./component/restaurant/update-restaurant/update-restaurant.component";
import {CreateCategoryComponent} from "./component/restaurant/create-category/create-category.component";
import {ManageCategoryComponent} from "./component/restaurant/manage-category/manage-category.component";
import {UpdateCategoryComponent} from "./component/restaurant/update-category/update-category.component";
import {CreateMenuItemComponent} from "./component/restaurant/create-menu-item/create-menu-item.component";
import {ManageMenuItemsComponent} from "./component/restaurant/manage-menu-items/manage-menu-items.component";
import {ManageChefsComponent} from "./component/restaurant/manage-chefs/manage-chefs.component";
import {UpdateChefComponent} from "./component/restaurant/update-chef/update-chef.component";
import {ManageWaitersComponent} from "./component/restaurant/manage-waiters/manage-waiters.component";
import {UpdateWaiterComponent} from "./component/restaurant/update-waiter/update-waiter.component";
import {
    ManageDeliveryPartnersComponent
} from "./component/restaurant/manage-delivery-partners/manage-delivery-partners.component";
import {
    UpdateDeliveryPartnerComponent
} from "./component/restaurant/update-delivery-partner/update-delivery-partner.component";
import {ForgotPasswordComponent} from "./component/forgot-password/forgot-password.component";
import {UserLoginComponent} from "./component/user-login/user-login.component";
import {UserSignupComponent} from "./component/user-signup/user-signup.component";


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'user-login', component: UserLoginComponent},
    {path: 'user-signup', component: UserSignupComponent},

    {
        path: 'supplier', children: [
            {path: 'home', component: SupplierHomeComponent},
            {path: 'update-inventory-item', component: UpdateInventoryItemComponent},
            {path: 'view-inventory-items', component: ViewInventoryItemsComponent},
            {path: 'view-order-details', component: ViewOrderDetailsComponent}
        ]
    },

    {
        path: 'waiter', children: [
            {path: 'home', component: WaiterHomeComponent},
            {path: 'create-order', component: CreateOrderComponent},
            {path: 'update-order-status', component: UpdateOrderStatusComponent},
            {path: 'update-table-details', component: UpdateTableDetailsComponent},
            {path: 'view-current-orders', component: ViewOrderDetailsComponent},
            {path: 'view-table-details', component: ViewTableDetailsComponent},
        ]
    },

    {
        path: 'delivery-partner', children: [
            {path: 'home', component: DeliveryPartnerHomeComponent},
            {path: 'create-delivery-task', component: CreateDeliveryTaskComponent},
            {path: 'update-delivery-status', component: UpdateDeliveryStatusComponent},
            {path: 'update-order-status', component: UpdateOrderStatusComponent},
            {path: 'view-assigned-orders', component: ViewOrderDetailsComponent},
            {path: 'view-past-deliveries', component: ViewPastDeliveriesComponent},
        ]
    },

    {
        path: 'chef', children: [
            {path: 'home', component: ChefHomeComponent},
            {path: 'update-menu-items', component: UpdateMenuItemsComponent},
            {path: 'view-menu-items', component: ViewMenuItemsComponent},
            {path: 'update-inventory-status', component: UpdateInventoryItemComponent},
            {path: 'view-inventory-items', component: ViewInventoryItemsComponent},
            {path: 'update-order-status', component: UpdateOrderStatusComponent},
            {path: 'view-orders', component: ViewOrderDetailsComponent},
            {path: 'view-feedbacks', component: ViewFeedbacksComponent},
        ]
    },

    {
        path: 'customer', children: [
            {path: 'home', component: CustomerHomeComponent},
            {path: 'view-menu-items', component: ViewMenuItemsComponent},
            {path: 'create-order', component: CreateOrderComponent},
            {path: 'view-orders', component: ViewOrderDetailsComponent},
            {path: 'create-feedback', component: CreateFeedbackComponent},
            {path: 'view-feedbacks', component: ViewFeedbacksComponent},
            {path: 'create-payment', component: CreatePaymentComponent},
            {path: 'view-payments', component: ViewPaymentComponent},
        ]
    },

    {
        path: 'owner', children: [
            {path: 'home', component: OwnerHomeComponent},
            {path: 'create-accounting', component: CreateAccountingComponent},
            {path: 'update-accounting', component: UpdateAccountingComponent},
            {path: 'view-accounting', component: ManageAccountingComponent},
            {path: 'create-bill', component: CreateBillComponent},
            {path: 'update-bill', component: UpdateBillComponent},
            {path: 'view-bill', component: ManageBillComponent},
            {path: 'create-inventory-item', component: CreateInventoryItemComponent},
            {path: 'update-inventory-item', component: UpdateInventoryItemComponent},
            {path: 'view-inventory-items', component: ManageInventoryItemsComponent},
            {path: 'update-supplier', component: UpdateSupplierComponent},
            {path: 'view-suppliers', component: ManageSuppliersComponent},
            {path: 'create-table', component: CreateTableComponent},
            {path: 'update-table', component: UpdateTableDetailsComponent},
            {path: 'view-table', component: ManageTableComponent},
            {path: 'update-payment', component: UpdatePaymentComponent},
            {path: 'view-payments', component: ManagePaymentsComponent},
            {path: 'update-order', component: UpdateOrderStatusComponent},
            {path: 'view-orders', component: ManageOrdersComponent},
            {path: 'view-feedbacks', component: ViewFeedbacksComponent},
        ]
    },

    {
        path: 'restaurant', children: [
            {path: 'home', component: RestaurantHomeComponent},
            {path: 'manage-restaurants', component: ManageRestaurantComponent},
            {path: 'update-restaurant', component: UpdateRestaurantComponent},
            {path: 'create-category', component: CreateCategoryComponent},
            {path: 'manage-category', component: ManageCategoryComponent},
            {path: 'update-category', component: UpdateCategoryComponent},
            {path: 'create-menu-item', component: CreateMenuItemComponent},
            {path: 'manage-menu-item', component: ManageMenuItemsComponent},
            {path: 'update-menu-item', component: UpdateMenuItemsComponent},
            {path: 'manage-chefs', component: ManageChefsComponent},
            {path: 'update-chef', component: UpdateChefComponent},
            {path: 'manage-waiters', component: ManageWaitersComponent},
            {path: 'update-waiters', component: UpdateWaiterComponent},
            {path: 'manage-delivery-partners', component: ManageDeliveryPartnersComponent},
            {path: 'update-delivery-partners', component: UpdateDeliveryPartnerComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}

export {routes};
