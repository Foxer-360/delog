/**
 * Delog class
 */
declare class Delog {
    private static instance;
    private flagWindow;
    private flagGlobal;
    constructor();
    /**
     * Enable/disable access to delog globaly using window or global
     *
     * @param {boolean} flag true if you want to access globaly
     * @return {void}
     */
    global(flag: boolean): void;
    /**
     * Log into console
     *
     * @param {any[]} ...args
     * @return {void}
     */
    log(...args: any[]): void;
}
/**
 * Define interface of instance of this Delog class.
 */
interface IDelogDefinition extends Delog {
    (...args: any[]): void;
}
export { Delog, IDelogDefinition, };
