export interface Patient {
    id: string,
    name: Array<Name>
}

export interface Name {
    given: string,
    family: string,
}
