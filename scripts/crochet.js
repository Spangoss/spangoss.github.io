window.onload = function () {
    const grid = document.getElementById("grid");
    const colorPicker = document.getElementById("colorPicker");
    const rowInput = document.getElementById("rowInput");
    const colInput = document.getElementById("colInput");
    const buildButton = document.getElementById("buildGrid");
    const addRowBtn = document.getElementById("addRow");
    const addColBtn = document.getElementById("addCol");

    const defaultColor = "rgb(245, 245, 245)";
    let cellMatrix = [];

    function clearMark(cell) {
        cell.textContent = "";
    }

    function toggleCellColor(cell) {
        const currentColor = getComputedStyle(cell).backgroundColor;
        if (currentColor === defaultColor) {
            cell.style.backgroundColor = colorPicker.value;
        } else {
            cell.style.backgroundColor = "";
            clearMark(cell);
        }
    }

    function toggleCellMark(cell) {
        cell.textContent = cell.textContent === "X" ? "" : "X";
    }

    function propagateColor(row, col) {
        const color = getComputedStyle(cellMatrix[row][col]).backgroundColor;
        if (color === defaultColor) return;

        [row + 1, row + 2].forEach(r => {
            if (cellMatrix[r] && cellMatrix[r][col]) {
                cellMatrix[r][col].style.backgroundColor = color;
            }
        });
    }

    function createCell(row, col) {
        const cell = document.createElement("div");
        cell.className = "cell";

        cell.addEventListener("click", () => toggleCellColor(cell));
        cell.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            toggleCellMark(cell);
            propagateColor(row, col);
        });

        return cell;
    }

    function buildGrid(rows, cols) {
        grid.innerHTML = "";
        cellMatrix = [];

        for (let r = 0; r < rows; r++) {
            const rowDiv = document.createElement("div");
            rowDiv.className = "grid-row";
            rowDiv.style.gridTemplateColumns = `60px repeat(${cols}, 40px)`;

            const rowButton = document.createElement("button");
            rowButton.textContent = `${r + 1}`;
            rowButton.className = "btn btn-secondary";
            rowButton.addEventListener("click", () => {
                const cells = cellMatrix[r];
                const allColored = cells.every(cell =>
                    getComputedStyle(cell).backgroundColor !== defaultColor
                );
                cells.forEach(cell => {
                    if (allColored) {
                        cell.style.backgroundColor = "";
                        clearMark(cell);
                    } else {
                        cell.style.backgroundColor = colorPicker.value;
                    }
                });
            });

            rowDiv.appendChild(rowButton);
            cellMatrix[r] = [];

            for (let c = 0; c < cols; c++) {
                const cell = createCell(r, c);
                cellMatrix[r][c] = cell;
                rowDiv.appendChild(cell);
            }

            grid.appendChild(rowDiv);
        }
    }

    // Add a new row
    function addRow() {
        const cols = cellMatrix[0] ? cellMatrix[0].length : parseInt(colInput.value, 10);
        const row = cellMatrix.length;
        const rowDiv = document.createElement("div");
        rowDiv.className = "grid-row";
        rowDiv.style.gridTemplateColumns = `60px repeat(${cols}, 40px)`;

        const rowButton = document.createElement("button");
        rowButton.className = "btn btn-secondary";
        rowButton.textContent = `${row + 1}`;
        rowButton.addEventListener("click", () => {
            const cells = cellMatrix[row];
            const allColored = cells.every(cell =>
                getComputedStyle(cell).backgroundColor !== defaultColor
            );
            cells.forEach(cell => {
                if (allColored) {
                    cell.style.backgroundColor = "";
                    clearMark(cell);
                } else {
                    cell.style.backgroundColor = colorPicker.value;
                }
            });
        });

        rowDiv.appendChild(rowButton);
        cellMatrix[row] = [];

        for (let c = 0; c < cols; c++) {
            const cell = createCell(row, c);
            cellMatrix[row][c] = cell;
            rowDiv.appendChild(cell);
        }

        grid.appendChild(rowDiv);
        rowInput.value = cellMatrix.length;
    }

    // Add a new column
    function addColumn() {
        const rows = cellMatrix.length;
        const col = cellMatrix[0] ? cellMatrix[0].length : parseInt(colInput.value, 10);

        for (let r = 0; r < rows; r++) {
            const rowDiv = grid.children[r];
            const cell = createCell(r, col);
            cellMatrix[r].push(cell);
            rowDiv.appendChild(cell);
            rowDiv.style.gridTemplateColumns = `60px repeat(${cellMatrix[r].length}, 40px)`;
        }

        colInput.value = cellMatrix[0].length;
    }

    buildButton.addEventListener("click", () => {
        const rows = parseInt(rowInput.value, 10);
        const cols = parseInt(colInput.value, 10);
        buildGrid(rows, cols);
    });

    addRowBtn.addEventListener("click", addRow);
    addColBtn.addEventListener("click", addColumn);
    document.getElementById("alternateRows").onclick = alternateRowColors;

    function alternateRowColors() {
        cellMatrix.forEach((row, r) => {
            row.forEach(cell => {
                if (r % 2 === 0) {
                    cell.style.backgroundColor = colorPicker.value;
                } else {
                    cell.style.backgroundColor = "";
                    clearMark(cell);
                }
            });
        });
    }

    // Initial grid
    buildGrid(parseInt(rowInput.value, 10), parseInt(colInput.value, 10));
};