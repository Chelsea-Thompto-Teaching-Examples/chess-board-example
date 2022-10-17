// Create and place a scene with Three.js
const container = document.getElementById('chess-board-3');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  500 / 500,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x787878);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(500, 500);
container.appendChild(renderer.domElement);

// Board Materials
const whiteMat = new THREE.MeshStandardMaterial({
  color: 0xffffff
})
const blackMat = new THREE.MeshStandardMaterial({
  color: 0x000000
})

// Board Geometry
const tileShape = new THREE.BoxGeometry(1, 1, 1);

// Wireframe (for white cubes)
const matLineBasic = new THREE.LineBasicMaterial({
  color: 0x000000
});
let wireframe = new THREE.WireframeGeometry(tileShape);
let line = new THREE.LineSegments(wireframe, matLineBasic);

// Group for Board (group used to rotate all cubes at once)
const board = new THREE.Group();

// Function for creating the board
const makeBoard3 = function() {
  var size = 8;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 == 0) {
        let tile = new THREE.Mesh(tileShape, whiteMat);
        tile.position.set(i - 3.5, j - 3.5, 0);
        board.add(tile);
        let wireframe = new THREE.WireframeGeometry(tileShape);
        let line = new THREE.LineSegments(wireframe, matLineBasic);
        line.position.set(i - 3.5, j - 3.5, 0);
        board.add(line);
      } else {
        let tile = new THREE.Mesh(tileShape, blackMat);
        tile.position.set(i - 3.5, j - 3.5, 0);
        board.add(tile);
      }
    }
  }
  scene.add(board);
}

// Call board function
makeBoard3();

// Position our camera so we can see the shape
camera.position.z = 10;
camera.position.y = -12;
camera.position.x = 0;
camera.rotation.x = 45 * Math.PI / 180;
//camera.rotation.z = 20 * Math.PI / 180;

// Add a directional light to the scene
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
scene.add(directionalLight);

// Add an ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
scene.add(ambientLight);

// Define and then call the render loop
// Define
function render() {
  requestAnimationFrame(render);
  board.rotation.z += 0.005;
  renderer.render(scene, camera);
}
// Call the render function
render();
