const board = document.getElementById('puzzle-board');
const tiles = [];
let emptyIndex = 8; // For 3x3 puzzle

// Create tiles
for (let i = 1; i <= 8; i++) {
  const tile = document.createElement('div');
  tile.className = 'tile';
  tile.textContent = i;
  tile.addEventListener('click', () => moveTile(i));
  board.appendChild(tile);
  tiles.push(tile);
}

const emptyTile = document.createElement('div');
emptyTile.className = 'tile empty';
board.appendChild(emptyTile);
tiles.push(emptyTile);

function moveTile(index) {
  const currentIndex = tiles.indexOf(event.target);
  if (Math.abs(currentIndex - emptyIndex) === 1 || Math.abs(currentIndex - emptyIndex) === 3) {
    // Swap tiles
    [tiles[currentIndex], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[currentIndex]];
    board.append(...tiles);
    emptyIndex = currentIndex;
  }
}

document.getElementById('shuffle').addEventListener('click', () => {
  // Simple shuffle logic (simplified)
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  board.append(...tiles);
  emptyIndex = tiles.indexOf(emptyTile);
});

document.getElementById('solve').addEventListener('click', () => {
  // Reset to solved state
  tiles.sort((a, b) => a.textContent - b.textContent);
  board.append(...tiles);
  emptyIndex = 8;
});

// Simple puzzle game mini project