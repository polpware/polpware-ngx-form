import * as Url from 'url-parse';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @param {?} parseQuery
 * @return {?}
 */
function validateUrl(value, parseQuery) {
    /** @type {?} */
    var pattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    /** @type {?} */
    var expr = new RegExp(pattern);
    if (!expr.test(value)) {
        return { invalid: true };
    }
    /** @type {?} */
    var results = (/** @type {?} */ (new Url(value, parseQuery)));
    if (!results.protocol || !results.host) {
        return { invalid: true };
    }
    return results;
}
/**
 * Given a valid url, returns the normalized host name.
 * The returned host name does not include www and is lowercase.
 * The returned host includes host number.
 * {} string
 * @param {?} s
 * @return {?}
 */
function normalizeHost(s) {
    // Assume that s is a valid url
    /** @type {?} */
    var results = (/** @type {?} */ (new Url(s)));
    /** @type {?} */
    var h = results.host;
    if (h.startsWith('www')) {
        return h.substring(4);
    }
    return h;
}
/**
 * @param {?} s
 * @return {?}
 */
function normalizeUrl(s) {
    // Assume that s is a valid url
    /** @type {?} */
    var results = (/** @type {?} */ (new Url(s)));
    return results.toString();
}
// Type predicate 
/**
 * @param {?} v
 * @return {?}
 */
function isInvalidSpec(v) {
    return ((/** @type {?} */ (v))).invalid !== undefined;
}
/**
 * @param {?=} options
 * @return {?}
 */
function buildUrlValidator(options) {
    /** @type {?} */
    var inputs = Object.assign({}, options);
    return function (control) {
        /** @type {?} */
        var value = control.value;
        /** @type {?} */
        var results = validateUrl(value, !!inputs.parseQuery);
        if (isInvalidSpec(results)) {
            return results;
        }
        if (inputs.https && results.protocol !== 'https') {
            return { invalid: true };
        }
        return null;
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { validateUrl, normalizeHost, normalizeUrl, buildUrlValidator };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9scHdhcmUtbmd4LWZvcm0uanMubWFwIiwic291cmNlcyI6WyJuZzovL3BvbHB3YXJlLW5neC1mb3JtL2xpYi92YWxpZGF0b3JzL3VybC12YWxpZGF0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgKiBhcyBVcmwgZnJvbSAndXJsLXBhcnNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVybFBhcnNlUmVzdWx0IHtcclxuICAgIHByb3RvY29sOiAnaHR0cCcgfCAnaHR0cHMnO1xyXG4gICAgc2xhc2hlczogYm9vbGVhbjtcclxuICAgIGF1dGg6IHN0cmluZztcclxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgaG9zdDogc3RyaW5nOyAgLy8gd2l0aCBwb3J0IG51bWJlciBcclxuICAgIGhvc3RuYW1lOiBzdHJpbmc7IC8vIHdpdGhvdXQgcG9ydCBudW1iZXIgXHJcbiAgICBwb3J0OiBudW1iZXI7IC8vIHBvcnQgbnVtYmVyXHJcbiAgICBwYXRobmFtZTogc3RyaW5nO1xyXG4gICAgcXVlcnk6IGFueTtcclxuICAgIGhhc2g6IHN0cmluZzsgLy8gIyBwYXJ0XHJcbiAgICBocmVmOiBzdHJpbmc7XHJcbiAgICBvcmlnaW46IHN0cmluZztcclxuXHJcbiAgICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpO1xyXG4gICAgdG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElJbnZhbGlkU3BlYyB7XHJcbiAgICBpbnZhbGlkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVVcmwodmFsdWU6IHN0cmluZywgcGFyc2VRdWVyeTogYm9vbGVhbik6IElJbnZhbGlkU3BlYyB8IElVcmxQYXJzZVJlc3VsdCB7XHJcblxyXG4gICAgY29uc3QgcGF0dGVybiA9ICcoaHR0cHM/Oi8vKT8oW1xcXFxkYS16Li1dKylcXFxcLihbYS16Ll17Miw2fSlbL1xcXFx3IC4tXSovPyc7XHJcbiAgICBjb25zdCBleHByID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcclxuICAgIGlmICghZXhwci50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB7IGludmFsaWQ6IHRydWUgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IFVybCh2YWx1ZSwgcGFyc2VRdWVyeSkgYXMgSVVybFBhcnNlUmVzdWx0O1xyXG5cclxuICAgIGlmICghcmVzdWx0cy5wcm90b2NvbCB8fCAhcmVzdWx0cy5ob3N0KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgaW52YWxpZDogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiogR2l2ZW4gYSB2YWxpZCB1cmwsIHJldHVybnMgdGhlIG5vcm1hbGl6ZWQgaG9zdCBuYW1lLiBcclxuKiBUaGUgcmV0dXJuZWQgaG9zdCBuYW1lIGRvZXMgbm90IGluY2x1ZGUgd3d3IGFuZCBpcyBsb3dlcmNhc2UuXHJcbiogVGhlIHJldHVybmVkIGhvc3QgaW5jbHVkZXMgaG9zdCBudW1iZXIuIFxyXG4qIHt9IHN0cmluZ1xyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplSG9zdChzOiBzdHJpbmcpIHtcclxuICAgIC8vIEFzc3VtZSB0aGF0IHMgaXMgYSB2YWxpZCB1cmxcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgVXJsKHMpIGFzIElVcmxQYXJzZVJlc3VsdDtcclxuICAgIGNvbnN0IGggPSByZXN1bHRzLmhvc3Q7XHJcbiAgICBpZiAoaC5zdGFydHNXaXRoKCd3d3cnKSkge1xyXG4gICAgICAgIHJldHVybiBoLnN1YnN0cmluZyg0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVXJsKHM6IHN0cmluZykge1xyXG4gICAgLy8gQXNzdW1lIHRoYXQgcyBpcyBhIHZhbGlkIHVybFxyXG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBVcmwocykgYXMgSVVybFBhcnNlUmVzdWx0O1xyXG4gICAgcmV0dXJuIHJlc3VsdHMudG9TdHJpbmcoKTtcclxufVxyXG5cclxuLy8gVHlwZSBwcmVkaWNhdGUgXHJcbmZ1bmN0aW9uIGlzSW52YWxpZFNwZWModjogSVVybFBhcnNlUmVzdWx0IHwgSUludmFsaWRTcGVjKTogdiBpcyBJSW52YWxpZFNwZWMge1xyXG4gICAgcmV0dXJuICg8SUludmFsaWRTcGVjPnYpLmludmFsaWQgIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVXJsVmFsaWRhdG9yKG9wdGlvbnM/OiB7XHJcbiAgICBodHRwcz86IGJvb2xlYW47XHJcbiAgICBwYXJzZVF1ZXJ5PzogYm9vbGVhbjtcclxufSkge1xyXG5cclxuICAgIGNvbnN0IGlucHV0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbihjb250cm9sOiBGb3JtQ29udHJvbCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29udHJvbC52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHZhbGlkYXRlVXJsKHZhbHVlLCAhIWlucHV0cy5wYXJzZVF1ZXJ5KTtcclxuXHJcbiAgICAgICAgaWYgKGlzSW52YWxpZFNwZWMocmVzdWx0cykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5wdXRzLmh0dHBzICYmIHJlc3VsdHMucHJvdG9jb2wgIT09ICdodHRwcycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaW52YWxpZDogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7Ozs7QUF5QkEscUJBQTRCLEtBQWEsRUFBRSxVQUFtQjs7UUFFcEQsT0FBTyxHQUFHLHVEQUF1RDs7UUFDakUsSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNuQixPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0tBQzVCOztRQUVLLE9BQU8sc0JBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxFQUFtQjtJQUU3RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7UUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztLQUM1QjtJQUVELE9BQU8sT0FBTyxDQUFDO0NBQ2xCOzs7Ozs7Ozs7QUFTRCx1QkFBOEIsQ0FBUzs7O1FBRTdCLE9BQU8sc0JBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQW1COztRQUN2QyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUk7SUFDdEIsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6QjtJQUNELE9BQU8sQ0FBQyxDQUFDO0NBQ1o7Ozs7O0FBRUQsc0JBQTZCLENBQVM7OztRQUU1QixPQUFPLHNCQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFtQjtJQUM3QyxPQUFPLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztDQUM3Qjs7Ozs7O0FBR0QsdUJBQXVCLENBQWlDO0lBQ3BELE9BQU8sb0JBQWUsQ0FBQyxJQUFFLE9BQU8sS0FBSyxTQUFTLENBQUM7Q0FDbEQ7Ozs7O0FBRUQsMkJBQWtDLE9BR2pDOztRQUVTLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUM7SUFFekMsT0FBTyxVQUFTLE9BQW9COztZQUMxQixLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUs7O1lBRXJCLE9BQU8sR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBRXZELElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sT0FBTyxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDNUI7UUFFRCxPQUFPLElBQUksQ0FBQztLQUNmLENBQUM7Q0FDTDs7Ozs7Ozs7Ozs7Ozs7In0=