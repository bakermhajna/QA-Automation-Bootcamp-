package test;
import Logic.MainPageLogic;
import Logic.ResturantAPI;
import dev.failsafe.internal.util.Assert;
import infra.infra;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import utils.Resturant;
import utils.columns;
import java.io.FileInputStream;
import java.util.Properties;
import infra.HttpResponse;
import static org.hamcrest.MatcherAssert.assertThat;

public class Test {
    private MainPageLogic mainPageLogic;
    private infra inf;
    private static ResturantAPI api;
    private static Properties prop ;


    @BeforeAll
    public static void beforeAll(){
        prop = new Properties();
        api=new ResturantAPI();
        try {
            FileInputStream ip = new FileInputStream("src/main/java/config.properties");
            prop.load(ip);
        } catch (Exception e) {
            System.out.println(e);
        }
    }


    @BeforeEach
    public void beforEeach(){
        inf= infra.initInfra(
                prop.getProperty("driverPath"),
                prop.getProperty("webLink"));

        mainPageLogic=new MainPageLogic(inf);

    }

    @AfterEach
    public void afterEach(){
       inf.closeDriver();
    }

    @org.junit.jupiter.api.Test
    public void checkAddRestaurant()  {
        //arrange
        HttpResponse httpResponse = api.addNewResturant(new Resturant(33, "a", "12", 1));
        mainPageLogic.refreshPage();
        //act
        boolean actual =mainPageLogic.checkResturantAdded(33);
        //assert

        assertThat("status code not good",httpResponse.getStatus()>199&&httpResponse.getStatus()<300);
        assertThat("restaurant was not added",actual);

    }

    @org.junit.jupiter.api.Test
    public void checkRemove(){
        //arrange
        Resturant r=new Resturant(22,"a","12",1);
        HttpResponse httpResponse = api.addNewResturant(r);
        mainPageLogic.refreshPage();
        //Act
        boolean actual=mainPageLogic.removeRestaurant(r.getId());
        mainPageLogic.refreshPage();
        //Assert
        assertThat("status code not good",httpResponse.getStatus()>199&&httpResponse.getStatus()<300);
        assertThat("restaursnt was not removed",actual);
    }
    @org.junit.jupiter.api.Test
    public void checkUpdate(){
        //arrange
        Resturant r=new Resturant(44,"a","12",1);
        HttpResponse httpResponse = api.addNewResturant(r);
        mainPageLogic.refreshPage();
        //Act
        String newValue="um elfahm";
        HttpResponse httpResponse2 = api.updateRestaurant(r.getId(), columns.address,newValue);
        mainPageLogic.refreshPage();
        String valueOfAddress=mainPageLogic.valueOF(r.getId(),columns.address);
        //Assert
        assertThat("status code not good in api call add",httpResponse.getStatus()>199&&httpResponse.getStatus()<300);
        assertThat("status code not good in api call remove",httpResponse2.getStatus()>199&&httpResponse2.getStatus()<300);
        assertThat("there is no change",newValue.equals(valueOfAddress));

    }




}
