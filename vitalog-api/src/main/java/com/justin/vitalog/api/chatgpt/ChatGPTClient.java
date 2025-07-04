package com.justin.vitalog.api.chatgpt;

import com.justin.vitalog.api.chatgpt.dto.request.ChatGPTRequest;
import com.justin.vitalog.api.chatgpt.dto.response.ChatGPTResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(
        name = "openAiClient",
        url = "https://api.openai.com/v1/chat/completions",
        configuration = {FeignChatGPTConfig.class})
public interface ChatGPTClient {

    @PostMapping(consumes = "application/json", produces = "application/json")
    ChatGPTResponse call(@RequestBody ChatGPTRequest request);
} 