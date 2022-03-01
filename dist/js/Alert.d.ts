export default class SKAlert {
    constructor({ title, text, buttons }: {
        title: any;
        text: any;
        buttons: any;
    });
    title: any;
    text: any;
    buttons: any;
    buttonsString(): string;
    templateString(): string;
    dismiss(): void;
    primaryButton(): any;
    present({ onElement }?: {
        onElement: any;
    }): void;
    onElement: any;
    element: HTMLDivElement;
}
