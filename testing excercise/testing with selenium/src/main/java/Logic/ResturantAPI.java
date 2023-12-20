package Logic;

import com.google.gson.Gson;
import infra.HttpFacade;
import infra.HttpFacade.*;
import infra.HttpRequest;
import infra.HttpResponse;
import utils.Resturant;
import utils.columns;

import java.io.IOException;
import java.util.HashMap;

import static infra.HttpFacade.sendHttpRequest;

public class ResturantAPI {

    private static Gson gson = new Gson();
    private static String baseUrl="https://us-central1-testomate-test.cloudfunctions.net/api/";

    public HttpResponse addNewResturant(Resturant res)  {
        String requestBody = "{\n" +
                "  \"id\": " + res.getId() + ",\n" +
                "  \"name\": \"" + res.getName() + "\",\n" +
                "  \"score\": " + res.getScore() + ",\n" +
                "  \"address\": \"" + res.getAddress() + "\"\n" +
                "}";
        HttpRequest postRequest = new HttpRequest("POST", baseUrl+"restaurant", null, requestBody);
        HttpResponse response = null;
        try {
            response = sendHttpRequest(postRequest);
        } catch (IOException e) {
            System.out.println(e);;
        }
        return response;
    }

    public HttpResponse removeRestaurant(int id){
        HttpRequest postRequest = new HttpRequest("DELETE", baseUrl+"restaurant/"+id, null, "");
        HttpResponse response = null;
        try {
            response = sendHttpRequest(postRequest);
        } catch (IOException e) {
            System.out.println(e);;
        }
        return response;

    }
    public HttpResponse updateRestaurant(int id,columns columns, String value){
        String requestBody = "{\"" + columns.toString() + "\":\"" + value + "\"}";
        HttpRequest postRequest = new HttpRequest("PATCH", baseUrl+"restaurant/"+id, null, requestBody);
        HttpResponse response = null;
        try {
            response = sendHttpRequest(postRequest);
        } catch (IOException e) {
            System.out.println(e);;
        }
        return response;

    }


}
