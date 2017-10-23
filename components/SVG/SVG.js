var mo = document.querySelector('#markoliver');
console.log('mo:',mo);
mo.addEventListener('transitionend', function() {
    console.log('reloading');
    window.location.reload();
}, false);
