package com.itsd.test.datagenerators;

import com.mifmif.common.regex.Generex;

import java.util.Random;

public class RandomStringGenerator {

    private Generex generex;
    private Random random;

    public RandomStringGenerator() {
        random = new Random();
    }

    //    generates a random value
    public String generateRandomString(String regex) {
        generex = new Generex(regex);
        return generex.random();
    }

    //    returns the income source type from a given list
    protected String getRandomValuFromList(String[] list) {
        final String[] listValues = list;
        int index = random.nextInt(listValues.length);
        return listValues[index];
    }


}