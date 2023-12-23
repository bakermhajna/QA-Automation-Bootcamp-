package logic.enums;

public enum SeasonTypes {

    Preseason("Pre Season"),
    Regular_Season("Regular Season"),
    Playoffs("Playoffs"),
    All_Star("All Star"),
    Play_In("PlayIn"),
    In_Season_Tournament("IST");

    private String value;

    SeasonTypes(String value){
        this.value=value;
    }
    public String getValue(){
        return this.value;
    }




}
