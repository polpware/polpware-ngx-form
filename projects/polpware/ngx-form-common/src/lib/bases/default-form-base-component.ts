import { Input, Output, EventEmitter, Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IHasNotifications } from '../interfaces/has-notifications.interface';


/**
 * Models the inputs for the default reusable form.
 */
export interface IDefaultFormInputs {
    hideCancelBtn?: boolean;
    hideSubmitBtn?: boolean;
    submitBtnTxt?: string;
    cancelBtnTxt?: string;
}

/**
 * Provides a base for defining a reusable form. 
 */
@Directive()
export abstract class DefaultFormBaseComponent implements IHasNotifications {

    isSaving: boolean;

    abstract readonly form: FormGroup;

    @Input()
    hideCancelBtn: boolean = false;
    @Input()
    hideSubmitBtn: boolean = false;
    @Input()
    submitBtnTxt: string = 'Submit';
    @Input()
    cancelBtnTxt: string = 'Cancel';

    @Output()
    readonly onSave = new EventEmitter();
    @Output()
    readonly onCancel = new EventEmitter();
    @Output()
    readonly onValueChanged = new EventEmitter();
    @Output()
    readonly onValidation = new EventEmitter();

    public notifyValidation() {
        this.onValidation.emit({
            valid: this.form.valid
        });
    }

    public notifyValueChanges(a: any) {
        this.onValueChanged.emit(a);
    }
}
