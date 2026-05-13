async function sendMessage() {

    try {

        let input = document.getElementById("userInput").value;

        document.getElementById("answer").innerText =
        "KI denkt...";

        let response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",

            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",

                    "Authorization":
                    "Bearer test"
                },

                body: JSON.stringify({

                    model: "llama-3.3-70b-versatile",

                    messages: [

                        {
                            role: "system",
                            content:
                            "Du bist ein freundlicher Support-Mitarbeiter von 23.athletics der sich kurz hält und immer in maximal 3 Sätzen antwortet."
                        },

                        {
                            role: "user",
                            content: input
                        }

                    ]

                })

            }
        );

        let data = await response.json();

        console.log(data);

        if(data.error){

    document.getElementById("answer")
    .innerText = data.error.message;

    return;
}

let answer =
data.choices[0].message.content;

        document.getElementById("answer").innerText =
        answer;

    }

    catch(error){

        console.log(error);

        document.getElementById("answer").innerText =
        "Fehler bei der KI 😥";
    }
}
