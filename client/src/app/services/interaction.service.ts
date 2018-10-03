import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constants';

@Injectable()
export class InteractionService {

    // properties
    // event callback mapping; key: event name, value: array of registered callbacks
    private callbacks = new Map<string, ((data?: any) => void)[]>();

    // queued fire callback requests; key: event, value: array of data objects sent
    private queue = new Map<string, any[]>();

    api = {
        'registerCallback': this.registerCallback,
        'invoke': this.invoke
    };

    constructor() { }

    /**
     * Register callback for a specific event
     * @param name name of the event to subscribe to
     * @param callback callback function to be invoked with the event occurs
     * @param clear clear all existing callbacks for the given name
     */
    registerCallback(name: string, callback: (data?: any) => void, clear?: boolean) {

        // create callback array if it doest not already exist
        if (!this.callbacks[name] || clear) {
            this.callbacks[name] = [];
        }

        this.callbacks[name].push(callback);

        // fire any requests already received
        if (this.queue[name]) {
            this.queue[name].forEach(q => {
                this.invoke(name, q);
            });
            this.queue[name] = [];
        }
    }


    /**
     * Invoke all registered callback for the specified event
     * @param name name of the event
     */
    invoke(name: string, data?: any) {
        // invoke callbacks if exist
        if (this.callbacks[name]) {
            this.callbacks[name].forEach(c => {
                try {
                    c(data);
                } catch (ex) {
                    console.log('Error invoking callback function for event ' + name);
                }
            });
        } else {
            // enqueue request
            if (!this.queue[name]) {
                this.queue[name] = [];
            }
            this.queue[name].push(data);
        }
    }


    /**
     * Show alert
     * @param text alert text
     * @param type alert type. bootstrap context classes are supported
     * @param autoClose auto close after a delay
     */
    showAlert(text: string, type?: string, autoClose?: boolean) {
        this.invoke(AppConstants.EVENTS.showAlert, { text: text, type: type, autoClose: autoClose });
    }


    /** Hide Alert */
    hideAlert() {
        this.invoke(AppConstants.EVENTS.hideAlert);
    }


    /**
     * Show / hide loading screen
     * @param show true, to show; false, to hide
     */
    showLoader(show: boolean) {
        this.invoke(AppConstants.EVENTS.showLoader, show);
    }


    /** Show / hide feeds sidebar
     *  @param show true, to show; false, to hide
     */
    showFeeds() {
        this.invoke(AppConstants.EVENTS.showFeeds);
    }

}
