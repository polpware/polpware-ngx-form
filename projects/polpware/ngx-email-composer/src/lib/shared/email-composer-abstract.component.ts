import { ElementRef, ViewChild, Input, Output, EventEmitter, Directive } from '@angular/core';
import { TagInputComponent } from 'ngx-chips';
import { Observable } from 'rxjs';

export function isValidEmail(control: { value: any }) {
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

export interface IAutoCompleteModel {
    value: any;
    display: string;
}

export enum AlertTypeEnum {
    none = 0,
    info = 1,
    warning = 2,
    running = 3,
    success = 4,
    error = 5
}

export interface IEmailSenderInput {
    confirmed?: boolean;
    emailReceivers?: string[];
    emailBody?: string;
    emailTitle?: string;
    succeed?: boolean;
}

export interface IEmailComposerInput {
    messageTitle?: string;
    messageBody?: string;
    autocompleteItemsAsync: Observable<Array<IAutoCompleteModel>>;
    emails?: Array<any>;
}

@Directive()
export abstract class EmailFormAbstractComponent {

    @ViewChild('emailInputBox') emailInputBox: TagInputComponent;
    @ViewChild('emailBody') emailBody: ElementRef;

    @Input()
    public messageTitle: string;
    @Input()
    public messageBody: string;
    @Input()
    autocompleteItemsAsync: Observable<Array<IAutoCompleteModel>>;
    @Input()
    sender: (a: IEmailSenderInput) => Promise<any>;
    @Output()
    onTextChange = new EventEmitter();
    @Output()
    onSubmit = new EventEmitter<IEmailSenderInput>();
    @Output()
    onSent = new EventEmitter<{ success: boolean }>();

    alertMessage: string;
    alertSubMessage: string;
    alertType: AlertTypeEnum;
    alertDismissible: boolean;

    public emails: Array<any>;
    public validators = [isValidEmail];
    public errorMessages = {
        'isValidEmail': 'Please input a valid email'
    };

    // Control over the close button
    public showCloseBtn: boolean;

    private disableFocusEvent: boolean;

    constructor() {

        this.messageTitle = '';
        this.emails = [];
        this.messageBody = '';

        this.disableFocusEvent = false;
    }

    public get isSubmitDisabled(): boolean {
        return this.emails.length === 0 || this.alertType === AlertTypeEnum.running;
    }

    public textChanged(evt: any) {
        this.showCloseBtn = false;
        this.onTextChange.emit(evt);
    }

    public otherFieldChanged() {
        this.showCloseBtn = false;
    }

    public submit() {
        const emails = [];

        this.emails.forEach(elem => {

            let x = elem || (elem.value);
            const y = parseOnlyEmails(x);
            y.forEach(m => {
                emails.push(m);
            });
        });

        const outputs: IEmailSenderInput = {
            confirmed: true,
            emailReceivers: emails,
            emailBody: this.messageBody,
            emailTitle: this.messageTitle
        };

        if (this.sender) {
            this.alertType = AlertTypeEnum.running;
            this.alertMessage = 'The email is being sent out ...';
            this.alertSubMessage = '';
            this.alertDismissible = false;

            this.sender(outputs).then(() => {
                this.alertType = AlertTypeEnum.info;
                this.alertMessage = 'Emails have been successfully sent out.';
                this.alertDismissible = true;
                this.showCloseBtn = true;

                this.onSent && this.onSent.emit({ success: true });
            }, (error) => {
                this.alertType = AlertTypeEnum.error;
                this.alertMessage = 'Something went wrong.';
                this.alertDismissible = true;
                this.alertSubMessage = (error && error.errorInfo) ? error.errorInfo : '';
                this.onSent && this.onSent.emit({ success: false });
            });
        }

        this.onSubmit && this.onSubmit.emit(outputs);
    }

    public onOutOfTagInput(evt: any) {

        if (this.emailInputBox.dropdown && this.emailInputBox.dropdown.isVisible) {
            return;
        }

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
