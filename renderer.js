class Stage {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new WebGLRenderer(this);
    this.renderer.resize();
    this.camera = this.renderer.createCamera(FreeCamera);
    this.renderer.camera = this.camera;
    this.camera.position = new Float32Array([15.0, -20.0, 40.0]);
    this.camera.rotation = new Float32Array([0.5, 0.3, 0.0]);
    this.objects = [];
    {
      this.renderer.createObjectFile().fromPath("sphere1.obj").then(obj => {
        this.objects.push(obj);
        window.sphere = obj;
      });
    }
    {
      this.renderer.createObjectFile().fromPath("box2.obj").then(obj => {
        this.objects.push(obj);
        window.cube = obj;
      });
    }
    window.camera = this.camera;
    window.renderer = this.renderer;
    window.gl = this.renderer.gl;
    {
      camera.positionSpeed = 512;
      camera.rotation = new Float32Array([0.3, -2.3, 0]);
      camera.position = new Float32Array([-120, -40, -50]);
    }
    // create textures
    {
      window.IF_TEXTURE = renderer.createTexture().fromColor([0, 255, 0]);
      window.CALL_TEXTURE = renderer.createTexture().fromColor([156, 39, 176]);
      window.PARAM_TEXTURE = renderer.createTexture().fromColor([255, 0, 0]);
      window.LOOP_TEXTURE = renderer.createTexture().fromColor([255, 255, 0]);
    }
    {
      let filter = renderer.createFilter({
        width: renderer.width,
        height: renderer.height
      });
      window.filter = filter;
    }
    requestAnimationFrame(draw);
  }
};

let stage = new Stage(scene);

function draw() {
  let now = performance.now();
  if (renderer.ready) {
    controlCamera();
    deltaX *= 0.375;
    deltaY *= 0.375;
    drawScene();
  }
  let then = performance.now();
  let delta = then - now;
  requestAnimationFrame(draw);
};

function controlCamera() {
  camera.control(
    camera.delta,
    [
      isKeyPressed("W") | 0,
      isKeyPressed("S") | 0,
      isKeyPressed("A") | 0,
      isKeyPressed("D") | 0,
      isKeyPressed("2") | 0,
      isKeyPressed("1") | 0,
      isKeyPressed("Q") | 0,
      isKeyPressed("E") | 0
    ],
    deltaX, deltaY
  );
};

function drawNodes() {
  let objects = stage.objects;
  let program = renderer.useRendererProgram("object");
  // draw nodes
  nodes.map(node => {
    let obj = (
      node.kind === Iroh.LOOP ? window.cube : window.sphere
    );
    let center = obj.boundings.world.center;
    obj.translate.x = (node.x);
    obj.translate.y = (node.y);
    obj.translate.z = (node.z);
    obj.scale.set(node.scale);
    if (node.kind === Iroh.LOOP) {
      cube.rotate.y += 0.1;
      obj.scale.set(3);
      obj.scale.y = node.scale * 2.75;
      if (node.scale <= 0.1) return;
    }
    obj.update();
    node.center[0] = center[0];
    node.center[1] = center[1];
    node.center[2] = center[2];
    if (node.kind === Iroh.CALL) obj.useTexture(CALL_TEXTURE);
    else if (node.kind === Iroh.IF) obj.useTexture(IF_TEXTURE);
    else if (node.kind === Iroh.LOOP) obj.useTexture(LOOP_TEXTURE);
    rotation += 0.0125;
    if (camera.isObjectInView(obj)) renderer.renderObject(obj);
  });
};

let parameterIndex = 0;
function updateParameters() {
  parameterIndex = (parameterIndex + 0.25) % nodeIndex;
  nodes.map(node => {
    if (node.index < parameterIndex - 25 || node.index > parameterIndex + 25) return;
    if (!node.anims.params) {
      addParameterAnimation(node);
    }
    node.anims.params = true;
  });
};

function updateNodes() {

};

let parameterAnims = [];
function addParameterAnimation(node) {
  let hash = node.hash;
  let count = 0;
  let length = parameterAnims.length;
  for (let ii = 0; ii < length; ++ii) {
    if (parameterAnims[ii].hash === hash) count++;
  };
  if (count <= 0) parameterAnims.push({
    t: 0,
    hash: node.hash
  });
};

let parameterColor = new Float32Array([244, 67, 54, 255]);

function playParameterAnimations() {
  let objects = stage.objects;
  let program = renderer.useRendererProgram("object");
  let obj = sphere;
  // draw anims
  for (let ii = 0; ii < parameterAnims.length; ++ii) {
    let anim = parameterAnims[ii];
    // play
    {
      anim.t += 0.016;
    }
    let t = gainLerp(anim.t, 0.3);
    // draw
    {
      let node = getNodeByHash(anim.hash);
      if (!node.ready) {
        node.scale = node.scale + (node.maxScale - node.scale) * t;
      }
      node.callees.map(callee => {
        let secondNode = getNodeByHash(callee);
        if (!secondNode) return;
        let x = (node.x + (secondNode.x - node.x) * t);
        let y = (node.y + (secondNode.y - node.y) * t);
        let z = (node.z + (secondNode.z - node.z) * t);
        if (!secondNode.ready) {
          secondNode.scale = secondNode.scale + (secondNode.maxScale - secondNode.scale) * t;
          secondNode.maxScale = Math.min(node.maxScale + 0.175, 7.0);
        }
        obj.translate.x = x;
        obj.translate.y = y;
        obj.translate.z = z;
        obj.scale.set(1.25);
        obj.update();
        obj.useTexture(PARAM_TEXTURE);
        if (!camera.isObjectInView(obj)) return;
        else renderer.renderObject(obj);
        renderer.drawVector(
          node.center[0], node.center[1], node.center[2],
          x, y, z,
          parameterColor
        );
      });
    }
    if (anim.t > 1.0) parameterAnims.splice(ii, 1);
    //if (ii >= 5) break;
  };
};

let last = 0;
let rotation = 0;
function drawScene() {
  let now = performance.now();
  let gBuffer = renderer.gBuffer;
  renderer.useCamera(camera);
  renderer.useFrameBuffer(renderer.screen.texture);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
  // update
  {
    updateNodes();
    updateParameters();
  }
  // draw scene
  {
    drawNodes();
    playParameterAnimations();
    // draw connections
    /*nodes.map(node => {
      node.callees.map(callee => {
        let nodeA = getNodeByHash(node.hash);
        let nodeB = getNodeByHash(callee);
        renderer.drawVector(
          (nodeA.x * 4.5), (nodeA.y * 2.5), (nodeA.x + nodeA.y) * 2.5,
          (nodeB.x * 4.5), (nodeB.y * 2.5), (nodeB.x + nodeB.y) * 2.5
        );
      });
    });*/
  }
  // FXAA
  {
    filter.enable(true);
    filter.readFrameBuffer(renderer.screen.texture, gl.COLOR_ATTACHMENT0);
    filter.useProgram("FXAA");
    filter.apply();
    filter.writeToFrameBuffer(null, gl.COLOR_ATTACHMENT0);
  }
  //gBuffer.writeToFrameBuffer(renderer.screen.texture, gl.COLOR_ATTACHMENT2, gl.COLOR_BUFFER_BIT);
  delta = now - last;
  //renderer.screen.texture.writeToScreen();
  renderer.flush();
  renderer.nextFrame(delta);
  last = performance.now();
};

window.keys = {};
let isKeyPressed = (key) => keys[key] || keys[key.toLowerCase()] || keys[key.toUpperCase()];
window.onkeydown = (e) => keys[e.key] = 1;
window.onkeyup = (e) => keys[e.key] = 0;

let mx = 0;
let my = 0;
let deltaX = 0;
let deltaY = 0;
window.onmousemove = (e) => {
  if (locked) {
    mx = my = 0;
    deltaX = e.movementX * 0.75;
    deltaY = e.movementY * 0.75;
  } else {
    mx = e.clientX;
    my = e.clientY;
  }
};

let locked = false;
let pressed = false;
let selection = null;
scene.onclick = (e) => scene.requestPointerLock();
window.onmousedown = (e) => pressed = true;
window.onmouseup = (e) => pressed = false;

setInterval(() => {
  locked = document.pointerLockElement === scene;
}, 1e3 / 10);
