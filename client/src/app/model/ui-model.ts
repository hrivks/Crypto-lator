/** model used for UI / Interactions */

/** Models alert info */
export interface AlertData {
    text: string;
    type?: string;
    autoClose?: boolean;
}

/** Facilitates interaction between a parent component and a child component inside a modal dialog*/
export interface ComponentControl {
    /** Set by Child, Invoked by Parent */
    submit?: () => any;
    close?: () => any;
    reset?: () => void;
}
