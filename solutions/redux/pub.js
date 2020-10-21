document.getElementById('pub-add')
        .addEventListener('click', function () {
          store.dispatch({ type: 'COUNT_INCREMENT' })
        })

document.getElementById('pub-remove')
.addEventListener('click', function () {
    store.dispatch({ type: 'COUNT_DECREMENT' })
})