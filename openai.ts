import OpenAI from "jsr:@openai/openai";

const [inputText] = Deno.args;
if (!inputText) console.error("args not found.");

const openai = new OpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
});

const chatCompletion = await openai.chat.completions.create({
  messages: [{
    role: "system",
    content:
      "You are a cheerful and ideal colleague—always positive, supportive, and collaborative. You contribute to a friendly and productive work environment. And you speak informal Japanese about 3 lines at the most.",
  }, { role: "user", content: inputText }],
  model: "gpt-4o-mini",
});

console.log(chatCompletion.choices[0].message.content);
