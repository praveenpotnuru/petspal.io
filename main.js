(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ngx-toasta/src/lib/shared.ts":
/*!***********************************************!*\
  !*** ./projects/ngx-toasta/src/lib/shared.ts ***!
  \***********************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(domSanitized) {
        this.domSanitized = domSanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.domSanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./projects/ngx-toasta/src/lib/toast.component.ts":
/*!********************************************************!*\
  !*** ./projects/ngx-toasta/src/lib/toast.component.ts ***!
  \********************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toasta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toasta.service */ "./projects/ngx-toasta/src/lib/toasta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A Toast component shows message with title and close button.
 */
var ToastComponent = /** @class */ (function () {
    function ToastComponent() {
        this.closeToastEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Event handler invokes when user clicks on close button.
     * This method emit new event into ToastaContainer to close it.
     */
    ToastComponent.prototype.close = function ($event) {
        $event.preventDefault();
        this.closeToastEvent.next(this.toast);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _toasta_service__WEBPACK_IMPORTED_MODULE_1__["ToastData"])
    ], ToastComponent.prototype, "toast", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('closeToast'),
        __metadata("design:type", Object)
    ], ToastComponent.prototype, "closeToastEvent", void 0);
    ToastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-toast',
            template: "\n        <div class=\"toast\" [ngClass]=\"[toast.type, toast.theme]\">\n            <div *ngIf=\"toast.showClose\" class=\"close-button\" (click)=\"close($event)\"></div>\n            <div *ngIf=\"toast.title || toast.msg\" class=\"toast-text\">\n                <span *ngIf=\"toast.title\" class=\"toast-title\" [innerHTML]=\"toast.title | safeHtml\"></span>\n                <br *ngIf=\"toast.title && toast.msg\" />\n                <span *ngIf=\"toast.msg\" class=\"toast-msg\" [innerHtml]=\"toast.msg | safeHtml\"></span>\n            </div>\n        </div>"
        })
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "./projects/ngx-toasta/src/lib/toasta.component.ts":
/*!*********************************************************!*\
  !*** ./projects/ngx-toasta/src/lib/toasta.component.ts ***!
  \*********************************************************/
/*! exports provided: ToastaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastaComponent", function() { return ToastaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toasta_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toasta.utils */ "./projects/ngx-toasta/src/lib/toasta.utils.ts");
/* harmony import */ var _toasta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toasta.service */ "./projects/ngx-toasta/src/lib/toasta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Toasta is container for Toast components
 */
var ToastaComponent = /** @class */ (function () {
    function ToastaComponent(config, toastaService) {
        this.config = config;
        this.toastaService = toastaService;
        this._position = '';
        // The storage for toasts.
        this.toasts = [];
        // Initialise position
        this.position = '';
    }
    ToastaComponent_1 = ToastaComponent;
    Object.defineProperty(ToastaComponent.prototype, "position", {
        get: function () {
            return this._position;
        },
        // The window position where the toast pops up. Possible values:
        // - bottom-right (default value from ToastConfig)
        // - bottom-left
        // - bottom-center
        // - bottom-fullwidth
        // - top-right
        // - top-left
        // - top-center
        // - top-fullwidth
        // - center-center
        set: function (value) {
            if (value) {
                var notFound = true;
                for (var i = 0; i < ToastaComponent_1.POSITIONS.length; i++) {
                    if (ToastaComponent_1.POSITIONS[i] === value) {
                        notFound = false;
                        break;
                    }
                }
                if (notFound) {
                    // Position was wrong - clear it here to use the one from config.
                    value = this.config.position;
                }
            }
            else {
                value = this.config.position;
            }
            this._position = 'toasta-position-' + value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * `ngOnInit` is called right after the directive's data-bound properties have been checked for the
     * first time, and before any of its children have been checked. It is invoked only once when the
     * directive is instantiated.
     */
    ToastaComponent.prototype.ngOnInit = function () {
        var _this = this;
        // We listen events from our service
        this.toastaService.events.subscribe(function (event) {
            if (event.type === _toasta_service__WEBPACK_IMPORTED_MODULE_2__["ToastaEventType"].ADD) {
                // Add the new one
                var toast = event.value;
                _this.add(toast);
            }
            else if (event.type === _toasta_service__WEBPACK_IMPORTED_MODULE_2__["ToastaEventType"].CLEAR) {
                // Clear the one by number
                var id = event.value;
                _this.clear(id);
            }
            else if (event.type === _toasta_service__WEBPACK_IMPORTED_MODULE_2__["ToastaEventType"].CLEAR_ALL) {
                // Lets clear all toasts
                _this.clearAll();
            }
        });
    };
    /**
     * Event listener of 'closeToast' event comes from ToastaComponent.
     * This method removes ToastComponent assosiated with this Toast.
     */
    ToastaComponent.prototype.closeToast = function (toast) {
        this.clear(toast.id);
    };
    /**
     * Add new Toast
     */
    ToastaComponent.prototype.add = function (toast) {
        // If we've gone over our limit, remove the earliest
        // one from the array
        if (this.config.limit && this.toasts.length >= this.config.limit) {
            this.toasts.shift();
        }
        // Add toasta to array
        this.toasts.push(toast);
        //
        // If there's a timeout individually or globally,
        // set the toast to timeout
        if (+toast.timeout) {
            this._setTimeout(toast);
        }
    };
    /**
     * Clear individual toast by id
     * @param id is unique identifier of Toast
     */
    ToastaComponent.prototype.clear = function (id) {
        var _this = this;
        if (id) {
            this.toasts.forEach(function (value, key) {
                if (value.id === id) {
                    if (value.onRemove && Object(_toasta_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value.onRemove)) {
                        value.onRemove.call(_this, value);
                    }
                    _this.toasts.splice(key, 1);
                }
            });
        }
        else {
            throw new Error('Please provide id of Toast to close');
        }
    };
    /**
     * Clear all toasts
     */
    ToastaComponent.prototype.clearAll = function () {
        var _this = this;
        this.toasts.forEach(function (value, key) {
            if (value.onRemove && Object(_toasta_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(value.onRemove)) {
                value.onRemove.call(_this, value);
            }
        });
        this.toasts = [];
    };
    /**
     * Custom setTimeout function for specific setTimeouts on individual toasts.
     */
    ToastaComponent.prototype._setTimeout = function (toast) {
        var _this = this;
        window.setTimeout(function () {
            _this.clear(toast.id);
        }, toast.timeout);
    };
    var ToastaComponent_1;
    /**
     * Set of constants defines position of Toasta on the page.
     */
    ToastaComponent.POSITIONS = ['bottom-right', 'bottom-left', 'bottom-center', 'bottom-fullwidth', 'top-right', 'top-left', 'top-center', 'top-fullwidth', 'center-center'];
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ToastaComponent.prototype, "position", null);
    ToastaComponent = ToastaComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-toasta',
            template: "\n    <div id=\"toasta\" [ngClass]=\"[position]\">\n        <ngx-toast *ngFor=\"let toast of toasts\" [toast]=\"toast\" (closeToast)=\"closeToast(toast)\"></ngx-toast>\n    </div>"
        }),
        __metadata("design:paramtypes", [_toasta_service__WEBPACK_IMPORTED_MODULE_2__["ToastaConfig"], _toasta_service__WEBPACK_IMPORTED_MODULE_2__["ToastaService"]])
    ], ToastaComponent);
    return ToastaComponent;
}());



/***/ }),

/***/ "./projects/ngx-toasta/src/lib/toasta.module.ts":
/*!******************************************************!*\
  !*** ./projects/ngx-toasta/src/lib/toasta.module.ts ***!
  \******************************************************/
/*! exports provided: providers, ToastaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastaModule", function() { return ToastaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _toasta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toasta.component */ "./projects/ngx-toasta/src/lib/toasta.component.ts");
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast.component */ "./projects/ngx-toasta/src/lib/toast.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./projects/ngx-toasta/src/lib/shared.ts");
/* harmony import */ var _toasta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toasta.service */ "./projects/ngx-toasta/src/lib/toasta.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var providers = [
    _toasta_service__WEBPACK_IMPORTED_MODULE_5__["ToastaConfig"],
    { provide: _toasta_service__WEBPACK_IMPORTED_MODULE_5__["ToastaService"], useFactory: _toasta_service__WEBPACK_IMPORTED_MODULE_5__["toastaServiceFactory"], deps: [_toasta_service__WEBPACK_IMPORTED_MODULE_5__["ToastaConfig"]] }
];
var ToastaModule = /** @class */ (function () {
    function ToastaModule() {
    }
    ToastaModule_1 = ToastaModule;
    ToastaModule.forRoot = function () {
        return {
            ngModule: ToastaModule_1,
            providers: providers
        };
    };
    var ToastaModule_1;
    ToastaModule = ToastaModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_toast_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"], _toasta_component__WEBPACK_IMPORTED_MODULE_2__["ToastaComponent"], _shared__WEBPACK_IMPORTED_MODULE_4__["SafeHtmlPipe"]],
            exports: [_toast_component__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"], _toasta_component__WEBPACK_IMPORTED_MODULE_2__["ToastaComponent"]],
            providers: providers
        })
    ], ToastaModule);
    return ToastaModule;
}());



/***/ }),

/***/ "./projects/ngx-toasta/src/lib/toasta.service.ts":
/*!*******************************************************!*\
  !*** ./projects/ngx-toasta/src/lib/toasta.service.ts ***!
  \*******************************************************/
/*! exports provided: ToastOptions, ToastData, ToastaConfig, ToastaEventType, ToastaEvent, toastaServiceFactory, ToastaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastOptions", function() { return ToastOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastData", function() { return ToastData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastaConfig", function() { return ToastaConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastaEventType", function() { return ToastaEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastaEvent", function() { return ToastaEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toastaServiceFactory", function() { return toastaServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastaService", function() { return ToastaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _toasta_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toasta.utils */ "./projects/ngx-toasta/src/lib/toasta.utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Options to configure a new Toast
 */
var ToastOptions = /** @class */ (function () {
    function ToastOptions() {
    }
    ToastOptions = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ToastOptions);
    return ToastOptions;
}());

/**
 * Structrure of a created Toast
 */
var ToastData = /** @class */ (function () {
    function ToastData() {
    }
    ToastData = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ToastData);
    return ToastData;
}());

/**
 * Default configuration for all toasts and toasta container
 */
var ToastaConfig = /** @class */ (function () {
    function ToastaConfig() {
        // Maximum number of toasties to show at once
        this.limit = 5;
        // Whether to show the 'X' icon to close the toast
        this.showClose = true;
        // The window position where the toast pops up
        this.position = 'bottom-right';
        // How long (in miliseconds) the toasta shows before it's removed. Set to null/0 to turn off.
        this.timeout = 5000;
        // What theme to use
        this.theme = 'default';
    }
    ToastaConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ToastaConfig);
    return ToastaConfig;
}());

var ToastaEventType;
(function (ToastaEventType) {
    ToastaEventType[ToastaEventType["ADD"] = 0] = "ADD";
    ToastaEventType[ToastaEventType["CLEAR"] = 1] = "CLEAR";
    ToastaEventType[ToastaEventType["CLEAR_ALL"] = 2] = "CLEAR_ALL";
})(ToastaEventType || (ToastaEventType = {}));
var ToastaEvent = /** @class */ (function () {
    function ToastaEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return ToastaEvent;
}());

function toastaServiceFactory(config) {
    return new ToastaService(config);
}
/**
 * Toasta service helps create different kinds of Toasts
 */
var ToastaService = /** @class */ (function () {
    function ToastaService(config) {
        this.config = config;
        // Init the counter
        this.uniqueCounter = 0;
        // ToastData event emitter
        // private toastsEmitter: EventEmitter<ToastData> = new EventEmitter<ToastData>();
        // Clear event emitter
        // private clearEmitter: EventEmitter<number> = new EventEmitter<number>();
        this.eventSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.events = this.eventSource.asObservable();
    }
    ToastaService_1 = ToastaService;
    /**
     * Get list of toats
     */
    // getToasts(): Observable<ToastData> {
    //   return this.toastsEmitter.asObservable();
    // }
    // getClear(): Observable<number> {
    //   return this.clearEmitter.asObservable();
    // }
    /**
     * Create Toast of a default type
     */
    ToastaService.prototype.default = function (options) {
        this.add(options, 'default');
    };
    /**
     * Create Toast of info type
     * @param options Individual toasta config overrides
     */
    ToastaService.prototype.info = function (options) {
        this.add(options, 'info');
    };
    /**
     * Create Toast of success type
     * @param options Individual toasta config overrides
     */
    ToastaService.prototype.success = function (options) {
        this.add(options, 'success');
    };
    /**
     * Create Toast of wait type
     * @param options Individual toasta config overrides
     */
    ToastaService.prototype.wait = function (options) {
        this.add(options, 'wait');
    };
    /**
     * Create Toast of error type
     * @param options Individual toasta config overrides
     */
    ToastaService.prototype.error = function (options) {
        this.add(options, 'error');
    };
    /**
     * Create Toast of warning type
     * @param options Individual toasta config overrides
     */
    ToastaService.prototype.warning = function (options) {
        this.add(options, 'warning');
    };
    // Add a new toast item
    ToastaService.prototype.add = function (options, type) {
        var toastaOptions;
        if (Object(_toasta_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(options) && options !== '' || Object(_toasta_utils__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(options)) {
            toastaOptions = {
                title: options.toString()
            };
        }
        else {
            toastaOptions = options;
        }
        if (!toastaOptions || !toastaOptions.title && !toastaOptions.msg) {
            throw new Error('ngx-toasta: No toast title or message specified!');
        }
        type = type || 'default';
        // Set a unique counter for an id
        this.uniqueCounter++;
        // Set the local vs global config items
        var showClose = this._checkConfigItem(this.config, toastaOptions, 'showClose');
        // If we have a theme set, make sure it's a valid one
        var theme;
        if (toastaOptions.theme) {
            theme = ToastaService_1.THEMES.indexOf(toastaOptions.theme) > -1 ? toastaOptions.theme : this.config.theme;
        }
        else {
            theme = this.config.theme;
        }
        var toast = {
            id: this.uniqueCounter,
            title: toastaOptions.title,
            msg: toastaOptions.msg,
            showClose: showClose,
            type: 'toasta-type-' + type,
            theme: 'toasta-theme-' + theme,
            onAdd: toastaOptions.onAdd && Object(_toasta_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(toastaOptions.onAdd) ? toastaOptions.onAdd : null,
            onRemove: toastaOptions.onRemove && Object(_toasta_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(toastaOptions.onRemove) ? toastaOptions.onRemove : null
        };
        // If there's a timeout individually or globally, set the toast to timeout
        // Allows a caller to pass null/0 and override the default. Can also set the default to null/0 to turn off.
        toast.timeout = toastaOptions.hasOwnProperty('timeout') ? toastaOptions.timeout : this.config.timeout;
        // Push up a new toast item
        // this.toastsSubscriber.next(toast);
        // this.toastsEmitter.next(toast);
        this.emitEvent(new ToastaEvent(ToastaEventType.ADD, toast));
        // If we have a onAdd function, call it here
        if (toastaOptions.onAdd && Object(_toasta_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(toastaOptions.onAdd)) {
            toastaOptions.onAdd.call(this, toast);
        }
    };
    // Clear all toasts
    ToastaService.prototype.clearAll = function () {
        // this.clearEmitter.next(null);
        this.emitEvent(new ToastaEvent(ToastaEventType.CLEAR_ALL));
    };
    // Clear the specific one
    ToastaService.prototype.clear = function (id) {
        // this.clearEmitter.next(id);
        this.emitEvent(new ToastaEvent(ToastaEventType.CLEAR, id));
    };
    // Checks whether the local option is set, if not,
    // checks the global config
    ToastaService.prototype._checkConfigItem = function (config, options, property) {
        if (options[property] === false) {
            return false;
        }
        else if (!options[property]) {
            return config[property];
        }
        else {
            return true;
        }
    };
    ToastaService.prototype.emitEvent = function (event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    };
    var ToastaService_1;
    // Allowed THEMES
    ToastaService.THEMES = ['default', 'material', 'bootstrap'];
    ToastaService = ToastaService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ToastaConfig])
    ], ToastaService);
    return ToastaService;
}());



/***/ }),

/***/ "./projects/ngx-toasta/src/lib/toasta.utils.ts":
/*!*****************************************************!*\
  !*** ./projects/ngx-toasta/src/lib/toasta.utils.ts ***!
  \*****************************************************/
/*! exports provided: isString, isNumber, isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/**
 * Check and return true if an object is type of string
 * @param obj Analyse has to object the string type
 * @return result of analysis
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object is type of number
 * @param obj Analyse has to object the boolean type
 * @return result of analysis
 */
function isNumber(obj) {
    return typeof obj === "number";
}
/**
 * Check and return true if an object is type of Function
 * @param obj Analyse has to object the function type
 * @return result of analysis
 */
function isFunction(obj) {
    return typeof obj === "function";
}


/***/ }),

/***/ "./projects/ngx-toasta/src/public_api.ts":
/*!***********************************************!*\
  !*** ./projects/ngx-toasta/src/public_api.ts ***!
  \***********************************************/
/*! exports provided: ToastOptions, ToastData, ToastaConfig, ToastaEventType, ToastaEvent, toastaServiceFactory, ToastaService, ToastaComponent, ToastComponent, SafeHtmlPipe, providers, ToastaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_toasta_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/toasta.service */ "./projects/ngx-toasta/src/lib/toasta.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastOptions", function() { return _lib_toasta_service__WEBPACK_IMPORTED_MODULE_0__["ToastOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastData", function() { return _lib_toasta_service__WEBPACK_IMPORTED_MODULE_0__["ToastData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastaConfig", function() { return _lib_toasta_service__WEBPACK_IMPORTED_MODULE_0__["ToastaConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastaEventType", function() { return _lib_toasta_service__WEBPACK_IMPORTED_MODULE_0__["ToastaEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastaEvent", function() { return _lib_toasta_service__WEBPACK_IMPORTED_MODULE_0__["ToastaEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toastaServiceFactory", function() { return _lib_toasta_service__WEBPACK_IMPORTED_MODULE_0__["toastaServiceFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastaService", function() { return _lib_toasta_service__WEBPACK_IMPORTED_MODULE_0__["ToastaService"]; });

/* harmony import */ var _lib_toasta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/toasta.component */ "./projects/ngx-toasta/src/lib/toasta.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastaComponent", function() { return _lib_toasta_component__WEBPACK_IMPORTED_MODULE_1__["ToastaComponent"]; });

/* harmony import */ var _lib_toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/toast.component */ "./projects/ngx-toasta/src/lib/toast.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return _lib_toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"]; });

/* harmony import */ var _lib_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/shared */ "./projects/ngx-toasta/src/lib/shared.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return _lib_shared__WEBPACK_IMPORTED_MODULE_3__["SafeHtmlPipe"]; });

/* harmony import */ var _lib_toasta_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/toasta.module */ "./projects/ngx-toasta/src/lib/toasta.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return _lib_toasta_module__WEBPACK_IMPORTED_MODULE_4__["providers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastaModule", function() { return _lib_toasta_module__WEBPACK_IMPORTED_MODULE_4__["ToastaModule"]; });

/*
 * Public API Surface of ngx-toasta
 */







/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_petlove_petlove_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/petlove/petlove.component */ "./src/app/modules/petlove/petlove.component.ts");
/* harmony import */ var _modules_singlepet_singlepet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/singlepet/singlepet.component */ "./src/app/modules/singlepet/singlepet.component.ts");
/* harmony import */ var _modules_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/about/about.component */ "./src/app/modules/about/about.component.ts");
/* harmony import */ var _modules_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/gallery/gallery.component */ "./src/app/modules/gallery/gallery.component.ts");
/* harmony import */ var _modules_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/services/services.component */ "./src/app/modules/services/services.component.ts");
/* harmony import */ var _modules_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/register/register.component */ "./src/app/modules/register/register.component.ts");
/* harmony import */ var _modules_events_events_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/events/events.component */ "./src/app/modules/events/events.component.ts");
/* harmony import */ var _modules_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/signup/signup.component */ "./src/app/modules/signup/signup.component.ts");
/* harmony import */ var _modules_addpet_addpet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/addpet/addpet.component */ "./src/app/modules/addpet/addpet.component.ts");
/* harmony import */ var _modules_mypets_mypets_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/mypets/mypets.component */ "./src/app/modules/mypets/mypets.component.ts");
/* harmony import */ var _modules_myrequests_myrequests_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/myrequests/myrequests.component */ "./src/app/modules/myrequests/myrequests.component.ts");
/* harmony import */ var _modules_products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/products/products.component */ "./src/app/modules/products/products.component.ts");
/* harmony import */ var _modules_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/contactus/contactus.component */ "./src/app/modules/contactus/contactus.component.ts");
/* harmony import */ var _modules_howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/howitworks/howitworks.component */ "./src/app/modules/howitworks/howitworks.component.ts");
/* harmony import */ var _modules_petnews_petnews_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/petnews/petnews.component */ "./src/app/modules/petnews/petnews.component.ts");
/* harmony import */ var _modules_reminders_reminders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/reminders/reminders.component */ "./src/app/modules/reminders/reminders.component.ts");
/* harmony import */ var _modules_addreminder_addreminder_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/addreminder/addreminder.component */ "./src/app/modules/addreminder/addreminder.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'petlove', component: _modules_petlove_petlove_component__WEBPACK_IMPORTED_MODULE_3__["PetloveComponent"] },
    { path: 'petlove/:service', component: _modules_petlove_petlove_component__WEBPACK_IMPORTED_MODULE_3__["PetloveComponent"] },
    { path: 'petdetails/:id', component: _modules_singlepet_singlepet_component__WEBPACK_IMPORTED_MODULE_4__["SinglepetComponent"] },
    { path: 'petdetails/:type/:id', component: _modules_singlepet_singlepet_component__WEBPACK_IMPORTED_MODULE_4__["SinglepetComponent"] },
    { path: 'about', component: _modules_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'gallery', component: _modules_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"] },
    { path: 'events', component: _modules_events_events_component__WEBPACK_IMPORTED_MODULE_9__["EventsComponent"] },
    { path: 'services', component: _modules_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"] },
    { path: 'signin', component: _modules_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'signup', component: _modules_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
    { path: 'myprofile', component: _modules_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
    { path: 'addpet', component: _modules_addpet_addpet_component__WEBPACK_IMPORTED_MODULE_11__["AddpetComponent"] },
    { path: 'updatepet/:id', component: _modules_addpet_addpet_component__WEBPACK_IMPORTED_MODULE_11__["AddpetComponent"] },
    { path: 'mypets', component: _modules_mypets_mypets_component__WEBPACK_IMPORTED_MODULE_12__["MypetsComponent"] },
    { path: 'myrequests', component: _modules_myrequests_myrequests_component__WEBPACK_IMPORTED_MODULE_13__["MyrequestsComponent"] },
    { path: 'products', component: _modules_products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"] },
    { path: 'contactus', component: _modules_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_15__["ContactusComponent"] },
    { path: 'howitworks', component: _modules_howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_16__["HowitworksComponent"] },
    { path: 'petnews', component: _modules_petnews_petnews_component__WEBPACK_IMPORTED_MODULE_17__["PetnewsComponent"] },
    { path: 'reminders', component: _modules_reminders_reminders_component__WEBPACK_IMPORTED_MODULE_18__["RemindersComponent"] },
    { path: 'addreminder', component: _modules_addreminder_addreminder_component__WEBPACK_IMPORTED_MODULE_19__["AddreminderComponent"] },
    { path: 'updatereminder/:id', component: _modules_addreminder_addreminder_component__WEBPACK_IMPORTED_MODULE_19__["AddreminderComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- Hellooo -->\r\n<app-loader></app-loader>\r\n<router-outlet (activate)=\"onActivate()\" style=\"min-height: height 415px !important;\"></router-outlet>\r\n<ngx-toasta [position]=\"'top-right'\">\r\n</ngx-toasta>\r\n\r\n<div *ngIf=\"message\">\r\n    <div class=\"row\">\r\n      <pre>{{ message | json }}</pre>\r\n    </div>\r\n    <div class=\"media-left\">\r\n      <a href=\"#\">\r\n        <img class=\"media-object\" style=\"height:100px\" src=\"{{message.notification.icon}}\" alt=\"{{message.notification.title}}\">\r\n      </a>\r\n    </div>\r\n    <div class=\"media-body\">\r\n      <h4 class=\"media-heading\">{{ message.notification.title }}</h4>\r\n      <h6>{{ message.notification.body }}</h6>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_messaging_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/messaging-service.service */ "./src/app/services/messaging-service.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_fcmPushService, deviceService) {
        var _this = this;
        this._fcmPushService = _fcmPushService;
        this.deviceService = deviceService;
        this.title = 'tst';
        this.deviceInfo = null;
        this.deviceInfo = deviceService.getDeviceInfo();
        console.log(this.deviceInfo);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                // Get current cordinates.
                //positionCords = { "lat": position.coords.latitude, "lng": position.coords.longitude };
                localStorage.setItem('latitude', position.coords.latitude.toString());
                localStorage.setItem('longitude', position.coords.longitude.toString());
            }, function (error) {
                // On error code..
            }, { timeout: 30000, enableHighAccuracy: true, maximumAge: 75000 });
        }
        this._fcmPushService.getPermission();
        //this._fcmPushService.receiveMessage();
        this._fcmPushService.currentMessage.subscribe(function (message) { _this.message = message; }, function (err) { console.log(err); });
    }
    AppComponent.prototype.onActivate = function () {
        window.scroll(0, 0);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        __metadata("design:paramtypes", [_services_messaging_service_service__WEBPACK_IMPORTED_MODULE_1__["MessagingServiceService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__["DeviceDetectorService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @trademe/ng-defer-load */ "./node_modules/@trademe/ng-defer-load/dist/index.js");
/* harmony import */ var _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../projects/ngx-toasta/src/public_api */ "./projects/ngx-toasta/src/public_api.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_interceptors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./http-interceptors */ "./src/app/http-interceptors/index.ts");
/* harmony import */ var _modules_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/about/about.component */ "./src/app/modules/about/about.component.ts");
/* harmony import */ var _modules_addpet_addpet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/addpet/addpet.component */ "./src/app/modules/addpet/addpet.component.ts");
/* harmony import */ var _modules_events_events_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/events/events.component */ "./src/app/modules/events/events.component.ts");
/* harmony import */ var _modules_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/gallery/gallery.component */ "./src/app/modules/gallery/gallery.component.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_mypets_mypets_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/mypets/mypets.component */ "./src/app/modules/mypets/mypets.component.ts");
/* harmony import */ var _modules_myrequests_myrequests_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/myrequests/myrequests.component */ "./src/app/modules/myrequests/myrequests.component.ts");
/* harmony import */ var _modules_petlove_petlove_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/petlove/petlove.component */ "./src/app/modules/petlove/petlove.component.ts");
/* harmony import */ var _modules_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/register/register.component */ "./src/app/modules/register/register.component.ts");
/* harmony import */ var _modules_services_services_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/services/services.component */ "./src/app/modules/services/services.component.ts");
/* harmony import */ var _modules_signup_signup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modules/signup/signup.component */ "./src/app/modules/signup/signup.component.ts");
/* harmony import */ var _modules_singlepet_singlepet_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/singlepet/singlepet.component */ "./src/app/modules/singlepet/singlepet.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _shared_components_mast_footer_mast_footer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/components/mast-footer/mast-footer.component */ "./src/app/shared/components/mast-footer/mast-footer.component.ts");
/* harmony import */ var _shared_components_mast_head_mast_head_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/components/mast-head/mast-head.component */ "./src/app/shared/components/mast-head/mast-head.component.ts");
/* harmony import */ var _shared_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/components/nav-menu/nav-menu.component */ "./src/app/shared/components/nav-menu/nav-menu.component.ts");
/* harmony import */ var _shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/directives/numbers-only.directive */ "./src/app/shared/directives/numbers-only.directive.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _shared_components_iconlist_iconlist_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/components/iconlist/iconlist.component */ "./src/app/shared/components/iconlist/iconlist.component.ts");
/* harmony import */ var _modules_products_products_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./modules/products/products.component */ "./src/app/modules/products/products.component.ts");
/* harmony import */ var _modules_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./modules/contactus/contactus.component */ "./src/app/modules/contactus/contactus.component.ts");
/* harmony import */ var _modules_howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modules/howitworks/howitworks.component */ "./src/app/modules/howitworks/howitworks.component.ts");
/* harmony import */ var _modules_petnews_petnews_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modules/petnews/petnews.component */ "./src/app/modules/petnews/petnews.component.ts");
/* harmony import */ var _shared_components_boarding_boarding_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/components/boarding/boarding.component */ "./src/app/shared/components/boarding/boarding.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _modules_reminders_reminders_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./modules/reminders/reminders.component */ "./src/app/modules/reminders/reminders.component.ts");
/* harmony import */ var _modules_addreminder_addreminder_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./modules/addreminder/addreminder.component */ "./src/app/modules/addreminder/addreminder.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_46__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _shared_components_mast_head_mast_head_component__WEBPACK_IMPORTED_MODULE_30__["MastHeadComponent"],
                _shared_components_mast_footer_mast_footer_component__WEBPACK_IMPORTED_MODULE_29__["MastFooterComponent"],
                _shared_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_31__["NavMenuComponent"],
                _modules_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                _modules_petlove_petlove_component__WEBPACK_IMPORTED_MODULE_22__["PetloveComponent"],
                _modules_singlepet_singlepet_component__WEBPACK_IMPORTED_MODULE_26__["SinglepetComponent"],
                _modules_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _modules_services_services_component__WEBPACK_IMPORTED_MODULE_24__["ServicesComponent"],
                _modules_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__["GalleryComponent"],
                _modules_events_events_component__WEBPACK_IMPORTED_MODULE_17__["EventsComponent"],
                _modules_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
                _modules_signup_signup_component__WEBPACK_IMPORTED_MODULE_25__["SignupComponent"],
                _shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_32__["NumbersOnlyDirective"],
                _modules_myrequests_myrequests_component__WEBPACK_IMPORTED_MODULE_21__["MyrequestsComponent"],
                _modules_mypets_mypets_component__WEBPACK_IMPORTED_MODULE_20__["MypetsComponent"],
                _modules_addpet_addpet_component__WEBPACK_IMPORTED_MODULE_16__["AddpetComponent"],
                _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_28__["LoaderComponent"],
                _shared_components_iconlist_iconlist_component__WEBPACK_IMPORTED_MODULE_34__["IconlistComponent"],
                _modules_products_products_component__WEBPACK_IMPORTED_MODULE_35__["ProductsComponent"],
                _modules_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_36__["ContactusComponent"],
                _modules_howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_37__["HowitworksComponent"],
                _modules_petnews_petnews_component__WEBPACK_IMPORTED_MODULE_38__["PetnewsComponent"],
                _shared_components_boarding_boarding_component__WEBPACK_IMPORTED_MODULE_39__["BoardingComponent"],
                _modules_reminders_reminders_component__WEBPACK_IMPORTED_MODULE_41__["RemindersComponent"],
                _modules_addreminder_addreminder_component__WEBPACK_IMPORTED_MODULE_42__["AddreminderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_33__["OverlayModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _trademe_ng_defer_load__WEBPACK_IMPORTED_MODULE_9__["DeferLoadModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_40__["InfiniteScrollModule"],
                _projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_10__["ToastaModule"].forRoot(),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_44__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_45__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_43__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production })
            ],
            providers: [_http_interceptors__WEBPACK_IMPORTED_MODULE_14__["httpInterceptorProviders"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_27__["AuthService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_46__["DeviceDetectorService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http-interceptors/auth-interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/http-interceptors/auth-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // Get the auth token from the service.
        var authToken = 'Bearer ' + this.auth.getToken();
        /*
        * The verbose way:
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({
          headers: req.headers.set('Authorization', authToken)
        });
        */
        // Clone the request and set the new header in one step.
        if (req.url.indexOf(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoints.signin) > 0 ||
            req.url.indexOf(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoints.searchPets) > 0 ||
            req.url.indexOf(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoints.register) > 0 ||
            req.url.indexOf(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoints.forgotPassword) > 0 ||
            req.url.indexOf(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoints.petDetails) > 0 ||
            req.url.indexOf(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoints.countryList) > 0 ||
            req.url.indexOf(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoints.getCities) > 0 ||
            req.url.indexOf(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoints.getAreaList) > 0 ||
            req.url.indexOf(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoints.getBreeds) > 0 ||
            req.url.indexOf(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoints.getPetTypes) > 0 ||
            (req.url.indexOf(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoints.contactus) > 0 && !this.auth.getToken()) ||
            req.url.indexOf(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoints.getPetNews) > 0) {
            var authReq_1 = req.clone({
                setHeaders: {
                    "Content-Type": "application/json"
                }
            });
            return next.handle(authReq_1); // do nothing
        }
        else if (req.url.indexOf(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndPoints.uploadFile) > 0) {
            return next.handle(req);
        }
        var authReq = req.clone({
            setHeaders: {
                Authorization: authToken,
                SecurityToken: this.auth.getToken(),
                "Content-Type": "application/json"
            }
        });
        // send cloned request with header to the next handler.
        return next.handle(authReq);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/http-interceptors/ensure-https-interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/http-interceptors/ensure-https-interceptor.ts ***!
  \***************************************************************/
/*! exports provided: EnsureHttpsInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureHttpsInterceptor", function() { return EnsureHttpsInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EnsureHttpsInterceptor = /** @class */ (function () {
    function EnsureHttpsInterceptor() {
    }
    EnsureHttpsInterceptor.prototype.intercept = function (req, next) {
        // clone request and replace 'http://' with 'https://' at the same time
        var secureReq = req.clone({
            url: req.url.replace('http://', 'https://')
        });
        // send the cloned, "secure" request to the next handler.
        return next.handle(secureReq);
    };
    EnsureHttpsInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], EnsureHttpsInterceptor);
    return EnsureHttpsInterceptor;
}());



/***/ }),

/***/ "./src/app/http-interceptors/index.ts":
/*!********************************************!*\
  !*** ./src/app/http-interceptors/index.ts ***!
  \********************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-interceptor */ "./src/app/http-interceptors/auth-interceptor.ts");
/* harmony import */ var _ensure_https_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ensure-https-interceptor */ "./src/app/http-interceptors/ensure-https-interceptor.ts");
/* harmony import */ var _logging_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logging-interceptor */ "./src/app/http-interceptors/logging-interceptor.ts");
/* "Barrel" of Http Interceptors */


//import { CachingInterceptor } from './caching-interceptor';


//import { UploadInterceptor } from './upload-interceptor';
/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    // { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _ensure_https_interceptor__WEBPACK_IMPORTED_MODULE_2__["EnsureHttpsInterceptor"], multi: true },
    //  { provide: HTTP_INTERCEPTORS, useClass: TrimBodyInterceptor, multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _logging_interceptor__WEBPACK_IMPORTED_MODULE_3__["LoggingInterceptor"], multi: true },
];


/***/ }),

/***/ "./src/app/http-interceptors/logging-interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/http-interceptors/logging-interceptor.ts ***!
  \**********************************************************/
/*! exports provided: LoggingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingInterceptor", function() { return LoggingInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoggingInterceptor = /** @class */ (function () {
    function LoggingInterceptor(messenger, authService, router, loaderService) {
        this.messenger = messenger;
        this.authService = authService;
        this.router = router;
        this.loaderService = loaderService;
    }
    LoggingInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var started = Date.now();
        var ok;
        this.showLoader();
        // extend server response observable with logging
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(
        // Succeeds when there is a response; ignore other events
        function (event) { return ok = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"] ? 'succeeded' : ''; }, 
        // Operation failed; error is an HttpErrorResponse
        function (error) {
            if (error.status == 401 && error.error.ErrorMessage == "Invalid Token") {
                _this.onEnd();
                var latitude = localStorage.getItem('latitude');
                var longitude = localStorage.getItem('longitude');
                localStorage.clear();
                localStorage.setItem('latitude', latitude);
                localStorage.setItem('longitude', longitude);
                _this.router.navigate(['/']);
            }
        }), 
        // Log when response observable either completes or errors
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            var elapsed = Date.now() - started;
            var msg = req.method + " \"" + req.urlWithParams + "\"\n             " + ok + " in " + elapsed + " ms.";
            _this.messenger.add(msg);
            _this.onEnd();
        }));
    };
    LoggingInterceptor.prototype.onEnd = function () {
        this.hideLoader();
    };
    LoggingInterceptor.prototype.showLoader = function () {
        this.loaderService.show();
    };
    LoggingInterceptor.prototype.hideLoader = function () {
        this.loaderService.hide();
    };
    LoggingInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]])
    ], LoggingInterceptor);
    return LoggingInterceptor;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/modules/about/about.component.html":
/*!****************************************************!*\
  !*** ./src/app/modules/about/about.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n\r\n</app-mast-head>\r\n\r\n\r\n<!-- About Us -->\r\n<div class=\"container-fluid padding\" style=\"background-color:#e0dddf\">\r\n\r\n\r\n\t<div class=\"row\">\r\n\t\t<h2 class=\"theme-color text-center bold\"> ABOUT US</h2>\r\n\t</div>\r\n\r\n\t<div class=\"row more-padding\">\r\n\t\t<div class=\"col-sm-12 \">\r\n\t\t\t<mat-tab-group [disableRipple]=true animationDuration=\"0ms\">\r\n\t\t\t\t<mat-tab label=\"OUR TEAM\">\r\n\t\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t\t<div class=\"row\" style=\"margin-right:0px;\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-4 white-color\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/images/babywithdog.png\" class=\"img-responsive img-rounded\" />\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-md-8 white-bg-color container-text\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"theme-color\">We care for your pets as if they belong to us</h3>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\tWe are a platform for all service providers and pet lovers who can find all needs of\r\n\t\t\t\t\t\t\t\t\tpets at one place. Our\r\n\t\t\t\t\t\t\t\t\tlove towards pets has made us build this platform which was missing until now. We\r\n\t\t\t\t\t\t\t\t\twelcome pet lovers to share\r\n\t\t\t\t\t\t\t\t\ttheir pride with others, while others appreciate your love towards pets. This\r\n\t\t\t\t\t\t\t\t\tplatform is full of\r\n\t\t\t\t\t\t\t\t\topportunities for pet lovers and service providers alike.\r\n\t\t\t\t\t\t\t\t\t<br><br><br><br><br>\r\n\t\t\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</mat-tab>\r\n\t\t\t\t<mat-tab label=\"OUR PHILOSOPHY\">\r\n\t\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t\t<div class=\"row\" style=\"margin-right:0px;\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-md-4 white-color\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/images/cat.png\" class=\"img-responsive img-rounded\" />\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-md-8 white-bg-color container-text\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"theme-color\">Our Philosophy</h3>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\tPets bring happiness to the world. Our philosophy is to bring pets and humans\r\n\t\t\t\t\t\t\t\t\ttogether and increase the\r\n\t\t\t\t\t\t\t\t\tcompassion on the planet. We believe that right from children to adults pets have a\r\n\t\t\t\t\t\t\t\t\thealing impact on each\r\n\t\t\t\t\t\t\t\t\tother. They bond and grow with each other and learn to care for each other. We feel\r\n\t\t\t\t\t\t\t\t\tthis is the best way to\r\n\t\t\t\t\t\t\t\t\tmake this planet a better place to live.</p>\r\n\t\t\t\t\t\t\t\t<p>If you can find a place for a pet in your heart, and a little space on your phone for\r\n\t\t\t\t\t\t\t\t\tour app, we can do\r\n\t\t\t\t\t\t\t\t\twonders together! Come join us and love more, care more and give more!\r\n\t\t\t\t\t\t\t\t\t<br><br><br>\r\n\t\t\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</mat-tab>\r\n\t\t\t\t<mat-tab label=\"OUR ADVISORY BOARD\">\r\n\t\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t\t<div class=\"row\" style=\"margin-right:0px;\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-md-4 white-color\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/images/phani.png\" class=\"img-responsive img-rounded\" />\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-md-8 white-bg-color container-text\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"theme-color\">Raj N Phani</h3>\r\n\t\t\t\t\t\t\t\t<h6 class=\"theme-color\">Entrepreneur</h6>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\tChances are, if you've spoken to Raj at any length of time, you've ended up\r\n\t\t\t\t\t\t\t\t\tdiscussing ideation of your\r\n\t\t\t\t\t\t\t\t\tbusiness, its strategy and execution.</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\tRaj is a serial entrepreneur having built successful businesses in the prepaid\r\n\t\t\t\t\t\t\t\t\tpayment, internet, retail and\r\n\t\t\t\t\t\t\t\t\tbrand merchandising spaces. Seeds of his success began early, when at age 18 he sold\r\n\t\t\t\t\t\t\t\t\tcustom t-shirts in\r\n\t\t\t\t\t\t\t\t\tafter-school hours. Raj founded Zaggle as a network agnostic payment platform on\r\n\t\t\t\t\t\t\t\t\twhich merchants and consumers\r\n\t\t\t\t\t\t\t\t\tcould seamlessly interact. He is a key contributor in the Indian startup ecosystem,\r\n\t\t\t\t\t\t\t\t\ta true visionary known for\r\n\t\t\t\t\t\t\t\t\tbeing a sounding board, mentor and angel investor to entrepreneurs and startups\r\n\t\t\t\t\t\t\t\t\tacross a wide spectrum.</p>\r\n\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</mat-tab>\r\n\t\t\t</mat-tab-group>\r\n\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n<!-- end of about us -->\r\n\r\n<app-mast-footer>\r\n\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/about/about.component.less":
/*!****************************************************!*\
  !*** ./src/app/modules/about/about.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-labels {\n  justify-content: center;\n  /* align items in Main Axis */\n}\n.mat-tab-labels {\n  justify-content: center;\n  /* align items in Main Axis */\n  min-width: 50px;\n  height: 35px;\n}\n.mat-tab-label {\n  color: #fff;\n  margin-right: 2px;\n  border: 1px solid #A50F2D !important;\n  background-color: #A50F2D !important;\n  min-width: 50px !important;\n  height: 35px !important;\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  opacity: 1 !important;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n/* Styles for the active tab label */\n.mat-tab-label.mat-tab-label-active {\n  color: #fff;\n  opacity: 1 !important;\n  cursor: pointer;\n  border: 1px solid #d43f3a !important;\n  background-color: #d9534f !important;\n  min-width: 50px;\n  height: 35px;\n}\n.mat-tab-label:not(.mat-tab-label-active):hover {\n  opacity: 1 !important;\n  border: 1px solid #d43f3a !important;\n  background-color: #d9534f !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYm91dC9EOi9wZXRwYWxzL2tpcmFuZ2l0L3BldHBhbHMubG92ZS13ZWJzaXRlL3NyYy9hcHAvbW9kdWxlcy9hYm91dC9hYm91dC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9hYm91dC9hYm91dC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VDQ0YsOEJBQThCO0NBQy9CO0FEQ0Q7RUFDSSx3QkFBQTtFQ0NGLDhCQUE4QjtFREE1QixnQkFBQTtFQUNBLGFBQUE7Q0NFSDtBRENEO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFFQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtDQ0NIO0FBQ0QscUNBQXFDO0FER3JDO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0NDREg7QURHRDtFQUNJLHNCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtDQ0RIIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hYm91dC9hYm91dC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFiLWxhYmVsc3tcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogYWxpZ24gaXRlbXMgaW4gTWFpbiBBeGlzICovXG59XG5cbi5tYXQtdGFiLWxhYmVsc3tcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogYWxpZ24gaXRlbXMgaW4gTWFpbiBBeGlzICovXG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuLm1hdC10YWItbGFiZWwge1xuICAgIGNvbG9yOiAjZmZmOy8vICMzMzdhYjc7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0E1MEYyRCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNTBGMkQgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbn1cblxuLyogU3R5bGVzIGZvciB0aGUgYWN0aXZlIHRhYiBsYWJlbCAqL1xuLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0M2YzYSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuLm1hdC10YWItbGFiZWw6bm90KC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSk6aG92ZXIge1xuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDQzZjNhICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xuICB9XG5cbiIsIi5tYXQtdGFiLWxhYmVscyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiBhbGlnbiBpdGVtcyBpbiBNYWluIEF4aXMgKi9cbn1cbi5tYXQtdGFiLWxhYmVscyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiBhbGlnbiBpdGVtcyBpbiBNYWluIEF4aXMgKi9cbiAgbWluLXdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG4ubWF0LXRhYi1sYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0E1MEYyRCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTUwRjJEICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi8qIFN0eWxlcyBmb3IgdGhlIGFjdGl2ZSB0YWIgbGFiZWwgKi9cbi5tYXQtdGFiLWxhYmVsLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDQzZjNhICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG4ubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItbGFiZWwtYWN0aXZlKTpob3ZlciB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0M2YzYSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        // this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        // try {
        //   document.querySelector('#' + this.fragment).scrollIntoView();
        // } catch (e) { }
    };
    AboutComponent.prototype.onAnchorClick = function () {
        var x = document.querySelector("#profile1");
        if (x) {
            x.scrollIntoView();
        }
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/modules/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.less */ "./src/app/modules/about/about.component.less")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/modules/addpet/addpet.component.html":
/*!******************************************************!*\
  !*** ./src/app/modules/addpet/addpet.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n</app-mast-head>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"offset-sm-2 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"heading1\">\r\n          My Pet Details\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\">\r\n\r\n          <div class=\"form-group\">\r\n            <label>Upload Picture<sup style=\"color: red\">*</sup></label>\r\n            <input type=\"file\" style=\"background-color: firebrick;color: wheat;\" (change)=\"fileChangeEvent($event)\"\r\n              placeholder=\"Upload file...\" />\r\n            <!--For  Previewing image -->\r\n            <img id=\"blah\" [src]=\"imagePath\" style=\"height:50%;width:50%;\" alt=\"\" />\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <select class=\"form-control\" #myPetType name=\"myPettypes\" [(ngModel)]=\"selectedPetType\"\r\n              (change)=\"onChange()\">\r\n              <!-- <option value=\"Dating\">Dating & Mating\r\n              </option> -->\r\n              <option value=\"AvilableForAdotpion\">Adoption\r\n              </option>\r\n              <option value=\"Parenting\">Petparenting\r\n              </option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <div class=\"form-group form-check\" *ngIf=\"myPet.AvilableForAdotpion && myPet.PetId!=0\">\r\n              <label class=\"form-check-label\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"myPet.Taken\" name=\"Taken\">\r\n                Successfully Adopted\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Select PetType<sup style=\"color: red\">*</sup></label>\r\n            <select class=\"form-control\" [(ngModel)]=\"myPet.PetType\" name=\"PetType\">\r\n              <option value=\"\">\r\n              </option>\r\n              <option *ngFor=\"let petType of petTypeList\" value=\"{{petType}}\">{{petType}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Pet Name<sup style=\"color: red\">*</sup></label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myPet.PetName\" name=\"PetName\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Describe Your Pet</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myPet.KCIDetails\" name=\"Description\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Select Breed<sup style=\"color: red\">*</sup></label>\r\n            <select class=\"form-control\" [(ngModel)]=\"myPet.BreedName\" name=\"BreedName\">\r\n              <option value=\"\">\r\n              </option>\r\n              <option *ngFor=\"let breed of breedList\" value=\"{{breed.BreedName}}\">{{breed.BreedName}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"selectedPetType=='AvilableForAdotpion'\">\r\n            <label>Affiliated Organization</label>\r\n            <select name=\"AffiliatedOrganization\" [(ngModel)]=\"myPet.AffiliatedOrganization\" class=\"form-control\">\r\n              <option value=\"\">\r\n              </option>\r\n              <option>Fluffy Nut - Org </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Gender<sup style=\"color: red\">*</sup></label>\r\n            <select name=\"Gender\" [(ngModel)]=\"myPet.PetGender\" class=\"form-control\">\r\n              <option value=\"\">\r\n              </option>\r\n              <option value=\"Male\">Male</option>\r\n              <option value=\"Female\">Female</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Select City<sup style=\"color: red\">*</sup></label>\r\n            <select name=\"City\" [(ngModel)]=\"myPet.CityName\" class=\"form-control\"\r\n              (change)=\"onCityChange(myPet.CityName)\">\r\n              <option value=\"\">\r\n              </option>\r\n              <option *ngFor=\"let city of cityList\" [ngValue]=\"city.CityName\">{{city.CityName}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Select Area<sup style=\"color: red\">*</sup></label>\r\n            <select name=\"Area\" [(ngModel)]=\"myPet.AreaName\" class=\"form-control\"\r\n              (change)=\"onAreaChange(myPet.AreaName)\">\r\n              <option value=\"\"></option>\r\n              <option *ngFor=\"let area of areaList\" [ngValue]=\"area.AreaName\">{{area.AreaName}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Date od birth<sup style=\"color: red\">*</sup></label>\r\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"myPet.PetDob\" name=\"Dob\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Pet Color</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"myPet.Colors\" name=\"PetColor\">\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"myPet.WillingToSell\">\r\n            <label>Heating cycle form</label>\r\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"myPet.HeatingCycleFrom\" name=\"HeatingCycleFrom\">\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"myPet.WillingToSell\">\r\n            <label>Heating cycle to</label>\r\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"myPet.HeatingCycleTo\" name=\"HeatingCycleTo\">\r\n          </div>\r\n          <div class=\"form-group form-check\" *ngIf=\"myPet.WillingToSell\">\r\n            <label class=\"form-check-label\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"myPet.KCIRegistered\" name=\"KCIRegistered\">\r\n              KCI Verified\r\n            </label>\r\n          </div>\r\n          <button type=\"submit\" [disabled]=\"submitDisabled\" class=\"btn\"\r\n            style=\"background-color: #A50F2D;color: white;\">{{buttonName}}</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-2\"></div>\r\n</div>\r\n<app-mast-footer>\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/addpet/addpet.component.less":
/*!******************************************************!*\
  !*** ./src/app/modules/addpet/addpet.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRkcGV0L2FkZHBldC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/addpet/addpet.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/addpet/addpet.component.ts ***!
  \****************************************************/
/*! exports provided: AddpetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpetComponent", function() { return AddpetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/petservice.service */ "./src/app/services/petservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/ngx-toasta/src/public_api */ "./projects/ngx-toasta/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddpetComponent = /** @class */ (function () {
    function AddpetComponent(myPetService, route, masterService, router, toastaService) {
        this.myPetService = myPetService;
        this.route = route;
        this.masterService = masterService;
        this.router = router;
        this.toastaService = toastaService;
        this.petTypeList = [];
        this.breedList = [];
        this.countryList = [];
        this.cityList = [];
        this.areaList = [];
        this.selectedCityName = '';
        this.selectedCountryName = '';
        this.selectedAreaName = '';
        this.submitDisabled = false;
        this.isEditPet = false;
        this.myPetList = [];
        this.buttonName = 'Add';
        this.showloadingImage = true;
        this.selectedPetType = "AvilableForAdotpion";
        this.myPet = {
            PetId: 0,
            PetName: '',
            BreedName: '',
            Height: 0,
            Wight: 0,
            Colors: '',
            GroomingNeeds: true,
            ExerciseNeeds: true,
            GoodWithDogs: true,
            WatchdogAbility: true,
            CountryName: 'India',
            CityName: '',
            AreaName: '',
            HeatingCycleFrom: '',
            HeatingCycleTo: '',
            PetGender: '',
            PictrueName: '',
            PetDob: '',
            PetType: '',
            KCIRegistered: false,
            KCIDetails: '',
            AvilableForAdotpion: true,
            OfferPriceFrom: 0,
            OfferPriceTo: 0,
            Parenting: false,
            Taken: false,
            Latitude: 0,
            Longitude: 0,
            Description: "",
            WillingToSell: false,
            AffiliatedOrganization: ""
        };
    }
    AddpetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.masterService.getCityList(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].defaultCountryId)
            .subscribe(function (cityList) {
            _this.cityList = cityList.Data;
        });
        this.masterService.getPetTypeList()
            .subscribe(function (petTpeList) {
            _this.petTypeList = petTpeList.Data;
        });
        this.masterService.getBreedList()
            .subscribe(function (breedList) {
            _this.breedList = breedList.Data;
        });
        this.route.params
            .subscribe(function (params) {
            _this.petId = params['id'];
            if (_this.petId != null) {
                _this.isEditPet = true;
                _this.buttonName = 'Update';
            }
            else {
                _this.isEditPet = false;
                _this.buttonName = 'Save';
                _this.showloadingImage = false;
            }
        });
        if (this.isEditPet) {
            this.myPetService.mypetByPetId(this.petId)
                .subscribe(function (result) {
                var status = result.Status;
                if (status != "Errored") {
                    _this.myPetList = result.Data;
                    _this.myPet.PetId = _this.myPetList[0].PetId;
                    _this.myPet.PetName = _this.myPetList[0].PetName;
                    _this.myPet.BreedName = _this.myPetList[0].BreedName;
                    _this.myPet.Height = _this.myPetList[0].Height;
                    _this.myPet.Wight = _this.myPetList[0].Wight;
                    _this.myPet.Colors = _this.myPetList[0].Colors;
                    _this.myPet.GroomingNeeds = _this.myPetList[0].GroomingNeeds;
                    _this.myPet.ExerciseNeeds = _this.myPetList[0].ExerciseNeeds;
                    _this.myPet.GoodWithDogs = _this.myPetList[0].GoodWithDogs;
                    _this.myPet.WatchdogAbility = _this.myPetList[0].WatchdogAbility;
                    _this.myPet.CountryName = _this.myPetList[0].CountryName;
                    _this.myPet.CityName = _this.myPetList[0].CityName;
                    _this.myPet.HeatingCycleFrom = _this.formatDate(_this.myPetList[0].HeatingCycleFrom);
                    _this.myPet.HeatingCycleTo = _this.formatDate(_this.myPetList[0].HeatingCycleTo);
                    _this.myPet.PetGender = _this.myPetList[0].PetGender;
                    _this.myPet.PictrueName = _this.myPetList[0].PictrueName;
                    _this.myPet.PetDob = _this.formatDate(_this.myPetList[0].PetDob);
                    _this.myPet.PetType = _this.myPetList[0].PetType;
                    _this.myPet.KCIRegistered = _this.myPetList[0].KCIRegistered;
                    _this.myPet.KCIDetails = _this.myPetList[0].KCIDetails;
                    _this.myPet.AvilableForAdotpion = _this.myPetList[0].AvilableForAdotpion;
                    _this.myPet.OfferPriceFrom = _this.myPetList[0].OfferPriceFrom;
                    _this.myPet.OfferPriceTo = _this.myPetList[0].OfferPriceTo;
                    _this.myPet.Parenting = _this.myPetList[0].Parenting;
                    _this.myPet.Taken = _this.myPetList[0].Taken;
                    _this.myPet.Latitude = _this.myPetList[0].Latitude;
                    _this.myPet.Longitude = _this.myPetList[0].Longitude;
                    _this.myPet.Description = _this.myPetList[0].Description;
                    _this.petImageUrl = _this.myPetList[0].PictrueName;
                    _this.imagePath = _this.myPetList[0].PictrueName;
                    _this.selectedAreaName = _this.myPetList[0].AreaName;
                    _this.myPet.WillingToSell = _this.myPetList[0].WillingToSell;
                    _this.myPet.AffiliatedOrganization = _this.myPetList[0].AffiliatedOrganization;
                    if (_this.myPet.WillingToSell) {
                        _this.selectedPetType = "Dating";
                    }
                    else if (_this.myPet.AvilableForAdotpion) {
                        _this.selectedPetType = "AvilableForAdotpion";
                    }
                    else if (_this.myPet.Parenting) {
                        _this.selectedPetType = "Parenting";
                    }
                    //load area list
                    _this.masterService.getAreaList(result.Data[0].CityId)
                        .subscribe(function (areaList) {
                        _this.areaList = areaList.Data;
                        _this.myPet.AreaName = _this.myPetList[0].AreaName;
                    });
                }
                else {
                    //this.toastr.error(result.ErrorMessage, 'Error')
                }
            });
        }
    };
    AddpetComponent.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    AddpetComponent.prototype.onCityChange = function (selectedCity) {
        var _this = this;
        //get cityId from city list
        var cityId = this.cityList.find(function (c) { return c.CityName == selectedCity; }).CityId;
        this.masterService.getAreaList(cityId)
            .subscribe(function (areaList) {
            _this.areaList = areaList.Data;
            _this.selectedAreaName = "";
        });
        this.selectedCityName = selectedCity;
    };
    AddpetComponent.prototype.onAreaChange = function (selectedArea) {
        this.selectedAreaName = selectedArea;
    };
    AddpetComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.files = fileInput.target.files;
        this.uploadedFile = this.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            //no problem for this error
            _this.imagePath = event.target.result;
        };
        reader.readAsDataURL(fileInput.target.files[0]);
    };
    AddpetComponent.prototype.onChange = function () {
        if (this.selectedPetType == "Dating") {
            this.myPet.AvilableForAdotpion = false;
            this.myPet.WillingToSell = true;
            this.myPet.Parenting = false;
        }
        else if (this.selectedPetType == "AvilableForAdotpion") {
            this.myPet.AvilableForAdotpion = true;
            this.myPet.WillingToSell = false;
            this.myPet.Parenting = false;
        }
        else {
            this.myPet.AvilableForAdotpion = false;
            this.myPet.WillingToSell = false;
            this.myPet.Parenting = true;
        }
    };
    AddpetComponent.prototype.onSubmit = function (myPetForm) {
        var isValidForm = true;
        if (!this.uploadedFile && !this.isEditPet) {
            var toastOptions = this.masterService.setToastOptions('Add Pet Errors', 'Please upload a photo', '');
            this.toastaService.error(toastOptions);
            return false;
        }
        if (!myPetForm.value.PetName) {
            var toastOptions = this.masterService.setToastOptions('Add Pet Errors', 'Please enter pet name', '');
            this.toastaService.error(toastOptions);
            return false;
        }
        if (!myPetForm.value.PetType) {
            var toastOptions = this.masterService.setToastOptions('Add Pet Errors', 'Please select pet type', '');
            this.toastaService.error(toastOptions);
            return false;
        }
        if (!myPetForm.value.PetType) {
            var toastOptions = this.masterService.setToastOptions('Add Pet Errors', 'Please select pet type', '');
            this.toastaService.error(toastOptions);
            return false;
        }
        if (!myPetForm.value.BreedName) {
            var toastOptions = this.masterService.setToastOptions('Add Pet Errors', 'Please select breed type', '');
            this.toastaService.error(toastOptions);
            return false;
        }
        if (!myPetForm.value.City) {
            var toastOptions = this.masterService.setToastOptions('Add Pet Errors', 'Please select city', '');
            this.toastaService.error(toastOptions);
            return false;
        }
        if (!myPetForm.value.Area || !this.selectedAreaName) {
            var toastOptions = this.masterService.setToastOptions('Add Pet Errors', 'Please select area', '');
            this.toastaService.error(toastOptions);
            return false;
        }
        if (!myPetForm.value.Gender) {
            var toastOptions = this.masterService.setToastOptions('Add Pet Errors', 'Please select gender', '');
            this.toastaService.error(toastOptions);
            return false;
        }
        if (!myPetForm.value.Dob) {
            var toastOptions = this.masterService.setToastOptions('Add Pet Errors', 'Please enter dob', '');
            this.toastaService.error(toastOptions);
            return false;
        }
        this.submitDisabled = true;
        if (this.isEditPet) { //for edit pet
            if (this.uploadedFile != undefined) {
                this.savePetImage(myPetForm);
            }
            else {
                this.myPet.PictrueName = this.petImageUrl;
                this.updatePet(myPetForm);
            }
        }
        else { //for add pet
            this.savePetImage(myPetForm);
        }
    };
    AddpetComponent.prototype.savePetImage = function (userForm) {
        var _this = this;
        this.masterService.saveImage(this.uploadedFile)
            .subscribe(function (result) {
            _this.myPet.PictrueName = result.Data.ImgUrl;
            if (_this.isEditPet) {
                _this.updatePet(userForm);
            }
            else {
                _this.savePet(userForm);
            }
        });
    };
    AddpetComponent.prototype.savePet = function (myPetForm) {
        var _this = this;
        this.myPet.PetName = myPetForm.value.PetName;
        this.myPet.PetType = myPetForm.value.PetType;
        this.myPet.BreedName = myPetForm.value.BreedName;
        this.myPet.PetGender = myPetForm.value.Gender;
        this.myPet.CityName = myPetForm.value.City;
        this.myPet.AreaName = myPetForm.value.Area;
        this.myPet.PetDob = myPetForm.value.Dob == "NaN-NaN-NaN" ? "" : myPetForm.value.Dob;
        this.myPet.Colors = myPetForm.value.PetColor;
        this.myPet.HeatingCycleFrom = myPetForm.value.HeatingCycleFrom == "NaN-NaN-NaN" ? "" : myPetForm.value.HeatingCycleFrom;
        this.myPet.HeatingCycleTo = myPetForm.value.HeatingCycleTo == "NaN-NaN-NaN" ? "" : myPetForm.value.HeatingCycleTo;
        this.myPet.KCIRegistered = myPetForm.value.KCIRegistered;
        this.myPet.Description = myPetForm.value.Description;
        this.myPetService.saveMypet(this.myPet, this.myPet.PictrueName)
            .subscribe(function (result) {
            var status = result.Status;
            if (status != "Errored") {
                var toastOptions = _this.masterService.setToastOptions('Save Pet', 'Success', 'mypets');
                _this.toastaService.success(toastOptions);
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Save Pet', result.ErrorMessage, '');
                _this.toastaService.error(toastOptions);
                _this.submitDisabled = false;
            }
        });
    };
    AddpetComponent.prototype.updatePet = function (myPetForm) {
        var _this = this;
        this.myPet.PetId = this.petId;
        this.myPet.PetName = myPetForm.value.PetName;
        this.myPet.PetType = myPetForm.value.PetType;
        //this.myPet.KCIDetails = myPetForm.value.Description;
        this.myPet.BreedName = myPetForm.value.BreedName;
        this.myPet.PetGender = myPetForm.value.Gender;
        this.myPet.CityName = myPetForm.value.City;
        this.myPet.AreaName = myPetForm.value.Area;
        this.myPet.PetDob = myPetForm.value.Dob == "NaN-NaN-NaN" ? "" : myPetForm.value.Dob;
        this.myPet.Colors = myPetForm.value.PetColor;
        this.myPet.HeatingCycleFrom = myPetForm.value.HeatingCycleFrom == "NaN-NaN-NaN" ? "" : myPetForm.value.HeatingCycleFrom;
        this.myPet.HeatingCycleTo = myPetForm.value.HeatingCycleTo == "NaN-NaN-NaN" ? "" : myPetForm.value.HeatingCycleTo;
        this.myPet.KCIRegistered = myPetForm.value.KCIRegistered;
        //this.myPet.KCIDetails = myPetForm.value.Description;
        this.myPet.Description = myPetForm.value.Description;
        this.myPetService.updateMypet(this.myPet, this.myPet.PictrueName)
            .subscribe(function (result) {
            var status = result.Status;
            if (status != "Errored") {
                var toastOptions = _this.masterService.setToastOptions('Save Pet', 'Success', 'mypets');
                _this.toastaService.success(toastOptions);
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Update Pet', result.ErrorMessage, '');
                _this.toastaService.error(toastOptions);
                _this.submitDisabled = false;
            }
        });
    };
    AddpetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addpet',
            template: __webpack_require__(/*! ./addpet.component.html */ "./src/app/modules/addpet/addpet.component.html"),
            styles: [__webpack_require__(/*! ./addpet.component.less */ "./src/app/modules/addpet/addpet.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_1__["PetserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ToastaService"]])
    ], AddpetComponent);
    return AddpetComponent;
}());



/***/ }),

/***/ "./src/app/modules/addreminder/addreminder.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/addreminder/addreminder.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\n</app-mast-head>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"offset-sm-2 col-md-6\">\n      <div class=\"card\">\n        <div class=\"heading1\">\n          Add Reminder\n        </div>\n      </div>\n\n      <div class=\"card-body\">\n        <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\">\n          <div class=\"form-group\">\n            <label>Task Description</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"taskDescription\" name=\"Description\">\n          </div>\n\n          <div class=\"form-group\">\n            <label>Start date and time<sup style=\"color: red\">*</sup></label>\n            <input type=\"datetime-local\" class=\"form-control\" [(ngModel)]=\"startDateTime\" name=\"startDateTime\">\n          </div>\n          <div class=\"form-group\">\n            <label>End date and time<sup style=\"color: red\">*</sup></label>\n            <input type=\"datetime-local\" class=\"form-control\" [(ngModel)]=\"endDateTime\" name=\"endDateTime\">\n          </div>\n          <div class=\"form-group\">\n            <label>Recurring<sup style=\"color: red\">*</sup></label>\n            <select class=\"form-control\" name=\"recurring\" [(ngModel)]=\"recurring\">\n              <!-- <option value=\"Dating\">Dating & Mating\n              </option> -->\n              <option value=\"true\">Yes\n              </option>\n              <option value=\"false\">No\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Recurr Every<sup style=\"color: red\">*</sup></label>\n            <select class=\"form-control\" name=\"recurringEvery\" [(ngModel)]=\"recurringEvery\">\n              <!-- <option value=\"Dating\">Dating & Mating\n              </option> -->\n              <option value=\"Day\">Day\n              </option>\n              <option value=\"Week\">Week\n              </option>\n              <option value=\"Hour\">Hour\n              </option>\n              <option value=\"Month\">Month\n              </option>\n              <option value=\"Year\">Year\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Recurring Period</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"recurringPeriod\" name=\"recurringPeriod\">\n          </div>\n\n          <button type=\"submit\" class=\"btn\"\n            style=\"background-color: #A50F2D;color: white;\">{{buttonName}}</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-2\"></div>\n</div>\n<app-mast-footer>\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/addreminder/addreminder.component.less":
/*!****************************************************************!*\
  !*** ./src/app/modules/addreminder/addreminder.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRkcmVtaW5kZXIvYWRkcmVtaW5kZXIuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/addreminder/addreminder.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/addreminder/addreminder.component.ts ***!
  \**************************************************************/
/*! exports provided: AddreminderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddreminderComponent", function() { return AddreminderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ngx-toasta/src/public_api */ "./projects/ngx-toasta/src/public_api.ts");
/* harmony import */ var src_app_services_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/reminder.service */ "./src/app/services/reminder.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddreminderComponent = /** @class */ (function () {
    function AddreminderComponent(masterService, reminderService, toastaService) {
        this.masterService = masterService;
        this.reminderService = reminderService;
        this.toastaService = toastaService;
        this.taskDescription = "";
        this.startDateTime = "";
        this.endDateTime = "";
        this.recurring = "true";
        this.recurringEvery = "Day";
        this.recurringPeriod = 1;
        this.buttonName = "Save";
    }
    AddreminderComponent.prototype.ngOnInit = function () {
        this.startDateTime = this.masterService.getDateTimeProperFormat(new Date());
        this.endDateTime = this.masterService.getDateTimeProperFormat(new Date());
    };
    AddreminderComponent.prototype.onSubmit = function (reminderForm) {
        var _this = this;
        console.log(reminderForm);
        var body = {
            "TaskDescription": this.taskDescription,
            "Recurring": this.recurring,
            "StartDateTime": this.startDateTime,
            "EndDateTime": this.endDateTime,
            "RecurringEvery": this.recurringEvery,
            "RecurringPeriod": this.recurringPeriod
        };
        this.reminderService.createReminder(body).subscribe(function (res) {
            var status = res.Status;
            if (status != "Errored") {
                var toastOptions = _this.masterService.setToastOptions('Reminders', 'Success', 'reminders');
                _this.toastaService.success(toastOptions);
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Reminders', res.ErrorMessage, '');
                _this.toastaService.error(toastOptions);
            }
        });
    };
    AddreminderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addreminder',
            template: __webpack_require__(/*! ./addreminder.component.html */ "./src/app/modules/addreminder/addreminder.component.html"),
            styles: [__webpack_require__(/*! ./addreminder.component.less */ "./src/app/modules/addreminder/addreminder.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_services_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"],
            src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_3__["ReminderService"],
            projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ToastaService"]])
    ], AddreminderComponent);
    return AddreminderComponent;
}());



/***/ }),

/***/ "./src/app/modules/contactus/contactus.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/contactus/contactus.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n</app-mast-head>\r\n<div class=\"container-fluid padding\" id=\"contact\">\r\n  <div class=\"row\">\r\n\r\n\r\n    <div class=\"col-md-4 col-md-offset-2 \">\r\n\r\n      <h2 class=\"theme-color bold\"> GET IN TOUCH</h2><br><br>\r\n\r\n\r\n      <!-- Contact info -->\r\n\r\n      <p><i class=\"fa fa-envelope theme-color\"></i><a href=\"mailto:varsha@petpals.love\">&nbsp;varsha@petpals.love</a>\r\n        or call us</p>\r\n      <p><i class=\"fa fa-phone theme-color\"></i> &nbsp;&nbsp;<a href=\"tel:+1 (203) 587 0578\">+91 9632232118</a> <br> <a\r\n          href=\"tel:+9163640457623\"> +91 6364045762 (Adoption)</a></p>\r\n\r\n      <br>\r\n      <!-- Adress info -->\r\n      <h4>Location &amp; Time</h4>\r\n      <p><i class=\"fa fa-map-marker theme-color\"></i>&nbsp;&nbsp;We are omnipresent in US and India</p>\r\n      <br>\r\n      <p><i class=\"fa fa-clock-o theme-color\"></i>&nbsp;&nbsp;Open from 9 a.m to 10 p.m local time on weekdays <br>\r\n        from 9 a.m to 2 p.m local time in weekends.</p>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n\r\n      <h2 class=\"theme-color  bold\"> We care for pets! <br>Contact us for More</h2>\r\n      <div *ngIf=\"!isUserLoggedIn\">\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Name:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Mobile:</label>\r\n          <input type=\"mobile\" numbersOnly maxlength=\"10\" minlength=\"10\" class=\"form-control\" id=\"mobile\" [(ngModel)]=\"mobile\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\"><sup style=\"color: red\">*</sup>Email:</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" [email]=\"true\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n            [(ngModel)]=\"email\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\" *ngIf=\"isUserLoggedIn\">\r\n        <label for=\"subject\">Subject:</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"subject\" [(ngModel)]=\"subject\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Message:</label>\r\n        <textarea class=\"form-control\" rows=4 [(ngModel)]=\"message\"> </textarea>\r\n      </div>\r\n      <button type=\"button\" (click)=\"onContactClick()\" class=\"btn btn-danger\">SUBMIT</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-mast-footer>\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/contactus/contactus.component.less":
/*!************************************************************!*\
  !*** ./src/app/modules/contactus/contactus.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/contactus/contactus.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/contactus/contactus.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/petservice.service */ "./src/app/services/petservice.service.ts");
/* harmony import */ var src_app_services_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ngx-toasta/src/public_api */ "./projects/ngx-toasta/src/public_api.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(petService, masterService, toastaService, authService) {
        this.petService = petService;
        this.masterService = masterService;
        this.toastaService = toastaService;
        this.authService = authService;
        this.isUserLoggedIn = false;
        this.name = "";
        this.mobile = "";
        this.email = "";
        this.message = "";
        this.subject = "";
    }
    ContactusComponent.prototype.ngOnInit = function () {
        this.isUserLoggedIn = this.authService.isAuthenticated();
    };
    ContactusComponent.prototype.onContactClick = function () {
        var _this = this;
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (this.isUserLoggedIn) {
            this.petService.contactUsLogin(this.subject, this.message)
                .subscribe(function (result) {
                var status = result.Status;
                if (status != "Errored") {
                    var toastOptions = _this.masterService.setToastOptions('', 'Thanks for contacting us', '');
                    _this.toastaService.success(toastOptions);
                    _this.clearFields();
                }
                else {
                    var toastOptions = _this.masterService.setToastOptions('', result.ErrorMessage, '');
                    _this.toastaService.error(toastOptions);
                }
            });
        }
        else {
            if (!regexp.test(this.email)) {
                var toastOptions = this.masterService.setToastOptions('', 'Please enter valid email address', '');
                this.toastaService.error(toastOptions);
                return false;
            }
            if (this.mobile.length != 0 && this.mobile.length != 10) {
                var toastOptions = this.masterService.setToastOptions('', 'Please enter valid mobile number', '');
                this.toastaService.error(toastOptions);
                return false;
            }
            this.petService.contactUs(this.name, this.mobile, this.email, this.message)
                .subscribe(function (result) {
                var status = result.Status;
                if (status != "Errored") {
                    var toastOptions = _this.masterService.setToastOptions('', 'Thanks for contacting us', '');
                    _this.toastaService.success(toastOptions);
                    _this.clearFields();
                }
                else {
                    var toastOptions = _this.masterService.setToastOptions('', result.ErrorMessage, '');
                    _this.toastaService.error(toastOptions);
                }
            });
        }
    };
    ContactusComponent.prototype.clearFields = function () {
        this.name = "";
        this.mobile = "";
        this.email = "";
        this.message = "";
        this.subject = "";
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/modules/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.less */ "./src/app/modules/contactus/contactus.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_1__["PetserviceService"],
            src_app_services_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"],
            projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToastaService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/modules/events/events.component.html":
/*!******************************************************!*\
  !*** ./src/app/modules/events/events.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n\r\n</app-mast-head>\r\n\r\n\r\n<!-- About Us -->\r\n<div class=\"container-fluid padding\" style=\"background-color:#e0dddf\">\r\n\t\t\r\n\t\t\r\n  <div class=\"row\">\r\n  <h2 class=\"theme-color text-center bold\"> EVENTS</h2>\r\n  </div>\r\n  </div>\r\n      \r\n    \r\n  <!-- end of about us -->\r\n  \r\n  <!-- listings -->\r\n  <div class=\"container-fluid padding\" style=\"background-color:#e0dddf\">\r\n  \r\n    <div class=\"row more-padding full-padding\" >\r\n    \r\n    \r\n      <div class=\"col-md-4 full-padding\">\r\n      <div class=\"img-container\">\r\n        <img src=\"assets/images/event1.png\" alt=\"image\" style=\"width:100%;\">\r\n        <div class=\"text-block\"> \r\n        <center>\r\n        <h2>01</h2>\r\n        <h3>DEC</h3>\r\n       </center>\r\n        </div>\r\n      </div>\t\t\t\t\r\n      </div>\r\n      \r\n      \r\n      <div class=\"col-md-4 full-padding\">\r\n      <div class=\"img-container\">\r\n        <img src=\"assets/images/event2.png\" alt=\"image\" style=\"width:100%;\">\r\n        <div class=\"text-block\"> \r\n        <center>\r\n        <h2>01</h2>\r\n        <h3>DEC</h3>\r\n       </center>\r\n        </div>\r\n      </div>\t\t\t\t\r\n      </div>\r\n      \r\n      \r\n      <div class=\"col-md-4 full-padding\">\r\n      <div class=\"img-container\">\r\n        <img src=\"assets/images/event3.png\" alt=\"image\" style=\"width:100%;\">\r\n        <div class=\"text-block\"> \r\n        <center>\r\n        <h2>01</h2>\r\n        <h3>DEC</h3>\r\n       </center>\r\n        </div>\r\n      </div>\t\t\t\t\r\n      </div>\r\n    </div>\r\n    <div class=\"row more-padding \" >\r\n\r\n      <div class=\"col-md-4 full-padding\">\r\n      <div class=\"img-container\">\r\n        <img src=\"assets/images/event4.png\" alt=\"image\" style=\"width:100%;\">\r\n        <div class=\"text-block\"> \r\n        <center>\r\n        <h2>01</h2>\r\n        <h3>DEC</h3>\r\n       </center>\r\n        </div>\r\n      </div>\t\t\t\t\r\n      </div>\r\n      \r\n      <div class=\"col-md-4 full-padding\">\r\n      <div class=\"img-container\">\r\n        <img src=\"assets/images/event5.png\" alt=\"image\" style=\"width:100%;\">\r\n        <div class=\"text-block\"> \r\n        <center>\r\n        <h2>01</h2>\r\n        <h3>DEC</h3>\r\n       </center>\r\n        </div>\r\n      </div>\t\t\t\t\r\n      </div>\r\n      \r\n      <div class=\"col-md-4 full-padding\">\r\n      <div class=\"img-container\">\r\n        <img src=\"assets/images/event6.png\" alt=\"image\" style=\"width:100%;\">\r\n        <div class=\"text-block\"> \r\n        <center>\r\n        <h2>01</h2>\r\n        <h3>DEC</h3>\r\n       </center>\r\n        </div>\r\n      </div>\t\t\t\t\r\n      </div>\r\n      \r\n      \r\n      \r\n\r\n      \r\n      \r\n      \r\n      \r\n    </div>\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n  \r\n  </div>\r\n  \r\n  <!-- end of listings -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<app-mast-footer>\r\n\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/events/events.component.less":
/*!******************************************************!*\
  !*** ./src/app/modules/events/events.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/events/events.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/events/events.component.ts ***!
  \****************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/modules/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.less */ "./src/app/modules/events/events.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/modules/gallery/gallery.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/gallery/gallery.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n\r\n</app-mast-head>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- About Us -->\r\n<div class=\"container-fluid padding\" style=\"background-color:#e0dddf\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <h2 class=\"theme-color text-center bold\"> GALLERY</h2>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- end of about us -->\r\n\r\n<!-- listings -->\r\n<div class=\"container-fluid padding\" style=\"background-color:#e0dddf\">\r\n\r\n\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 \">\r\n            <mat-tab-group [disableRipple]=true animationDuration=\"0ms\">\r\n              <mat-tab  label=\"Cats\">\r\n                <ng-template matTabContent>\r\n                  <div class=\"row\" style=\"margin-right:0px;\">\r\n                      <div class=\"col-md-12\">\r\n                          <div class=\"gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (1).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (2).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (3).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (4).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (5).png\" alt=\"\" class=\"cat img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (6).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (7).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (8).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                           \r\n                \r\n                          </div>\r\n                \r\n                        </div>\r\n      \r\n                  </div>\r\n                </ng-template>\r\n              </mat-tab>\r\n              <mat-tab label=\"Dogs\">\r\n                <ng-template matTabContent>\r\n                  <div class=\"row\" style=\"margin-right:0px;\">\r\n      \r\n                      <div class=\"col-md-12\">\r\n                \r\n                          <div class=\"gal\">\r\n                \r\n                         \r\n                            <img src=\"assets/images/gallery/1 (9).png\" alt=\"\" class=\"dog img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (10).png\" alt=\"\" class=\"dog img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (11).png\" alt=\"\" class=\"dog img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (12).png\" alt=\"\" class=\"dog img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (13).png\" alt=\"\" class=\"dog img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (14).png\" alt=\"\" class=\"dog img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (15).png\" alt=\"\" class=\"dog img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (16).png\" alt=\"\" class=\"dog img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (17).png\" alt=\"\" class=\"dog img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (18).png\" alt=\"\" class=\"img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (19).png\" alt=\"\" class=\"img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (20).png\" alt=\"\" class=\"img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (12).png\" alt=\"\" class=\"img-gal\">\r\n                \r\n                          </div>\r\n                \r\n                        </div>\r\n      \r\n                  </div>\r\n                </ng-template>\r\n              </mat-tab>\r\n              <mat-tab label=\"ALL\">\r\n                <ng-template matTabContent>\r\n                  <div class=\"row\" style=\"margin-right:0px;\">\r\n                      <div class=\"col-md-12\">\r\n                          <div class=\"gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (1).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (2).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (3).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (4).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                \r\n                \r\n                            <img src=\"assets/images/gallery/1 (5).png\" alt=\"\" class=\"cat img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (6).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (7).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (8).png\" alt=\"\" class=\"cat img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (9).png\" alt=\"\" class=\"dog img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (10).png\" alt=\"\" class=\"dog img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (11).png\" alt=\"\" class=\"dog img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (12).png\" alt=\"\" class=\"dog img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (13).png\" alt=\"\" class=\"dog img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (14).png\" alt=\"\" class=\"dog img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (15).png\" alt=\"\" class=\"dog img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (16).png\" alt=\"\" class=\"dog img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (17).png\" alt=\"\" class=\"dog img-gal\">\r\n                \r\n                            <img src=\"assets/images/gallery/1 (18).png\" alt=\"\" class=\"img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (19).png\" alt=\"\" class=\"img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (20).png\" alt=\"\" class=\"img-gal\">\r\n                            <img src=\"assets/images/gallery/1 (12).png\" alt=\"\" class=\"img-gal\">\r\n                \r\n                          </div>\r\n                \r\n                        </div>\r\n      \r\n                  </div>\r\n                </ng-template>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- end of listings -->\r\n\r\n\r\n\r\n\r\n\r\n<app-mast-footer>\r\n\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/gallery/gallery.component.less":
/*!********************************************************!*\
  !*** ./src/app/modules/gallery/gallery.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gal {\n  -webkit-column-count: 3;\n  /* Chrome, Safari, Opera */\n  /* Firefox */\n  column-count: 3;\n}\n.gal img {\n  width: 100%;\n  padding: 7px 0;\n}\n@media (max-width: 500px) {\n  .gal {\n    -webkit-column-count: 1;\n    /* Chrome, Safari, Opera */\n    /* Firefox */\n    column-count: 1;\n  }\n}\n.mat-tab-labels {\n  justify-content: center;\n  /* align items in Main Axis */\n  min-width: 50px;\n  height: 35px;\n  opacity: 1 !important;\n}\n.mat-tab-label {\n  color: #fff;\n  margin-right: 2px;\n  border: 1px solid #A50F2D !important;\n  background-color: #A50F2D !important;\n  min-width: 50px !important;\n  height: 35px !important;\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  opacity: 1 !important;\n}\n/* Styles for the active tab label */\n.mat-tab-label.mat-tab-label-active {\n  color: #fff;\n  cursor: pointer;\n  border: 1px solid #d43f3a !important;\n  background-color: #d9534f !important;\n  min-width: 50px;\n  height: 35px;\n  opacity: 1 !important;\n}\n.mat-tab-label:not(.mat-tab-label-active):hover {\n  border: 1px solid #d43f3a !important;\n  background-color: #d9534f !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nYWxsZXJ5L0Q6L3BldHBhbHMva2lyYW5naXQvcGV0cGFscy5sb3ZlLXdlYnNpdGUvc3JjL2FwcC9tb2R1bGVzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHQyx3QkFBQTtFQ0RDLDJCQUEyQjtFQUUzQixhQUFhO0VEQ1gsZ0JBQUE7Q0NDSDtBREdBO0VBQVUsWUFBQTtFQUFhLGVBQUE7Q0NDdkI7QURBRDtFQUVFO0lBR0Qsd0JBQUE7SUNERywyQkFBMkI7SUFFM0IsYUFBYTtJRENiLGdCQUFBO0dDQ0Q7Q0FDRjtBRElBO0VBQ0Msd0JBQUE7RUNGQSw4QkFBOEI7RURHOUIsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7Q0NERDtBRElBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFFQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtDQ0ZEO0FBQ0QscUNBQXFDO0FETXBDO0VBQ0MsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0NDSkQ7QURNQTtFQUNDLHFDQUFBO0VBQ0EscUNBQUE7Q0NKRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbCB7XG5cdFxuXHRcblx0LXdlYmtpdC1jb2x1bW4tY291bnQ6IDM7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICAgIC1tb3otY29sdW1uLWNvdW50OiAzOyAvKiBGaXJlZm94ICovXG4gICAgY29sdW1uLWNvdW50OiAzO1xuXHQgIFxuXHRcblx0fVx0XG5cdC5nYWwgaW1neyB3aWR0aDogMTAwJTsgcGFkZGluZzogN3B4IDA7fVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG5cdFx0XG5cdFx0LmdhbCB7XG5cdFxuXHRcblx0LXdlYmtpdC1jb2x1bW4tY291bnQ6IDE7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICAgIC1tb3otY29sdW1uLWNvdW50OiAxOyAvKiBGaXJlZm94ICovXG4gICAgY29sdW1uLWNvdW50OiAxO1xuXHQgIFxuXHRcblx0fVxuXHRcdFxuXHR9XG5cdC5tYXQtdGFiLWxhYmVsc3tcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogYWxpZ24gaXRlbXMgaW4gTWFpbiBBeGlzICovXG5cdFx0bWluLXdpZHRoOiA1MHB4O1xuXHRcdGhlaWdodDogMzVweDtcblx0XHRvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG5cdH1cblx0XG5cdC5tYXQtdGFiLWxhYmVsIHtcblx0XHRjb2xvcjogI2ZmZjsvLyAjMzM3YWI3O1xuXHRcdG1hcmdpbi1yaWdodDogMnB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNBNTBGMkQgIWltcG9ydGFudDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjQTUwRjJEICFpbXBvcnRhbnQ7XG5cdFx0bWluLXdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG5cdFx0aGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdHBhZGRpbmc6IDZweCAxMnB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0XHQtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG5cdFx0dG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcblx0XHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbm9uZTtcblx0XHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0b3BhY2l0eTogMSAhaW1wb3J0YW50O1xuXG5cdH1cblx0XG5cdC8qIFN0eWxlcyBmb3IgdGhlIGFjdGl2ZSB0YWIgbGFiZWwgKi9cblx0Lm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZDQzZjNhICFpbXBvcnRhbnQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xuXHRcdG1pbi13aWR0aDogNTBweDtcblx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0b3BhY2l0eTogMSAhaW1wb3J0YW50O1xuXHR9XG5cdC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1sYWJlbC1hY3RpdmUpOmhvdmVyIHtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZDQzZjNhICFpbXBvcnRhbnQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xuXHQgIH1cblx0IiwiLmdhbCB7XG4gIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xuICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgLW1vei1jb2x1bW4tY291bnQ6IDM7XG4gIC8qIEZpcmVmb3ggKi9cbiAgY29sdW1uLWNvdW50OiAzO1xufVxuLmdhbCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogN3B4IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmdhbCB7XG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDE7XG4gICAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gICAgLW1vei1jb2x1bW4tY291bnQ6IDE7XG4gICAgLyogRmlyZWZveCAqL1xuICAgIGNvbHVtbi1jb3VudDogMTtcbiAgfVxufVxuLm1hdC10YWItbGFiZWxzIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIGFsaWduIGl0ZW1zIGluIE1haW4gQXhpcyAqL1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLm1hdC10YWItbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBNTBGMkQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E1MEYyRCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4vKiBTdHlsZXMgZm9yIHRoZSBhY3RpdmUgdGFiIGxhYmVsICovXG4ubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNDNmM2EgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLm1hdC10YWItbGFiZWw6bm90KC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSk6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDQzZjNhICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/gallery/gallery.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/gallery/gallery.component.ts ***!
  \******************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/modules/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.less */ "./src/app/modules/gallery/gallery.component.less")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home.component.html":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n\r\n</app-mast-head>\r\n<div>\r\n  <div class=\"container-fluid cover\">\r\n    <div class=\"row\" style=\"margin: 10px;\">\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"col-md-8 heading\">\r\n        One Stop Platform for all your Pet Needs\r\n      </div>\r\n      <div class=\"col-md-2\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"margin:10px;\">\r\n\r\n      <div class=\"col-md-8 col-md-offset-2 services\">\r\n        <app-iconlist></app-iconlist>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Our Products -->\r\n\r\n  <!-- end of our products -->\r\n\r\n  <!-- how it work -->\r\n\r\n\r\n\r\n  <!-- end of how it work -->\r\n\r\n  <!-- Journey with pet   -->\r\n  <!-- <div class=\"container-fluid padding\" style=\"background-color:#e0dddf\">\r\n\r\n\r\n    <div class=\"row \">\r\n      <h2 class=\"theme-color text-center bold\"> PETPALS - JOURNEY WITH YOUR PET</h2>\r\n    </div>\r\n\r\n    <div class=\"row more-padding\">\r\n\r\n\r\n      <div class=\"col-md-4\">\r\n\r\n\r\n        <img  src=\"assets/images/journey.png\" class=\"img-rounded img-responsive\">\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"col-md-8\">\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"product-text2\">\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut nibh eros. Orci varius natoque penatibus\r\n            et magnis dis parturient montes, nascetur ridiculus must Lorem ipsum dolor sit amet, consectetur adipiscing\r\n            elit. Morbi ut nibh eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus\r\n            must Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut nibh eros. Orci varius natoque </p>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div> -->\r\n  <!-- end of journey -->\r\n\r\n</div>\r\n<!-- downlod  -->\r\n<div class=\"container-fluid padding\" style=\"background-color:#6d718a;text-align: -webkit-center;\">\r\n  <div class=\"row\">\r\n    <h2 class=\"white-color text-center bold\"> DOWNLOAD PETPALS APP ON</h2><br><br>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-2 padding\" style=\"cursor:pointer\">\r\n      <a (click)=\"onGooglePlayClick()\"> <img src=\"assets/images/google.png\" class=\"img-rounded img-responsive\" style=\"width:200px;\">\r\n      </a> </div>\r\n    <div class=\"col-md-4 padding\" style=\"cursor:pointer\">\r\n      <a (click)=\"onItunesClick()\"> <img src=\"assets/images/appstore.png\" class=\"img-rounded img-responsive\" style=\"width:200px;\">\r\n      </a> </div>\r\n  </div>\r\n</div>\r\n<!-- end of download -->\r\n<!-- get in touch  -->\r\n\r\n<!-- end of getintouch -->\r\n<app-mast-footer>\r\n\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/home/home.component.less":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.onGooglePlayClick = function () {
        window.open("https://play.google.com/store/apps/details?id=com.encephalonit.petpals&hl=en", "_blank");
    };
    HomeComponent.prototype.onItunesClick = function () {
        window.open("https://itunes.apple.com/us/app/petpals-pet-care-app/id1261370740?mt=8", "_blank");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/modules/home/home.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/howitworks/howitworks.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/howitworks/howitworks.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n\r\n</app-mast-head>\r\n<div class=\"container-fluid padding\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <h2 class=\"theme-color text-center bold\"> HOW IT WORKS</h2>\r\n  </div>\r\n\r\n\r\n  <div class=\"row more-padding\">\r\n\r\n\r\n    <div class=\"col-md-4\">\r\n\r\n      <div class=\"products\">\r\n        <h5 class=\"bold\">BOOK SERVICE</h5>\r\n        <div class=\"product-text\">\r\n          <img src=\"assets/images/work1.png\" class=\"img-responsive img-rounded iconimg\">\r\n\r\n          <p>\r\n            As a pet parent you know that your pet needs the best. Whether it is grooming, training, day\r\n            camps, pet boarding or any other type of services you would require for pets through your\r\n            journey with the pet, PetPals will effectively guide you to the best ones. After all, you will need\r\n            someone to take good care of your pet in your absence when you are going out of town.\r\n            PetPals will be delighted to be of help. </p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n\r\n      <div class=\"products\">\r\n        <h5 class=\"bold\">MATCH</h5>\r\n        <div class=\"product-text\">\r\n          <img src=\"assets/images/work2.png\" class=\"img-responsive img-rounded iconimg\">\r\n\r\n          <p>PetPals app has covered all requirements of pet owners in detail, including dating &amp; mating\r\n            services. Pet dating is for your pets when they do not have anyone to play with &amp; are feeling\r\n            sad or lonely. It also has a social section which allows you to get in touch with other people who\r\n            are like you in similar situation. Pet mating service is also quite important unless you are having\r\n            a male or female of the same species. PetPals pet care app will help in finding a suitable mate\r\n            of the same species for your pet based upon your choice.</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n\r\n      <div class=\"products\">\r\n        <h5 class=\"bold\">RELAX</h5>\r\n        <div class=\"product-text\">\r\n          <img src=\"assets/images/work3.png\" class=\"img-responsive img-rounded iconimg\">\r\n\r\n          <p>We are a platform for all service providers and pet lovers who can find all needs of pets at one\r\n            place. Our love towards pets has made us build this platform which was missing until now. We\r\n            welcome pet lovers to share their pride with others, while others appreciate your love towards\r\n            pets. This platform is full of opportunities for pet lovers and service providers alike. </p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n</div>\r\n<app-mast-footer>\r\n\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/howitworks/howitworks.component.less":
/*!**************************************************************!*\
  !*** ./src/app/modules/howitworks/howitworks.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG93aXR3b3Jrcy9ob3dpdHdvcmtzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/howitworks/howitworks.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/howitworks/howitworks.component.ts ***!
  \************************************************************/
/*! exports provided: HowitworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowitworksComponent", function() { return HowitworksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowitworksComponent = /** @class */ (function () {
    function HowitworksComponent() {
    }
    HowitworksComponent.prototype.ngOnInit = function () {
    };
    HowitworksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-howitworks',
            template: __webpack_require__(/*! ./howitworks.component.html */ "./src/app/modules/howitworks/howitworks.component.html"),
            styles: [__webpack_require__(/*! ./howitworks.component.less */ "./src/app/modules/howitworks/howitworks.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HowitworksComponent);
    return HowitworksComponent;
}());



/***/ }),

/***/ "./src/app/modules/mypets/mypets.component.html":
/*!******************************************************!*\
  !*** ./src/app/modules/mypets/mypets.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n</app-mast-head>\r\n\r\n<div class=\"container-fluid container-fluid-minheight\" style=\"background-color:#e0dddf\">\r\n  <div class=\"row\">\r\n    <h2 class=\"theme-color text-center bold\">My Pets\r\n      <a [routerLink]=\"['/addpet']\" class=\"btn btn-primary btn-sm\">\r\n        <span class=\"glyphicon glyphicon-plus\"></span> Add Pet\r\n      </a>\r\n    </h2>\r\n\r\n  </div>\r\n\r\n  <div class=\"row more-padding \" *ngIf=\"show\">\r\n\r\n    <div class=\"col-md-12\" *ngFor=\"let myPet of loadedMyPetList\">\r\n      <div class=\"row listing\" *ngIf=\"myPet.PetId ==1\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-2\"></div>\r\n          <div class=\"col-xs-8\">\r\n            <!-- <h3 class=\"theme-color listname\">{{myPet.PetName}}</h3> -->\r\n            <h3 class=\"text-center\"> You have not added your pet details yet</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12\" *ngFor=\"let myPet of loadedMyPetList\">\r\n      <div class=\"row listing\" *ngIf=\"myPet.PetId !=1\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-3\"></div>\r\n          <div class=\"col-xs-9 l-text\">\r\n            <a [routerLink]=\"['/updatepet',myPet.PetId]\" *ngIf=\"myPet.PetId !=1\" class=\"btn btn-danger btn-sm\">\r\n              <span class=\"glyphicon glyphicon-edit\"></span> Edit\r\n            </a>&nbsp;&nbsp;\r\n            <a href=\"#\" (click)=\"onLoveClick(myPet.PetId)\" *ngIf=\"myPet.PetId !=1&&!myPet.IsFavorite\" class=\"btn btn-warning btn-sm\">\r\n              <span class=\"glyphicon glyphicon-heart-empty\"></span> Favourite\r\n            </a>\r\n            <a *ngIf=\"myPet.PetId !=1&&myPet.IsFavorite\" class=\"btn btn-warning btn-sm\" style=\"cursor:none\">\r\n              <span class=\"glyphicon glyphicon-heart\"></span> Favourite\r\n            </a>\r\n            &nbsp;\r\n\r\n            <a href=\"#\" (click)=\"onDeleteClick(myPet.PetId)\" data-toggle=\"modal\" data-target=\"#DeletePetModal\" *ngIf=\"myPet.PetId !=1\"\r\n              class=\"btn btn-danger btn-sm\">\r\n              <span class=\"glyphicon glyphicon-remove\"></span> Remove\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-xs-12 \">\r\n          <!-- <center> -->\r\n          <img src=\"{{myPet.PictrueName}}\" style=\"height: 110px; width: 120px;\" class=\"img-responsive img-rounded listing-mobile\" />\r\n          <!-- <a [routerLink]=\"['/petdetails',myPet.PetId]\" class=\"btn btn-danger  contact-button\"><i class=\"fa fa-eye\"\r\n                aria-hidden=\"true\"></i> &nbsp;View </a> -->\r\n          <!-- </center> -->\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-xs-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n              <h3 class=\"theme-color listname\">{{myPet.PetName}}</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Pet Gender</div>\r\n            <div class=\"col-xs-7 l-text\">{{myPet.PetGender}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Pet Type</div>\r\n            <div class=\"col-xs-7 l-text\">{{myPet.PetType}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Breed Name</div>\r\n            <div class=\"col-xs-7 l-text\">{{myPet.BreedName}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-xs-12 \"></div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-12\" *ngIf=\"loadedMyPetList.length==0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\"></div>\r\n        <div class=\"col-md-4\">\r\n          <img width=\"100%\" src=\"assets/images/noresult.png\">\r\n        </div>\r\n        <div class=\"col-md-4\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-2\">\r\n    <!-- The  Delete Pet Modal -->\r\n    <div class=\"modal fade\" id=\"DeletePetModal\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n          <!-- Modal Header -->\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Delete Pet</h4>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n\r\n          <!-- Modal body -->\r\n          <div class=\"modal-body\">\r\n            <h5>Are you sure you want to delete this pet?</h5>\r\n          </div>\r\n\r\n          <!-- Modal footer -->\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" (click)=\"onDeletePet()\">Send</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<app-mast-footer>\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/mypets/mypets.component.less":
/*!******************************************************!*\
  !*** ./src/app/modules/mypets/mypets.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbXlwZXRzL215cGV0cy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/mypets/mypets.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/mypets/mypets.component.ts ***!
  \****************************************************/
/*! exports provided: MypetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypetsComponent", function() { return MypetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/petservice.service */ "./src/app/services/petservice.service.ts");
/* harmony import */ var src_app_services_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/ngx-toasta/src/public_api */ "./projects/ngx-toasta/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MypetsComponent = /** @class */ (function () {
    // @ViewChild('searchInput') searchValue: ElementRef;
    function MypetsComponent(myPetService, router, masterService, toastaService) {
        this.myPetService = myPetService;
        this.router = router;
        this.masterService = masterService;
        this.toastaService = toastaService;
        this.loadedMyPetList = [];
        this.showloadingImage = true;
    }
    MypetsComponent.prototype.ngOnInit = function () {
        this.getMyPets();
    };
    MypetsComponent.prototype.getMyPets = function () {
        var _this = this;
        this.show = false;
        this.myPetService.mypetList()
            .subscribe(function (result) {
            var status = result.Status;
            _this.show = true;
            if (status != "Errored") {
                _this.loadedMyPetList = result.Data;
            }
            else {
                //this.toastr.error(result.ErrorMessage, 'Error')
            }
        });
    };
    MypetsComponent.prototype.onDetailsClick = function (petId) {
        this.router.navigate(['/petdetails/' + petId]);
    };
    MypetsComponent.prototype.onLoveClick = function (petId) {
        var _this = this;
        this.myPetService.makePetFavourite(petId)
            .subscribe(function (result) {
            var status = result.Status;
            if (status != "Errored") {
                var toastOptions = _this.masterService.setToastOptions('Add Favourite', 'Pet Successfully added as favourite', '');
                _this.toastaService.success(toastOptions);
                _this.getMyPets();
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Add Favourite', result.ErrorMessage, '');
                _this.toastaService.error(toastOptions);
            }
        });
        return false;
    };
    MypetsComponent.prototype.onDeleteClick = function (_DeletePetId) {
        this.withdrawRequestId = _DeletePetId;
    };
    MypetsComponent.prototype.onDeletePet = function () {
        var _this = this;
        console.log(this.withdrawRequestId);
        this.myPetService.deleteMypet(this.withdrawRequestId)
            .subscribe(function (result) {
            var status = result.Status;
            if (status != "Errored") {
                var toastOptions = _this.masterService.setToastOptions('Delete Pet', 'Pet Successfully deleted', '');
                _this.toastaService.success(toastOptions);
                _this.getMyPets();
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Delete Pet', result.ErrorMessage, '');
                _this.toastaService.error(toastOptions);
            }
        });
    };
    MypetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mypets',
            template: __webpack_require__(/*! ./mypets.component.html */ "./src/app/modules/mypets/mypets.component.html"),
            styles: [__webpack_require__(/*! ./mypets.component.less */ "./src/app/modules/mypets/mypets.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_2__["PetserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"],
            projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ToastaService"]])
    ], MypetsComponent);
    return MypetsComponent;
}());



/***/ }),

/***/ "./src/app/modules/myrequests/myrequests.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/myrequests/myrequests.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n</app-mast-head>\r\n\r\n<div class=\"container-fluid  container-fluid-minheight\" style=\"background-color:#e0dddf\">\r\n  <div class=\"row\" style=\"margin-right:0px !important; \">\r\n    <h2 class=\"theme-color text-center bold\">My Requests</h2>\r\n  </div>\r\n  <div class=\"row more-padding\" *ngIf=\"show\">\r\n    <div class=\"col-md-12\" *ngFor=\"let requestData of loadedRequestList\">\r\n      <div class=\"row listing\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\" style=\"padding:5px;\" *ngIf=\"requestData.MsgStatus=='Under Screening'\">\r\n            <a href=\"#\" class=\"btn btn-info btn-sm btn-block\">\r\n              <span class=\"glyphicon glyphicon-send\"></span> In Screening\r\n            </a></div>\r\n          <div class=\"col-md-3\" style=\"padding:5px;\"\r\n            *ngIf=\"requestData.MsgStatus!='Approved' && requestData.MsgStatus!='Under Screening'&& requestData.MsgStatus!='To Be Paid'&& requestData.MsgStatus!='Rejected'\">\r\n            <a href=\"#\" class=\"btn btn-info btn-sm btn-block\">\r\n              <span class=\"glyphicon glyphicon-send\"></span> In Screening\r\n            </a></div>\r\n          <div class=\"col-md-3\" style=\"padding:5px;\" *ngIf=\"requestData.MsgStatus=='To Be Paid'\">\r\n            <a (click)=\"clickOnPay()\" class=\"btn btn-primary btn-sm btn-block\">\r\n              <span> <i class=\"fa fa-inr\"></i></span> Pay\r\n            </a></div>\r\n          <div class=\"col-md-3\" style=\"padding:5px;\" *ngIf=\"requestData.MsgStatus=='Approved'\">\r\n            <a href=\"#\" (click)=\"diableAnchorLink()\" class=\"btn btn-success btn-sm btn-block\">\r\n              <span class=\"glyphicon glyphicon-ok\"></span> Approved\r\n            </a></div>\r\n          <div class=\"col-md-3\" style=\"padding:5px;\" *ngIf=\"requestData.MsgStatus=='Rejected'\">\r\n            <a href=\"#\" (click)=\"rejectReason(requestData.RejectionReason)\" class=\"btn btn-danger btn-sm btn-block\">\r\n              <span><i class=\"fa fa-ban\" aria-hidden=\"true\"></i></span> Rejected\r\n            </a></div>\r\n          <div class=\"col-md-3\" style=\"padding:5px;\"\r\n            *ngIf=\"requestData.MsgStatus!='Approved'&&requestData.MsgStatus!='Rejected'&&requestData.MsgStatus!='To Be Paid'\">\r\n            <a href=\"#\" (click)=\"onContactRequest(requestData.PetMatingRequestId)\" data-toggle=\"modal\"\r\n              data-target=\"#withdrawRequestModal\" class=\"btn btn-danger btn-sm btn-block\">\r\n              <span class=\"glyphicon glyphicon-remove\"></span> withdraw\r\n            </a></div>\r\n          <div class=\"col-md-3\" style=\"padding:5px;\" *ngIf=\"requestData.ServiceType=='Boarding'\">\r\n            <a (click)=\"onModalOpen(requestData)\" class=\"btn btn-primary btn-sm btn-block\">\r\n              <span class=\"glyphicon glyphicon-eye-open\"></span> View\r\n            </a></div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12 l-text\">\r\n            {{requestData.Message}}\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-7 l-text\">\r\n            {{requestData.RequestedDateTime}}\r\n          </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"col-md-4 col-xs-12 \">\r\n          <center>\r\n            <img src={{requestData.RequestedPetImageName}} style=\"height: 110px; width: 120px;\" class=\"img-responsive img-rounded listing-mobile\" />\r\n            <a [routerLink]=\"['/petdetails',requestData.ReuestedPetId]\" class=\"btn btn-danger contact-button\"><i class=\"fa fa-eye\"\r\n                aria-hidden=\"true\"></i> &nbsp;View </a>\r\n          </center>\r\n        </div> -->\r\n\r\n        <div class=\"col-md-12 col-xs-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Service Type</div>\r\n            <div class=\"col-xs-7 l-text\">{{requestData.ServiceType}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Requester Contact Details</div>\r\n            <div class=\"col-xs-7 l-text\">{{requestData.RequestedMobile}},{{requestData.RequestedMailId}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Area</div>\r\n            <div class=\"col-xs-7 l-text\">{{requestData.RequestersAreaName}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">City</div>\r\n            <div class=\"col-xs-7 l-text\">{{requestData.RequestersCityName}}</div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Receiver Contact Details</div>\r\n            <div class=\"col-xs-7 l-text\">{{requestData.OwnerMobile}},{{requestData.OwnerMailId}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Area</div>\r\n            <div class=\"col-xs-7 l-text\">{{requestData.OwnerAreaName}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">City</div>\r\n            <div class=\"col-xs-7 l-text\">{{requestData.OwnerCityName}}</div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-12\" *ngIf=\"loadedRequestList.length==0\">\r\n      <div class=\"row listing\">\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-8\">\r\n          <h3 class=\"text-center\"> You have not made any requests yet</h3>\r\n          <!-- <img width=\"100%\" src=\"assets/images/noresult.png\"> -->\r\n        </div>\r\n        <div class=\"col-md-2\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-2\">\r\n    <!-- The  withdraw Request Modal -->\r\n    <div class=\"modal fade\" id=\"withdrawRequestModal\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n\r\n          <!-- Modal Header -->\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">withdraw Request</h4>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          </div>\r\n\r\n          <!-- Modal body -->\r\n          <div class=\"modal-body\">\r\n            <h5>Are you sure you want to withdraw the request</h5>\r\n          </div>\r\n\r\n          <!-- Modal footer -->\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" (click)=\"onWithdrawRequest()\">Send</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" id=\"boardingModal\" [ngStyle]=\"{'display':displayBoardingModal}\">\r\n  <div class=\"modal-dialog\" *ngIf='boardingRequestInfo'>\r\n    <app-boarding [petData]=\"boardingRequestInfo\" [isEditView]=\"true\" [isBoardingClicked]=\"isBoarding\"\r\n      (closeModalPopup)=\"closeModal()\"></app-boarding>\r\n  </div>\r\n</div>\r\n<app-mast-footer>\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/myrequests/myrequests.component.less":
/*!**************************************************************!*\
  !*** ./src/app/modules/myrequests/myrequests.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-block {\n  display: block;\n  width: 50%;\n}\n.row {\n  margin-right: 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9teXJlcXVlc3RzL0Q6L3BldHBhbHMva2lyYW5naXQvcGV0cGFscy5sb3ZlLXdlYnNpdGUvc3JjL2FwcC9tb2R1bGVzL215cmVxdWVzdHMvbXlyZXF1ZXN0cy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9teXJlcXVlc3RzL215cmVxdWVzdHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtDQ0NIO0FEQ0Q7RUFDSSw2QkFBQTtDQ0NIIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9teXJlcXVlc3RzL215cmVxdWVzdHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNTAlO1xufVxuLnJvd3tcbiAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufSIsIi5idG4tYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbn1cbi5yb3cge1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/myrequests/myrequests.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/myrequests/myrequests.component.ts ***!
  \************************************************************/
/*! exports provided: MyrequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyrequestsComponent", function() { return MyrequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/petservice.service */ "./src/app/services/petservice.service.ts");
/* harmony import */ var src_app_services_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/ngx-toasta/src/public_api */ "./projects/ngx-toasta/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyrequestsComponent = /** @class */ (function () {
    function MyrequestsComponent(sharedService, router, masterService, toastaService) {
        this.sharedService = sharedService;
        this.router = router;
        this.masterService = masterService;
        this.toastaService = toastaService;
        this.loadedRequestList = [];
        this.showloadingImage = true;
        this.dataHasOrNot = false;
        /*Boarding*/
        this.isBoarding = false;
        this.displayBoardingModal = 'none';
    }
    MyrequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.securityToken = localStorage.getItem('token');
        this.show = false;
        this.sharedService.getAllRequest()
            .subscribe(function (result) {
            _this.loadedRequestList = result.Data;
            _this.show = true;
            if (_this.loadedRequestList.length == 0) {
                _this.dataHasOrNot = true;
                console.log(_this.dataHasOrNot);
            }
        });
    };
    MyrequestsComponent.prototype.ngAfterViewInit = function () {
    };
    MyrequestsComponent.prototype.onFindPetLoveClick = function () {
        this.router.navigate(['/petlove']);
    };
    MyrequestsComponent.prototype.onAlliedServiceClick = function () {
        this.router.navigate(['/allied-service']);
    };
    MyrequestsComponent.prototype.onAdoptionClick = function () {
        this.router.navigate(['/adoption']);
    };
    MyrequestsComponent.prototype.onDetailsClick = function (petId) {
        //this.router.navigate(['/own-a-pet-details/' + petId]);
    };
    MyrequestsComponent.prototype.onContactRequest = function (_withdrawRequestId) {
        this.withdrawRequestId = _withdrawRequestId;
    };
    MyrequestsComponent.prototype.onWithdrawRequest = function () {
        var _this = this;
        console.log(this.withdrawRequestId);
        this.sharedService.WidrawRequest(this.withdrawRequestId)
            .subscribe(function (result) {
            var status = result.Status;
            console.log(result);
            if (status != "Errored") {
                _this.sharedService.getAllRequest()
                    .subscribe(function (result) {
                    _this.loadedRequestList = result.Data;
                    console.log(_this.loadedRequestList);
                    if (_this.loadedRequestList.length == 0) {
                        _this.dataHasOrNot = true;
                    }
                });
            }
            else {
                // this.toastr.error(result.ErrorMessage, 'Error')
            }
        });
    };
    MyrequestsComponent.prototype.diableAnchorLink = function () {
        return false;
    };
    MyrequestsComponent.prototype.onModalOpen = function (requestedData) {
        this.boardingRequestInfo = requestedData;
        this.isBoarding = true;
        this.displayBoardingModal = 'block';
        document.body.style.overflow = 'hidden';
        // this.petService.myBoardingDetails(requestId).subscribe((result: any) => {
        // });
    };
    MyrequestsComponent.prototype.closeModal = function () {
        this.displayBoardingModal = 'none';
        document.body.removeAttribute('style');
    };
    MyrequestsComponent.prototype.clickOnPay = function () {
        var toastOptions = this.masterService.setToastOptions('Payment', 'Please use mobile application for payments.', '');
        this.toastaService.info(toastOptions);
        return false;
    };
    MyrequestsComponent.prototype.rejectReason = function (reason) {
        var toastOptions = this.masterService.setToastOptions('Rejected', reason, '');
        this.toastaService.error(toastOptions);
        return false;
    };
    MyrequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myrequests',
            template: __webpack_require__(/*! ./myrequests.component.html */ "./src/app/modules/myrequests/myrequests.component.html"),
            styles: [__webpack_require__(/*! ./myrequests.component.less */ "./src/app/modules/myrequests/myrequests.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_2__["PetserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_master_service__WEBPACK_IMPORTED_MODULE_3__["MasterService"],
            projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ToastaService"]])
    ], MyrequestsComponent);
    return MyrequestsComponent;
}());



/***/ }),

/***/ "./src/app/modules/petlove/petlove.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/petlove/petlove.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n\r\n</app-mast-head>\r\n<div class=\"container-fluid\" style=\"background-color:#e0dddf\">\r\n\r\n\r\n\t<div class=\"row\" style=\"margin-right:0px;\">\r\n\t\t<h2 *ngIf=\"!searchService\" class=\"theme-color text-center bold\">Pet Love</h2>\r\n\t\t<h2 *ngIf=\"searchService&&searchService!='Fluffy-Nut'\" class=\"theme-color text-center bold\">{{searchService}}\r\n\t\t</h2>\r\n\t\t<h2 *ngIf=\"searchService=='Fluffy-Nut'\" class=\"theme-color text-center bold\">Pet Avilable for Adoption (Fluffy\r\n\t\t\tNut)</h2>\r\n\r\n\t\t<div class=\"row\">\r\n\r\n\t\t\t<div class=\"col-md-3\"></div>\r\n\t\t\t<div *ngIf=\"!searchService\" class=\"col-md-6 white-bg-color container-text\">\r\n\t\t\t\t<p>Being single is not appreciated by humans. Having love is one of the basics for humans, why would\r\n\t\t\t\t\tthat not be the case with our pets. Feelings are same across all. We are here to help Find Pet Love.\r\n\t\t\t\t\tGive us a chance and we will be able to help you with it.\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"searchService&&searchService=='Boarding'\" class=\"col-md-6 white-bg-color container-text\">\r\n\t\t\t\t<p>It is not possible to be home all the time with pets and it is not practical to leave our pets home\r\n\t\t\t\t\talone too. We have the choice to let your pets have the pampering with our boarding services.\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"searchService&&searchService=='Spa'\" class=\"col-md-6 white-bg-color container-text\">\r\n\t\t\t\t<p>If you are under the assumption that pets don't have SPA, you are mistaken. We understand the need\r\n\t\t\t\t\tfor Pet Spa. All it requires is to pay a visit to one of our Spas and you will understand the\r\n\t\t\t\t\ttransformation that we can bring in for your pet.\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"searchService&&searchService=='Adoption'\" class=\"col-md-6 white-bg-color container-text\">\r\n\t\t\t\t<p>We support adoptions and help pets get a new, loving and a comfortable forever home. Fluffly Nut,\r\n\t\t\t\t\tBangalore's leading pet care NGO in the area of adoptions will be joining hands with us soon. With\r\n\t\t\t\t\tthem on board, we will have a large number of pets for adoption. We are diligently working in this\r\n\t\t\t\t\tarea to get more and more non profits to work with us. For now! Search here for what you want. If\r\n\t\t\t\t\tyou want something more specific, use our contact us page to leave an enquiry and we will reach out\r\n\t\t\t\t\tto you soon.\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"searchService&&searchService=='Trainer'\" class=\"col-md-6 white-bg-color container-text\">\r\n\t\t\t\t<p> Who doesn't like the behaved pets. Want to show off few extra tricks from your pet, no worries. We\r\n\t\t\t\t\thave a crew of trainers to help you make your pet learn to behave and listen to you. You don't need\r\n\t\t\t\t\tto start from ground, our trainers trained enough pets so far. You are open to choose the trainer,\r\n\t\t\t\t\trate, location, and what not.</p>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"searchService&&searchService=='Cab'\" class=\"col-md-6 white-bg-color container-text\">\r\n\t\t\t\t<p> History taught us that all do not welcome the pets in their cabs. Reasons may be different but\r\n\t\t\t\t\tresult remains safe. We did tie up with the service, who will never say no for a pet to board in\r\n\t\t\t\t\ttheir cab. All it needs is a click to book a cab. </p>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"searchService&&searchService=='Rescuer'\" class=\"col-md-6 white-bg-color container-text\">\r\n\t\t\t\t<p>We feel the social responsibility to save animals. Did you find an animal that requires attention and\r\n\t\t\t\t\tyou feel that you can't help much in that situation. No worries, call the rescuer near you, they are\r\n\t\t\t\t\topen to serve any time. </p>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"searchService&&searchService=='Walker'\" class=\"col-md-6 white-bg-color container-text\">\r\n\t\t\t\t<p> Are you in a hurry or you feel that you are not giving enough walk to your pet, no worries. We are\r\n\t\t\t\t\there to help you with it. Have a professional walker handle it for you. All you need to let the\r\n\t\t\t\t\twalker know is your requirement. They will ensure it is executed. We can hear you online as well as\r\n\t\t\t\t\tover a phone.</p>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"searchService&&searchService=='Volunteers'\" class=\"col-md-6 white-bg-color container-text\">\r\n\t\t\t\t<p> We have volunteers who love pets, who are ready to help pets in absence of their owners, be it\r\n\t\t\t\t\tfeeding them or looking after them for a certain period of time</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-3 \"></div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"row more-padding \">\r\n\t\t<div class=\"row \" style=\"padding:20px;\">\r\n\r\n\t\t\t<div class=\"input-group inner-addon left-addon\">\r\n\t\t\t\t<i class=\"glyphicon glyphicon-search\" (click)=\"searchTextFilter()\"></i>\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterText\" style=\"height: 43px;\"\r\n\t\t\t\t\t(keyup)=\"$event.keyCode == 13 ? searchTextFilter() : null\">\r\n\t\t\t\t<span class=\"input-group-btn\" style=\"padding-left:1%;\">\r\n\t\t\t\t\t<button class=\"btn btn-default filter\" type=\"button\" (click)=\"showHideFilter()\">FILTER</button>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"row filtercolor\" *ngIf=\"hideShowFilter\">\r\n\t\t\t<div *ngIf=\"!searchService\">\r\n\t\t\t\t<div class=\"col-md-3\">\r\n\r\n\t\t\t\t\t<div class=\"block\">\r\n\r\n\t\t\t\t\t\t<h5>PET TYPE</h5>\r\n\t\t\t\t\t\t<div *ngFor=\"let petType of petTypes\">\r\n\t\t\t\t\t\t\t<p><label class=\"checkbox-inline\"><input type=\"checkbox\" (click)=\"petTypeChecked($event)\"\r\n\t\t\t\t\t\t\t\t\t\t[checked]=\"selectedPetTypes.indexOf(petType)>-1\" value=\"{{petType}}\">{{petType}}\r\n\t\t\t\t\t\t\t\t</label></p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<div class=\"block\">\r\n\r\n\t\t\t\t\t\t<h5>GENDER</h5>\r\n\t\t\t\t\t\t<p><label class=\"checkbox-inline\"><input type=\"checkbox\" (click)=\"clickGender($event)\"\r\n\t\t\t\t\t\t\t\t\t[checked]=\"selectedGender.indexOf('Male')>-1\" value=\"Male\">Male </label></p>\r\n\t\t\t\t\t\t<p><label class=\"checkbox-inline\"><input type=\"checkbox\" (click)=\"clickGender($event)\"\r\n\t\t\t\t\t\t\t\t\t[checked]=\"selectedGender.indexOf('Female')>-1\" value=\"Female\">Female </label></p>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"block\">\r\n\r\n\t\t\t\t\t\t<h5>Location</h5>\r\n\t\t\t\t\t\t<div class=\"sub-location\">\r\n\t\t\t\t\t\t\t<!-- <p><input type=\"text\" class=\"location form-control\" value=\"\" placeholder=\"City\"> </p>\r\n\t\t\t\t\t\t<p><input type=\"text\" class=\"location form-control\" value=\"\" placeholder=\"Area\"> </p> -->\r\n\r\n\t\t\t\t\t\t\t<select name=\"City\" [(ngModel)]=\"selectedCity\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t(change)=\"onCityChange()\">\r\n\t\t\t\t\t\t\t\t<!-- <option selected>City </option> -->\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let city of cityList\" [ngValue]=\"city\">{{city.CityName}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t<select name=\"Area\" [(ngModel)]=\"selectedArea\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let area of areaList\" [ngValue]=\"area\">{{area.AreaName}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"block\">\r\n\r\n\t\t\t\t\t\t<h5>GENERAL</h5>\r\n\t\t\t\t\t\t<p><label class=\"checkbox-inline\"><input type=\"checkbox\" [(ngModel)]=\"selectedKCI\" value=\"1\">KCI\r\n\t\t\t\t\t\t\t\tRegistered\r\n\t\t\t\t\t\t\t</label></p>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"block\">\r\n\r\n\t\t\t\t\t\t<h5>AGE</h5>\r\n\t\t\t\t\t\t<p><input type=\"text\" class=\"location form-control\" numbersOnly [(ngModel)]=\"enteredAge\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Age in months\">\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<!-- <p><label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"\">\r\n\t\t\t\t\t\t\t<1 Month </label> </p> <p><label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"\">\r\n\t\t\t\t\t\t\t\t\t<3 Months </label> </p> <p><label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<6 Months </label> </p> <p><label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"\">> Year </label></p>\r\n\t\t\t\t-->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-9\">\r\n\r\n\t\t\t\t\t<div class=\"block\">\r\n\r\n\t\t\t\t\t\t<h5>BREED</h5>\r\n\r\n\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t<span *ngFor=\"let breed of breeds;index as i\">\r\n\t\t\t\t\t\t\t<div [ngSwitch]=\"i % 3\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\" *ngSwitchCase=\"0\">\r\n\t\t\t\t\t\t\t\t\t<p><label class=\"checkbox-inline\"><input type=\"checkbox\" [(ngModel)]=\"breed.checked\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{breed.BreedId}}\">{{breed.BreedName}}</label></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\" *ngSwitchCase=\"1\">\r\n\t\t\t\t\t\t\t\t\t<p><label class=\"checkbox-inline\"><input type=\"checkbox\" [(ngModel)]=\"breed.checked\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{breed.BreedId}}\">{{breed.BreedName}}</label></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\" *ngSwitchCase=\"2\">\r\n\t\t\t\t\t\t\t\t\t<p><label class=\"checkbox-inline\"><input type=\"checkbox\" [(ngModel)]=\"breed.checked\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{breed.BreedId}}\">{{breed.BreedName}}</label></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"searchService\">\r\n\t\t\t\t<div class=\"col-md-3\">\r\n\r\n\r\n\t\t\t\t\t<div class=\"block\">\r\n\r\n\t\t\t\t\t\t<h5>Location</h5>\r\n\t\t\t\t\t\t<div class=\"sub-location\">\r\n\t\t\t\t\t\t\t<!-- <p><input type=\"text\" class=\"location form-control\" value=\"\" placeholder=\"City\"> </p>\r\n\t\t\t\t\t\t<p><input type=\"text\" class=\"location form-control\" value=\"\" placeholder=\"Area\"> </p> -->\r\n\r\n\t\t\t\t\t\t\t<select name=\"City\" [(ngModel)]=\"selectedCity\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t(change)=\"onCityChange()\">\r\n\t\t\t\t\t\t\t\t<!-- <option selected>City </option> -->\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let city of cityList\" [ngValue]=\"city\">{{city.CityName}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t<select name=\"Area\" [(ngModel)]=\"selectedArea\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<!-- <option selected>Area </option> -->\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let area of areaList\" [ngValue]=\"area\">{{area.AreaName}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-12 filter-bottom\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-left\" (click)=\"showHideFilter()\">CLOSE</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"applyFilter()\">SUBMIT</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"container-fluid container-fluid-200height\" style=\"background-color:#e0dddf\" *ngIf=\"show\">\r\n\t<div class=\"row more-padding \" infiniteScroll [infiniteScrollDistance]=\"20\" [infiniteScrollThrottle]=\"2000\"\r\n\t\t(scrolled)=\"onScroll()\">\r\n\t\t<div class=\"col-md-6 \" *ngFor=\"let pet of petData\">\r\n\t\t\t<div class=\"row listing\">\r\n\t\t\t\t<div class=\"col-md-4 col-xs-12 \" *ngIf=\"searchService\">\r\n\t\t\t\t\t<center>\r\n\t\t\t\t\t\t<img src={{pet.PictrueName}} style=\"height: 110px; width: 120px;\"\r\n\t\t\t\t\t\t\tclass=\"img-responsive img-rounded listing-mobile\" />\r\n\t\t\t\t\t\t<a [routerLink]=\"['/petdetails',searchService,pet.PetId]\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-danger contact-button\"><i class=\"fa fa-address-book\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t&nbsp;contact </a>\r\n\t\t\t\t\t</center>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4 col-xs-12 \" *ngIf=\"!searchService\">\r\n\t\t\t\t\t<center>\r\n\t\t\t\t\t\t<img src={{pet.PictrueName}} style=\"height: 110px; width: 120px;\"\r\n\t\t\t\t\t\t\tclass=\"img-responsive img-rounded listing-mobile\" />\r\n\t\t\t\t\t\t<a [routerLink]=\"['/petdetails',pet.PetId]\" class=\"btn btn-danger contact-button\"><i\r\n\t\t\t\t\t\t\t\tclass=\"fa fa-address-book\" aria-hidden=\"true\"></i> &nbsp;contact </a>\r\n\t\t\t\t\t</center>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-md-8 col-xs-12\" *ngIf=\"!searchService\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t<h3 class=\"theme-color listname\">{{pet.PetName}}</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-5\">Pet Type</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-7 l-text\">{{pet.PetType}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-5\">Description</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-7 l-text block-with-text\">{{pet.Description}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-5\">Breed</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-7 l-text\">{{pet.BreedName}}</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-5\">Date of Birth</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-7 l-text\">{{pet.PetDob}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-5\">Gender</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-7 l-text\">{{pet.PetGender}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-5\">Color</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-7 l-text\">{{pet.Colors}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-5\">City</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-7 l-text\">{{pet.CityName}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-5\">Area Name</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-7 l-text\">{{pet.AreaName}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-8 col-xs-12\" *ngIf=\"searchService\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t\t<h3 class=\"theme-color listname\">{{pet.PetName}}</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-5\">Service Type</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-7 l-text\">{{searchService}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-5\">Description</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-7 l-text\">{{pet.Description|slice:0:80}}\r\n\t\t\t\t\t\t\t<span *ngIf=\"pet.Description&&pet.Description.length>80\">\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/petdetails',searchService,pet.PetId]\">...</a></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-5\">City</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-7 l-text\">{{pet.CityName}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xs-5\">Area Name</div>\r\n\t\t\t\t\t\t<div class=\"col-xs-7 l-text\">{{pet.AreaName}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4\" *ngIf=\"petData.length==0\">\r\n\t\t\t<img width=\"100%\" src=\"assets/images/noresult.png\">\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<app-mast-footer>\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/petlove/petlove.component.less":
/*!********************************************************!*\
  !*** ./src/app/modules/petlove/petlove.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner-addon {\n  position: relative;\n}\n/* style icon */\n.inner-addon .glyphicon {\n  position: absolute;\n  padding: 12px;\n  z-index: 1000;\n  cursor: pointer;\n}\n/* align icon */\n.left-addon .glyphicon {\n  left: 0px;\n}\n.right-addon .glyphicon {\n  right: 8%;\n}\n/* add padding  */\n.left-addon input {\n  padding-left: 30px;\n}\n.right-addon input {\n  padding-right: 30px;\n}\n.block-with-text {\n  overflow: hidden;\n  position: relative;\n  max-height: 6em;\n}\n.block-with-text:before {\n  content: '...';\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n.block-with-text:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  width: 1em;\n  height: 1em;\n  margin-top: 0.2em;\n  background: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wZXRsb3ZlL0Q6L3BldHBhbHMva2lyYW5naXQvcGV0cGFscy5sb3ZlLXdlYnNpdGUvc3JjL2FwcC9tb2R1bGVzL3BldGxvdmUvcGV0bG92ZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9wZXRsb3ZlL3BldGxvdmUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtDQ0NIO0FBQ0QsZ0JBQWdCO0FERWhCO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0NDQUQ7QUFDRCxnQkFBZ0I7QURHaEI7RUFBMEIsVUFBQTtDQ0F6QjtBRENEO0VBQTBCLFVBQUE7Q0NFekI7QUFDRCxrQkFBa0I7QURBbEI7RUFBcUIsbUJBQUE7Q0NHcEI7QURGRDtFQUFxQixvQkFBQTtDQ0twQjtBREhEO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0NDSUQ7QURDRDtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0NDQ0Q7QURDRDtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNDLGtCQUFBO0VBQ0Qsa0JBQUE7Q0NDRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGV0bG92ZS9wZXRsb3ZlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyLWFkZG9uIHsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbn1cblxuLyogc3R5bGUgaWNvbiAqL1xuLmlubmVyLWFkZG9uIC5nbHlwaGljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogYWxpZ24gaWNvbiAqL1xuLmxlZnQtYWRkb24gLmdseXBoaWNvbiAgeyBsZWZ0OiAgMHB4O31cbi5yaWdodC1hZGRvbiAuZ2x5cGhpY29uIHsgcmlnaHQ6IDglO31cblxuLyogYWRkIHBhZGRpbmcgICovXG4ubGVmdC1hZGRvbiBpbnB1dCAgeyBwYWRkaW5nLWxlZnQ6ICAzMHB4OyB9XG4ucmlnaHQtYWRkb24gaW5wdXQgeyBwYWRkaW5nLXJpZ2h0OiAzMHB4OyB9XG5cbi5ibG9jay13aXRoLXRleHQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gLy8gbGluZS1oZWlnaHQ6IDEuMmVtO1xuICBtYXgtaGVpZ2h0OiA2ZW07XG4gLy8gdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgLy8gbWFyZ2luLXJpZ2h0OiAtMWVtO1xuICAvLyBwYWRkaW5nLXJpZ2h0OiAxZW07XG59XG4uYmxvY2std2l0aC10ZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcuLi4nO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4uYmxvY2std2l0aC10ZXh0OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICAgbWFyZ2luLXRvcDogMC4yZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSIsIi5pbm5lci1hZGRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi8qIHN0eWxlIGljb24gKi9cbi5pbm5lci1hZGRvbiAuZ2x5cGhpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMnB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBhbGlnbiBpY29uICovXG4ubGVmdC1hZGRvbiAuZ2x5cGhpY29uIHtcbiAgbGVmdDogMHB4O1xufVxuLnJpZ2h0LWFkZG9uIC5nbHlwaGljb24ge1xuICByaWdodDogOCU7XG59XG4vKiBhZGQgcGFkZGluZyAgKi9cbi5sZWZ0LWFkZG9uIGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuLnJpZ2h0LWFkZG9uIGlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cbi5ibG9jay13aXRoLXRleHQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDZlbTtcbn1cbi5ibG9jay13aXRoLXRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogJy4uLic7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5ibG9jay13aXRoLXRleHQ6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIG1hcmdpbi10b3A6IDAuMmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/petlove/petlove.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/petlove/petlove.component.ts ***!
  \******************************************************/
/*! exports provided: PetloveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetloveComponent", function() { return PetloveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var src_app_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/petservice.service */ "./src/app/services/petservice.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PetloveComponent = /** @class */ (function () {
    function PetloveComponent(petService, _activatedRoute, masterService, loaderService, router, http) {
        this.petService = petService;
        this._activatedRoute = _activatedRoute;
        this.masterService = masterService;
        this.loaderService = loaderService;
        this.router = router;
        this.http = http;
        this.hideShowFilter = false;
        this.petData = [];
        this.selectedPetTypes = [];
        this.selectedGender = [];
        this.cityList = [];
        this.areaList = [];
        this.selectedKCI = 0;
        this.isApplyFilter = false;
        this.isApplyFilterText = false;
        this.searchFilterText = "";
        this.pageNumber = 1;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.searchService = this._activatedRoute.snapshot.params.service;
        if (this.searchService) {
            this.searchType = "Allied";
        }
    }
    PetloveComponent.prototype.onScroll = function () {
        if (!this.hideShowFilter) {
            ++this.pageNumber;
            if (this.isApplyFilter) {
                this.applyFilterPetsScroll();
            }
            else if (this.isApplyFilterText) {
                this.searchTextFilterScroll();
            }
            else {
                this.getServicesData();
            }
        }
    };
    PetloveComponent.prototype.ngOnInit = function () {
        this.getServicesData();
        this.getPetTypes();
        this.getBreeds();
        this.getCityList();
    };
    PetloveComponent.prototype.getServicesData = function () {
        var _this = this;
        var body = {};
        if (this.pageNumber == 1)
            this.show = false;
        else
            this.show = true;
        this.isApplyFilter = false;
        this.isApplyFilterText = false;
        if (!!this.searchType) {
            if (this.searchService == "Adoption") {
                body = {
                    "Latitude": this.petService.getLatitude(),
                    "Longitude": this.petService.getLongitude(),
                    "UserType": this.searchService
                };
            }
            else if (this.searchService == "Fluffy-Nut") {
                body = {
                    "Latitude": this.petService.getLatitude(),
                    "Longitude": this.petService.getLongitude(),
                    "UserType": "",
                    "AvilableForAdotpion": true,
                    "searchText": "fluffy nut"
                };
            }
            else {
                body = {
                    "Latitude": this.petService.getLatitude(),
                    "Longitude": this.petService.getLongitude(),
                    "UserType": this.searchType + "," + this.searchService
                };
            }
        }
        else {
            body = {
                "Latitude": this.petService.getLatitude(),
                "Longitude": this.petService.getLongitude(),
                "WillingToSell": 0
            };
        }
        //this.show = true;
        this.petService.searchPets(body, this.pageNumber).subscribe(function (data) {
            if (_this.petData.length) {
                _this.petData = _this.petData.concat(data.Data);
            }
            else {
                _this.petData = data.Data;
            }
            _this.show = true;
        }, function (error) {
            _this.show = true;
            console.log(error);
        });
    };
    PetloveComponent.prototype.showHideFilter = function () {
        this.hideShowFilter = !this.hideShowFilter;
    };
    PetloveComponent.prototype.getPetTypes = function () {
        var _this = this;
        this.masterService.getPetTypeList().subscribe(function (data) {
            _this.petTypes = data.Data;
            console.log(_this.petTypes);
        }, function (error) {
            console.log(error);
        });
    };
    PetloveComponent.prototype.getBreeds = function () {
        var _this = this;
        this.masterService.getBreedList().subscribe(function (data) {
            _this.breeds = data.Data;
            console.log(_this.breeds);
        }, function (error) {
            console.log(error);
        });
    };
    PetloveComponent.prototype.applyFilter = function () {
        this.isApplyFilter = true;
        this.isApplyFilterText = false;
        var filterdBreeds = this.breeds.filter(function (opt) { return opt.checked; })
            .map(function (opt) { return opt.BreedId; });
        this.hideShowFilter = false;
        var body = {};
        if (!!this.searchType) {
            if (this.searchService == "Adoption") {
                body["UserType"] = this.searchService;
            }
            else {
                body["UserType"] = this.searchType + "," + this.searchService;
            }
        }
        if (filterdBreeds.length)
            body['BreedId'] = filterdBreeds.toString();
        if (this.selectedPetTypes.length)
            body['PetType'] = this.selectedPetTypes.toString();
        if (this.selectedGender.length)
            body['PetGender'] = this.selectedGender.toString();
        if (this.selectedCity)
            body['CityId'] = this.selectedCity.CityId;
        if (this.selectedArea)
            body['AreaId'] = this.selectedArea.Areaid;
        if (this.enteredAge)
            body['Age'] = this.enteredAge;
        body['KCIRegistered'] = this.selectedKCI ? "1" : "0";
        this.applyFilterBody = body;
        this.pageNumber = 1;
        window.scroll(0, 0);
        this.applyFilterPetsScroll();
    };
    PetloveComponent.prototype.applyFilterPetsScroll = function () {
        var _this = this;
        this.petService.searchPets(this.applyFilterBody, this.pageNumber).subscribe(function (data) {
            if (_this.pageNumber == 1) {
                _this.petData = [];
            }
            if (_this.petData.length) {
                _this.petData = _this.petData.concat(data.Data);
            }
            else {
                _this.petData = data.Data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    PetloveComponent.prototype.petTypeChecked = function (event) {
        if (event.target.checked) {
            this.selectedPetTypes.push(event.target.value);
        }
        else {
            this.selectedPetTypes = this.selectedPetTypes.filter(function (item) { return item !== event.target.value; });
        }
    };
    PetloveComponent.prototype.clickGender = function (event) {
        if (event.target.checked) {
            this.selectedGender.push(event.target.value);
        }
        else {
            this.selectedGender = this.selectedGender.filter(function (item) { return item !== event.target.value; });
        }
    };
    PetloveComponent.prototype.getCityList = function () {
        var _this = this;
        this.masterService.getCityList(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].defaultCountryId)
            .subscribe(function (cityList) {
            _this.cityList = cityList.Data;
        });
    };
    PetloveComponent.prototype.onCityChange = function () {
        var _this = this;
        this.selectedArea = "";
        this.masterService.getAreaList(this.selectedCity.CityId)
            .subscribe(function (areaList) {
            _this.areaList = [{ Areaid: "", AreaName: "", CityId: "" }].concat(areaList.Data);
        });
    };
    PetloveComponent.prototype.searchTextFilter = function () {
        this.isApplyFilter = false;
        this.isApplyFilterText = true;
        var body = {
            "Latitude": this.petService.getLatitude(),
            "Longitude": this.petService.getLongitude()
        };
        if (!!this.searchType) {
            if (this.searchService == "Adoption") {
                body["UserType"] = this.searchService;
            }
            else {
                body["UserType"] = this.searchType + "," + this.searchService;
            }
        }
        this.searchFilterBody = body;
        this.pageNumber = 1;
        this.searchTextFilterScroll();
    };
    PetloveComponent.prototype.searchTextFilterScroll = function () {
        var _this = this;
        var searchText = "pageNumber=" + this.pageNumber + "&searchText=" + this.filterText;
        this.petService.searchTextPets(searchText, this.searchFilterBody).subscribe(function (data) {
            if (_this.pageNumber == 1) {
                _this.petData = [];
            }
            if (_this.petData.length) {
                _this.petData = _this.petData.concat(data.Data);
            }
            else {
                _this.petData = data.Data;
            }
        }, function (error) {
            console.log(error);
        });
    };
    PetloveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-petlove',
            template: __webpack_require__(/*! ./petlove.component.html */ "./src/app/modules/petlove/petlove.component.html"),
            styles: [__webpack_require__(/*! ./petlove.component.less */ "./src/app/modules/petlove/petlove.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_5__["PetserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"],
            src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PetloveComponent);
    return PetloveComponent;
}());



/***/ }),

/***/ "./src/app/modules/petnews/petnews.component.html":
/*!********************************************************!*\
  !*** ./src/app/modules/petnews/petnews.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n\r\n</app-mast-head>\r\n<div class=\"container-fluid more-padding\" style=\"background-color: #e0dddf;padding-top:10px;\">\r\n  <!-- {{petNews}} -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-1\"></div>\r\n    <div class=\"col-md-10 white-bg-color container-text\">\r\n      <p> We are so obsessed with pets. We can't resist ourselves to keep in isolation. We keep ourselves updated with\r\n        the\r\n        pet\r\n        news around the globe. Do you want to keep yourself updated too, then keep visiting us in this space. We are\r\n        sure\r\n        to\r\n        make you keep you updated.</p>\r\n    </div>\r\n    <div class=\"col-md-1\"></div>\r\n\r\n  </div>\r\n  <br />\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div [innerHTML]=\"petNews\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-mast-footer>\r\n\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/petnews/petnews.component.less":
/*!********************************************************!*\
  !*** ./src/app/modules/petnews/petnews.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGV0bmV3cy9wZXRuZXdzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/modules/petnews/petnews.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/petnews/petnews.component.ts ***!
  \******************************************************/
/*! exports provided: PetnewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetnewsComponent", function() { return PetnewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/master.service */ "./src/app/services/master.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PetnewsComponent = /** @class */ (function () {
    function PetnewsComponent(masterService) {
        this.masterService = masterService;
    }
    PetnewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.masterService.getPetNews().subscribe(function (data) {
            _this.petNews = data.Data;
        }, function (error) {
            console.log(error);
        });
    };
    PetnewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-petnews',
            template: __webpack_require__(/*! ./petnews.component.html */ "./src/app/modules/petnews/petnews.component.html"),
            styles: [__webpack_require__(/*! ./petnews.component.less */ "./src/app/modules/petnews/petnews.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_services_master_service__WEBPACK_IMPORTED_MODULE_1__["MasterService"]])
    ], PetnewsComponent);
    return PetnewsComponent;
}());



/***/ }),

/***/ "./src/app/modules/products/products.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/products/products.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n\r\n</app-mast-head>\r\n<div class=\"container-fluid padding\" style=\"background-color:#e0dddf\">\r\n\r\n\r\n  <div class=\"row\">\r\n    <h2 class=\"theme-color text-center bold\"> OUR PRODUCTS</h2>\r\n  </div>\r\n\r\n  <div class=\"row more-padding\">\r\n\r\n\r\n    <div class=\"col-md-4\">\r\n\r\n      <div class=\"products\">\r\n        <h5 class=\"bold\">Paw's Wonder</h5>\r\n        <div class=\"product-text\">\r\n          <img src=\"assets/images/product1.png\" class=\"img-responsive  img-rounded iconimg\">\r\n\r\n          <p>Be it birthday's, be it anniversaries, the most exciting part of it all, is the gifts we receive. Just like\r\n            we wait for gifts, our furry friends wait for them too. Pet Pals presents Paw's Wonder, a wonderful gift box\r\n            for your dog that has toys, treats and essentials. Surprise your little furry friends every month with Paw's\r\n            Wonder, we are sure they will love their gift box. </p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n\r\n\r\n      <div class=\"products\">\r\n        <h5 class=\"bold\">Sanitary Pads\r\n        </h5>\r\n        <div class=\"product-text\">\r\n          <img src=\"assets/images/product2.png\" class=\"img-responsive  img-rounded iconimg\">\r\n\r\n          <p>Babies need diapers as they can't tell us, they need to use the washroom. Our furry friends are like these\r\n            innocent, little babies that can't tell us, they need to use the washroom, be it while traveling or be it as\r\n            soon as you have moped the floor, be it for puppies or dogs, Pet Pals presents diapers for pets at\r\n            reasonable prices and good quality, that will ensure hygiene when you are traveling or when your pet is\r\n            still a puppy. Order one if you have a little one! </p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n\r\n      <div class=\"products\">\r\n        <h5 class=\"bold\">Upcoming GPS Trackers\r\n        </h5>\r\n        <div class=\"product-text\">\r\n          <img src=\"assets/images/product3.png\" class=\"img-responsive  img-rounded iconimg\">\r\n\r\n          <p>Pets at home are a part of our family. When we call out their names, if they don't turn up, we tend to skip\r\n            a heartbeat. To ensure the safety of pets, be it when your pet is in the garden or when he is in the\r\n            boarding house, Pet Pals will soon be introducing GPS Trackers that will show you the location of your pet\r\n            on our application. Grab one for your Pet as soon as we launch it! </p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n<app-mast-footer>\r\n\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/products/products.component.less":
/*!**********************************************************!*\
  !*** ./src/app/modules/products/products.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/products/products.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/products/products.component.ts ***!
  \********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/modules/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.less */ "./src/app/modules/products/products.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/modules/register/register.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/register/register.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n\r\n</app-mast-head>\r\n\r\n\r\n\r\n<div class=\"container-fluid \" style=\"background:#f9f9f9\">\r\n\r\n\r\n  <div class=\"row\" >\r\n\r\n    <div class=\"col-md-8\">\r\n\r\n      <img src=\"assets/images/bg1.png\" class=\"img-responsive\" />\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-4 form-login\">\r\n\r\n\r\n      <center>\r\n        <h2 class=\"theme-color  bold\"> LOG IN</h2>\r\n      </center>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userName\" (keyup)=\"$event.keyCode == 13 ? onSignInClick() : null\"\r\n          placeholder=\"Email/Mobile Number\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" (keyup)=\"$event.keyCode == 13 ? onSignInClick() : null\"\r\n          placeholder=\"password\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <!-- <a href=\"#\">Forgot Password ?</a> -->\r\n        <a data-toggle=\"modal\" data-target=\"#forgotPasswordModal\">\r\n          Forgot Password ?\r\n        </a>\r\n      </div>\r\n      <center>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onSignInClick()\">SIGN IN</button>\r\n        <a [routerLink]=\"['/signup']\" class=\"register-link\">REGISTER</a>\r\n      </center>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"forgotPasswordModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Forgot Password</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Enter Your Registered Email </label>\r\n          <input type=\"email\" #email class=\"form-control\" [(ngModel)]=\"emailId\" placeholder=\"Email\">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"onSendForgotPassword()\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" #closeBtn data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-mast-footer>\r\n\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/register/register.component.less":
/*!**********************************************************!*\
  !*** ./src/app/modules/register/register.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ngx-toasta/src/public_api */ "./projects/ngx-toasta/src/public_api.ts");
/* harmony import */ var src_app_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/master.service */ "./src/app/services/master.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, toastaService, searchService, _activatedRoute) {
        this.authService = authService;
        this.router = router;
        this.toastaService = toastaService;
        this.searchService = searchService;
        this._activatedRoute = _activatedRoute;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSignInClick = function () {
        var _this = this;
        if (this.userName && this.password) {
            this.authService.signIn(this.userName, this.password)
                .subscribe(function (result) {
                if (result != null && result.Status == "Successfull" && result.Data != null) {
                    localStorage.setItem('currentUser', JSON.stringify(result.Data));
                    localStorage.setItem('token', result.Data.SecurityToken);
                    localStorage.setItem('emailId', result.Data.EmailId);
                    localStorage.setItem('RequesterOwnerId', result.Data.UserId);
                    var returnUrl = _this._activatedRoute.snapshot.queryParams['returnUrl'];
                    if (returnUrl) {
                        _this.router.navigateByUrl(returnUrl);
                    }
                    else {
                        _this.router.navigate(['/myrequests']);
                    }
                }
                else {
                    //alert("Invalid Credential");
                    var toastOptions = _this.searchService.setToastOptions('Sign In Errors', 'Invalid Credential', '');
                    _this.toastaService.error(toastOptions);
                }
            });
        }
        else {
            var toastOptions = this.searchService.setToastOptions('Sign In Errors', 'Please enter username and password', '');
            this.toastaService.error(toastOptions);
        }
    };
    RegisterComponent.prototype.onSendForgotPassword = function () {
        var _this = this;
        var email = this.emailId;
        if (email != null && email != '') {
            this.authService.forgotPassword(email)
                .subscribe(function (result) {
                if (!!result.ErrorMessage) {
                    alert("Please enter valid Email Id");
                }
                else {
                    alert("Password sent to your email, please check");
                    _this.closeBtn.nativeElement.click();
                }
                console.log(result);
            });
        }
        else {
            alert("Please enter valid Email Id");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeBtn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "closeBtn", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.less */ "./src/app/modules/register/register.component.less")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToastaService"],
            src_app_services_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/reminders/reminders.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/reminders/reminders.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\n</app-mast-head>\n\n<div class=\"container-fluid container-fluid-minheight\" style=\"background-color:#e0dddf\">\n  <div class=\"row\">\n    <h2 class=\"theme-color text-center bold\">Reminder List\n      <a [routerLink]=\"['/addreminder']\" class=\"btn btn-primary btn-sm\">\n        <span class=\"glyphicon glyphicon-plus\"></span> Add Reminder\n      </a>\n    </h2>\n\n  </div>\n\n  <div class=\"row more-padding \" *ngIf=\"show\">\n    <div class=\"col-md-12\" *ngFor=\"let reminder of reminders\">\n      <div class=\"row listing\">\n        <div class=\"row\">\n          <div class=\"col-xs-1\"></div>\n          <div class=\"col-xs-9 l-text\">\n            <!-- <a [routerLink]=\"['/updatereminder',reminder.AlertsSchduleConfigId]\" class=\"btn btn-danger btn-sm\">\n              <span class=\"glyphicon glyphicon-edit\"></span> Edit\n            </a> -->\n            <a href=\"#\" (click)=\"onDeleteClick(reminder.AlertsSchduleConfigId)\" data-toggle=\"modal\" data-target=\"#DeletePetModal\"\n              *ngIf=\"AlertsSchduleConfigId !=1\" class=\"btn btn-danger btn-sm\">\n              <span class=\"glyphicon glyphicon-remove\"></span> Remove\n            </a>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-1 col-xs-12 \">\n\n          </div>\n\n          <div class=\"col-md-10 col-xs-12\">\n            <div class=\"row\">\n              <div class=\"col-xs-12\">\n                <h3 class=\"theme-color listname\">{{reminder.TaskDescription}}</h3>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-5\">Start date and time</div>\n              <div class=\"col-xs-7 l-text\">{{reminder.StartDateTime|date:'medium' }}</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-5\">End date and time</div>\n              <div class=\"col-xs-7 l-text\">{{reminder.EndDateTime|date:'medium' }}</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-5\">Recurring</div>\n              <div class=\"col-xs-7 l-text\">{{reminder.Recurring?'Yes':'No'}}</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-5\">Recurring Every</div>\n              <div class=\"col-xs-7 l-text\">{{reminder.RecurringEvery}}</div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-xs-5\">Recurring Period</div>\n              <div class=\"col-xs-7 l-text\">{{reminder.RecurringPeriod}}</div>\n            </div>\n\n          </div>\n          <div class=\"col-md-1 col-xs-12 \"></div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-md-12\" *ngIf=\"reminders.length==0\">\n      <div class=\"row listing\">\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-4\">\n          <!-- <img width=\"100%\" src=\"assets/images/noresult.png\"> -->\n          <h3 class=\"text-center\">No schedule created yet..</h3>\n        </div>\n        <div class=\"col-md-4\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-2\">\n    <!-- The  Delete Pet Modal -->\n    <div class=\"modal fade\" id=\"DeletePetModal\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n          <!-- Modal Header -->\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Remove Reminder</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n\n          <!-- Modal body -->\n          <div class=\"modal-body\">\n            <h5>Are you sure you want to remove this reminder?</h5>\n          </div>\n\n          <!-- Modal footer -->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" (click)=\"onDeleteReminder()\">Send</button>\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<app-mast-footer>\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/reminders/reminders.component.less":
/*!************************************************************!*\
  !*** ./src/app/modules/reminders/reminders.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVtaW5kZXJzL3JlbWluZGVycy5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/reminders/reminders.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/reminders/reminders.component.ts ***!
  \**********************************************************/
/*! exports provided: RemindersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemindersComponent", function() { return RemindersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/reminder.service */ "./src/app/services/reminder.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/ngx-toasta/src/public_api */ "./projects/ngx-toasta/src/public_api.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RemindersComponent = /** @class */ (function () {
    function RemindersComponent(reminderService, authService, router, masterService, toastaService, _activatedRoute) {
        this.reminderService = reminderService;
        this.authService = authService;
        this.router = router;
        this.masterService = masterService;
        this.toastaService = toastaService;
        this._activatedRoute = _activatedRoute;
        this.reminders = [];
        this.show = false;
    }
    RemindersComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticated()) {
            this.getMyReminders();
        }
        else {
            var toastOptions = this.masterService.setToastOptions('Reminders', 'Please login to continue', '');
            this.toastaService.error(toastOptions);
            var returnUrl = this._activatedRoute.snapshot;
            this.router.navigate(['/signin'], { queryParams: { returnUrl: returnUrl._routerState.url } });
        }
    };
    RemindersComponent.prototype.getMyReminders = function () {
        var _this = this;
        this.reminderService.getMyReminders().subscribe(function (reminderList) {
            _this.reminders = reminderList.Data;
            _this.show = true;
        });
    };
    RemindersComponent.prototype.onDeleteClick = function (reminderId) {
        this.withdrawRequestId = reminderId;
    };
    RemindersComponent.prototype.onDeleteReminder = function () {
        var _this = this;
        var deletedReminder = this.reminders.filter(function (x) { return x.AlertsSchduleConfigId == _this.withdrawRequestId; })[0];
        deletedReminder.RecordDeleted = true;
        deletedReminder.Active = false;
        // var body =
        // {
        //   "AlertsSchduleConfigId": this.withdrawRequestId,
        //   "RecordDeleted": true,
        //   "Active": false,
        // }
        this.reminderService.updateReminder(deletedReminder).subscribe(function (result) {
            var status = result.Status;
            if (status != "Errored") {
                var toastOptions = _this.masterService.setToastOptions('Delete reminder', 'Reminder Successfully deleted', '');
                _this.toastaService.success(toastOptions);
                _this.getMyReminders();
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Delete reminder', result.ErrorMessage, '');
                _this.toastaService.error(toastOptions);
            }
        });
    };
    RemindersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reminders',
            template: __webpack_require__(/*! ./reminders.component.html */ "./src/app/modules/reminders/reminders.component.html"),
            styles: [__webpack_require__(/*! ./reminders.component.less */ "./src/app/modules/reminders/reminders.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_1__["ReminderService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"],
            projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ToastaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RemindersComponent);
    return RemindersComponent;
}());



/***/ }),

/***/ "./src/app/modules/services/services.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/services/services.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n\r\n</app-mast-head>\r\n\r\n\r\n\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"col-md-8 heading1\">\r\n      One Stop Platform for all your Pet Needs\r\n    </div>\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n\r\n  <div class=\"row\" style=\"margin:10px;\">\r\n\r\n    <div class=\"col-md-8 col-md-offset-2 services\">\r\n   \r\n      <app-iconlist></app-iconlist>\r\n      <br><br>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<app-mast-footer>\r\n\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/services/services.component.less":
/*!**********************************************************!*\
  !*** ./src/app/modules/services/services.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/services/services.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/services/services.component.ts ***!
  \********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/modules/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.less */ "./src/app/modules/services/services.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/modules/signup/signup.component.html":
/*!******************************************************!*\
  !*** ./src/app/modules/signup/signup.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n\r\n</app-mast-head>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"offset-sm-2 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"heading1\" *ngIf=\"!this.isEditProfile\">\r\n          Please Sign Up\r\n        </div>\r\n        <div class=\"heading1\" *ngIf=\"this.isEditProfile\">\r\n          Update Profile\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\">\r\n            <div class=\"form-group\">\r\n              <label>Upload Picture</label>\r\n              <input type=\"file\" style=\"background-color: firebrick;color: wheat;\" (change)=\"fileChangeEvent($event)\"\r\n                placeholder=\"Upload file...\" />\r\n              <!--For  Previewing image -->\r\n              <img id=\"blah\" [src]=\"imagePath\" style=\"height:50%;width:50%;\" alt=\"\" />\r\n            </div>\r\n            <div class=\"form-group\" *ngIf=\"!isEditProfile\">\r\n              <p><label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"vendorLogin\"\r\n                    [(ngModel)]=\"vendorLogin\">Vendor\r\n                  Login\r\n                </label></p>\r\n            </div>\r\n            <div class=\"form-group\" *ngIf=\"vendorLogin\">\r\n              <label>You are an?<sup style=\"color: red\">*</sup></label>\r\n              <select class=\"form-control\" [(ngModel)]=\"user.UserType\" name=\"UserType\">\r\n                <option *ngFor=\"let userType of UserTypeList\" value=\"{{userType}}\">{{userType}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>First Name<sup style=\"color: red\">*</sup></label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.FirstName\" name=\"FirstName\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Last Name</label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.LastName\" name=\"LastName\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Email<sup style=\"color: red\">*</sup></label>\r\n              <input type=\"email\" [email]=\"true\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" class=\"form-control\"\r\n                [(ngModel)]=\"user.EmailId\" name=\"EmailId\">\r\n            </div>\r\n            <!-- <div class=\"form-group\">\r\n              <label>Description<sup style=\"color: red\">*</sup></label>\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.KCIDetails\" name=\"KCIDetails\">\r\n            </div> -->\r\n            <div class=\"form-group\" *ngIf=\"!isEditProfile\">\r\n              <label>Password<sup style=\"color: red\">*</sup></label>\r\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.Password\" name=\"Password\">\r\n            </div>\r\n            <div class=\"form-group\" *ngIf=\"!isEditProfile\">\r\n              <label>Confirm Password<sup style=\"color: red\">*</sup></label>\r\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"ConfirmPassword\" name=\"ConfirmPassword\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Contact Number<sup style=\"color: red\">*</sup></label>\r\n              <input type=\"text\" numbersOnly maxlength=\"10\" minlength=\"10\" class=\"form-control\"\r\n                [(ngModel)]=\"user.MobilePhone\" name=\"MobilePhone\">\r\n            </div>\r\n            <!-- <div class=\"form-group\">\r\n              <label>Date od birth<sup style=\"color: red\">*</sup></label>\r\n              <input type=\"date\" class=\"form-control\" [(ngModel)]=\"user.Dob\" name=\"Dob\">\r\n            </div> -->\r\n            <!-- <div class=\"form-group\">\r\n              <label>Gender<sup style=\"color: red\">*</sup></label>\r\n              <select name=\"Gender\" [(ngModel)]=\"user.Gender\" class=\"form-control\">\r\n                <option>Male</option>\r\n                <option>Female</option>\r\n              </select>\r\n            </div> -->\r\n            <div class=\"form-group\" *ngIf=\"!isNavigationEnabled\">\r\n              <label>Select Country<sup style=\"color: red\">*</sup></label>\r\n              <select name=\"Country\" [(ngModel)]=\"user.CountryId\" class=\"form-control\"\r\n                (change)=\"onCountryChange(user.CountryId)\">\r\n                <option *ngFor=\"let country of countryList\" [ngValue]=\"country.CountryId\">{{country.CountryName}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\" *ngIf=\"!isNavigationEnabled\">\r\n              <label>Select City<sup style=\"color: red\">*</sup></label>\r\n              <select name=\"City\" [(ngModel)]=\"user.CityId\" class=\"form-control\"\r\n                (change)=\"onCityChange(user.CityId,true)\">\r\n                <option *ngFor=\"let city of cityList\" [ngValue]=\"city.CityId\">{{city.CityName}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\" *ngIf=\"!isNavigationEnabled\">\r\n              <label>Select Area<sup style=\"color: red\">*</sup></label>\r\n              <select name=\"Area\" [(ngModel)]=\"user.AreaId\" class=\"form-control\">\r\n                <option [ngValue]=\"\"></option>\r\n                <option *ngFor=\"let area of areaList\" [ngValue]=\"area.Areaid\">{{area.AreaName}}</option>\r\n              </select>\r\n            </div>\r\n            <button type=\"submit\" [disabled]=\"submitDisabled\" class=\"btn\"\r\n              style=\"background-color: #A50F2D;color: white;\">{{buttonName}}</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3\"></div>\r\n  </div>\r\n</div>\r\n<br />\r\n<app-mast-footer>\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/signup/signup.component.less":
/*!******************************************************!*\
  !*** ./src/app/modules/signup/signup.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/signup/signup.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/signup/signup.component.ts ***!
  \****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../projects/ngx-toasta/src/public_api */ "./projects/ngx-toasta/src/public_api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/petservice.service */ "./src/app/services/petservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, searchService, toastaService, toastaConfig, router, petService) {
        this.authService = authService;
        this.searchService = searchService;
        this.toastaService = toastaService;
        this.toastaConfig = toastaConfig;
        this.router = router;
        this.petService = petService;
        this.isEditProfile = false;
        this.user = {
            UserName: '',
            Password: '',
            FirstName: '',
            AreaId: 0,
            Dob: '',
            UserId: 0,
            LastName: '',
            MobilePhone: '',
            EmailId: '',
            Gender: '',
            EmailNotification: true,
            SmsNotification: true,
            UserProfilePicture: '',
            DeviceType: '',
            UserType: '',
            CountryId: 0,
            CountryName: '',
            CityId: 0,
            CityName: '',
            AreaName: '',
            KCIRegistered: 1,
            KCIDetails: '',
            ReferralCode: 0,
            Latitude: "",
            Longitude: ""
        };
        this.UserTypeList = [];
        this.countryList = [];
        this.cityList = [];
        this.areaList = [];
        this.selectedCityName = '';
        this.selectedCountryName = '';
        this.selectedAreaName = '';
        this.imagePath = "#";
        this.vendorLogin = false;
        this.isNavigationEnabled = false;
        this.submitDisabled = false;
        this.buttonName = "Sign Up";
        this.toastaConfig.theme = 'material';
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.watchPosition(function () {
            _this.isNavigationEnabled = true;
        }, function (error) {
            if (error.code == error.PERMISSION_DENIED)
                _this.isNavigationEnabled = false;
        });
        this.searchService.getUserTypeList()
            .subscribe(function (UserTypeList) {
            _this.UserTypeList = UserTypeList.Data;
        });
        this.searchService.getCountryList()
            .subscribe(function (countryList) {
            _this.countryList = countryList.Data;
        });
        if (localStorage.getItem('currentUser')) {
            this.isEditProfile = true;
            this.getMyProfile();
            this.buttonName = "Save";
        }
        else {
            this.isEditProfile = false;
        }
    };
    SignupComponent.prototype.onCountryChange = function (countryId) {
        var _this = this;
        this.searchService.getCityList(countryId)
            .subscribe(function (cityList) {
            _this.cityList = cityList.Data;
        });
    };
    SignupComponent.prototype.onCityChange = function (cityId, isManual) {
        var _this = this;
        this.searchService.getAreaList(cityId)
            .subscribe(function (areaList) {
            _this.areaList = areaList.Data;
        });
        if (isManual) {
            this.user.AreaId = 0;
        }
        //this.selectedCityName = selectedCity.CityName;
    };
    // onAreaChange(selectedArea: Area) {
    //   this.selectedAreaName = selectedArea.AreaName;
    // }
    SignupComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.files = fileInput.target.files;
        this.uploadedFile = this.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            //no problem for this error
            _this.imagePath = event.target.result;
        };
        reader.readAsDataURL(fileInput.target.files[0]);
    };
    SignupComponent.prototype.onSubmit = function (userForm) {
        //save image
        var isValidForm = true;
        if (this.vendorLogin) {
            if (!userForm.value.UserType) {
                var toastOptions = this.searchService.setToastOptions('Errors', 'Please sleect you are an?', '');
                this.toastaService.error(toastOptions);
                isValidForm = false;
            }
        }
        if (!userForm.value.FirstName) {
            var toastOptions = this.searchService.setToastOptions('Errors', 'Please enter first name', '');
            this.toastaService.error(toastOptions);
            isValidForm = false;
        }
        if (userForm.controls.EmailId.status == "INVALID" || !userForm.value.EmailId) {
            var toastOptions = this.searchService.setToastOptions('Errors', 'Please enter valid email id', '');
            this.toastaService.error(toastOptions);
            isValidForm = false;
        }
        if (userForm.controls.MobilePhone.status == "INVALID" || !userForm.value.MobilePhone) {
            var toastOptions = this.searchService.setToastOptions('Errors', 'Please enter valid mobile number', '');
            this.toastaService.error(toastOptions);
            isValidForm = false;
        }
        if (!userForm.value.Password && !this.isEditProfile) {
            var toastOptions = this.searchService.setToastOptions('Errors', 'Please enter password', '');
            this.toastaService.error(toastOptions);
            isValidForm = false;
        }
        if (userForm.value.Password != userForm.value.ConfirmPassword && !this.isEditProfile) {
            var toastOptions = this.searchService.setToastOptions('Errors', 'Password and confirm password should be matched', '');
            this.toastaService.error(toastOptions);
            isValidForm = false;
        }
        if (!this.isNavigationEnabled) {
            if (!userForm.value.Country) {
                var toastOptions = this.searchService.setToastOptions('Errors', 'Please sleect country', '');
                this.toastaService.error(toastOptions);
                isValidForm = false;
            }
            if (!userForm.value.City) {
                var toastOptions = this.searchService.setToastOptions('Errors', 'Please sleect city', '');
                this.toastaService.error(toastOptions);
                isValidForm = false;
            }
            if (!userForm.value.Area) {
                var toastOptions = this.searchService.setToastOptions('Errors', 'Please sleect area', '');
                this.toastaService.error(toastOptions);
                isValidForm = false;
            }
        }
        if (!isValidForm) {
            return false;
        }
        this.submitDisabled = true;
        if (this.uploadedFile) {
            this.saveUserImage(userForm);
        }
        else {
            this.saveUserDetails(userForm);
        }
    };
    SignupComponent.prototype.saveUserImage = function (userForm) {
        var _this = this;
        this.searchService.saveImage(this.uploadedFile)
            .subscribe(function (result) {
            _this.user.UserProfilePicture = result.Data.ImgUrl;
            _this.saveUserDetails(userForm);
        });
    };
    SignupComponent.prototype.saveUserDetails = function (userForm) {
        var _this = this;
        var UserName = userForm.value.FirstName + ' ' + userForm.value.LastName;
        this.user.UserName = UserName;
        this.user.Password = userForm.value.Password;
        this.user.LastName = userForm.value.LastName;
        this.user.MobilePhone = userForm.value.MobilePhone;
        this.user.EmailId = userForm.value.EmailId;
        this.user.EmailNotification = true;
        this.user.SmsNotification = true;
        this.user.DeviceType = "Web";
        if (this.vendorLogin) {
            this.user.UserType = userForm.value.UserType;
        }
        else {
            this.user.UserType = "PetParent";
        }
        if (!this.isNavigationEnabled) {
            this.user.CountryId = userForm.value.Country;
            var filteredCountry = this.countryList.filter(function (x) { return x.CountryId == _this.user.CountryId; });
            this.user.CountryName = filteredCountry[0].CountryName;
            this.user.CityId = userForm.value.City;
            var filteredCity = this.cityList.filter(function (x) { return x.CityId == _this.user.CityId; });
            this.user.CityName = filteredCity[0].CityName;
            this.user.AreaId = userForm.value.Area;
            var filteredArea = this.areaList.filter(function (x) { return x.Areaid == _this.user.AreaId; });
            this.user.AreaName = filteredArea[0].AreaName;
        }
        else {
            this.user.Latitude = this.petService.getLatitude();
            this.user.Longitude = this.petService.getLongitude();
        }
        this.user.ReferralCode = 0;
        if (this.isEditProfile) {
            this.authService.updateProfile(this.user)
                .subscribe(function (result) {
                var status = result.Status;
                if (status != "Errored") {
                    var toastOptions = _this.searchService.setToastOptions('Update Profile', 'Success', '');
                    _this.toastaService.success(toastOptions);
                    _this.submitDisabled = false;
                    _this.getMyProfile();
                }
                else {
                    var toastOptions = _this.searchService.setToastOptions('Update Profile', result.ErrorMessage, '');
                    _this.toastaService.error(toastOptions);
                    _this.submitDisabled = false;
                }
            });
        }
        else {
            this.user.FirstName = userForm.value.FirstName;
            this.authService.signUp(this.user)
                .subscribe(function (result) {
                var status = result.Status;
                if (status != "Errored") {
                    var toastOptions = _this.searchService.setToastOptions('Registration', 'Success', 'signin');
                    _this.toastaService.success(toastOptions);
                }
                else {
                    var toastOptions = _this.searchService.setToastOptions('Registration', result.ErrorMessage, '');
                    _this.toastaService.error(toastOptions);
                    _this.submitDisabled = false;
                }
            });
        }
    };
    SignupComponent.prototype.getMyProfile = function () {
        var _this = this;
        this.authService.getMyProfile().subscribe(function (result) {
            var userData = result.Data;
            _this.user = userData;
            _this.imagePath = _this.user.UserProfilePicture;
            _this.user.CountryId = userData.CountryId;
            _this.user.AreaId = parseInt(userData.AreaId);
            _this.onCountryChange(_this.user.CountryId);
            _this.onCityChange(_this.user.CityId, false);
            localStorage.setItem('currentUser', JSON.stringify(userData));
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/modules/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.less */ "./src/app/modules/signup/signup.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            src_app_services_master_service__WEBPACK_IMPORTED_MODULE_2__["MasterService"],
            _projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToastaService"], _projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToastaConfig"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_5__["PetserviceService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/modules/singlepet/singlepet.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/singlepet/singlepet.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mast-head>\r\n</app-mast-head>\r\n<div class=\"container-fluid container-fluid-minheight\" style=\"background-color:#e0dddf\">\r\n  <div class=\"row\">\r\n    <h2 class=\"theme-color text-center bold\" *ngIf=\"petType!='Fluffy-Nut'\">{{petType}} Details</h2>\r\n    <h2 class=\"theme-color text-center bold\" *ngIf=\"petType=='Fluffy-Nut'\"> Pet Detail for Adoption (Fluffy Nut)</h2>\r\n\r\n  </div>\r\n  <div class=\"row more-padding \">\r\n    <!-- Listing Start -->\r\n    <div class=\"col-md-12 \">\r\n      <div class=\"row listing\">\r\n        <div class=\"col-md-4 col-xs-12 \">\r\n          <center>\r\n            <img src=\"{{petData.PictrueName}}\" class=\"img-responsive img-rounded listing-mobile\" />\r\n          </center>\r\n        </div>\r\n        <div class=\"col-md-8 col-xs-12\" *ngIf=\"!petType\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n              <h3 class=\"theme-color listname\">{{petData.PetName}}</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Pet Type</div>\r\n            <div class=\"col-xs-7 l-text\">{{petData.PetType}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Description</div>\r\n            <div class=\"col-xs-7 l-text\">{{petData.Description}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Breed</div>\r\n            <div class=\"col-xs-7 l-text\">{{petData.BreedName}}</div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Date of Birth</div>\r\n            <div class=\"col-xs-7 l-text\">{{petData.PetDob}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Gender</div>\r\n            <div class=\"col-xs-7 l-text\">{{petData.PetGender}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Color</div>\r\n            <div class=\"col-xs-7 l-text\">{{petData.Colors}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">City</div>\r\n            <div class=\"col-xs-7 l-text\">{{petData.CityName}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Area Name</div>\r\n            <div class=\"col-xs-7 l-text\">{{petData.AreaName}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 col-xs-6\">\r\n              <center>\r\n                <a class=\"btn btn-danger contact-button\" #fileInput><i class=\"fa fa-address-book\"\r\n                    aria-hidden=\"true\"></i>\r\n                  &nbsp;contact </a>\r\n              </center>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8 col-xs-12\" *ngIf=\"petType\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n              <h3 class=\"theme-color listname\">{{petData.PetName}}</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Service Type</div>\r\n            <div class=\"col-xs-7 l-text\">{{petType}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Description</div>\r\n            <div class=\"col-xs-7 l-text\">{{petData.Description}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">City</div>\r\n            <div class=\"col-xs-7 l-text\">{{petData.CityName}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-5\">Area Name</div>\r\n            <div class=\"col-xs-7 l-text\">{{petData.AreaName}}</div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 col-xs-6\">\r\n              <center>\r\n                <a class=\"btn btn-danger contact-button\" #fileInput><i class=\"fa fa-address-book\"\r\n                    aria-hidden=\"true\"></i>\r\n                  &nbsp;contact </a>\r\n              </center>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <!-- Listing End -->\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"modal\" id=\"DeletePetModal\" [ngStyle]=\"{'display':displayModal}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Pet Love Request\r\n        </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\">&times;</button>\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\" *ngIf=\"myPets.length>=1&&myPets[0].PetId !=1\">\r\n        <h5>Please Select pet to send request</h5>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-4\"></div>\r\n        <div class=\"col-xs-8\" *ngIf=\"myPets.length==1&&myPets[0].PetId ==1\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-8 l-text\">\r\n              <h3 class=\"theme-color listname\">{{myPets[0].PetName}}</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-4\" *ngIf=\"myPets.length>=1&&myPets[0].PetId !=1\">\r\n          <select name=\"selectPet\" [(ngModel)]=\"selectedPetForLove\" class=\"form-control\">\r\n            <!-- <option selected>City </option> -->\r\n            <option *ngFor=\"let myPet of myPets\" [ngValue]=\"myPet.PetId\">{{myPet.PetName}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-xs-4\" *ngIf=\"myPets.length>=1&&myPets[0].PetId !=1\"></div>\r\n\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" [disabled]=\"petLoveRequestDisabled\" class=\"btn btn-info\"\r\n          (click)=\"petLoveRequest()\">Send</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\">Close</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"boardingModal\" [ngStyle]=\"{'display':displayBoardingModal}\">\r\n  <div class=\"modal-dialog\" *ngIf='petData'>\r\n    <app-boarding [petData]=\"petData\" [isEditView]=\"false\" [isBoardingClicked]=\"isBoarding\"\r\n      (closeModalPopup)=\"closeModal()\"></app-boarding>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"commonModal\" [ngStyle]=\"{'display':displayCommonModal}\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n\r\n      <!-- Modal Header -->\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{petType}} Request Details\r\n        </h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\">&times;</button>\r\n      </div>\r\n\r\n      <!-- Modal body -->\r\n      <div class=\"modal-body\">\r\n        Are you sure want to place the request?\r\n      </div>\r\n\r\n      <!-- Modal footer -->\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" (click)=\"petCommonModalRequest()\">Send</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\">Close</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<app-mast-footer>\r\n</app-mast-footer>"

/***/ }),

/***/ "./src/app/modules/singlepet/singlepet.component.less":
/*!************************************************************!*\
  !*** ./src/app/modules/singlepet/singlepet.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaW5nbGVwZXQvRDovcGV0cGFscy9raXJhbmdpdC9wZXRwYWxzLmxvdmUtd2Vic2l0ZS9zcmMvYXBwL21vZHVsZXMvc2luZ2xlcGV0L3NpbmdsZXBldC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9zaW5nbGVwZXQvc2luZ2xlcGV0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7Q0NDSCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2luZ2xlcGV0L3NpbmdsZXBldC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3Vwe1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuIiwiLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/singlepet/singlepet.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/singlepet/singlepet.component.ts ***!
  \**********************************************************/
/*! exports provided: SinglepetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglepetComponent", function() { return SinglepetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/ngx-toasta/src/public_api */ "./projects/ngx-toasta/src/public_api.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _services_petservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/petservice.service */ "./src/app/services/petservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SinglepetComponent = /** @class */ (function () {
    function SinglepetComponent(_activatedRoute, petService, authService, router, masterService, toastaService) {
        this._activatedRoute = _activatedRoute;
        this.petService = petService;
        this.authService = authService;
        this.router = router;
        this.masterService = masterService;
        this.toastaService = toastaService;
        this.hideShowFilter = false;
        this.myPets = [];
        this.petLoveRequestDisabled = true;
        this.displayModal = 'none';
        /*Boarding*/
        this.isBoarding = false;
        this.displayBoardingModal = 'none';
        /*Walker, Tariner, Rescuer */
        this.displayCommonModal = 'none';
        this.petId = this._activatedRoute.snapshot.params.id;
        this.petType = this._activatedRoute.snapshot.params.type;
    }
    SinglepetComponent.prototype.ngOnInit = function () {
        this.getPetData();
    };
    SinglepetComponent.prototype.ngAfterViewInit = function () {
        this.fileInput.nativeElement.addEventListener('click', this.onModalOpen.bind(this));
    };
    SinglepetComponent.prototype.onModalOpen = function (event) {
        if (this.authService.isAuthenticated()) {
            this.handleModalPopups();
        }
        else {
            var toastOptions = this.masterService.setToastOptions('Pet Love Request', 'Please login to continue', '');
            this.toastaService.error(toastOptions);
            //{ queryParams: { returnurl: this._activatedRoute.snapshot.url } }
            var returnUrl = this._activatedRoute.snapshot;
            this.router.navigate(['/signin'], { queryParams: { returnUrl: returnUrl._routerState.url } });
        }
    };
    SinglepetComponent.prototype.handleModalPopups = function () {
        var _this = this;
        this.isBoarding = false;
        if (!this.petType) {
            this.displayModal = 'block';
            document.body.style.overflow = 'hidden';
            this.petService.mypetList()
                .subscribe(function (result) {
                var status = result.Status;
                if (status != "Errored") {
                    _this.myPets = result.Data;
                    if (_this.myPets.length >= 0 && _this.myPets[0].PetId != 1)
                        _this.petLoveRequestDisabled = false;
                }
                else {
                    var toastOptions = _this.masterService.setToastOptions('Pet Love Request', 'You dont have pets to make love', 'mypets');
                    _this.toastaService.success(toastOptions);
                    _this.petLoveRequestDisabled = true;
                }
            });
        }
        else if (this.petType == "Boarding") {
            this.isBoarding = true;
            this.displayBoardingModal = 'block';
            document.body.style.overflow = 'hidden';
        }
        else if (this.petType == "Walker" || this.petType == "Trainer"
            || this.petType == "Rescuer"
            || this.petType == "Adoption"
            || this.petType == "Fluffy-Nut"
            || this.petType == "Spa"
            || this.petType == "Cab"
            || this.petType == "Volunteers") {
            this.displayCommonModal = 'block';
            document.body.style.overflow = 'hidden';
        }
    };
    SinglepetComponent.prototype.getPetData = function () {
        var _this = this;
        this.petService.getPetDetails(this.petId).subscribe(function (data) {
            _this.petData = data.Data[0];
        }, function (error) {
            console.log(error);
        });
    };
    SinglepetComponent.prototype.showHideFilter = function () {
        this.hideShowFilter = !this.hideShowFilter;
    };
    SinglepetComponent.prototype.petLoveRequest = function () {
        var _this = this;
        if (this.authService.isAuthenticated()) {
            if (this.selectedPetForLove) {
                var requestOwnerId = this.authService.getRequesterOwnerId();
                var data = {
                    "PetId": this.petData.PetId,
                    "PetOwnerId": this.petData.PetOwnerId,
                    "RequesterOwnerId": requestOwnerId,
                    "RequesterPetId": this.selectedPetForLove
                };
                this.petService.petLoveRequestsRequest(data, 'RequestPetMatingRequest')
                    .subscribe(function (result) {
                    var status = result.Status;
                    var errorMessage = result.ErrorMessage;
                    if (status != 'Errored') {
                        var toastOptions = _this.masterService.setToastOptions('Pet Love Request', 'Pet Love Rquest Placed Successfully', '');
                        _this.toastaService.success(toastOptions);
                        _this.displayModal = 'none';
                        _this.router.navigate(['/myrequests']);
                    }
                    else {
                        var toastOptions = _this.masterService.setToastOptions('Pet Love Request', errorMessage, '');
                        _this.toastaService.error(toastOptions);
                    }
                });
            }
            else {
                var toastOptions = this.masterService.setToastOptions('Pet Love Request', 'Please select Pet to make love request', '');
                this.toastaService.error(toastOptions);
                this.displayModal = 'block';
            }
        }
        else {
            var toastOptions = this.masterService.setToastOptions('Pet Love Request', 'Please login to continue', '');
            this.toastaService.error(toastOptions);
            this.router.navigate(['/signin']);
        }
    };
    SinglepetComponent.prototype.closeModal = function () {
        this.displayModal = 'none';
        this.displayBoardingModal = 'none';
        this.displayCommonModal = 'none';
        document.body.removeAttribute('style');
    };
    SinglepetComponent.prototype.petCommonModalRequest = function () {
        if (this.petType == "Walker") {
            this.petWalkerRequest();
        }
        else if (this.petType == "Trainer") {
            this.petTrainerRequest();
        }
        else if (this.petType == "Rescuer") {
            this.petRescuerRequest();
        }
        else if (this.petType == "Adoption" || this.petType == "Fluffy-Nut") {
            this.petAdoptionRequest();
        }
        else if (this.petType == "Spa") {
            this.petSpaRequest();
        }
        else if (this.petType == "Cab") {
            this.petCabRequest();
        }
        else if (this.petType == "Volunteers") {
            this.petVolutneersRequest();
        }
    };
    SinglepetComponent.prototype.petWalkerRequest = function () {
        var _this = this;
        var body = {
            "PetId": this.petData.PetId,
            "PetOwnerId": this.petData.PetOwnerId,
            "RequesterOwnerId": this.authService.getRequesterOwnerId(),
        };
        this.petService.petWalkerRequest(body).subscribe(function (result) {
            var status = result.Status;
            var errorMessage = result.ErrorMessage;
            if (status != 'Errored') {
                var toastOptions = _this.masterService.setToastOptions('Pet Walker Request', 'Pet Walker Rquest Placed Successfully', '');
                _this.toastaService.success(toastOptions);
                _this.closeModal();
                _this.router.navigate(['/myrequests']);
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Pet Walker Request', errorMessage, '');
                _this.toastaService.error(toastOptions);
            }
        });
    };
    SinglepetComponent.prototype.petTrainerRequest = function () {
        var _this = this;
        var body = {
            "PetId": this.petData.PetId,
            "PetOwnerId": this.petData.PetOwnerId,
            "RequesterOwnerId": this.authService.getRequesterOwnerId(),
        };
        this.petService.petTrainerRequest(body).subscribe(function (result) {
            var status = result.Status;
            var errorMessage = result.ErrorMessage;
            if (status != 'Errored') {
                var toastOptions = _this.masterService.setToastOptions('Pet Trainer Request', 'Pet Trainer Rquest Placed Successfully', '');
                _this.toastaService.success(toastOptions);
                _this.closeModal();
                _this.router.navigate(['/myrequests']);
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Pet Trainer Request', errorMessage, '');
                _this.toastaService.error(toastOptions);
            }
        });
    };
    SinglepetComponent.prototype.petRescuerRequest = function () {
        var _this = this;
        var body = {
            "PetId": this.petData.PetId,
            "PetOwnerId": this.petData.PetOwnerId,
            "RequesterOwnerId": this.authService.getRequesterOwnerId(),
        };
        this.petService.petRescuerRequest(body).subscribe(function (result) {
            var status = result.Status;
            var errorMessage = result.ErrorMessage;
            if (status != 'Errored') {
                var toastOptions = _this.masterService.setToastOptions('Pet Rescuer Request', 'Pet Rescuer Rquest Placed Successfully', '');
                _this.toastaService.success(toastOptions);
                _this.closeModal();
                _this.router.navigate(['/myrequests']);
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Pet Rescuer Request', errorMessage, '');
                _this.toastaService.error(toastOptions);
            }
        });
    };
    SinglepetComponent.prototype.petAdoptionRequest = function () {
        var _this = this;
        var body = {
            "PetId": this.petData.PetId,
            "PetOwnerId": this.petData.PetOwnerId,
            "RequesterOwnerId": this.authService.getRequesterOwnerId(),
        };
        this.petService.petAdoptionRequest(body).subscribe(function (result) {
            var status = result.Status;
            var errorMessage = result.ErrorMessage;
            if (status != 'Errored') {
                var toastOptions = _this.masterService.setToastOptions('Pet Adoption Request', 'Pet Adoption Rquest Placed Successfully', '');
                _this.toastaService.success(toastOptions);
                _this.closeModal();
                _this.router.navigate(['/myrequests']);
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Pet Adoption Request', errorMessage, '');
                _this.toastaService.error(toastOptions);
            }
        });
    };
    SinglepetComponent.prototype.petSpaRequest = function () {
        var _this = this;
        var body = {
            "PetId": this.petData.PetId,
            "PetOwnerId": this.petData.PetOwnerId,
            "RequesterOwnerId": this.authService.getRequesterOwnerId(),
        };
        this.petService.petSpaRequest(body).subscribe(function (result) {
            var status = result.Status;
            var errorMessage = result.ErrorMessage;
            if (status != 'Errored') {
                var toastOptions = _this.masterService.setToastOptions('Pet SPA Request', 'Pet SPA Rquest Placed Successfully', '');
                _this.toastaService.success(toastOptions);
                _this.closeModal();
                _this.router.navigate(['/myrequests']);
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Pet SPA Request', errorMessage, '');
                _this.toastaService.error(toastOptions);
            }
        });
    };
    SinglepetComponent.prototype.petCabRequest = function () {
        var _this = this;
        var body = {
            "PetId": this.petData.PetId,
            "PetOwnerId": this.petData.PetOwnerId,
            "RequesterOwnerId": this.authService.getRequesterOwnerId(),
        };
        this.petService.petCabRequest(body).subscribe(function (result) {
            var status = result.Status;
            var errorMessage = result.ErrorMessage;
            if (status != 'Errored') {
                var toastOptions = _this.masterService.setToastOptions('Pet CAB Request', 'Pet CAB Rquest Placed Successfully', '');
                _this.toastaService.success(toastOptions);
                _this.closeModal();
                _this.router.navigate(['/myrequests']);
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Pet CAB Request', errorMessage, '');
                _this.toastaService.error(toastOptions);
            }
        });
    };
    SinglepetComponent.prototype.petVolutneersRequest = function () {
        var _this = this;
        var body = {
            "PetId": this.petData.PetId,
            "PetOwnerId": this.petData.PetOwnerId,
            "RequesterOwnerId": this.authService.getRequesterOwnerId(),
        };
        this.petService.petVolutneersRequest(body).subscribe(function (result) {
            var status = result.Status;
            var errorMessage = result.ErrorMessage;
            if (status != 'Errored') {
                var toastOptions = _this.masterService.setToastOptions('Pet Volunteers Request', 'Pet CAB Rquest Placed Successfully', '');
                _this.toastaService.success(toastOptions);
                _this.closeModal();
                _this.router.navigate(['/myrequests']);
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Pet Volunteers Request', errorMessage, '');
                _this.toastaService.error(toastOptions);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SinglepetComponent.prototype, "fileInput", void 0);
    SinglepetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-singlepet',
            template: __webpack_require__(/*! ./singlepet.component.html */ "./src/app/modules/singlepet/singlepet.component.html"),
            styles: [__webpack_require__(/*! ./singlepet.component.less */ "./src/app/modules/singlepet/singlepet.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_petservice_service__WEBPACK_IMPORTED_MODULE_5__["PetserviceService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"],
            projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ToastaService"]])
    ], SinglepetComponent);
    return SinglepetComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL;
    }
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    AuthService.prototype.getRequesterOwnerId = function () {
        return localStorage.getItem('RequesterOwnerId');
    };
    AuthService.prototype.isAuthenticated = function () {
        // get the token
        var token = this.getToken();
        // return a boolean reflecting 
        // whether or not the token is expired
        //return tokenNotExpired(token);
        return !!token;
    };
    AuthService.prototype.signIn = function (UserName, Password) {
        var body = {
            "UserName": UserName,
            "Password": Password,
            "DeviceId": localStorage.getItem('fcmToken'),
            "DeviceType": "Web"
        };
        return this.http.post(this.baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.signin, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    AuthService.prototype.signOut = function () {
        return this.http.post(this.baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.signOut, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    AuthService.prototype.signUp = function (user) {
        var body = {
            "FirstName": user.FirstName,
            "AreaId": user.AreaId,
            "Dob": user.Dob,
            "UserId": user.UserId,
            "LastName": user.LastName,
            "MobilePhone": user.MobilePhone,
            "EmailId": user.EmailId,
            "Gender": user.Gender,
            "Password": user.Password,
            "EmailNotification": user.EmailNotification,
            "SmsNotification": user.SmsNotification,
            "UserProfilePicture": user.UserProfilePicture,
            "UserType": user.UserType,
            "CountryName": user.CountryName,
            "CityName": user.CityName,
            "CityId": user.CityId,
            "CountryId": user.CountryId,
            "AreaName": user.AreaName,
            "KCIRegistered": user.KCIRegistered,
            "KCIDetails": user.KCIDetails,
            "DeviceType": user.DeviceType,
            "ReferralCode": user.ReferralCode,
            "Latitude": user.Latitude,
            "Longitude": user.Longitude,
        };
        return this.http.post(this.baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.register, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    AuthService.prototype.updateProfile = function (user) {
        var body = {
            "FirstName": user.FirstName,
            "AreaId": user.AreaId,
            "Dob": user.Dob,
            "UserId": user.UserId,
            "LastName": user.LastName,
            "MobilePhone": user.MobilePhone,
            "EmailId": user.EmailId,
            "Gender": user.Gender,
            "Password": user.Password,
            "EmailNotification": user.EmailNotification,
            "SmsNotification": user.SmsNotification,
            "UserProfilePicture": user.UserProfilePicture,
            "UserType": user.UserType,
            "CountryName": user.CountryName,
            "CityName": user.CityName,
            "CityId": user.CityId,
            "CountryId": user.CountryId,
            "AreaName": user.AreaName,
            "KCIRegistered": user.KCIRegistered,
            "KCIDetails": user.KCIDetails,
            "DeviceType": user.DeviceType,
            "ReferralCode": user.ReferralCode,
            "Latitude": user.Latitude,
            "Longitude": user.Longitude,
        };
        return this.http.post(this.baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.updateprofile, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    AuthService.prototype.forgotPassword = function (email) {
        var body = {
            "EmailId": email
        };
        return this.http.post(this.baseUrl + 'MobileAccount/ForgotPassword', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
        }));
    };
    AuthService.prototype.getMyProfile = function () {
        return this.http.get(this.baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.getMyProfile);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    LoaderService.prototype.show = function () {
        this.loaderSubject.next({ show: true });
    };
    LoaderService.prototype.hide = function () {
        this.loaderSubject.next({ show: false });
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/services/master.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/master.service.ts ***!
  \********************************************/
/*! exports provided: MasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterService", function() { return MasterService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MasterService = /** @class */ (function () {
    function MasterService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL;
    }
    MasterService.prototype.getPetTypeList = function () {
        return this.http.get(this.baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.getPetTypes);
    };
    MasterService.prototype.getBreedList = function () {
        return this.http.get(this.baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.getBreeds);
    };
    MasterService.prototype.getCityList = function (countryId) {
        return this.http.get(this.baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.getCities + '?countryid=' + countryId);
    };
    MasterService.prototype.getAreaList = function (cityId) {
        return this.http.get(this.baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.getAreaList + '?cityid=' + cityId);
    };
    MasterService.prototype.getUserTypeList = function () {
        return this.http.get(this.baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.userTypes);
    };
    MasterService.prototype.getCountryList = function () {
        return this.http.get(this.baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.countryList);
    };
    MasterService.prototype.getDateProperFormat = function (dateToConvert) {
        var todayDate = dateToConvert;
        var currentMonth = (todayDate.getMonth() + 1).toString();
        var currentDate = todayDate.getDate().toString();
        currentMonth = currentMonth.length == 2 ? currentMonth : "0" + currentMonth;
        currentDate = currentDate.length == 2 ? currentDate : "0" + currentDate;
        return todayDate.getFullYear() + "-" + currentMonth + "-" + currentDate;
    };
    MasterService.prototype.getDateTimeProperFormat = function (dateToConvert) {
        var todayDate = dateToConvert;
        var currentMonth = (todayDate.getMonth() + 1).toString();
        var currentDate = todayDate.getDate().toString();
        var hours = todayDate.getHours();
        var minutes = todayDate.getMinutes();
        var curminutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + curminutes;
        currentMonth = currentMonth.length == 2 ? currentMonth : "0" + currentMonth;
        currentDate = currentDate.length == 2 ? currentDate : "0" + currentDate;
        return todayDate.getFullYear() + "-" + currentMonth + "-" + currentDate + "T" + strTime;
    };
    MasterService.prototype.saveImage = function (file) {
        if (file != undefined) {
            var formData = new FormData();
            formData.append('Content-Disposition', file);
            formData.append('name', 'DemoFieldName');
            formData.append('filename', file.name);
            formData.append('Content-Type', file.type);
            return this.http.post(this.baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.uploadFile, formData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                return response;
            }));
        }
        else {
            window.alert("Please add profile picture");
        }
    };
    MasterService.prototype.setToastOptions = function (title, msg, returnUrl) {
        var _this = this;
        var toastOptions = {
            title: title,
            msg: msg,
            theme: "default",
            onRemove: function () {
                // console.log('Toast ' + toast.id + ' has been removed!');
                if (returnUrl)
                    _this.router.navigate(["/" + returnUrl]);
            }
        };
        return toastOptions;
    };
    MasterService.prototype.getPetNews = function () {
        return this.http.post(this.baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.getPetNews, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }));
    };
    MasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MasterService);
    return MasterService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        //this.messages.push(message);
        //console.log(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/messaging-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/messaging-service.service.ts ***!
  \*******************************************************/
/*! exports provided: MessagingServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingServiceService", function() { return MessagingServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_compat_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs-compat/BehaviorSubject */ "./node_modules/rxjs-compat/BehaviorSubject.js");
/* harmony import */ var rxjs_compat_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessagingServiceService = /** @class */ (function () {
    function MessagingServiceService(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
        this.messaging = firebase__WEBPACK_IMPORTED_MODULE_4__["messaging"]();
        this.currentMessage = new rxjs_compat_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    MessagingServiceService.prototype.updateToken = function (token) {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (user) {
            var _a;
            if (!user)
                return;
            var data = (_a = {}, _a[user.uid] = token, _a);
            _this.db.object('tokens/').update(data);
        });
    };
    MessagingServiceService.prototype.getPermission = function () {
        var _this = this;
        this.messaging.requestPermission()
            .then(function () {
            console.log('Notification permission granted.');
            return _this.messaging.getToken();
        })
            .then(function (token) {
            console.log(token);
            localStorage.setItem('fcmToken', token);
            _this.updateToken(token);
            _this.receiveMessage();
        })
            .catch(function (err) {
            console.log('Unable to get permission to notify.', err);
        });
    };
    MessagingServiceService.prototype.receiveMessage = function () {
        var _this = this;
        alert("this is called");
        this.messaging.onMessage(function (payload) {
            console.log("Message received. ", payload);
            _this.currentMessage.next(payload);
        });
    };
    MessagingServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], MessagingServiceService);
    return MessagingServiceService;
}());



/***/ }),

/***/ "./src/app/services/petservice.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/petservice.service.ts ***!
  \************************************************/
/*! exports provided: PetserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetserviceService", function() { return PetserviceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetserviceService = /** @class */ (function () {
    function PetserviceService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL;
    }
    PetserviceService.prototype.searchPets = function (body, pageNumber) {
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.searchPets + "?pageNumber=" + pageNumber, body);
    };
    PetserviceService.prototype.searchTextPets = function (params, body) {
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.searchPets + '?' + params, body);
    };
    PetserviceService.prototype.getPetDetails = function (petId) {
        return this.http.get(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.petDetails + '?petId=' + petId);
    };
    PetserviceService.prototype.getLatitude = function () {
        var latitude = localStorage.getItem('latitude');
        if (latitude == "null") {
            latitude = "";
        }
        return latitude ? latitude : "0";
    };
    PetserviceService.prototype.getLongitude = function () {
        var longitude = localStorage.getItem('longitude');
        if (longitude == "null") {
            longitude = "";
        }
        return longitude ? longitude : "0";
    };
    PetserviceService.prototype.getAllRequest = function () {
        return this.http.get(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.myrequests);
    };
    PetserviceService.prototype.WidrawRequest = function (requestId) {
        return this.http.get(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.withdrawrequests + requestId);
    };
    PetserviceService.prototype.mypetList = function () {
        var body = {};
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.myPets, body);
    };
    PetserviceService.prototype.deleteMypet = function (petId) {
        var body = { "PetId": petId };
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.deletePet, body);
    };
    PetserviceService.prototype.makePetFavourite = function (petId) {
        var body = { "PetId": petId };
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.addToFavourites, body);
    };
    PetserviceService.prototype.saveMypet = function (myPet, petImage) {
        var body = {
            "PetName": myPet.PetName,
            "BreedName": myPet.BreedName,
            "Height": myPet.Height,
            "Wight": myPet.Wight,
            "Colors": myPet.Colors,
            "GroomingNeeds": myPet.GroomingNeeds,
            "ExerciseNeeds": myPet.ExerciseNeeds,
            "GoodWithDogs": myPet.GoodWithDogs,
            "WatchdogAbility": myPet.WatchdogAbility,
            "CountryName": myPet.CountryName,
            "CityName": myPet.CityName,
            "AreaName": myPet.AreaName,
            "HeatingCycleFrom": myPet.HeatingCycleFrom,
            "HeatingCycleTo": myPet.HeatingCycleTo,
            "PetGender": myPet.PetGender,
            "PictrueName": petImage,
            "PetDob": myPet.PetDob,
            "PetType": myPet.PetType,
            "KCIRegistered": myPet.KCIRegistered,
            "KCIDetails": myPet.KCIDetails,
            "AvilableForAdotpion": myPet.AvilableForAdotpion,
            "OfferPriceFrom": myPet.OfferPriceFrom,
            "OfferPriceTo": myPet.OfferPriceTo,
            "Parenting": myPet.Parenting,
            "Taken": myPet.Taken,
            "Latitude": myPet.Latitude,
            "Longitude": myPet.Longitude,
            "Description": myPet.Description,
            "WillingToSell": myPet.WillingToSell,
            "AffiliatedOrganization": myPet.AffiliatedOrganization
        };
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.savePet, body);
    };
    PetserviceService.prototype.updateMypet = function (myPet, petImage) {
        var body = {
            "PetId": myPet.PetId,
            "PetName": myPet.PetName,
            "BreedName": myPet.BreedName,
            "Height": myPet.Height,
            "Wight": myPet.Wight,
            "Colors": myPet.Colors,
            "GroomingNeeds": myPet.GroomingNeeds,
            "ExerciseNeeds": myPet.ExerciseNeeds,
            "GoodWithDogs": myPet.GoodWithDogs,
            "WatchdogAbility": myPet.WatchdogAbility,
            "CountryName": myPet.CountryName,
            "CityName": myPet.CityName,
            "AreaName": myPet.AreaName,
            "HeatingCycleFrom": myPet.HeatingCycleFrom,
            "HeatingCycleTo": myPet.HeatingCycleTo,
            "PetGender": myPet.PetGender,
            "PictrueName": petImage,
            "PetDob": myPet.PetDob,
            "PetType": myPet.PetType,
            "KCIRegistered": myPet.KCIRegistered,
            "KCIDetails": myPet.KCIDetails,
            "Description": myPet.Description,
            "AvilableForAdotpion": myPet.AvilableForAdotpion,
            "OfferPriceFrom": myPet.OfferPriceFrom,
            "OfferPriceTo": myPet.OfferPriceTo,
            "Parenting": myPet.Parenting,
            "Taken": myPet.Taken,
            "Latitude": myPet.Latitude,
            "Longitude": myPet.Longitude,
            "WillingToSell": myPet.WillingToSell,
            "AffiliatedOrganization": myPet.AffiliatedOrganization
        };
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.updatePet, body);
    };
    PetserviceService.prototype.mypetByPetId = function (petId) {
        return this.http.get(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.myPetDetails + petId);
    };
    PetserviceService.prototype.petLoveRequestsRequest = function (body, requestType) {
        return this.http.post(this.apiUrl + 'Utils/' + requestType, body);
    };
    PetserviceService.prototype.petBoardingRequest = function (body) {
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.boardingRequest, body);
    };
    PetserviceService.prototype.petWalkerRequest = function (body) {
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.addWalkerRequest, body);
    };
    PetserviceService.prototype.petTrainerRequest = function (body) {
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.addTrainingRequest, body);
    };
    PetserviceService.prototype.petRescuerRequest = function (body) {
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.addRescuerRequest, body);
    };
    PetserviceService.prototype.petAdoptionRequest = function (body) {
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.addAdoptionRequest, body);
    };
    PetserviceService.prototype.petSpaRequest = function (body) {
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.addSpaRequest, body);
    };
    PetserviceService.prototype.petCabRequest = function (body) {
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.addCabRequest, body);
    };
    PetserviceService.prototype.petVolutneersRequest = function (body) {
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.addVolunteersRequest, body);
    };
    PetserviceService.prototype.getExternalHtml = function (link) {
        return this.http.get(link);
    };
    PetserviceService.prototype.contactUsLogin = function (subject, message) {
        return this.http.get(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.contactus + ("?Subject=" + subject + "&Message=" + message));
    };
    PetserviceService.prototype.contactUs = function (name, mobile, email, message) {
        return this.http.get(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.contactus +
            ("?email=" + email + "&Message=" + message + "&name=" + name + "&mobileno=" + mobile));
    };
    PetserviceService.prototype.myBoardingDetails = function (requestId) {
        return this.http.post(this.apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.getBoardingRequestDetails + requestId, {});
    };
    PetserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PetserviceService);
    return PetserviceService;
}());



/***/ }),

/***/ "./src/app/services/reminder.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/reminder.service.ts ***!
  \**********************************************/
/*! exports provided: ReminderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderService", function() { return ReminderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReminderService = /** @class */ (function () {
    function ReminderService(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL;
    }
    ReminderService.prototype.getMyReminders = function () {
        var body = {};
        return this.http.post(this.apiUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.getMySchedules, body);
    };
    ReminderService.prototype.createReminder = function (body) {
        return this.http.post(this.apiUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.configureASchedule, body);
    };
    ReminderService.prototype.updateReminder = function (body) {
        return this.http.post(this.apiUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiEndPoints.updateMySchedule, body);
    };
    ReminderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReminderService);
    return ReminderService;
}());



/***/ }),

/***/ "./src/app/shared/components/boarding/boarding.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/boarding/boarding.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\r\n\r\n  <!-- Modal Header -->\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Boarding Request Details\r\n    </h4>\r\n    <button type=\"button\" class=\"close\" (click)=\"closeModal()\">&times;</button>\r\n  </div>\r\n\r\n  <!-- Modal body -->\r\n  <div class=\"modal-body\" >\r\n    <div class=\"form-group\" >\r\n      <label>Start Date<sup style=\"color: red\">*</sup></label>\r\n      <input type=\"date\" [disabled]=\"isEditView\" class=\"form-control\" [(ngModel)]=\"boardingStartDate\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>End Date<sup style=\"color: red\">*</sup></label>\r\n      <input type=\"date\" [disabled]=\"isEditView\" class=\"form-control\" [(ngModel)]=\"boardingEndDate\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Select Breed<sup style=\"color: red\">*</sup></label>\r\n      <select class=\"form-control\" [disabled]=\"isEditView\" [(ngModel)]=\"selectedBreed\" name=\"BreedName\">\r\n        <option *ngFor=\"let breed of breedList\" value=\"{{breed.BreedId}}\">{{breed.BreedName}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>No of Days</label>\r\n      <input type=\"number\" [disabled]=\"isEditView\" class=\"form-control\" [(ngModel)]=\"selectedNumberOfDays\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Food Type</label>\r\n      <select class=\"form-control\" [disabled]=\"isEditView\" [(ngModel)]=\"selectedFoodOption\">\r\n        <option value=\"Non Veg\">\r\n          Non Veg\r\n        </option>\r\n        <option value=\"Veg\">\r\n          Veg\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Pickup Drop Needed</label>\r\n      <select class=\"form-control\" [disabled]=\"isEditView\" [(ngModel)]=\"selectedPickupDrop\">\r\n        <option value=\"1\">\r\n          Yes\r\n        </option>\r\n        <option value=\"0\">\r\n          No\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Other Requirements</label>\r\n      <input type=\"text\" class=\"form-control\" [disabled]=\"isEditView\" [(ngModel)]=\"otherRequirements\">\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal footer -->\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" *ngIf=\"!isEditView\" class=\"btn btn-info\" (click)=\"petBoardingRequest()\">Send</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"closeModal()\">Close</button>\r\n  </div>"

/***/ }),

/***/ "./src/app/shared/components/boarding/boarding.component.less":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/boarding/boarding.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n  margin-bottom: 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYm9hcmRpbmcvRDovcGV0cGFscy9raXJhbmdpdC9wZXRwYWxzLmxvdmUtd2Vic2l0ZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JvYXJkaW5nL2JvYXJkaW5nLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ib2FyZGluZy9ib2FyZGluZy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0NDQ0giLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ib2FyZGluZy9ib2FyZGluZy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3Vwe1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuIiwiLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/boarding/boarding.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/boarding/boarding.component.ts ***!
  \******************************************************************/
/*! exports provided: BoardingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardingComponent", function() { return BoardingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/petservice.service */ "./src/app/services/petservice.service.ts");
/* harmony import */ var projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ngx-toasta/src/public_api */ "./projects/ngx-toasta/src/public_api.ts");
/* harmony import */ var src_app_services_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/master.service */ "./src/app/services/master.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BoardingComponent = /** @class */ (function () {
    function BoardingComponent(petService, authService, router, masterService, toastaService) {
        this.petService = petService;
        this.authService = authService;
        this.router = router;
        this.masterService = masterService;
        this.toastaService = toastaService;
        this.isBoardingClicked = false;
        this.isEditView = false;
        this.closeModalPopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //public petData: any;
        this.displayBoardingModal = 'none';
        this.breedList = [];
        this.selectedBreed = '';
        this.selectedFoodOption = 'Non Veg';
        this.selectedPickupDrop = 1;
        this.selectedNumberOfDays = 1;
        this.otherRequirements = "";
        this.boardingStartDate = "";
        this.boardingEndDate = "";
    }
    BoardingComponent.prototype.ngOnInit = function () {
        console.log(this.petData);
    };
    BoardingComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.isBoardingClicked) {
            if (this.breedList.length == 0) {
                this.masterService.getBreedList()
                    .subscribe(function (breedList) {
                    _this.breedList = breedList.Data;
                });
            }
            if (this.isEditView) {
                this.getBoardingInfo(this.petData.PetMatingRequestId);
            }
            else {
                this.boardingStartDate = this.getCurrentDate(new Date());
                this.boardingEndDate = this.getCurrentDate(new Date());
            }
        }
    };
    BoardingComponent.prototype.getCurrentDate = function (dateToConvert) {
        var todayDate = dateToConvert;
        var currentMonth = (todayDate.getMonth() + 1).toString();
        var currentDate = todayDate.getDate().toString();
        currentMonth = currentMonth.length == 2 ? currentMonth : "0" + currentMonth;
        currentDate = currentDate.length == 2 ? currentDate : "0" + currentDate;
        return todayDate.getFullYear() + "-" + currentMonth + "-" + currentDate;
    };
    BoardingComponent.prototype.petBoardingRequest = function () {
        var _this = this;
        if (!this.selectedBreed) {
            var toastOptions = this.masterService.setToastOptions('Pet Boarding Request', 'Please select Breed', '');
            this.toastaService.error(toastOptions);
            return false;
        }
        var body = {
            "PetId": this.petData.PetId,
            "PetOwnerId": this.petData.PetOwnerId,
            "RequesterOwnerId": this.authService.getRequesterOwnerId(),
            "RequesterPetId": "",
            "BoardingRequestDetails": [{
                    "StartDate": this.boardingStartDate,
                    "EndDate": this.boardingEndDate,
                    "BreedId": this.selectedBreed,
                    "BoardingAgencyId": this.petData.PetOwnerId,
                    "NumberOfDays": this.selectedNumberOfDays,
                    "TypeOfFood": this.selectedFoodOption,
                    "PickUpDropNeeded": this.selectedPickupDrop == 0 ? 0 : 1,
                    "OtherRequirements": this.otherRequirements
                }]
        };
        this.petService.petBoardingRequest(body).subscribe(function (result) {
            var status = result.Status;
            var errorMessage = result.ErrorMessage;
            if (status != 'Errored') {
                var toastOptions = _this.masterService.setToastOptions('Pet Boarding Request', 'Pet Boarding Rquest Placed Successfully', '');
                _this.toastaService.success(toastOptions);
                _this.closeModal();
                _this.router.navigate(['/myrequests']);
            }
            else {
                var toastOptions = _this.masterService.setToastOptions('Pet Boarding Request', errorMessage, '');
                _this.toastaService.error(toastOptions);
            }
        });
    };
    BoardingComponent.prototype.closeModal = function () {
        this.closeModalPopup.emit();
    };
    BoardingComponent.prototype.getBoardingInfo = function (requestId) {
        var _this = this;
        this.petService.myBoardingDetails(requestId).subscribe(function (result) {
            var boardingInfo = result.Data;
            console.log(boardingInfo);
            _this.boardingStartDate = _this.convertDateFormats(boardingInfo.StartDate);
            _this.boardingEndDate = _this.convertDateFormats(boardingInfo.EndDate);
            _this.otherRequirements = boardingInfo.OtherRequirements;
            _this.selectedNumberOfDays = boardingInfo.NumberOfDays;
            _this.selectedBreed = boardingInfo.BreedId;
            _this.selectedPickupDrop = boardingInfo.PickUpDropNeeded ? 1 : 0;
            _this.selectedFoodOption = boardingInfo.TypeOfFood;
        });
    };
    BoardingComponent.prototype.convertDateFormats = function (date) {
        var parts = date.split('-');
        var mydate = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
        return this.getCurrentDate(mydate);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BoardingComponent.prototype, "petData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BoardingComponent.prototype, "isBoardingClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BoardingComponent.prototype, "isEditView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BoardingComponent.prototype, "closeModalPopup", void 0);
    BoardingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boarding',
            template: __webpack_require__(/*! ./boarding.component.html */ "./src/app/shared/components/boarding/boarding.component.html"),
            styles: [__webpack_require__(/*! ./boarding.component.less */ "./src/app/shared/components/boarding/boarding.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_services_petservice_service__WEBPACK_IMPORTED_MODULE_2__["PetserviceService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_master_service__WEBPACK_IMPORTED_MODULE_4__["MasterService"],
            projects_ngx_toasta_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToastaService"]])
    ], BoardingComponent);
    return BoardingComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/iconlist/iconlist.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/iconlist/iconlist.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row iconsClass\">\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a [routerLink]=\"['/petlove/Boarding']\"> <img src=\"assets/images/pet_boarding.png\" class=\"img-responsive imageClass\">\r\n      <p>Pet Boarding</p></a></center>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"col-md-2 col-xs-3\">\r\n    <div class=\"icon\">\r\n      <center><a [routerLink]=\"['/petlove']\"> <img src=\"assets/images/petlove.png\" class=\"img-responsive imageClass\">\r\n      <p>Pet Love</p></a></center>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a [routerLink]=\"['/petlove/Adoption']\"> <img src=\"assets/images/6.png\" class=\"img-responsive imageClass\">\r\n      <p>Pet Adoption</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a (click)=\"onExternalLinkClick('barbox')\"> <img src=\"assets/images/14.png\" class=\"img-responsive imageClass\">\r\n      <p>Paw's wonder</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a (click)=\"onExternalLinkClick('wagandtail')\"> <img src=\"assets/images/WL.jpg\" class=\"img-responsive imageClass\">\r\n      <p>Wag & Love</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a [routerLink]=\"['/petlove/Cab']\"> <img src=\"assets/images/cab.png\" class=\"img-responsive imageClass\">\r\n      <p>Pet Cab</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a (click)=\"onExternalLinkClick('food')\"> <img src=\"assets/images/home_delivery.png\" class=\"img-responsive imageClass\">\r\n      <p>Pet Food</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3\">\r\n    <div class=\"icon\">\r\n      <center><a [routerLink]=\"['/petlove/Walker']\"> <img src=\"assets/images/5.png\" class=\"img-responsive imageClass\">\r\n      <p>Pet Walker</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a [routerLink]=\"['/petlove/Trainer']\"> <img src=\"assets/images/training.png\" class=\"img-responsive imageClass\">\r\n      <p>Pet Trainer</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a [routerLink]=\"['/petlove/Spa']\"> <img src=\"assets/images/pet_spa.png\" class=\"img-responsive imageClass\">\r\n      <p>Pet Spa</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3\">\r\n    <div class=\"icon\">\r\n      <center><a (click)=\"onExternalLinkClick('snapdeal')\"> <img src=\"assets/images/petneeds.png\" class=\"img-responsive imageClass\">\r\n      <p>Pet Needs</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3\">\r\n    <div class=\"icon\">\r\n      <center><a (click)=\"onStoresClick()\"> <img src=\"assets/images/3.png\" class=\"img-responsive imageClass\">\r\n      <p>Near By Stores</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3\">\r\n    <div class=\"icon\">\r\n      <center><a (click)=\"onClinicClick()\"> <img src=\"assets/images/4.png\" class=\"img-responsive imageClass\">\r\n      <p>Near By Vet Clinic</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a (click)=\"onExternalLinkClick('nutrition')\"> <img src=\"assets/images/nutrition.png\" class=\"img-responsive imageClass\">\r\n      <p>Pet Nutrition</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a [routerLink]=\"['/petlove/Rescuer']\"> <img src=\"assets/images/rescuer.png\" class=\"img-responsive imageClass\">\r\n      <p>Pet Rescuer</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a [routerLink]=\"['/reminders']\"> <img src=\"assets/images/15.png\" class=\"img-responsive imageClass\">\r\n      <p>Reminder</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a [routerLink]=\"['/petlove/Volunteers']\"> <img src=\"assets/images/volunteers.png\" class=\"img-responsive imageClass\">\r\n      <p>Volunteers</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a [routerLink]=\"['/petlove/Fluffy-Nut']\"> <img src=\"assets/images/FluppyNut.jpg\" class=\"img-responsive imageClass\">\r\n      <p>Fluffy Nut</p></a></center>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-2 col-xs-3 \">\r\n    <div class=\"icon\">\r\n      <center><a [routerLink]=\"['/petnews']\"> <img src=\"assets/images/NewsIcon.jpg\" class=\"img-responsive imageClass\">\r\n      <p>Pet News</p></a></center>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/iconlist/iconlist.component.less":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/iconlist/iconlist.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imageClass {\n  height: 40px !important;\n  width: 40px !important;\n}\n.iconsClass a:hover {\n  text-decoration: none !important;\n  cursor: pointer !important;\n  color: #333;\n}\n.iconsClass a {\n  text-decoration: none !important;\n  cursor: pointer !important;\n  color: #333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaWNvbmxpc3QvRDovcGV0cGFscy9raXJhbmdpdC9wZXRwYWxzLmxvdmUtd2Vic2l0ZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ljb25saXN0L2ljb25saXN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pY29ubGlzdC9pY29ubGlzdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsdUJBQUE7Q0NDSDtBRENEO0VBQ0ksaUNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7Q0NDSDtBRENEO0VBQ0ksaUNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7Q0NDSCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ljb25saXN0L2ljb25saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlQ2xhc3N7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6NDBweCAhaW1wb3J0YW50O1xufVxuLmljb25zQ2xhc3MgYTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZSAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuLmljb25zQ2xhc3MgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZSAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjpwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMzMzM7XG59IiwiLmltYWdlQ2xhc3Mge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbn1cbi5pY29uc0NsYXNzIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmljb25zQ2xhc3MgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzMzM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/iconlist/iconlist.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/iconlist/iconlist.component.ts ***!
  \******************************************************************/
/*! exports provided: IconlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconlistComponent", function() { return IconlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconlistComponent = /** @class */ (function () {
    function IconlistComponent() {
    }
    IconlistComponent.prototype.ngOnInit = function () {
    };
    IconlistComponent.prototype.onExternalLinkClick = function (redirectUri) {
        var currentUser = localStorage.getItem('currentUser');
        var emailId = localStorage.getItem('emailId');
        var latitude = localStorage.getItem('latitude');
        var longitude = localStorage.getItem('longitude');
        var redirectParameters = "";
        if (currentUser) {
            currentUser = JSON.parse(currentUser);
            redirectParameters = "&Email=" + emailId + "&UserName=&password=admin&FirstName=" + currentUser.FirstName + "&LastName=" + currentUser.LastName + "&PhoneNo=" + currentUser.MobilePhone + "&longitude=" + longitude + "&latitude=" + latitude;
        }
        else if (latitude) {
            redirectParameters = "&longitude=" + longitude + "&latitude=" + latitude;
        }
        switch (redirectUri) {
            case "snapdeal":
                redirectParameters = 'Redirect=snapdeal' + redirectParameters;
                break;
            case "food":
                redirectParameters = 'Redirect=litepurse' + redirectParameters;
                break;
            case "nutrition":
                redirectParameters = 'Redirect=nutrition' + redirectParameters;
                break;
            case "barbox":
                redirectParameters = 'Redirect=BarkBox' + redirectParameters;
                break;
            case "wagandtail":
                redirectParameters = 'Redirect=wagandtail' + redirectParameters;
                break;
        }
        window.open("http://app.petpals.love/petpalsindialive/buypetneeds.aspx?" + redirectParameters, "_blank");
    };
    IconlistComponent.prototype.onStoresClick = function () {
        var latitude = localStorage.getItem('latitude');
        var longitude = localStorage.getItem('longitude');
        window.open("http://app.petpals.love/PetPalsIndiaLive/nearby.html?lat=" + latitude + "&lng=" + longitude + "&searchtype=stores", "_blank");
    };
    IconlistComponent.prototype.onClinicClick = function () {
        var latitude = localStorage.getItem('latitude');
        var longitude = localStorage.getItem('longitude');
        window.open("http://app.petpals.love/PetPalsIndiaLive/nearby.html?lat=" + latitude + "&lng=" + longitude + "&searchtype=vetdoctor", "_blank");
    };
    IconlistComponent.prototype.onNewsClick = function () {
        window.open(" http://app.petpals.love/petpalsindialive/news.aspx", "_blank");
    };
    IconlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iconlist',
            template: __webpack_require__(/*! ./iconlist.component.html */ "./src/app/shared/components/iconlist/iconlist.component.html"),
            styles: [__webpack_require__(/*! ./iconlist.component.less */ "./src/app/shared/components/iconlist/iconlist.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], IconlistComponent);
    return IconlistComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pre-bootstrap\" [class.hidden]=\"!show\">\r\n  <div class=\"messaging\" *ngIf=\"show\">\r\n    <!-- <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i> -->\r\n    <img style=\"position: absolute;\r\n    top: 50%;\r\n    left: 45%;\r\n    width: 150px;\r\n    height:150px;\r\n    margin: -50px 0px 0px -50px;\" src=\"assets/images/loading_cat.gif\"\r\n      class=\"img-responsive logo\">\r\n    <!-- <h1>\r\n      App is Loading\r\n    </h1>\r\n\r\n    <p>\r\n      Please stand by for your ticket to awesome-town!\r\n    </p> -->\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.less":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pre-bootstrap {\n  background: rgba(0, 0, 0, 0.5);\n  bottom: 0px;\n  left: 0px;\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  z-index: 999999;\n}\n#pre-bootstrap div.messaging {\n  color: #FFFFFF;\n  font-family: monospace;\n  left: 0px;\n  margin-top: -37px;\n  position: absolute;\n  right: 0px;\n  text-align: center;\n  top: 50%;\n}\n#pre-bootstrap h1 {\n  font-size: 26px;\n  line-height: 35px;\n  margin: 0px 0px 20px 0px;\n}\n#pre-bootstrap p {\n  font-size: 18px;\n  line-height: 14px;\n  margin: 0px 0px 0px 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL0Q6L3BldHBhbHMva2lyYW5naXQvcGV0cGFscy5sb3ZlLXdlYnNpdGUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtDQ0NEO0FERUQ7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7Q0NBRDtBREdEO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0NDREQ7QURJRDtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtDQ0ZEIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcmUtYm9vdHN0cmFwIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG59XG5cbiNwcmUtYm9vdHN0cmFwIGRpdi5tZXNzYWdpbmcge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAtMzdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogNTAlO1xufVxuXG4jcHJlLWJvb3RzdHJhcCBoMSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcbn1cblxuI3ByZS1ib290c3RyYXAgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xufSIsIiNwcmUtYm9vdHN0cmFwIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG59XG4jcHJlLWJvb3RzdHJhcCBkaXYubWVzc2FnaW5nIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogLTM3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDUwJTtcbn1cbiNwcmUtYm9vdHN0cmFwIGgxIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xufVxuI3ByZS1ib290c3RyYXAgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loaderService.loaderState
            .subscribe(function (state) {
            _this.show = state.show;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/shared/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.less */ "./src/app/shared/components/loader/loader.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/mast-footer/mast-footer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/mast-footer/mast-footer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- footer -->\r\n\r\n<div class=\"container-fluid padding theme-bg-color\">\r\n\r\n    <h4 class=\"text-center \">\r\n        <i class=\"fa fa-facebook-f\" style=\"cursor:pointer\" (click)=\"onFBClick()\">\r\n\r\n        </i> &nbsp;&nbsp;\r\n        <!-- <i class=\"fa fa-google-plus\"></i>&nbsp;&nbsp; -->\r\n        <i class=\"fa fa-instagram\" style=\"cursor:pointer\" (click)=\"onInstaGramClick()\"></i>\r\n        &nbsp;&nbsp;<i class=\"fa fa-pinterest\" style=\"cursor:pointer\" (click)=\"onPinterestClick()\"></i>&nbsp;&nbsp;\r\n        <i class=\"fa fa-youtube\" style=\"cursor:pointer\" (click)=\"onYoutubeClick()\"></i></h4>\r\n    <p class=\"text-center \">Copyright @ 2019 Raki Petpals IT Solutions Pvt Ltd</p>\r\n    <!-- <div class=\"text-center \">Catalyzed by <a href=\"http://www.digitalcatalyst.in\" rel=\"noreferrer\" target=\"_blank\"> <img height=\"30px\"\r\n        src=\"assets/images/dc-logo.png\"></a></div> -->\r\n</div>\r\n\r\n<!-- end footer -->"

/***/ }),

/***/ "./src/app/shared/components/mast-footer/mast-footer.component.less":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/mast-footer/mast-footer.component.less ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21hc3QtZm9vdGVyL21hc3QtZm9vdGVyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/mast-footer/mast-footer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/mast-footer/mast-footer.component.ts ***!
  \************************************************************************/
/*! exports provided: MastFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastFooterComponent", function() { return MastFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MastFooterComponent = /** @class */ (function () {
    function MastFooterComponent() {
    }
    MastFooterComponent.prototype.ngOnInit = function () {
    };
    MastFooterComponent.prototype.onFBClick = function () {
        window.open("https://www.facebook.com/petpals.love/", "_blank");
    };
    MastFooterComponent.prototype.onInstaGramClick = function () {
        window.open("https://www.instagram.com/petpalslove/", "_blank");
    };
    MastFooterComponent.prototype.onYoutubeClick = function () {
        window.open("https://www.youtube.com/channel/UCJuHynWZfsNvI-AmK2M-Knw", "_blank");
    };
    MastFooterComponent.prototype.onPinterestClick = function () {
        window.open(" https://in.pinterest.com/petpalslove", "_blank");
    };
    MastFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mast-footer',
            template: __webpack_require__(/*! ./mast-footer.component.html */ "./src/app/shared/components/mast-footer/mast-footer.component.html"),
            styles: [__webpack_require__(/*! ./mast-footer.component.less */ "./src/app/shared/components/mast-footer/mast-footer.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], MastFooterComponent);
    return MastFooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/mast-head/mast-head.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/mast-head/mast-head.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top Bar -->\r\n<div class=\"container-fluid theme-bg-color \">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-1 hidden-xs hidden-sm\">\r\n        <h6><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>&nbsp;PETPALS</h6>\r\n      </div>\r\n\r\n      <div class=\"col-md-5\">\r\n        <h6><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>&nbsp;&nbsp;+91 9632232118 / +91 6364045762</h6>\r\n      </div>\r\n\r\n      <div class=\"col-md-3 hidden-xs hidden-sm\">\r\n        <h6 *ngIf=\"isUserLoggedIn\">Hi {{loggedinUserName}}</h6>\r\n      </div>\r\n\r\n      <div class=\"col-md-2 hidden-xs hidden-sm\">\r\n        <h6 class=\"pull-right\">\r\n          <i class=\"fa fa-facebook-f\" style=\"cursor:pointer\" (click)=\"onFBClick()\"> </i> &nbsp;&nbsp;\r\n          <!-- <i class=\"fa fa-google-plus\"></i>&nbsp;&nbsp; -->\r\n          <i class=\"fa fa-instagram\" style=\"cursor:pointer\" (click)=\"onInstaGramClick()\">\r\n          </i>&nbsp;&nbsp;<i class=\"fa fa-pinterest\" style=\"cursor:pointer\"\r\n            (click)=\"onPinterestClick()\"></i>&nbsp;&nbsp;<i class=\"fa fa-youtube\" style=\"cursor:pointer\"\r\n            (click)=\"onYoutubeClick()\"></i></h6>\r\n      </div>\r\n      <div class=\"col-md-1 hidden-xs hidden-sm \">\r\n        <h6 class=\"pull-left special-icon\">\r\n          <i class=\"fa fa-apple\" style=\"cursor:pointer\" (click)=\"onItunesClick()\"></i></h6>\r\n        <h6 class=\"pull-left special-icon\"> <i class=\"fa fa-android\" style=\"cursor:pointer\"\r\n            (click)=\"onGooglePlayClick()\"></i></h6>\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n<!-- End Top Bar -->\r\n\r\n\r\n<!-- Menu -->\r\n<nav class=\"navbar navbar-default\" role=\"navigation\">\r\n  <div class=\"container\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-brand-centered\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <div class=\"navbar-brand navbar-brand-centered\"><img src=\"assets/images/logo.png\" class=\"img-responsive logo\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar-brand-centered\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a [routerLink]=\"['/home']\" class=\"first\">Home</a></li>\r\n        <li><a [routerLink]=\"['/about']\">About</a></li>\r\n        <!-- <li><a [routerLink]=\"['/services']\">Services</a></li> -->\r\n\r\n        <li class=\"dropdown\">\r\n          <a [routerLink]=\"['/services']\" data-toggle=\"dropdown\" class=\"dropdown-toggle\"> Services</a>\r\n          <ul class=\"dropdown-menu\" id=\"menu1\">\r\n            <li>\r\n              <a href=\"#\">Pet Services <i class=\"fa fa-arrow-right arrowRight\" aria-hidden=\"true\"></i></a>\r\n              <ul class=\"dropdown-menu sub-menu\">\r\n                <li><a [routerLink]=\"['/petlove/Boarding']\">Pet Boarding</a></li>\r\n                <li><a [routerLink]=\"['/petlove/Trainer']\">Pet Trainer</a></li>\r\n                <li><a [routerLink]=\"['/petlove/Spa']\">Pet Spa</a></li>\r\n                <li><a [routerLink]=\"['/petlove/Cab']\">Pet Cab</a></li>\r\n                <li><a [routerLink]=\"['/petlove/Walker']\">Pet Walker</a></li>\r\n              </ul>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">Pet Shop <i class=\"fa fa-arrow-right arrowRight\" aria-hidden=\"true\"></i></a>\r\n              <ul class=\"dropdown-menu sub-menu1\">\r\n                <li><a style=\"cursor:pointer\" (click)=\"onExternalLinkClick('barbox')\">Paw's wonder</a></li>\r\n                <li><a style=\"cursor:pointer\" (click)=\"onExternalLinkClick('snapdeal')\">Pet Needs</a></li>\r\n                <li><a style=\"cursor:pointer\" (click)=\"onExternalLinkClick('nutrition')\">Pet Nutrition</a></li>\r\n                <li><a style=\"cursor:pointer\" (click)=\"onExternalLinkClick('wagandtail')\">Wag & Love</a></li>\r\n                <li><a style=\"cursor:pointer\" (click)=\"onStoresClick()\">Near By Stores</a></li>\r\n              </ul>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">Pet Adoption <i class=\"fa fa-arrow-right arrowRight\" aria-hidden=\"true\"></i></a>\r\n              <ul class=\"dropdown-menu sub-menu2\">\r\n                <li><a [routerLink]=\"['/petlove/Fluffy-Nut']\">Fluffy Nut</a></li>\r\n                <li><a [routerLink]=\"['/petlove/Adoption']\">Pet Adoption</a></li>\r\n                <li><a [routerLink]=\"['/petlove/Rescuer']\">Pet Rescuer</a></li>\r\n              </ul>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">Pet Utilities <i class=\"fa fa-arrow-right arrowRight\" aria-hidden=\"true\"></i></a>\r\n              <ul class=\"dropdown-menu sub-menu3\">\r\n                <li><a [routerLink]=\"['/reminders']\">Reminders</a></li>\r\n                <li><a [routerLink]=\"['/petnews']\">News</a></li>\r\n              </ul>\r\n            </li>\r\n            <!-- <li class=\"divider\"></li> -->\r\n            <!-- <li><a href=\"#\">Separated link</a></li> -->\r\n          </ul>\r\n        </li>\r\n\r\n\r\n        <li><a [routerLink]=\"['/products']\">Products</a></li>\r\n\r\n\r\n        <!-- <li><a [routerLink]=\"['/gallery']\">Gallery</a></li> -->\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <!-- <li><a [routerLink]=\"['/events']\">Event</a></li>\r\n        <li><a href=\"blog.html\">Blog</a></li> -->\r\n        <li><a [routerLink]=\"['/howitworks']\">How It Works</a></li>\r\n        <li><a [routerLink]=\"['/contactus']\">Contact Us</a></li>\r\n        <!-- <li class=\"hidden-sm hidden-xs\"><a href=\"#\"><span class=\"fa fa-bars\"></span></a></li> -->\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\"><span class=\"fa fa-bars\"></span></a>\r\n          <ul class=\"dropdown-menu\" id=\"menu1\">\r\n            <!-- <li>\r\n              <a href=\"#\">2-level Menu <i class=\"icon-arrow-right\"></i></a>\r\n              <ul class=\"dropdown-menu sub-menu\">\r\n                <li><a href=\"#\">Action</a></li>\r\n                <li><a href=\"#\">Another action</a></li>\r\n                <li><a href=\"#\">Something else here</a></li>\r\n                <li class=\"divider\"></li>\r\n                <li class=\"nav-header\">Nav header</li>\r\n                <li><a href=\"#\">Separated link</a></li>\r\n                <li><a href=\"#\">One more separated link</a></li>\r\n              </ul>\r\n            </li> -->\r\n            <li><a [routerLink]=\"['/signup']\" *ngIf=\"!isUserLoggedIn\">Sign Up</a></li>\r\n            <li><a [routerLink]=\"['/signin']\" *ngIf=\"!isUserLoggedIn\">Sign In</a></li>\r\n            <li><a [routerLink]=\"['/myprofile']\" *ngIf=\"isUserLoggedIn\">My Profile</a></li>\r\n            <li><a [routerLink]=\"['/myrequests']\" *ngIf=\"isUserLoggedIn\">My Requests</a></li>\r\n            <li><a [routerLink]=\"['/reminders']\" *ngIf=\"isUserLoggedIn\">My Reminders</a></li>\r\n            <li><a [routerLink]=\"['/mypets']\" *ngIf=\"isUserLoggedIn\">My Pets</a></li>\r\n            <li><a *ngIf=\"isUserLoggedIn\" style=\"cursor: pointer;\" (click)=\"logout()\">Logout</a></li>\r\n\r\n            <!-- <li class=\"divider\"></li> -->\r\n            <!-- <li><a href=\"#\">Separated link</a></li> -->\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n<!-- Menu End -->"

/***/ }),

/***/ "./src/app/shared/components/mast-head/mast-head.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/mast-head/mast-head.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-nav {\n  padding: 9px 0;\n}\n.dropdown-menu .sub-menu {\n  left: 100%;\n  position: absolute;\n  top: 0;\n  visibility: hidden;\n  margin-top: -1px;\n}\n.dropdown-menu .sub-menu1 {\n  left: 100%;\n  position: absolute;\n  top: 30px;\n  visibility: hidden;\n  margin-top: -1px;\n}\n.dropdown-menu .sub-menu2 {\n  left: 100%;\n  position: absolute;\n  top: 55px;\n  visibility: hidden;\n  margin-top: -1px;\n}\n.dropdown-menu .sub-menu3 {\n  left: 100%;\n  position: absolute;\n  top: 80px;\n  visibility: hidden;\n  margin-top: -1px;\n}\n.dropdown-menu li:hover .sub-menu {\n  visibility: visible;\n}\n.dropdown-menu li:hover .sub-menu1 {\n  visibility: visible;\n}\n.dropdown-menu li:hover .sub-menu2 {\n  visibility: visible;\n}\n.dropdown-menu li:hover .sub-menu3 {\n  visibility: visible;\n}\n.dropdown:hover .dropdown-menu {\n  display: block;\n}\n.nav-tabs .dropdown-menu,\n.nav-pills .dropdown-menu,\n.navbar .dropdown-menu {\n  margin-top: 0;\n}\n.navbar .sub-menu:before {\n  border-bottom: 7px solid transparent;\n  border-left: none;\n  border-right: 7px solid rgba(0, 0, 0, 0.2);\n  border-top: 7px solid transparent;\n  left: -7px;\n  top: 10px;\n}\n.navbar .sub-menu:after {\n  border-top: 6px solid transparent;\n  border-left: none;\n  border-right: 6px solid #fff;\n  border-bottom: 6px solid transparent;\n  left: 10px;\n  top: 11px;\n  left: -6px;\n}\n.arrowRight {\n  float: right;\n  padding-top: 2px;\n  color: #2b2a2a;\n}\n.arrowRight:hover {\n  float: right;\n  padding-top: 2px;\n  color: #000000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWFzdC1oZWFkL0Q6L3BldHBhbHMva2lyYW5naXQvcGV0cGFscy5sb3ZlLXdlYnNpdGUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tYXN0LWhlYWQvbWFzdC1oZWFkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9tYXN0LWhlYWQvbWFzdC1oZWFkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtDQ0FIO0FER0M7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtDQ0RIO0FER0M7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtDQ0RIO0FER0M7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtDQ0RIO0FER0M7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtDQ0RIO0FER0M7RUFDRSxvQkFBQTtDQ0RIO0FER0M7RUFDRSxvQkFBQTtDQ0RIO0FER0M7RUFDRSxvQkFBQTtDQ0RIO0FER0M7RUFDRSxvQkFBQTtDQ0RIO0FER0M7RUFDRSxlQUFBO0NDREg7QURJQzs7O0VBR0UsY0FBQTtDQ0ZIO0FES0M7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0NDSEg7QURNQztFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0NDSkg7QURNRDtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7Q0NKRDtBRE1EO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtDQ0pEIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWFzdC1oZWFkL21hc3QtaGVhZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgXG4gIC5zaWRlYmFyLW5hdiB7XG4gICAgcGFkZGluZzogOXB4IDA7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi1tZW51IC5zdWItbWVudSB7XG4gICAgbGVmdDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICB9XG4gIC5kcm9wZG93bi1tZW51IC5zdWItbWVudTEge1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzBweDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgfVxuICAuZHJvcGRvd24tbWVudSAuc3ViLW1lbnUyIHtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU1cHg7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnUgLnN1Yi1tZW51MyB7XG4gICAgbGVmdDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4MHB4O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICB9XG4gIC5kcm9wZG93bi1tZW51IGxpOmhvdmVyIC5zdWItbWVudXtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC5kcm9wZG93bi1tZW51IGxpOmhvdmVyIC5zdWItbWVudTF7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICAuZHJvcGRvd24tbWVudSBsaTpob3ZlciAuc3ViLW1lbnUye1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgLmRyb3Bkb3duLW1lbnUgbGk6aG92ZXIgLnN1Yi1tZW51M3tcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5uYXYtdGFicyAuZHJvcGRvd24tbWVudSxcbiAgLm5hdi1waWxscyAuZHJvcGRvd24tbWVudSxcbiAgLm5hdmJhciAuZHJvcGRvd24tbWVudSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBcbiAgLm5hdmJhciAuc3ViLW1lbnU6YmVmb3JlIHtcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBsZWZ0OiAtN3B4O1xuICAgIHRvcDogMTBweDtcbiAgfVxuICBcbiAgLm5hdmJhciAuc3ViLW1lbnU6YWZ0ZXIge1xuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRvcDogMTFweDtcbiAgICBsZWZ0OiAtNnB4O1xuICB9XG4uYXJyb3dSaWdodHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBjb2xvcjogIzJiMmEyYTtcbn1cbi5hcnJvd1JpZ2h0OmhvdmVye1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuICAgXG5cbiIsIi5zaWRlYmFyLW5hdiB7XG4gIHBhZGRpbmc6IDlweCAwO1xufVxuLmRyb3Bkb3duLW1lbnUgLnN1Yi1tZW51IHtcbiAgbGVmdDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogLTFweDtcbn1cbi5kcm9wZG93bi1tZW51IC5zdWItbWVudTEge1xuICBsZWZ0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuLmRyb3Bkb3duLW1lbnUgLnN1Yi1tZW51MiB7XG4gIGxlZnQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NXB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG4uZHJvcGRvd24tbWVudSAuc3ViLW1lbnUzIHtcbiAgbGVmdDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwcHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogLTFweDtcbn1cbi5kcm9wZG93bi1tZW51IGxpOmhvdmVyIC5zdWItbWVudSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uZHJvcGRvd24tbWVudSBsaTpob3ZlciAuc3ViLW1lbnUxIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5kcm9wZG93bi1tZW51IGxpOmhvdmVyIC5zdWItbWVudTIge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmRyb3Bkb3duLW1lbnUgbGk6aG92ZXIgLnN1Yi1tZW51MyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYXYtdGFicyAuZHJvcGRvd24tbWVudSxcbi5uYXYtcGlsbHMgLmRyb3Bkb3duLW1lbnUsXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5uYXZiYXIgLnN1Yi1tZW51OmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBsZWZ0OiAtN3B4O1xuICB0b3A6IDEwcHg7XG59XG4ubmF2YmFyIC5zdWItbWVudTphZnRlciB7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAxMXB4O1xuICBsZWZ0OiAtNnB4O1xufVxuLmFycm93UmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIGNvbG9yOiAjMmIyYTJhO1xufVxuLmFycm93UmlnaHQ6aG92ZXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/mast-head/mast-head.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/mast-head/mast-head.component.ts ***!
  \********************************************************************/
/*! exports provided: MastHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastHeadComponent", function() { return MastHeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MastHeadComponent = /** @class */ (function () {
    function MastHeadComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isUserLoggedIn = false;
        this.loggedinUserName = "";
    }
    MastHeadComponent.prototype.ngOnInit = function () {
        if (!!this.authService.getToken()) {
            this.isUserLoggedIn = true;
            var currentUser = this.authService.getCurrentUser();
            this.loggedinUserName = currentUser.FirstName + ", " + currentUser.LastName;
        }
    };
    MastHeadComponent.prototype.logout = function () {
        var _this = this;
        var latitude = localStorage.getItem('latitude');
        var longitude = localStorage.getItem('longitude');
        var fcmToken = localStorage.getItem('fcmToken');
        //this.router.navigate(['/']);
        this.authService.signOut()
            .subscribe(function (result) {
            localStorage.clear();
            localStorage.setItem('latitude', latitude);
            localStorage.setItem('longitude', longitude);
            localStorage.setItem('fcmToken', fcmToken);
            _this.router.navigate(['/']);
        });
    };
    MastHeadComponent.prototype.onFBClick = function () {
        window.open("https://www.facebook.com/petpals.love/", "_blank");
    };
    MastHeadComponent.prototype.onInstaGramClick = function () {
        window.open("https://www.instagram.com/petpalslove/", "_blank");
    };
    MastHeadComponent.prototype.onYoutubeClick = function () {
        window.open("https://www.youtube.com/channel/UCJuHynWZfsNvI-AmK2M-Knw", "_blank");
    };
    MastHeadComponent.prototype.onGooglePlayClick = function () {
        window.open("https://play.google.com/store/apps/details?id=com.encephalonit.petpals&hl=en", "_blank");
    };
    MastHeadComponent.prototype.onItunesClick = function () {
        window.open("https://itunes.apple.com/us/app/petpals-pet-care-app/id1261370740?mt=8", "_blank");
    };
    MastHeadComponent.prototype.onPinterestClick = function () {
        window.open(" https://in.pinterest.com/petpalslove", "_blank");
    };
    MastHeadComponent.prototype.onExternalLinkClick = function (redirectUri) {
        var currentUser = localStorage.getItem('currentUser');
        var emailId = localStorage.getItem('emailId');
        var latitude = localStorage.getItem('latitude');
        var longitude = localStorage.getItem('longitude');
        var redirectParameters = "";
        if (currentUser) {
            currentUser = JSON.parse(currentUser);
            redirectParameters = "&Email=" + emailId + "&UserName=&password=admin&FirstName=" + currentUser.FirstName + "&LastName=" + currentUser.LastName + "&PhoneNo=" + currentUser.MobilePhone + "&longitude=" + longitude + "&latitude=" + latitude;
        }
        else if (latitude) {
            redirectParameters = "&longitude=" + longitude + "&latitude=" + latitude;
        }
        switch (redirectUri) {
            case "snapdeal":
                redirectParameters = 'Redirect=snapdeal' + redirectParameters;
                break;
            case "food":
                redirectParameters = 'Redirect=litepurse' + redirectParameters;
                break;
            case "nutrition":
                redirectParameters = 'Redirect=nutrition' + redirectParameters;
                break;
            case "barbox":
                redirectParameters = 'Redirect=BarkBox' + redirectParameters;
                break;
            case "wagandtail":
                redirectParameters = 'Redirect=wagandtail' + redirectParameters;
                break;
        }
        window.open("http://app.petpals.love/petpalsindialive/buypetneeds.aspx?" + redirectParameters, "_blank");
    };
    MastHeadComponent.prototype.onStoresClick = function () {
        var latitude = localStorage.getItem('latitude');
        var longitude = localStorage.getItem('longitude');
        window.open("http://app.petpals.love/PetPalsIndiaLive/nearby.html?lat=" + latitude + "&lng=" + longitude + "&searchtype=stores", "_blank");
    };
    MastHeadComponent.prototype.onClinicClick = function () {
        var latitude = localStorage.getItem('latitude');
        var longitude = localStorage.getItem('longitude');
        window.open("http://app.petpals.love/PetPalsIndiaLive/nearby.html?lat=" + latitude + "&lng=" + longitude + "&searchtype=vetdoctor", "_blank");
    };
    MastHeadComponent.prototype.onNewsClick = function () {
        window.open(" http://app.petpals.love/petpalsindialive/news.aspx", "_blank");
    };
    MastHeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mast-head',
            template: __webpack_require__(/*! ./mast-head.component.html */ "./src/app/shared/components/mast-head/mast-head.component.html"),
            styles: [__webpack_require__(/*! ./mast-head.component.less */ "./src/app/shared/components/mast-head/mast-head.component.less")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MastHeadComponent);
    return MastHeadComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/nav-menu/nav-menu.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/nav-menu/nav-menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  nav-menu works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/components/nav-menu/nav-menu.component.less":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/nav-menu/nav-menu.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/nav-menu/nav-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/nav-menu/nav-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent.prototype.ngOnInit = function () {
    };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/shared/components/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.less */ "./src/app/shared/components/nav-menu/nav-menu.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/numbers-only.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/numbers-only.directive.ts ***!
  \*************************************************************/
/*! exports provided: NumbersOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumbersOnlyDirective", function() { return NumbersOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumbersOnlyDirective = /** @class */ (function () {
    function NumbersOnlyDirective(_el) {
        this._el = _el;
    }
    NumbersOnlyDirective.prototype.onInputChange = function (event) {
        var initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NumbersOnlyDirective.prototype, "onInputChange", null);
    NumbersOnlyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'input[numbersOnly]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NumbersOnlyDirective);
    return NumbersOnlyDirective;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    apiURL: "https://app.petpals.love/petpalsindialive/api/",
    defaultCountryId: 24,
    apiEndPoints: {
        signin: "MobileAccount/Login",
        signOut: "MobileAccount/LogOut",
        searchPets: "Utils/SearchPets",
        petDetails: "Utils/GetPetDetails",
        getPetTypes: "Utils/GetAllPetTypes",
        getBreeds: "Utils/GetBreedListByString",
        getCities: "Utils/GetCityListByCountry",
        getAreaList: "Utils/GetAreaListByCity",
        userTypes: "Utils/GetAllUserTypes",
        countryList: "Utils/GetAllCountryList",
        uploadFile: "Utils/UploadFile",
        register: "MobileAccount/Register",
        forgotPassword: "MobileAccount/ForgotPassword",
        myrequests: "Utils/MessageList",
        withdrawrequests: "Utils/WithdrawRequest?PetMatingRequestId=",
        myPets: "Utils/mypets",
        addToFavourites: "Utils/MakePetFavorite",
        deletePet: "Utils/DeletePet",
        savePet: "Utils/AddPet",
        updatePet: "Utils/UpdatePet",
        myPetDetails: "Utils/GetPetDetails?petId=",
        boardingRequest: "Utils/AddBoardingRequest",
        addWalkerRequest: "Utils/AddWalkerRequest",
        addTrainingRequest: "Utils/AddTrainingRequest",
        addRescuerRequest: "Utils/AddRescuerRequest",
        addAdoptionRequest: "Utils/AdoptPetRequest",
        addSpaRequest: "Utils/AddSPARequest",
        addCabRequest: "Utils/AddCABRequest",
        addVolunteersRequest: "Utils/AddVolunteersRequest",
        contactus: "Utils/ContactUs",
        updateprofile: "MobileAccount/SaveMyProfile",
        getMyProfile: "MobileAccount/GetMyProfile",
        getPetNews: "Utils/Petnews",
        getBoardingRequestDetails: "Utils/GetBoardingRequestDetails?RequestId=",
        configureASchedule: "Utils/ConfigureASchdule",
        getMySchedules: "Utils/GetMySchdules",
        updateMySchedule: "Utils/UpdateMySchdule"
    },
    firebaseConfig: {
        apiKey: "AIzaSyD0FxTQbbmTQMA1ibrSldyG30lNYxzftvc",
        authDomain: "petpalsweb.firebaseapp.com",
        databaseURL: "https://petpalsweb.firebaseio.com",
        projectId: "petpalsweb",
        storageBucket: "petpalsweb.appspot.com",
        messagingSenderId: "674308957467"
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    apiURL: "http://app.petpals.love/staging/api/",
    //apiURL: "https://app.petpals.love/petpalsindialive/api/",
    defaultCountryId: 24,
    apiEndPoints: {
        signin: "MobileAccount/Login",
        signOut: "MobileAccount/LogOut",
        searchPets: "Utils/SearchPets",
        petDetails: "Utils/GetPetDetails",
        getPetTypes: "Utils/GetAllPetTypes",
        getBreeds: "Utils/GetBreedListByString",
        getCities: "Utils/GetCityListByCountry",
        getAreaList: "Utils/GetAreaListByCity",
        userTypes: "Utils/GetAllUserTypes",
        countryList: "Utils/GetAllCountryList",
        uploadFile: "Utils/UploadFile",
        register: "MobileAccount/Register",
        forgotPassword: "MobileAccount/ForgotPassword",
        myrequests: "Utils/MessageList",
        withdrawrequests: "Utils/WithdrawRequest?PetMatingRequestId=",
        myPets: "Utils/mypets",
        addToFavourites: "Utils/MakePetFavorite",
        deletePet: "Utils/DeletePet",
        savePet: "Utils/AddPet",
        updatePet: "Utils/UpdatePet",
        myPetDetails: "Utils/GetPetDetails?petId=",
        boardingRequest: "Utils/AddBoardingRequest",
        addWalkerRequest: "Utils/AddWalkerRequest",
        addTrainingRequest: "Utils/AddTrainingRequest",
        addRescuerRequest: "Utils/AddRescuerRequest",
        addAdoptionRequest: "Utils/AdoptPetRequest",
        addSpaRequest: "Utils/AddSPARequest",
        addCabRequest: "Utils/AddCABRequest",
        addVolunteersRequest: "Utils/AddVolunteersRequest",
        contactus: "Utils/ContactUs",
        updateprofile: "MobileAccount/SaveMyProfile",
        getMyProfile: "MobileAccount/GetMyProfile",
        getPetNews: "Utils/Petnews",
        getBoardingRequestDetails: "Utils/GetBoardingRequestDetails?RequestId=",
        configureASchedule: "Utils/ConfigureASchdule",
        getMySchedules: "Utils/GetMySchdules",
        updateMySchedule: "Utils/UpdateMySchdule",
    },
    firebaseConfig: {
        apiKey: "AIzaSyD0FxTQbbmTQMA1ibrSldyG30lNYxzftvc",
        authDomain: "petpalsweb.firebaseapp.com",
        databaseURL: "https://petpalsweb.firebaseio.com",
        projectId: "petpalsweb",
        storageBucket: "petpalsweb.appspot.com",
        messagingSenderId: "674308957467"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\petpals\kirangit\petpals.love-website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map