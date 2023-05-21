import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai';
import * as fs from 'fs';

const openai = new OpenAIApi(new Configuration({
    apiKey: 'your-openai-api-key' // replace with your OpenAI API key
}));

const getOpenAIResponse = async ({ prompt, maxTokens }: { prompt: string, maxTokens: number }) => {
    const messages: Array<ChatCompletionRequestMessage> = [{
        role: "system",
        content: "You are an AI tool capable of accomplishing small tasks with the aid of AI reasonaning and then by humans if AI cannot accomplish the task. "
    }, {
        role: "user",
        content: "I want to validate an e-book."
    }]
    const gptResponse = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: maxTokens
    });
    return gptResponse.data.choices[0].message?.content.toLowerCase();
}

export const run_validate_method_on_asset = ({ asset_item: assetItem, validation_user_request }: { asset_item: string, validation_user_request: string }) => {

    // const user_request = "It's meant to discuss the newest forms of solar evolution not discussed anywhere especially about 2023 Mars travel and its technologies.";

    // The path to your e-book file
    // const ebookFilePath = 'path_to_your_ebook_file.txt'; // replace with the actual path to your e-book file

    // fs.readFile(ebookFilePath, 'utf8', async (err, ebookContent) => {
    //     if (err) {
    //         console.error(`Error reading file from path: ${ebookFilePath}`);
    //         return;
    //     }

    // Define the prompt for GPT-3
    const prompt = `This is an e-book about: ${assetItem}\n\nDoes the content of the e-book meet the following user request? ${validation_user_request}`;
    let getOpenAIResponseStr: string = '';

    getOpenAIResponse({ prompt, maxTokens: 1000 }).then((gptResponse) => {
        getOpenAIResponseStr = gptResponse || '';
    });


    // Extract the response and convert it to boolean
    const validationResult = getOpenAIResponseStr.trim().toLowerCase() == 'yes';

    // Print the validation result
    console.log(validationResult);
};
