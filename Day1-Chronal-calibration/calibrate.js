const calibrate = (input) => input
                .split('\n')
                .map(x => parseInt(x.trim(),10))
                .reduce((sum, i) => sum+i);


module.exports = calibrate;