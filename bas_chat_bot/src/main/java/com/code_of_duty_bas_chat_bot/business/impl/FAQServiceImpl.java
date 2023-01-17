package com.code_of_duty_bas_chat_bot.business.impl;

import com.code_of_duty_bas_chat_bot.business.FAQService;
import com.code_of_duty_bas_chat_bot.domain.FAQ;
import com.code_of_duty_bas_chat_bot.domain.Keyword;
import com.code_of_duty_bas_chat_bot.repository.FAQRepository;
import com.code_of_duty_bas_chat_bot.repository.KeywordRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


import java.io.IOException;
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

    private List<String> cleanup(String[] words) {
        commonWords = List.of("the", "can", "of", "what", "how", "why", "in", "my", "i", "is");
        List<String> wordss = Arrays.stream(words).toList();

        for (int i = 0; i < wordss.size(); i++) {
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
        } else return null;
    }


    @Override
    public List<FAQ> getQuestions(String topic) {
        return repository.findAllByTopicIn(List.of(topic));
    }

    @Override
    public List<String> getTopics() {
        return repository.getAllTopics();
    }


    private String stemmer(String word) {
        String rootWord = "";
        String[] suffixes = {"ing", "ed", "ly", "s", "ment", "ness", "y", "ation"};


        for (String suffix : suffixes) {
            if (word.endsWith(suffix)) {
                rootWord = word.substring(0, word.length() - suffix.length());
                break;
            }
        }
        if (rootWord.equals("")) {
            rootWord = word;
        }

        return rootWord;
    }

    @Override
    public FAQ findByTopic(String question) {

        FAQ faq1 = findByQuestion(question);

        if (faq1 != null) {
            return faq1;
        }

        //separating the words from the string sentence
        String words[] = question.split("\\W+");

        //List<String> filteredWords = cleanup(words);

        //streaming the array to a list
        List<String> filteredWords = Arrays.stream(words).toList();
        filteredWords.stream().map(w -> stemmer(w)).collect(Collectors.toList());


        //getting all the faq's with topic contained in the sentence
        List<FAQ> faqs = repository.findAllByTopicIn(filteredWords);

        List<Keyword> keywords = new ArrayList<>();
        List<Keyword> questionKeywords = new ArrayList<>();

        //checking if the sentence contained any topics in it
        if (faqs.size() >= 1) {
            //getting all the faq's of the retrieved questions
            for (FAQ faq : faqs) {
                keywords.addAll(faq.getKeywords());
            }

            for (int i = 0; i < words.length; i++) {

                //extracting the root of the user input word
                String word2 = filteredWords.get(i);

                word2 = stemmer(word2);


                for (int j = 0; j < keywords.size(); j++) {



                    String word1 = keywords.get(j).getKeyword();

                    word1 = stemmer(word1);


//                    if(keywords.get(j).getKeyword().equals(filteredWords.get(i))){
//                        questionKeywords.add(keywords.get(j));
//                    }

                    //comparing the two roots and adding the keyword to a new list if there is a match
                    if (word1.toLowerCase().equals(word2.toLowerCase())) {
                        questionKeywords.add(keywords.get(j));
                    }
                }
            }
        }
        //if the sentence does not contain any of the topics, then a list of keywords that are contained in the sentence is retrieved
        else {
            questionKeywords = repo.findAllByKeywordIn(filteredWords);
        }


        Optional<Map.Entry<FAQ, Long>> faq;

        //making a map to get the faq with most frequently used keywords in the sentence
        faq = questionKeywords.stream()
                .collect(Collectors.groupingBy(Keyword::getFaq, Collectors.counting()))
                .entrySet()
                .stream()
                //getting the faq with most matches
                .max(Comparator.comparing(Map.Entry::getValue));


        //if there were no matches the user is asked to rephrase the question
        if (faq.equals(Optional.empty())) {
            return FAQ.builder().answer("Can you please rephrase your question!").build();
        }

        //if there are matches the answer to this question is returned
        return faq.get().getKey();
    }


    @Override
    public FAQ findByKeyword(String keyword) {
        return repository.findByKeywords(keyword);
    }
}