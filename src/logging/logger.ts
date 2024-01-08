export default class Logger {
    private logLogger : (...data : any[]) => void
    constructor(loggers : any) {
        this.logLogger = loggers.log ?? console.log
        this.infoLogger = loggers.info ?? console.info
        this.warnLogger = loggers.warn ?? console.warn
        this.errorLogger = loggers.error ?? console.error
        this.fileLogger = loggers.file
    }

    // deno-lint-ignore no-explicit-any
    public log(...data : any[]) {
        this.logLogger(data);
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
