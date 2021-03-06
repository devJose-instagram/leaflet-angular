export interface PerimetersTypeDTO{
    perimeter: string,
    icon: string,
    key: string
}
export interface CoordinatesDTO{
    lat: Number,
    long: Number
}
export interface DrawPerimeterDTO{
    perimeterType: string,
    draw: boolean
}
export interface PerimeterInProcessDTO{
    perimeterType?: string;
    perimeter?: any;
    markers?: any[];
}
export interface PerimeterRegisterDTO{
    perimeterType: string;
    perimeter?: string;
    perimeterColor?: string;
    perimeterCoordinates: any[];
    perimeterFillColor?: string;
}