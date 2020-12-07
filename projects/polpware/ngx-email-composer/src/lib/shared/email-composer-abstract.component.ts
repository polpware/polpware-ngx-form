import { ElementRef, ViewChild } from '@angular/core';
import { TagInputComponent } from 'ngx-chips';

function isValidEmail(control: { value: any }) {
    const value = control.value;
    const re = /\S+@\S+\.\S+/;
    if (re.test(value)) {
        return null;
    }
    return {
        'isValidEmail': true
    };
}

function display_name(text: string) {
    /* Remove all quotes 
       Remove whitespace, brackets, and commas from the ends. */
    return text.replace(/(^[\s,>]+)|"|([\s,<]+$)/g, '');
}

const EmailPattern = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/g;

/**
 * Parses the given string into an array of email entries.
 * Each entry is like user<user@gmail.com>
 * @param addr_list
 */
export function parseEmails(addr_list: string) {
    /* Regex source:
        https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
    */
    const emails = [];
    let idx = 0;
    let match: RegExpExecArray;
    while (match = EmailPattern.exec(addr_list)) {
        let display: string;
        if (display = display_name(addr_list.substring(idx, match['index']))) {
            emails.push('"' + display + '" ' + '<' + match[0] + '>');
        }
        else {
            emails.push(match[0]);
        }
        idx = match['index'] + match[0].length;
    }
    return emails;
}

/**
 * Parses the given string into a list of email entries.
 * Each entry is just an email.
 * @param addr_list
 */
export function parseOnlyEmails(addr_list: string) {
    const emails = [];
    let match: RegExpExecArray;
    while (match = EmailPattern.exec(addr_list)) {
        emails.push(match[0]);
    }
    return emails;
}

export abstract class EmailFormAbstractComponent {

    @ViewChild('emailInputBox') emailInputBox: TagInputComponent;
    @ViewChild('emailBody') emailBody: ElementRef;

    public title: string;

    public messageBody: string;

    public emails: Array<any>;
    public validators = [isValidEmail];
    public errorMessages = {
        'isValidEmail': 'Please input a valid email'
    };

    private disableFocusEvent: boolean;

    constructor() {

        this.title = 'Send out an email';
        this.emails = [];
        this.messageBody = '';

        this.disableFocusEvent = false;
    }

    public get isSubmitDisabled(): boolean {
        return this.emails.length === 0;
    }

    public abstract onSubmit(): void;

    public onOutOfTagInput(evt: any) {

        if (this.disableFocusEvent) {
            return;
        }

        evt.preventDefault();
        evt.stopPropagation();

        // A tempory hack for fixing the focus issue
        // on invoking the onAddingRequested method ...
        const emails = parseEmails(this.emailInputBox.formValue);

        emails.forEach(v => {
            this.emails.push(v);
        });

        this.emailInputBox.setInputValue('');

        // Jump to other place
        this.disableFocusEvent = true;
        this.emailBody.nativeElement.focus();

        this.disableFocusEvent = false;
    }

}
