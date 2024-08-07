import pkg from "@lmstudio/sdk";
const { LMStudioClient } = pkg;

async function messageProcess(message: any) {
    const client = new LMStudioClient();
    const model = await client.llm.load("microsoft/Phi-3-mini-4k-instruct-gguf");

    console.log("Sending message to model:", message);
    const response = model.respond([
        { role: "system", content: "This is a test message" },
        {
            role: "user", content: `Analyze this message and categorize users' input to these categorizes: 
            Idea,Research Paper Request, Nonsense. Here is the message:  
            ${message}. 
            Once you have determine the categorize, ONLY return the keyword without double quote such as 
            "Idea", "Research Paper Request" or "Nonsense".` },
    ]);
    return response;
}

export default messageProcess;


