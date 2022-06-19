let SIZE = 2 * document.getElementById("game-size").valueAsNumber;
let FIELD = [];
let STYLE = undefined;

function initializeField() {
    FIELD = new Array(SIZE)
        .fill()
        .map(
            () => new Array(SIZE)
                .fill([false, 0])
        );

    for (let i = 1; i < FIELD.length - 1; ++i) {
        for (let j = 1; j < FIELD[i].length - 1; ++j) {
            FIELD[i][j][0] = true;
        }
    }
}

function clearCells() {
    for (let i = 1; i <= SIZE * SIZE; ++i) {
        document.getElementById(i).remove();
    }
}

function initiateCells() {
    const field = document.getElementById("field");

    for (let i = 0; i < SIZE * SIZE; ++i) {
        const cell = document.createElement("div");
        cell.className = "c";
        cell.id = i + 1;
        field.appendChild(cell);
    }

    // Insert style for class .c into css rules
    STYLE = document.createElement("style");
    document.head.appendChild(STYLE);
    STYLE.sheet.insertRule(
        `.c {
			width: calc(840px / ${SIZE} - 20px);
			height: calc(840px / ${SIZE} - 20px);
			line-height: calc(840px / ${SIZE} - 20px);
		}`
    );
}

// thigger on change
function resizeField() {
    clearCells();
    SIZE = 2 * document.getElementById("game-size").valueAsNumber;
    initializeField();
    initiateCells();
}

initializeField();
initiateCells();
