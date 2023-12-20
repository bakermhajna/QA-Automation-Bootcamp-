package utils;

public enum columns {
    address(4),
    name(3),
    score(5);

    private int index;
    columns(int index){

        this.index=index;
    }

    public int getIndex(){
        return index;
    }


}
