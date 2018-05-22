package com.itsd.test.datagenerators;

public interface Constants {

    RandomStringGenerator randomStringGenerator = new RandomStringGenerator();

    String taxEntityId = randomStringGenerator.generateRandomString("[a-zA-Z0-9]+{16}");
    String incomeSourceId = randomStringGenerator.generateRandomString("[A-Za-z0-9]{15}");
    String incomeSourceName = randomStringGenerator.generateRandomString("[A-Z]{14}");
    String incomeSourceType = randomStringGenerator.getRandomValuFromList(new String[]{"01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "99"});
}
