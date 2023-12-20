package utils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class MainPage extends BasePage {

    private final String createbuttonxpath="//button[text()=\"Create new\"]";
    private final String idxpath="//input[@id=\"id\"]";
    private final String namexpath="//input[@id=\"name\"]";
    private final String addressxpath="//input[@id=\"address\"]";
    private final String scorexpath="//input[@id=\"score\"]";
    private final String resturantsxpath="//tbody//tr";

    private final String submitButtoonxpath="//button[text()=\"Submit\"]";
    private final String OKButtoonxpath="//button[text()=\"OK\"]";

    private WebElement createButton;
    private WebElement idInput;
    private WebElement nameIput;
    private WebElement addressInput;
    private WebElement scoreInput;
    private WebElement submitButton;
    private WebElement OKButton;
    private List<WebElement> resturants;
    private WebElement remove;

    public MainPage(WebDriver driver){
        super(driver);
        initPage();

    }

    public void initPage(){
        createButton=driver.findElement(By.xpath(createbuttonxpath));
        idInput=driver.findElement(By.xpath(idxpath));
        nameIput=driver.findElement(By.xpath(namexpath));
        addressInput=driver.findElement(By.xpath(addressxpath));
        scoreInput=driver.findElement(By.xpath(scorexpath));
        resturants=driver.findElements(By.xpath(resturantsxpath));
        submitButton=driver.findElement(By.xpath(submitButtoonxpath));
        OKButton=driver.findElement(By.xpath(OKButtoonxpath));
        //idInput=driver.findElement(By.xpath());
    }
    public void clickCreateNew(){
        createButton.click();
    }

    public void fillNameInput(String name){
        nameIput.clear();
        nameIput.sendKeys(name);
    }
    public void fillIdInput(String id){
        idInput.clear();
        idInput.sendKeys(id);
    }
    public void fillAddressInput(String address){
        addressInput.clear();
        addressInput.sendKeys(address);
    }
    public void fillscoreInput(String score){
        scoreInput.clear();
        scoreInput.sendKeys(score);
    }
    public void clickSubmit(){
        submitButton.click();
    }
    public void clickOK(){
        OKButton.click();
    }


    public boolean findRestaurant(int id) {
        String resturantIDsxpath="//tr//td[2][ text()=\""+id+"\"]";
        try{
            driver.findElement(By.xpath(resturantIDsxpath));
            return true;
        }catch (Exception e){
            System.out.println(e);
            return false;
        }
    }
    public boolean removeRestaurant(int id) {
        String resturantIDsxpath="//tr[td[text()=\""+id+"\"]]//button[text()=\"X\"]";
        try{
            driver.findElement(By.xpath(resturantIDsxpath)).click();
            return true;
        }catch (Exception e){
            System.out.println(e);
            return false;
        }
    }
    public String valueOF(int id,columns columns){
        String xpath = "//tr[td[2][text()=\""+id+"\"]]//td["+columns.getIndex()+"]";
        try{
            String text=driver.findElement(By.xpath(xpath)).getText();
            return text;
        }catch (Exception e){
            System.out.println(e);
            return "";
        }

    }


}
