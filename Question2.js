function resolvedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve('message: delayed success!');
            } catch (error) {
                reject(error);
            }
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error('delayed exeption!');
            } catch (error) {
                reject(error.message);
            }
        }, 500);
    });
}

async function handlePromises() {
    try {
        const successMessage = await resolvedPromise();
        console.log(successMessage);
    } catch (error) {
        console.error('Error:', error);
    }

    try {
        const errorMessage = await rejectedPromise();
        console.log(errorMessage);
    } catch (error) {
        console.error('Error:', error);
    }
}

handlePromises();
