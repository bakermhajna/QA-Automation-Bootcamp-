package org.example;

import java.io.IOException;

public class Utils {

    public static void sendEnter(String deviceNumber){

// Send Enter key event using adb
        try {
            Process process = Runtime.getRuntime().exec("C:\\Users\\kha12\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb -s " + deviceNumber + " shell input keyevent 66");
            process.waitFor();
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
