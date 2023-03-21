function addQuestionsToBackend(questionData) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('/quiz/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(questionData)
            });
            const data = await response.json();
            resolve(data);
        } catch (error) {
            console.error('Error adding question to backend', error);
            reject(error);
        }
    });
}

export default addQuestionsToBackend;