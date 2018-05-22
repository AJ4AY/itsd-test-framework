package com.itsd.test.datagenerators;

import java.time.LocalDate;
import java.util.concurrent.ThreadLocalRandom;

public class DateGenerator {

    private static LocalDate setDate;

    public DateGenerator() {
    }

    //    returns the set date (start date or end date)
    private static LocalDate setLocalDate(int year, int month, int dayOfMonth) {
        setDate = LocalDate.of(year, month, dayOfMonth);
        return setDate;
    }

    //    returns the current locat date
    private static LocalDate setNowDate() {
        setDate = LocalDate.now();
        return setDate;
    }

    //    get the date between the given range
    public LocalDate startDate() {
        setLocalDate(2018, 04, 5);
        long start = setDate.toEpochDay();
        setNowDate();
        long end = setDate.toEpochDay();
        long randomStartDate = ThreadLocalRandom.current().longs(start, end).findAny().getAsLong();
        return setDate.ofEpochDay(randomStartDate);
    }

    //    get the date between the given range
    public LocalDate endDate() {
        setLocalDate(2019, 01, 01); //start date
        long start = setDate.toEpochDay();
        setLocalDate(2019, 04, 05); //end date
        long end = setDate.toEpochDay();
        long randomEndDate = ThreadLocalRandom.current().longs(start, end).findAny().getAsLong();
        return setDate.ofEpochDay(randomEndDate);
    }
}