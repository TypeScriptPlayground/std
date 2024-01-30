/**
 * This function converts the provided string boolean to an actual boolean type.
 * 
 * @returns The boolean value of the string
 */
export default function parseBoolean(booleanString : string) : boolean {
    return booleanString === 'true' || booleanString === 'True';
}
