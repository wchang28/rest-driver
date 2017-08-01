// driver interfaces
import * as restIntf from 'rest-api-interfaces';
import * as eventSource from 'eventsource-typings';

export * from 'rest-api-interfaces';
export {EventSourceConstructor, IEventSource} from 'eventsource-typings';

export interface I$EReturn {
    eventSrc: eventSource.IEventSource; // event source object
    initMsgs?: eventSource.Message[];   // initial messages rcvd. before the "OPEN" event. This could happen when using EventSource polyfill in browser that don't support EventSource natively (IE)
}

export type IReadableBlob = any;
export type IFormData = any;

export interface Progress {
    processed: number;
    total?: number;
    percent?: number;
    startTime: number;
    elapseMS: number;
    etaMS?: number;
}

export type ProgressCallback = (progress: Progress) => void;

// JSON in and JSON out
export type I$J = (method: restIntf.HTTPMethod, url:string, data:any, options?: restIntf.ApiCallOptions) => Promise<restIntf.RESTReturn>;

// EventSource factory
export type I$E = (url:string, options?: restIntf.ApiCallOptions) => Promise<I$EReturn>;

// send FormData
export type I$F = (method: restIntf.HTTPMethod, url:string, formData: IFormData, options?: restIntf.ApiCallOptions) => Promise<restIntf.RESTReturn>;

// HEAD call on object
export type I$H = (url:string, qs?:any, options?: restIntf.ApiCallOptions) => Promise<restIntf.RESTReturn>;

// download file blob
export type I$B = (url:string, qs?:any, options?: restIntf.ApiCallOptions) => Promise<restIntf.RESTReturn>;

// upload file blob
export type I$U = (method: restIntf.HTTPMethod, url:string, readableContent: restIntf.ReadableContent<IReadableBlob>, progressCB: ProgressCallback, options?: restIntf.ApiCallOptions) => Promise<restIntf.RESTReturn>;

// FormData factory
export type IFormDataFactory = () => IFormData;

// the driver interface
export interface $Driver {
    $J: I$J;
    $E: I$E;
    $F: I$F;
    $H: I$H;
    $B: I$B;
    $U: I$U;
    createFormData: IFormDataFactory;
}