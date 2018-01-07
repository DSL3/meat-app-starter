var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from './order.service';
import { OrderItem } from './order.model';
var OrderComponent = OrderComponent_1 = (function () {
    function OrderComponent(orderServive, router, formBuilder) {
        this.orderServive = orderServive;
        this.router = router;
        this.formBuilder = formBuilder;
        this.emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.numberPattern = /^[0-9]*$/;
        this.delivery = 8;
        this.paymentOptions = [
            { label: 'Dinheiro', value: 'MON' },
            { label: 'Cartão de Débito', value: 'DEB' },
            { label: 'Cartão de Refeição', value: 'REF' }
        ];
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.orderForm = this.formBuilder.group({
            name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
            email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
            emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
            address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
            number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
            optionalAddress: this.formBuilder.control(''),
            paymentOption: this.formBuilder.control('', [Validators.required])
        }, { validator: OrderComponent_1.equalsTo });
    };
    OrderComponent.equalsTo = function (group) {
        var email = group.get('email');
        var emailConfirmation = group.get('emailConfirmation');
        if (!email || !emailConfirmation) {
            return undefined;
        }
        if (email.value !== emailConfirmation.value) {
            return { emailsNotMatch: true };
        }
    };
    OrderComponent.prototype.itemsValue = function () {
        return this.orderServive.itemsValue();
    };
    OrderComponent.prototype.cartItems = function () {
        return this.orderServive.cartItems();
    };
    OrderComponent.prototype.increaseQty = function (item) {
        this.orderServive.increaseQty(item);
    };
    OrderComponent.prototype.decreaseQty = function (item) {
        this.orderServive.decreaseQty(item);
    };
    OrderComponent.prototype.remove = function (item) {
        this.orderServive.remove(item);
    };
    OrderComponent.prototype.checkOrder = function (order) {
        var _this = this;
        order.orderItems = this.cartItems()
            .map(function (item) { return new OrderItem(item.quantity, item.menuItem.id); });
        this.orderServive.checkOrder(order)
            .subscribe(function (orderId) {
            _this.router.navigate(['/order-summary']);
            console.log("Compra conclu\u00EDda: " + orderId);
            _this.orderServive.clear();
        });
        console.log("order: ", order);
    };
    return OrderComponent;
}());
OrderComponent = OrderComponent_1 = __decorate([
    Component({
        selector: 'mt-order',
        templateUrl: './order.component.html'
    }),
    __metadata("design:paramtypes", [OrderService,
        Router,
        FormBuilder])
], OrderComponent);
export { OrderComponent };
var OrderComponent_1;
//# sourceMappingURL=order.component.js.map