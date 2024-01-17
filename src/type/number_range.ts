type Enumerate<
    Value extends number,
    Accumulator extends number[] = []
> = Accumulator['length'] extends Value ? Accumulator[number] : Enumerate<
    Value,
    [
        ...Accumulator,
        Accumulator['length']
    ]
>

/**
 * This type generic creates a number range type based on start and end.
 * 
 * @template Start The start for the number range.
 * @template End The end for the number range.
 */
type NumberRange<
    Start extends number,
    End extends number
> = Exclude<
    Enumerate<End> | End,
    Enumerate<Start>
>

export default NumberRange
