package test;

import infrastructure.AppWraper;
import org.junit.jupiter.api.BeforeAll;

public class Test {

    private static AppWraper appWraper;


    @BeforeAll
    public static void beforeAll(){
        appWraper=new AppWraper();

    }

    @org.junit.jupiter.api.Test
    public void test(){

    }

}
