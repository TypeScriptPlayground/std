import Loggers from "./loggers.ts";

export default class Logger {
    constructor(loggers : Loggers = {
        log: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error,
        file:
    }) {

    }

    // deno-lint-ignore no-explicit-any
    public log(...data : any[]) {

    }

    // deno-lint-ignore no-explicit-any
    public info(...data : any[]) {

    }

    // deno-lint-ignore no-explicit-any
    public warn(...data : any[]) {

    }

    // deno-lint-ignore no-explicit-any
    public error(...data : any[]) {

    }

    // deno-lint-ignore no-explicit-any
    public file(...data : any[]) {
        
    }
}
