async function main() {
    await fetch(
        `https://api.openai.com/v1/completions`,
        {
            body: JSON.stringify({"model": "text-davinci-003", "prompt": "Given this text, return whether it is related or not to linear algebra. Only return yes or no. Do not return anything else other than yes or no.\nLinear algebra - Wikipedia", "temperature": 0, "max_tokens": 512}),
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer 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",
            },
                }
    ).then((response) => {
        if (response.ok) {
            response.json().then((json) => {
                console.log(json)
            });
        }
    });    
}

main();
