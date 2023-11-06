/**
 * This function calculates the total area for an array of coordinates.
 * 
 * @function
 * @param coordinates An array of coordinates
 * @returns The total area
 */
export default function area(coordinates : {x : number, y : number}[]) : number {
    let totalArea = 0;

    coordinates.reduce(
        (
            lastCoordinate,
            currentCoordinate
        ) => {
            const widthOfTotalArea = Math.abs(Math.max(
                lastCoordinate.x,
                currentCoordinate.x
            ) - Math.min(
                lastCoordinate.x,
                currentCoordinate.x
            ))
        
            const height = (Math.abs(lastCoordinate.y) + Math.abs(currentCoordinate.y)) / 2
        
            const currentArea = widthOfTotalArea * height;
    
            if (lastCoordinate.x - currentCoordinate.x > 0) {
                totalArea += currentArea
            } else {
                totalArea -= currentArea
            }
        
            return currentCoordinate
        },
        coordinates[coordinates.length - 1]
    )

    return totalArea;
}
