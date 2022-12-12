package com.code_of_duty_bas_chat_bot.business.impl;

import com.code_of_duty_bas_chat_bot.business.FAQService;
import com.code_of_duty_bas_chat_bot.domain.FAQ;
import com.code_of_duty_bas_chat_bot.domain.Keyword;
import com.code_of_duty_bas_chat_bot.repository.FAQRepository;
import com.code_of_duty_bas_chat_bot.repository.KeywordRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

import static java.util.Collections.max;

@Service
@AllArgsConstructor
public class FAQServiceImpl implements FAQService {
    private FAQRepository repository;
    private KeywordRepository repo;
    List<String> commonWords = new ArrayList<>();


    @Override
    public List<FAQ> findAllByTopic(String topic) {
        //return repository.findAllByTopics(topic);
        return null;
    }

    private List<String> cleanup(String[] words){
        commonWords = List.of("the", "can","of", "what", "how", "why", "in", "my", "i", "is");
        List<String> wordss = Arrays.stream(words).toList();

        for (int i = 0; i < wordss.size(); i++){
            int finalI = i;
            if (commonWords.stream().anyMatch(word -> word.equals(wordss.get(finalI).toLowerCase()))) {
                wordss.remove(i);
            }
        }

        return wordss;
    }

    @Override
    public FAQ findByQuestion(String question) {
        FAQ faq = repository.findByQuestion(question);

        if (faq != null) {
            return faq;
        }
        else return null;
    }



    @Override
    public FAQ findByTopic(String question){

        FAQ faq1 = findByQuestion(question);

        if(faq1!=null){
            return faq1;
        }

        String words[] = question.split("\\W+");

        //List<String> filteredWords = cleanup(words);

        List<String> filteredWords = Arrays.stream(words).toList();


        List<FAQ> faqs = repository.findAllByTopicIn(filteredWords);

        List<Keyword> keywords = new ArrayList<>();
        List<Keyword> questionKeywords = new ArrayList<>();

        if(faqs.size() >= 1){
            for (FAQ faq : faqs){
                keywords.addAll(faq.getKeywords());
            }

            for (int i = 0; i < words.length; i++){

                for (int j = 0; j < keywords.size(); j++){
                    if(keywords.get(j).getKeyword().equals(filteredWords.get(i))){
                        questionKeywords.add(keywords.get(j));
                    }
                }
            }
        }
        else{
            questionKeywords = repo.findAllByKeywordIn(filteredWords);
        }





        Optional<Map.Entry<FAQ, Long>> faq;

       faq = questionKeywords.stream()
                .collect(Collectors.groupingBy(Keyword::getFaq, Collectors.counting()))
                .entrySet()
                .stream()
                .max(Comparator.comparing(Map.Entry::getValue));

        return faq.get().getKey();
    }



    @Override
    public FAQ findByKeyword(String keyword) {
        return repository.findByKeywords(keyword);
    }
}
