var i = 0;

setInterval(() => {
    i++;
    self.postMessage(i);
}, 1000);

