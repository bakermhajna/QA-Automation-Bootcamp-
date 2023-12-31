package infrastructure;

import io.appium.java_client.android.AndroidDriver;

public class BasePage {
    private AndroidDriver driver;

    public BasePage(AndroidDriver driver){
        this.driver=driver;
    }


}
