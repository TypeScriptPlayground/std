import { Coordinate } from './coordiante.ts';

/**
 * This function calculates the total area for an array of coordinates.
 * 
 * @function
 * @param coordinates An array of coordinates
 * @returns The total area
 */
export default function area(coordinates : Coordinate[]) : number {
    let totalArea = 0;

    coordinates.reduce(
        (
            lastCoordinate,
            currentCoordinate
        ) => {
            const widthOfTotalArea = Math.abs(Math.max(
                lastCoordinate.xPosition,
                currentCoordinate.xPosition
            ) - Math.min(
                lastCoordinate.xPosition,
                currentCoordinate.xPosition
            ));
        
            const height = (Math.abs(lastCoordinate.yPosition) + Math.abs(currentCoordinate.yPosition)) / 2;
        
            const currentArea = widthOfTotalArea * height;
    
            if (lastCoordinate.xPosition - currentCoordinate.xPosition > 0) {
                totalArea += currentArea;
            } else {
                totalArea -= currentArea;
            }
        
            return currentCoordinate;
        },
        coordinates[coordinates.length - 1]
    );

    return totalArea;
}
