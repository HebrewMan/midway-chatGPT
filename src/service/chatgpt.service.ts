import { Provide } from '@midwayjs/core';
// import { ChatGPTAPI } from 'chatgpt'

@Provide()
export class ChatGptService {
 
    async sendMessage(message: string): Promise<string> {
        //调用chatGpt 发送交互返回text 给前端
        // const api = new ChatGPTAPI({
        //     apiKey: process.env.OPENAI_API_KEY
        // })
        // const res = await api.sendMessage('Hello World!')

        // console.log(process.env.OPENAI_API_KEY)

        const res2 = {text:'hello'}

        //存储用户聊天记录

        return res2.text;
    }

    async getUserChatData(uid: number): Promise<Object[]> {
        const res = [
            {userPrompt:'hello,gpt',aiReply: 'hi,little guy'},
            {userPrompt:'1+1=?',aiReply: '3'}
        ]
        return res
    }

}
