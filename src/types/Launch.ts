export interface Pad {
    id: number,
    map_url: string,
    latitude: string,
    longitude: string
}

export interface Launch {
    id: string,
    url: string,
    name: string,
    pad: Pad
}