edit.onclick = (e) => {
  code_editor.style.display = "block";
  edit.style.display = "none";
};

exit.onclick = (e) => {
  code_editor.style.display = "none";
  edit.style.display = "block";
};

analyse.onclick = (e) => {
  localStorage.setItem("code", doc.getValue());
  location.reload();
};

let editor = CodeMirror(document.getElementById("input"), {
  mode: "text/javascript",
  lineNumbers: true,
  value: "",
  width: window.innerWidth
});

let doc = editor.getDoc();

editor.on("change", (e) => {
  
});

function loadDefaultCode() {
  fetch("./input.js").then(resp => resp.text()).then(txt => {
    doc.setValue(txt);
    editor.scrollTo(0, 0);
    localStorage.setItem("code", txt);
    main(txt);
  });
};

if (localStorage.getItem("code") === null) {
  loadDefaultCode();
} else {
  let input = localStorage.getItem("code");
  if (!input.length) loadDefaultCode();
  else {
    doc.setValue(input);
    editor.scrollTo(0, 0);
    main(input);
  }
}
