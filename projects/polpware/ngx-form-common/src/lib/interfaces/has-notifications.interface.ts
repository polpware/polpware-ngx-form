/**
 * Defines the sorts of notifications a form may support.
 */
export interface IHasNotifications {
    notifyValidation(): void;
    notifyValueChanges(a: any): void;
}
