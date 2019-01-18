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
function normalizeHost(s, rm3w = true) {
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
function normalizeUrl(s, keepQuery = false, endWithSlash = false) {
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
function buildUrlValidator(options) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { validateUrl, normalizeHost, normalizeUrl, buildUrlValidator };

//# sourceMappingURL=polpware-ngx-form.js.map