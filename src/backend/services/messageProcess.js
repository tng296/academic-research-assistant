import pkg from "@lmstudio/sdk";
const { LMStudioClient } = pkg;

async function messageProcess(message) {
    const client = new LMStudioClient();
    const model = await client.llm.load("microsoft/Phi-3-mini-4k-instruct-gguf");

    console.log("Sending message to model:", message);
    const response = model.respond([
        { role: "system", content: "You are a helpful AI assistant." },
        { role: "user", content: `${message}?` },
    ]);

    return response;
}

export default messageProcess;


