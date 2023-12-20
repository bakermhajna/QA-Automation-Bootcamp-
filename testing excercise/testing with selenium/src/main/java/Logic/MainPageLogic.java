package Logic;
import infra.infra;
import utils.MainPage;
import utils.columns;

public class MainPageLogic {



    infra inf;
    MainPage mainPage;

    public MainPageLogic(infra inf){
        this.inf=inf;
        mainPage=new MainPage(inf.getDriver());
    }

    public boolean checkResturantAdded(int id){
        return mainPage.findRestaurant(id);
    }
    public void refreshPage(){
        mainPage.refresh();
    }
    public void createNewClick(){
        mainPage.clickCreateNew();
    }

    public void fillID(String id){
        mainPage.fillIdInput(id);
    }

    public void fillName(String name){
        mainPage.fillNameInput(name);
    }
    public void fillAddress(String address){
        mainPage.fillAddressInput(address);
    }

    public void fillScore(String score){
        mainPage.fillscoreInput(score);
    }
    public void clickSubmit(){
        mainPage.clickSubmit();
    }
    public void clickOK(){
        mainPage.clickOK();
    }
    public boolean removeRestaurant(int id){
        return mainPage.removeRestaurant(id);
    }
    public String valueOF(int id, columns column){
        return mainPage.valueOF(id,column);

    }



}
