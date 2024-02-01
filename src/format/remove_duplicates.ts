export default function removeDuplicates<ArrayType extends string | number>(array : ArrayType[]) : ArrayType[] {
    return [...new Set(array)];
}
