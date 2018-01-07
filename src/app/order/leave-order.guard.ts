import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OrderComponent } from './order.component';


export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

    canDeactivate(orderComponent: OrderComponent,
                  activatedRoute: ActivatedRouteSnapshot,
                  routerStateSnapshot: RouterStateSnapshot): boolean {
        return orderComponent.isOrderCompleted() ? true : window.confirm('Deseja desistir da compra?');
    }
}
