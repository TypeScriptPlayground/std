export default interface Loggers {
    // deno-lint-ignore no-explicit-any
    log : (data : any[]) => void,
    // deno-lint-ignore no-explicit-any
    info : (data : any[]) => void, 
    // deno-lint-ignore no-explicit-any
    warn : (data : any[]) => void,
    // deno-lint-ignore no-explicit-any
    error : (data : any[]) => void,
    // deno-lint-ignore no-explicit-any
    file : (data : any[]) => void
}
