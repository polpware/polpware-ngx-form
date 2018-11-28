/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as Url from 'url-parse';
/**
 * @record
 */
export function IUrlParseResult() { }
if (false) {
    /** @type {?} */
    IUrlParseResult.prototype.protocol;
    /** @type {?} */
    IUrlParseResult.prototype.slashes;
    /** @type {?} */
    IUrlParseResult.prototype.auth;
    /** @type {?} */
    IUrlParseResult.prototype.username;
    /** @type {?} */
    IUrlParseResult.prototype.password;
    /** @type {?} */
    IUrlParseResult.prototype.host;
    /** @type {?} */
    IUrlParseResult.prototype.hostname;
    /** @type {?} */
    IUrlParseResult.prototype.port;
    /** @type {?} */
    IUrlParseResult.prototype.pathname;
    /** @type {?} */
    IUrlParseResult.prototype.query;
    /** @type {?} */
    IUrlParseResult.prototype.hash;
    /** @type {?} */
    IUrlParseResult.prototype.href;
    /** @type {?} */
    IUrlParseResult.prototype.origin;
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    IUrlParseResult.prototype.set = function (key, value) { };
    /**
     * @return {?}
     */
    IUrlParseResult.prototype.toString = function () { };
}
/**
 * @record
 */
export function IInvalidSpec() { }
if (false) {
    /** @type {?} */
    IInvalidSpec.prototype.invalid;
}
/**
 * @param {?} value
 * @param {?} parseQuery
 * @return {?}
 */
export function validateUrl(value, parseQuery) {
    /** @type {?} */
    const pattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    /** @type {?} */
    const expr = new RegExp(pattern);
    if (!expr.test(value)) {
        return { invalid: true };
    }
    /** @type {?} */
    const results = (/** @type {?} */ (new Url(value, parseQuery)));
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
 * @param {?=} rm3w
 * @return {?}
 */
export function normalizeHost(s, rm3w = true) {
    // Assume that s is a valid url
    /** @type {?} */
    const results = (/** @type {?} */ (new Url(s)));
    /** @type {?} */
    let h = results.host;
    if (h.startsWith('www')) {
        if (rm3w) {
            h = h.substring(4);
        }
    }
    else {
        if (!rm3w) {
            h = 'www.' + h;
        }
    }
    return h;
}
/**
 * @param {?} s
 * @param {?=} keepQuery
 * @param {?=} endWithSlash
 * @return {?}
 */
export function normalizeUrl(s, keepQuery = false, endWithSlash = false) {
    // Assume that s is a valid url
    // Assume that s is a valid url
    /** @type {?} */
    const results = (/** @type {?} */ (new Url(s)));
    /** @type {?} */
    let path = results.pathname;
    path = path.replace(/\/\//g, '/');
    /** @type {?} */
    let u = results.protocol + '//' + results.host + path;
    if (keepQuery) {
        u = u + results.query;
    }
    if (u.endsWith('/')) {
        if (!endWithSlash) {
            u = u.substr(0, u.length - 1);
        }
    }
    else {
        if (endWithSlash) {
            u = u + '/';
        }
    }
    return u;
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
export function buildUrlValidator(options) {
    /** @type {?} */
    const inputs = Object.assign({}, options);
    return function (control) {
        /** @type {?} */
        const value = control.value;
        /** @type {?} */
        const results = validateUrl(value, !!inputs.parseQuery);
        if (isInvalidSpec(results)) {
            return results;
        }
        if (inputs.https && results.protocol !== 'https') {
            return { invalid: true };
        }
        return null;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BvbHB3YXJlLW5neC1mb3JtLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkYXRvcnMvdXJsLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxLQUFLLEdBQUcsTUFBTSxXQUFXLENBQUM7Ozs7QUFFakMscUNBaUJDOzs7SUFoQkcsbUNBQTJCOztJQUMzQixrQ0FBaUI7O0lBQ2pCLCtCQUFhOztJQUNiLG1DQUFpQjs7SUFDakIsbUNBQWlCOztJQUNqQiwrQkFBYTs7SUFDYixtQ0FBaUI7O0lBQ2pCLCtCQUFhOztJQUNiLG1DQUFpQjs7SUFDakIsZ0NBQVc7O0lBQ1gsK0JBQWE7O0lBQ2IsK0JBQWE7O0lBQ2IsaUNBQWU7Ozs7OztJQUVmLDBEQUFnQzs7OztJQUNoQyxxREFBbUI7Ozs7O0FBR3ZCLGtDQUVDOzs7SUFERywrQkFBaUI7Ozs7Ozs7QUFHckIsTUFBTSxzQkFBc0IsS0FBYSxFQUFFLFVBQW1COztVQUVwRCxPQUFPLEdBQUcsdURBQXVEOztVQUNqRSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDNUI7O1VBRUssT0FBTyxHQUFHLG1CQUFBLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsRUFBbUI7SUFFN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDNUI7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDOzs7Ozs7Ozs7O0FBU0QsTUFBTSx3QkFBd0IsQ0FBUyxFQUFFLE9BQWdCLElBQUk7OztVQUVuRCxPQUFPLEdBQUcsbUJBQUEsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQW1COztRQUN6QyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUk7SUFDcEIsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLElBQUksSUFBSSxFQUFFO1lBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7S0FDSjtTQUFNO1FBQ0gsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO0tBQ0o7SUFFRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLHVCQUF1QixDQUFTLEVBQUUsWUFBcUIsS0FBSyxFQUFFLGVBQXdCLEtBQUs7SUFDN0YsK0JBQStCOzs7VUFFekIsT0FBTyxHQUFHLG1CQUFBLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFtQjs7UUFDekMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRO0lBQzNCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUcsQ0FBQzs7UUFDaEMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSTtJQUNyRCxJQUFJLFNBQVMsRUFBRTtRQUNYLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztLQUN6QjtJQUVELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNqQixJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDakM7S0FDSjtTQUFNO1FBQ0gsSUFBSSxZQUFZLEVBQUU7WUFDZCxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUNmO0tBQ0o7SUFFRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7Ozs7OztBQUdELHVCQUF1QixDQUFpQztJQUNwRCxPQUFPLENBQUMsbUJBQWMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO0FBQ25ELENBQUM7Ozs7O0FBRUQsTUFBTSw0QkFBNEIsT0FHakM7O1VBRVMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQztJQUV6QyxPQUFPLFVBQVMsT0FBb0I7O2NBQzFCLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSzs7Y0FFckIsT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFFdkQsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxPQUFPLENBQUM7U0FDbEI7UUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7WUFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUM1QjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCAqIGFzIFVybCBmcm9tICd1cmwtcGFyc2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVXJsUGFyc2VSZXN1bHQge1xyXG4gICAgcHJvdG9jb2w6ICdodHRwJyB8ICdodHRwcyc7XHJcbiAgICBzbGFzaGVzOiBib29sZWFuO1xyXG4gICAgYXV0aDogc3RyaW5nO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBob3N0OiBzdHJpbmc7ICAvLyB3aXRoIHBvcnQgbnVtYmVyIFxyXG4gICAgaG9zdG5hbWU6IHN0cmluZzsgLy8gd2l0aG91dCBwb3J0IG51bWJlciBcclxuICAgIHBvcnQ6IG51bWJlcjsgLy8gcG9ydCBudW1iZXJcclxuICAgIHBhdGhuYW1lOiBzdHJpbmc7XHJcbiAgICBxdWVyeTogYW55O1xyXG4gICAgaGFzaDogc3RyaW5nOyAvLyAjIHBhcnRcclxuICAgIGhyZWY6IHN0cmluZztcclxuICAgIG9yaWdpbjogc3RyaW5nO1xyXG5cclxuICAgIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk7XHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUludmFsaWRTcGVjIHtcclxuICAgIGludmFsaWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVVybCh2YWx1ZTogc3RyaW5nLCBwYXJzZVF1ZXJ5OiBib29sZWFuKTogSUludmFsaWRTcGVjIHwgSVVybFBhcnNlUmVzdWx0IHtcclxuXHJcbiAgICBjb25zdCBwYXR0ZXJuID0gJyhodHRwcz86Ly8pPyhbXFxcXGRhLXouLV0rKVxcXFwuKFthLXouXXsyLDZ9KVsvXFxcXHcgLi1dKi8/JztcclxuICAgIGNvbnN0IGV4cHIgPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xyXG4gICAgaWYgKCFleHByLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgaW52YWxpZDogdHJ1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgVXJsKHZhbHVlLCBwYXJzZVF1ZXJ5KSBhcyBJVXJsUGFyc2VSZXN1bHQ7XHJcblxyXG4gICAgaWYgKCFyZXN1bHRzLnByb3RvY29sIHx8ICFyZXN1bHRzLmhvc3QpIHtcclxuICAgICAgICByZXR1cm4geyBpbnZhbGlkOiB0cnVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuXHJcblxyXG4vKipcclxuKiBHaXZlbiBhIHZhbGlkIHVybCwgcmV0dXJucyB0aGUgbm9ybWFsaXplZCBob3N0IG5hbWUuIFxyXG4qIFRoZSByZXR1cm5lZCBob3N0IG5hbWUgZG9lcyBub3QgaW5jbHVkZSB3d3cgYW5kIGlzIGxvd2VyY2FzZS5cclxuKiBUaGUgcmV0dXJuZWQgaG9zdCBpbmNsdWRlcyBob3N0IG51bWJlci4gXHJcbioge30gc3RyaW5nXHJcbiovXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVIb3N0KHM6IHN0cmluZywgcm0zdzogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIC8vIEFzc3VtZSB0aGF0IHMgaXMgYSB2YWxpZCB1cmxcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgVXJsKHMpIGFzIElVcmxQYXJzZVJlc3VsdDtcclxuICAgIGxldCBoID0gcmVzdWx0cy5ob3N0O1xyXG4gICAgaWYgKGguc3RhcnRzV2l0aCgnd3d3JykpIHtcclxuICAgICAgICBpZiAocm0zdykge1xyXG4gICAgICAgICAgICBoID0gaC5zdWJzdHJpbmcoNCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXJtM3cpIHtcclxuICAgICAgICAgICAgaCA9ICd3d3cuJyArIGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVXJsKHM6IHN0cmluZywga2VlcFF1ZXJ5OiBib29sZWFuID0gZmFsc2UsIGVuZFdpdGhTbGFzaDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAvLyBBc3N1bWUgdGhhdCBzIGlzIGEgdmFsaWQgdXJsXHJcblxyXG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBVcmwocykgYXMgSVVybFBhcnNlUmVzdWx0O1xyXG4gICAgbGV0IHBhdGggPSByZXN1bHRzLnBhdGhuYW1lO1xyXG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvXFwvL2csICcvJywgKTtcclxuICAgIGxldCB1ID0gcmVzdWx0cy5wcm90b2NvbCArICcvLycgKyByZXN1bHRzLmhvc3QgKyBwYXRoO1xyXG4gICAgaWYgKGtlZXBRdWVyeSkge1xyXG4gICAgICAgIHUgPSB1ICsgcmVzdWx0cy5xdWVyeTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodS5lbmRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgaWYgKCFlbmRXaXRoU2xhc2gpIHtcclxuICAgICAgICAgICAgdSA9IHUuc3Vic3RyKDAsIHUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZW5kV2l0aFNsYXNoKSB7XHJcbiAgICAgICAgICAgIHUgPSB1ICsgJy8nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdTtcclxufVxyXG5cclxuLy8gVHlwZSBwcmVkaWNhdGUgXHJcbmZ1bmN0aW9uIGlzSW52YWxpZFNwZWModjogSVVybFBhcnNlUmVzdWx0IHwgSUludmFsaWRTcGVjKTogdiBpcyBJSW52YWxpZFNwZWMge1xyXG4gICAgcmV0dXJuICg8SUludmFsaWRTcGVjPnYpLmludmFsaWQgIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVXJsVmFsaWRhdG9yKG9wdGlvbnM/OiB7XHJcbiAgICBodHRwcz86IGJvb2xlYW47XHJcbiAgICBwYXJzZVF1ZXJ5PzogYm9vbGVhbjtcclxufSkge1xyXG5cclxuICAgIGNvbnN0IGlucHV0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbihjb250cm9sOiBGb3JtQ29udHJvbCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29udHJvbC52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHZhbGlkYXRlVXJsKHZhbHVlLCAhIWlucHV0cy5wYXJzZVF1ZXJ5KTtcclxuXHJcbiAgICAgICAgaWYgKGlzSW52YWxpZFNwZWMocmVzdWx0cykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5wdXRzLmh0dHBzICYmIHJlc3VsdHMucHJvdG9jb2wgIT09ICdodHRwcycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgaW52YWxpZDogdHJ1ZSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG59XHJcbiJdfQ==