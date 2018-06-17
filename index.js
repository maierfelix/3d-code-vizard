// globals
let ctx = null;
let canvas = null;
width = 0;
height = 0;

const IROH_STD_INDENT = 0x2;

let root = {
  hash: -1,
  next: null,
  children: []
};

let branchOffset = 0;

let nodes = [];

function biasLerp(b, t) {
  return (t / ((((1.0 / b) - 2.0) * (1.0 - t)) + 1.0));
};

function gainLerp(t, g) {
  if (t < 0.5) return biasLerp(t * 2.0, g) / 2.0;
  else return biasLerp(t * 2.0 - 1.0, 1.0 - g) / 2.0 + 0.5;
};

function instrToString(instr) {
  for (let key in Iroh) {
    if (Iroh[key] === instr) return key;
  };
  return null;
};

function getLocationHash(event) {
  let { start, end } = event.getLocation();
  return (
    `${start.line}:${start.column}:${end.line}:${end.column}`
  );
};

function resort() {
  nodes.sort(isGreaterThan);
};

function restructure() {
  for (let ii = 0; ii < nodes.length; ++ii) {
    let node = nodes[ii];
    allocateNode(node);
  };
};

function allocateNode(node) {
  let current = root;
  while (current !== null) {
    let next = current.next || null;
    if (next === null || next.hash > node.hash) {
      if (node.hash > current.hash) {
        current.next = {
          name: node.name,
          hash: node.hash,
          next: next,
          children: []
        };
      }
    }
    current = current.next || null;
  };
};

function isGreaterThan(a, b) {
  if (a.indent < b.indent) return -1;
  if (a.indent > b.indent) return +1;
  return 0;
};

function isLocationEqualTo(a, b) {
  return (
    (a.start.line === b.start.line) &&
    (a.start.column === b.start.column) &&
    (a.end.line === b.end.line) &&
    (a.end.column === b.end.column)
  );
};

let table = {};
/*
function isHashRegistered(hash) {
  return getNodeByHash(table, hash) !== null;
};

function getNodeByHash(obj, hash) {
  for (let key in obj) {
    if (key === hash) return obj;
    let current = obj;
    while (current !== null) {
      let next = current.next || null;
      if (next !== null && next.hash === hash) {
        return current;
      }
      current = current.next || null;
    };
    return getNodeByHash(obj[key], hash);
  };
  return null;
};*/

function isHashRegistered(hash) {
  for (let ii = 0; ii < nodes.length; ++ii) {
    let node = nodes[ii];
    if (node.hash === hash) return true;
  };
  return false;
};

function isLocationEqual(a, b) {
  return (
    (a.start.line === b.start.line) &&
    (a.start.column === b.start.column)
  );
};

function getNodeByHash(hash) {
  for (let ii = 0; ii < nodes.length; ++ii) {
    let node = nodes[ii];
    if (node.hash === hash) return node;
  };
  return null;
};

function getCalleesByHash(hash) {
  let callees = [];
  for (let ii = 0; ii < nodes.length; ++ii) {
    let node = nodes[ii];
    let match = false;
    node.callees.map(callee => {
      if (callee === hash) match = true;
    });
    if (match && callees.indexOf(node) <= -1) callees.push(node);
  };
  return callees;
};

let padding = 2.75;

function createTitle(node) {
  let event = node.event;
  let name = event.name;
  let fontHeight = 30;
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let tmpCtx = document.createElement("canvas").getContext("2d");
  ctx.font = `${fontHeight}px Arial`;
  canvas.width = ctx.measureText(name).width * 0.75;
  canvas.height = fontHeight;
  ctx.fillStyle = "red";
  ctx.fillText(name, canvas.width / 4, canvas.height / 2);
  ctx.translate(canvas.width, canvas.height);
  ctx.scale(-1, -1);
  tmpCtx.width = canvas.width;
  tmpCtx.height = canvas.height;
  tmpCtx.drawImage(canvas, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(tmpCtx.canvas, 0, 0);
  let texture = renderer.createTexture({ mips: false }).fromCanvas(canvas);
  let obj = renderer.createObject(Sprite);
  obj.useTexture(texture);
  node.title = obj;
};

let nodeIndex = 0;
function createNode(event) {
  let location = event.getLocation();
  let node = {
    kind: event.category,
    x: (event.indent * 1.5) * padding,
    y: (Math.sin(event.indent * 0.5) * Math.PI * 4.0) * padding,
    z: (event.indent + (nodeIndex * 2.0) + Math.cos(nodeIndex * 0.5) * Math.PI * 4.0) * padding,
    index: nodeIndex++,
    hash: event.hash,
    uhash: event.hash,
    name: event.name,
    indent: event.indent,
    event: event,
    line: location.start.line,
    scale: 0.0,
    maxScale: 1.75,
    callees: [],
    start: performance.now(),
    end: 0,
    ready: false,
    anims: {
      params: false
    },
    title: null,
    location: location,
    center: new Float32Array(3)
  };
  //createTitle(node);
  nodes.push(node);
};

let scope = {
  next: null,
  previous: null
};

function pushScope(event) {
  scope.next = {
    next: null,
    hash: event.hash,
    event: event,
    previous: scope
  };
  scope = scope.next;
};

function popScope() {
  if (scope && scope.previous) {
    scope = scope.previous;
  }
};

function getNodeConnections(node) {
  let callees = [];
  for (let ii = 0; ii < nodes.length; ++ii) {
    let subnode = nodes[ii];
    if (subnode.hash === node.hash) continue;
    if (subnode.callees.indexOf(node.hash) >= 0) {
      callees.push(subnode.hash);
    }
  };
  return callees;
};

function getSimiliarCodePath(node) {

};

function isRootNode(node) {
  let connectionCount = getNodeConnections(node).length;
  return connectionCount <= 0;
};

function onBranchEvent(listener, kind, event) {
  switch (listener) {
    case Iroh.CALL: {
      let isAlreadyRegistered = isHashRegistered(event.hash);
      if (!isAlreadyRegistered) {
        createNode(event);
      } else {
        //let node = getNodeByHash(event.hash);
        //node.maxScale = Math.min(node.maxScale + 0.25, 4.75);
      }
      {
        let node = getNodeByHash(event.hash);
        let calleeHash = scope.event ? scope.hash : -1;
        let calleeNode = getNodeByHash(calleeHash);
        if (calleeNode !== null) {
          if (calleeNode.callees.indexOf(event.hash) <= -1) {
            calleeNode.callees.push(event.hash);
          }
        }
      }
      if (kind === "before") pushScope(event);
      else if (kind === "after") popScope();
      //let node = getNodeByHash(event.hash);
      //node.end = performance.now();
    } break;
    case Iroh.IF: {
      if (kind === "enter") {
        let isAlreadyRegistered = isHashRegistered(event.hash);
        if (!isAlreadyRegistered) {
          createNode(event);
        }
        pushScope(event);
      }
      else if (kind === "leave") {
        popScope();
      }
    } break;
    case Iroh.LOOP: {
      if (kind === "enter") {
        let isAlreadyRegistered = isHashRegistered(event.hash);
        if (!isAlreadyRegistered) {
          createNode(event);
        } else {
          let node = getNodeByHash(event.hash);
          node.maxScale = Math.min(node.maxScale + 0.5, 15.75);
        }
        pushScope(event);
      }
      else if (kind === "leave") {
        popScope();
      }
    }
  };
};

function onArbitaryEvent(listener, kind, event) {
  //console.log(listener, kind, event);
};

function addBranchListeners(stage) {
  // program
  {
    stage.addListener(Iroh.PROGRAM)
    .on("enter", e => {
      onBranchEvent(Iroh.PROGRAM, "enter", e);
    })
    .on("leave", e => {
      onBranchEvent(Iroh.PROGRAM, "leave", e);
    });
  }
  // if
  {
    stage.addListener(Iroh.IF)
    .on("enter", e => {
      onBranchEvent(Iroh.IF, "enter", e);
    })
    .on("leave", e => {
      onBranchEvent(Iroh.IF, "leave", e);
    });
  }
  // else
  {
    stage.addListener(Iroh.ELSE)
    .on("enter", e => {
      onBranchEvent(Iroh.ELSE, "enter", e);
    })
    .on("leave", e => {
      onBranchEvent(Iroh.ELSE, "leave", e);
    });
  }
  // function
  {
    stage.addListener(Iroh.FUNCTION)
    .on("enter", e => {
      onBranchEvent(Iroh.FUNCTION, "enter", e);
    })
    .on("leave", e => {
      onBranchEvent(Iroh.FUNCTION, "leave", e);
    })
    .on("return", e => {
      onBranchEvent(Iroh.FUNCTION, "leave", e);
    });
  }
  // loop
  {
    stage.addListener(Iroh.LOOP)
    .on("enter", e => {
      onBranchEvent(Iroh.LOOP, "enter", e);
    })
    .on("leave", e => {
      onBranchEvent(Iroh.LOOP, "leave", e);
    });
  }
  // switch
  {
    stage.addListener(Iroh.SWITCH)
    .on("enter", e => {
      onBranchEvent(Iroh.SWITCH, "enter", e);
    })
    .on("leave", e => {
      onBranchEvent(Iroh.SWITCH, "leave", e);
    });
  }
  // case
  {
    stage.addListener(Iroh.CASE)
    .on("enter", e => {
      onBranchEvent(Iroh.CASE, "enter", e);
    })
    .on("leave", e => {
      onBranchEvent(Iroh.CASE, "leave", e);
    });
  }
};

function addArbitaryListeners(stage) {
  // call
  {
    stage.addListener(Iroh.CALL)
    .on("before", e => {
      onBranchEvent(Iroh.CALL, "before", e);
    })
    .on("after", e => {
      onBranchEvent(Iroh.CALL, "after", e);
    });
  }
};

let total_exec_time = 0;
function createAnalyser(input) {
  let stage = new Iroh.Stage(input);
  window.iroh = stage;
  addArbitaryListeners(stage);
  addBranchListeners(stage);
  let now = performance.now();
  eval(stage.script);
  let then = performance.now();
  total_exec_time = then - now;
};

function main(input) {
  createAnalyser(input);
};

function positionNode(node) {
  node.callees.map(callee => {
    
  });
};

let size = 32;

function drawNode(node) {
  ctx.fillRect(node.x * size, node.y * size, size / 2, size / 2);
  ctx.fillText(node.name, node.x * size, node.y * size + 32);
};

function drawConnections() {
  nodes.map(node => {
    node.callees.map(callee => {
      drawConnection(node.hash, callee);
    });
  });
};

function drawConnection(hashA, hashB) {
  let nodeA = getNodeByHash(hashA);
  let nodeB = getNodeByHash(hashB);
  ctx.beginPath();
  ctx.moveTo(nodeA.x * size, nodeA.y * size);
  ctx.lineTo(nodeB.x * size, nodeB.y * size);
  ctx.stroke();
  ctx.closePath();
};
