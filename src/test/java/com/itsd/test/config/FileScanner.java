package com.itsd.test.config;

import java.io.InputStream;
import java.util.Scanner;

public final class FileScanner {

    private FileScanner() {
    }

   public static String inputStreamToString(InputStream is) {
        Scanner s = new Scanner(is).useDelimiter("\\A");
        return s.hasNext() ? s.next() : "";
    }

    public static String getJson(String filePath) {
        return FileScanner.inputStreamToString(FileScanner.class
                .getResourceAsStream(filePath));
    }
}
