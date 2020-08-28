import { FormControl } from '@angular/forms';

import * as Url from 'url-parse';

export interface IUrlParseResult {
    protocol: 'http' | 'https';
    slashes: boolean;
    auth: string;
    username: string;
    password: string;
    host: string;  // with port number 
    hostname: string; // without port number 
    port: number; // port number
    pathname: string;
    query: any;
    hash: string; // # part
    href: string;
    origin: string;

    set(key: string, value: string);
    toString(): string;
}

export interface IInvalidSpec {
    invalid: boolean;
}

export function validateUrl(value: string, parseQuery: boolean): IInvalidSpec | IUrlParseResult {

    const pattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    const expr = new RegExp(pattern);
    if (!expr.test(value)) {
        return { invalid: true };
    }

    const results = new Url(value, parseQuery) as IUrlParseResult;

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
*/
export function normalizeHost(s: string, rm3w: boolean = true) {
    // Assume that s is a valid url
    const results = new Url(s) as IUrlParseResult;
    let h = results.host;
    if (h.startsWith('www')) {
        if (rm3w) {
            h = h.substring(4);
        }
    } else {
        if (!rm3w) {
            h = 'www.' + h;
        }
    }

    return h;
}

export function normalizeUrl(s: string, keepQuery: boolean = false, endWithSlash: boolean = false) {
    // Assume that s is a valid url

    const results = new Url(s) as IUrlParseResult;
    let path = results.pathname;
    path = path.replace(/\/\//g, '/', );
    let u = results.protocol + '//' + results.host + path;
    if (keepQuery) {
        u = u + results.query;
    }

    if (u.endsWith('/')) {
        if (!endWithSlash) {
            u = u.substr(0, u.length - 1);
        }
    } else {
        if (endWithSlash) {
            u = u + '/';
        }
    }

    return u;
}

// Type predicate 
function isInvalidSpec(v: IUrlParseResult | IInvalidSpec): v is IInvalidSpec {
    return (<IInvalidSpec>v).invalid !== undefined;
}

export function buildUrlValidator(options?: {
    https?: boolean;
    parseQuery?: boolean;
}) {

    const inputs = Object.assign({}, options);

    return function(control: FormControl) {
        const value = control.value;

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
