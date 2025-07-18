import dotenv from 'dotenv';
dotenv.config();

// OpenAI's Chat model
// import { ChatOpenAI } from "@langchain/openai";
// import { HumanMessage, SystemMessage } from "@langchain/core/messages";
// const model = new ChatOpenAI({ model: "gpt-3.5-turbo" });

// const messages = [
//   new SystemMessage("Translate the following from English into Italian"),
//   new HumanMessage("hello"),
// ];

// await model.invoke(messages);


// Ollama's ConversationChain with memory
import { ConversationChain } from "langchain/chains";
import { ChatOllama } from "@langchain/ollama";
import { BufferMemory } from "langchain/memory";

const model = new ChatOllama({ model: "gemma3:1b" });

const memory = new BufferMemory();

const chain = new ConversationChain({
  llm: model,
  memory,
});

const result = await chain.call({ input: "I love java programming." });
console.log(result.response);

// Call it again to see memory in action
const result2 = await chain.call({ input: "give a simple hello world program." });
console.log(result2.response);

