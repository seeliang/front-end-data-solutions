store.subscribe(render)
var valueEl = document.getElementById('sub-count')
function render() {
  valueEl.innerHTML = store.getState().count.toString()
}

// init load
render()

