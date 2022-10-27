package com.code_of_duty.bas_chat_bot.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BotConversation {
    private List<MessageLine> messages;


    //For encapsulation, I think last semester they told us to put those here, instead of in the manager and then have a method in the manager
    private void AddMessage(MessageLine message){
        messages.add(message);
    }
}
