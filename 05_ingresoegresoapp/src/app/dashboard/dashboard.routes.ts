import { Routes } from "@angular/router";
import { DetailComponent } from "../ingress-egress/detail/detail.component";
import { IngressEgressComponent } from "../ingress-egress/ingress-egress.component";
import { StadisticComponent } from "../ingress-egress/stadistic/stadistic.component";

export const dashboardRoutes: Routes = [
    { path: '', component: StadisticComponent },
    { path: 'ingress-egress', component: IngressEgressComponent },
    { path: 'detail', component: DetailComponent }
]
