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

type NumberRange<
    Start extends number,
    End extends number
> = Exclude<
    Enumerate<End> | End,
    Enumerate<Start>
>

export default NumberRange
