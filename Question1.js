function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            const filteredArray = mixedArray
                .filter(item => typeof item === 'string')  
                .map(item => item.toLowerCase());          
            resolve(filteredArray);
        } catch (error) {
            reject('Error in processing the array');
        }
    });
}

const input = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(input).then(console.log).catch(console.error);

