package utils;
import java.util.HashMap;

public class Context {

    private HashMap<String, Object> context = new HashMap<>();

    public void put(String key, Object obj){
        context.put(key,obj);
    }

    public <T> T get(String key){
        Object o = context.get(key);
        if(o==null){
            return null;
        }else{
            return (T)o;
        }
    }

    public void clear() {
        context=new HashMap<>();
    }
}