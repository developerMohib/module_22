let heights = [78,75,74,84,90,89,88,98];

function maxFider(heights){
    let max = heights[0];
    for (const height of heights) {
        if(max < height){
            max = height;
        }
    }
    return max;
}
let maxHeight = maxFider(heights);
document.write( 'Max Height from Array : ', maxHeight, '<br>');