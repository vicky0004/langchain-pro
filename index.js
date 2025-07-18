import dotenv from 'dotenv';
dotenv.config();

// OpenAI's Chat model
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
const model = new ChatOpenAI({ model: "gpt-3.5-turbo" });

const messages = [
  new SystemMessage("Translate the following from English into Italian"),
  new HumanMessage("hello"),
];

await model.invoke(messages);
