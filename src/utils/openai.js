export const createCompletion = (prompt) => {
  return fetch("https://api.openai.com/v1/completions", {
    method: "POST", 
    headers: {
      "Content-Type" : "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
        "model": "text-davinci-003",
        "prompt": prompt,
        "max_tokens": 1000,
        "temperature": 0
    })
  })
}