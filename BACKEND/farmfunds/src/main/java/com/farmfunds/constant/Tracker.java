package com.farmfunds.constant;

import java.util.Random;

public class Tracker {
   
    public static long generateTrackNumber(){
        Random random = new Random();
        return random.nextLong(100000, 999999);
    }
}
