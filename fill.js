Bitmap.prototype.getNearbyCoordinates = function (row, col) {
    const orientations = [
        [ row - 1, col + 0 ], // above 
        [ row + 1, col + 0 ], // below
        [ row + 0, col - 1 ], // left
        [ row + 0, col + 1 ], // right
    ]

    return orientations
}

Bitmap.prototype.fill = function (row, col, new_color) {
    const old_color = this.grid[row][col];
    if (old_color === new_color) return;
    this.setColor(row, col, new_color);

    var queue = [];

    queue.push( [ row, col ] ); // 1.

    while ( queue.length ) { // 2. 
        const coordinate = queue.shift(); // 3.
        console.log("Clicked coordinate is", coordinate)

        const nearbyCoordinates = this.getNearbyCoordinates( coordinate[ 0 ], coordinate[ 1 ] ); // 4.

        for ( let i = 0; i < nearbyCoordinates.length; i++ ) { // 5.
            const thisNeighborCoordinates = nearbyCoordinates[ i ];
            const thisNeighborRowIndex = thisNeighborCoordinates[ 0 ];
            const thisNeighborColIndex = thisNeighborCoordinates[ 1 ];

            const thisNeighborColor = this.grid[ thisNeighborRowIndex ][ thisNeighborColIndex ];

            console.log ("thisNeighborColor:", thisNeighborColor);
            if ( thisNeighborColor === old_color ) { // 6.
                this.setColor( thisNeighborRowIndex, thisNeighborColIndex, new_color ); // 7.
                queue.push( [ thisNeighborRowIndex, thisNeighborColIndex ] ); // 8.
            }
        }      
    }

    // The rest of the flood fill algorithm is given in pseudo-code below.
    // Convert the following pseudo-code comments into javascript
    // to complete the implementation of this method.
    //
    //
    // 1. Push the coordinates [row, col] onto the queue.
    // 2. While the queue is not empty:
    //    3. Shift a pair of coordinates [r,c] off the front of the queue.
    //    4. The 4-connected neighbors are the cells above, below, left, and right.
    //    5. Check each of those 4 neighbors:
    //       6. If the neighbor is old_color:
    //          7. Set the neighbor to new_color.
    //          8. Add the neighbors coordinates to the queue
    //              (to ensure we later check its neighbors as well).
}
