import { EventEmitter } from '@angular/core';
var NotificationService = (function () {
    function NotificationService() {
        this.notifier = new EventEmitter();
    }
    NotificationService.prototype.notify = function (message) {
        this.notifier.emit(message);
    };
    return NotificationService;
}());
export { NotificationService };
//# sourceMappingURL=notifications.service.js.map