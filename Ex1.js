/**
 * @author Christian Colomb
 * @version 1
 *
 * this program plays the "Game of Life" with three examples
 */

/**
 * this takes the input board and outputs the next generation for the game of life
 * @param board
 */

play([[1,0,0],[0,1,0],[0,0,0]]);

play([[0,1,0,0,0],[1,0,0,1,1],[1,1,0,0,1],[0,1,0,0,0],[1,0,0,0,1]]);

play([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]);


function play(board){
    //gets the parallel array of counts of neighbors
    var nCount = countNeighbors(board);
    var output = "";

    //prints initial board
    console.log("Initital Board:")
    for(var  i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            output += " " + board[i][j];
        }
        console.log(output);
        output = "";
    }
    console.log("Next Generation: ")

    //creates the next generation based on the counts and prints it
    for(var  i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            if (nCount[i][j] < 2 || nCount[i][j] > 3) {
                nCount[i][j] = 0;
            }else if(nCount[i][j] == 3 && board[i][j] == 0){
                nCount[i][j] = 1;
            }else{
                nCount[i][j] = board[i][j];
            }
            output +=" "+nCount[i][j];
        }

        console.log(output);

        output = "";
    }
    console.log("\n\n");


}

/**
 * counts the number of neighbors that each element has and returns a parallel array containing the counts
 * @param board
 */
function countNeighbors(board){
    var nCount = createEmptyMatrix(board.length);

    for(var  i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            //increment all the neighboring indexes within bounds
            if(board[i][j] == 1) {

                if (i > 0) {
                    if(j > 0) {
                        nCount[i - 1][j - 1]++;
                    }
                    nCount[i - 1][j]++;
                    if(j < nCount.length-1) {
                        nCount[i - 1][j + 1]++;
                    }
                }

                if(j > 0) {
                    nCount[i][j - 1]++;
                }
                if(j < nCount.length-1) {
                    nCount[i][j + 1]++;
                }

                if(i < nCount.length-1) {
                    if(j > 0) {
                        nCount[i + 1][j - 1]++;
                    }
                    nCount[i + 1][j]++;
                    if(j < nCount.length-1) {
                        nCount[i + 1][j + 1]++;
                    }
                }


            }
        }
    }

    return nCount;
}

/**
 * populates a 2 dimensional square array with 0's
 * @param length
 * @returns {Array}
 */
function createEmptyMatrix(length){
    var arr = [];
    for(var  i = 0; i < length; i++){
        var col = [];
        for(var  j = 0; j < length; j++){
            col[j] = 0;
        }
        arr[i] = col;
    }
    return arr;
}

