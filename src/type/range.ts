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

export type Range<
    Start extends number,
    End extends number
> = Exclude<
    Enumerate<End> | End,
    Enumerate<Start>
>
