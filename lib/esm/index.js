import React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

if (process.env.NODE_ENV !== 'production') ;

if (process.env.NODE_ENV !== 'production') ;

// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(prev, next) {
  for (var attribute in prev) {
    if (!(attribute in next)) {
      return true;
    }
  }

  for (var _attribute in next) {
    if (prev[_attribute] !== next[_attribute]) {
      return true;
    }
  }

  return false;
}

var _excluded = ["style"],
    _excluded2 = ["style"];
// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-api.html#reactmemo

function areEqual(prevProps, nextProps) {
  var prevStyle = prevProps.style,
      prevRest = _objectWithoutPropertiesLoose(prevProps, _excluded);

  var nextStyle = nextProps.style,
      nextRest = _objectWithoutPropertiesLoose(nextProps, _excluded2);

  return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-component.html#shouldcomponentupdate

function shouldComponentUpdate(nextProps, nextState) {
  return !areEqual(this.props, nextProps) || shallowDiffers(this.state, nextState);
}

// Lớp wrap lại Component với việc kiểm tra kĩ hơn trạng thái mounted của Component
var SafeComponent = /** @class */ (function (_super) {
    __extends(SafeComponent, _super);
    function SafeComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.mounted = true;
        _this.displayName = "";
        _this.setMounted(true);
        return _this;
    }
    SafeComponent.prototype.getMounted = function () {
        return this.mounted;
    };
    SafeComponent.prototype.setMounted = function (mounted) {
        this.mounted = mounted;
    };
    SafeComponent.prototype._componentDidMount = function () { };
    SafeComponent.prototype.componentDidMount = function () {
        var _a;
        this.setMounted(true);
        (_a = this._componentDidMount) === null || _a === void 0 ? void 0 : _a.call(this);
    };
    SafeComponent.prototype._componentWillUnmount = function () { };
    SafeComponent.prototype.componentWillUnmount = function () {
        var _a, _b;
        this.setMounted(false);
        (_b = (_a = this._componentWillUnmount) === null || _a === void 0 ? void 0 : _a.call) === null || _b === void 0 ? void 0 : _b.call(_a, this);
    };
    SafeComponent.prototype.callbackSafe = function (cb) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.mounted)
            return;
        cb && ((_a = cb === null || cb === void 0 ? void 0 : cb.call) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray([cb, this], __read(args), false)));
    };
    SafeComponent.prototype.setStateSafe = function (state, callback) {
        if (!this.mounted)
            return;
        this.setState(state, callback);
    };
    SafeComponent.prototype.renderContent = function () {
        return null;
    };
    SafeComponent.prototype.render = function () {
        return this.renderContent();
    };
    return SafeComponent;
}(React.Component));
SafeComponent.prototype.shouldComponentUpdate = shouldComponentUpdate;

export { SafeComponent };
