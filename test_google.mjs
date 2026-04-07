import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
  apiKey: 'AIzaSyApgq0CrVpFPasBpqmoBOQpUEv5Ig0rkzs',
});

async function run() {
  console.log("Starting...");
  try {
    const { text } = await generateText({
      model: google.chat('gemini-3.1-pro-preview'),
      prompt: 'Hello',
      providerOptions: {
        google: { thinkingConfig: { thinkingLevel: 'high' } }
      }
    });
    console.log("Result:", text);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
