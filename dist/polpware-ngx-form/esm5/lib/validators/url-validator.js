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
export function normalizeHost(s) {
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
export function normalizeUrl(s) {
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
export function buildUrlValidator(options) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BvbHB3YXJlLW5neC1mb3JtLyIsInNvdXJjZXMiOlsibGliL3ZhbGlkYXRvcnMvdXJsLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxLQUFLLEdBQUcsTUFBTSxXQUFXLENBQUM7Ozs7QUFFakMscUNBaUJDOzs7SUFoQkcsbUNBQTJCOztJQUMzQixrQ0FBaUI7O0lBQ2pCLCtCQUFhOztJQUNiLG1DQUFpQjs7SUFDakIsbUNBQWlCOztJQUNqQiwrQkFBYTs7SUFDYixtQ0FBaUI7O0lBQ2pCLCtCQUFhOztJQUNiLG1DQUFpQjs7SUFDakIsZ0NBQVc7O0lBQ1gsK0JBQWE7O0lBQ2IsK0JBQWE7O0lBQ2IsaUNBQWU7Ozs7OztJQUVmLDBEQUFnQzs7OztJQUNoQyxxREFBbUI7Ozs7O0FBR3ZCLGtDQUVDOzs7SUFERywrQkFBaUI7Ozs7Ozs7QUFHckIsTUFBTSxzQkFBc0IsS0FBYSxFQUFFLFVBQW1COztRQUVwRCxPQUFPLEdBQUcsdURBQXVEOztRQUNqRSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDNUI7O1FBRUssT0FBTyxHQUFHLG1CQUFBLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsRUFBbUI7SUFFN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDNUI7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDOzs7Ozs7Ozs7QUFTRCxNQUFNLHdCQUF3QixDQUFTOzs7UUFFN0IsT0FBTyxHQUFHLG1CQUFBLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFtQjs7UUFDdkMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJO0lBQ3RCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNyQixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDekI7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7Ozs7O0FBRUQsTUFBTSx1QkFBdUIsQ0FBUzs7O1FBRTVCLE9BQU8sR0FBRyxtQkFBQSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBbUI7SUFDN0MsT0FBTyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDOUIsQ0FBQzs7Ozs7O0FBR0QsdUJBQXVCLENBQWlDO0lBQ3BELE9BQU8sQ0FBQyxtQkFBYyxDQUFDLEVBQUEsQ0FBQyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7QUFDbkQsQ0FBQzs7Ozs7QUFFRCxNQUFNLDRCQUE0QixPQUdqQzs7UUFFUyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDO0lBRXpDLE9BQU8sVUFBUyxPQUFvQjs7WUFDMUIsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLOztZQUVyQixPQUFPLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUV2RCxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN4QixPQUFPLE9BQU8sQ0FBQztTQUNsQjtRQUVELElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtZQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQzVCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0ICogYXMgVXJsIGZyb20gJ3VybC1wYXJzZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVcmxQYXJzZVJlc3VsdCB7XHJcbiAgICBwcm90b2NvbDogJ2h0dHAnIHwgJ2h0dHBzJztcclxuICAgIHNsYXNoZXM6IGJvb2xlYW47XHJcbiAgICBhdXRoOiBzdHJpbmc7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIGhvc3Q6IHN0cmluZzsgIC8vIHdpdGggcG9ydCBudW1iZXIgXHJcbiAgICBob3N0bmFtZTogc3RyaW5nOyAvLyB3aXRob3V0IHBvcnQgbnVtYmVyIFxyXG4gICAgcG9ydDogbnVtYmVyOyAvLyBwb3J0IG51bWJlclxyXG4gICAgcGF0aG5hbWU6IHN0cmluZztcclxuICAgIHF1ZXJ5OiBhbnk7XHJcbiAgICBoYXNoOiBzdHJpbmc7IC8vICMgcGFydFxyXG4gICAgaHJlZjogc3RyaW5nO1xyXG4gICAgb3JpZ2luOiBzdHJpbmc7XHJcblxyXG4gICAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTtcclxuICAgIHRvU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSW52YWxpZFNwZWMge1xyXG4gICAgaW52YWxpZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVXJsKHZhbHVlOiBzdHJpbmcsIHBhcnNlUXVlcnk6IGJvb2xlYW4pOiBJSW52YWxpZFNwZWMgfCBJVXJsUGFyc2VSZXN1bHQge1xyXG5cclxuICAgIGNvbnN0IHBhdHRlcm4gPSAnKGh0dHBzPzovLyk/KFtcXFxcZGEtei4tXSspXFxcXC4oW2Etei5dezIsNn0pWy9cXFxcdyAuLV0qLz8nO1xyXG4gICAgY29uc3QgZXhwciA9IG5ldyBSZWdFeHAocGF0dGVybik7XHJcbiAgICBpZiAoIWV4cHIudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4geyBpbnZhbGlkOiB0cnVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBVcmwodmFsdWUsIHBhcnNlUXVlcnkpIGFzIElVcmxQYXJzZVJlc3VsdDtcclxuXHJcbiAgICBpZiAoIXJlc3VsdHMucHJvdG9jb2wgfHwgIXJlc3VsdHMuaG9zdCkge1xyXG4gICAgICAgIHJldHVybiB7IGludmFsaWQ6IHRydWUgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0cztcclxufVxyXG5cclxuXHJcbi8qKlxyXG4qIEdpdmVuIGEgdmFsaWQgdXJsLCByZXR1cm5zIHRoZSBub3JtYWxpemVkIGhvc3QgbmFtZS4gXHJcbiogVGhlIHJldHVybmVkIGhvc3QgbmFtZSBkb2VzIG5vdCBpbmNsdWRlIHd3dyBhbmQgaXMgbG93ZXJjYXNlLlxyXG4qIFRoZSByZXR1cm5lZCBob3N0IGluY2x1ZGVzIGhvc3QgbnVtYmVyLiBcclxuKiB7fSBzdHJpbmdcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUhvc3Qoczogc3RyaW5nKSB7XHJcbiAgICAvLyBBc3N1bWUgdGhhdCBzIGlzIGEgdmFsaWQgdXJsXHJcbiAgICBjb25zdCByZXN1bHRzID0gbmV3IFVybChzKSBhcyBJVXJsUGFyc2VSZXN1bHQ7XHJcbiAgICBjb25zdCBoID0gcmVzdWx0cy5ob3N0O1xyXG4gICAgaWYgKGguc3RhcnRzV2l0aCgnd3d3JykpIHtcclxuICAgICAgICByZXR1cm4gaC5zdWJzdHJpbmcoNCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVVybChzOiBzdHJpbmcpIHtcclxuICAgIC8vIEFzc3VtZSB0aGF0IHMgaXMgYSB2YWxpZCB1cmxcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgVXJsKHMpIGFzIElVcmxQYXJzZVJlc3VsdDtcclxuICAgIHJldHVybiByZXN1bHRzLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbi8vIFR5cGUgcHJlZGljYXRlIFxyXG5mdW5jdGlvbiBpc0ludmFsaWRTcGVjKHY6IElVcmxQYXJzZVJlc3VsdCB8IElJbnZhbGlkU3BlYyk6IHYgaXMgSUludmFsaWRTcGVjIHtcclxuICAgIHJldHVybiAoPElJbnZhbGlkU3BlYz52KS5pbnZhbGlkICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFVybFZhbGlkYXRvcihvcHRpb25zPzoge1xyXG4gICAgaHR0cHM/OiBib29sZWFuO1xyXG4gICAgcGFyc2VRdWVyeT86IGJvb2xlYW47XHJcbn0pIHtcclxuXHJcbiAgICBjb25zdCBpbnB1dHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oY29udHJvbDogRm9ybUNvbnRyb2wpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSB2YWxpZGF0ZVVybCh2YWx1ZSwgISFpbnB1dHMucGFyc2VRdWVyeSk7XHJcblxyXG4gICAgICAgIGlmIChpc0ludmFsaWRTcGVjKHJlc3VsdHMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlucHV0cy5odHRwcyAmJiByZXN1bHRzLnByb3RvY29sICE9PSAnaHR0cHMnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGludmFsaWQ6IHRydWUgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxufVxyXG4iXX0=