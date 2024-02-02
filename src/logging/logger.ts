import { LoggerOptions } from './logger_options.ts';
import { StdOutFunctionType } from './std_out_function_type.ts';

export default class Logger {
    private _stdout : StdOutFunctionType;
    private _options? : LoggerOptions;
    constructor(
        stdout : StdOutFunctionType,
        options? : LoggerOptions
    ) {
        this._stdout = stdout;
        this._options = options;
    }

    /**
     * This getter returns the passed in standard output function.
     */
    get stdout() : StdOutFunctionType {
        return this._stdout;
    }

    /**
     * This getter returns the passed in options for the logger.
     */
    get options() : LoggerOptions | undefined {
        return this._options;
    }
}
