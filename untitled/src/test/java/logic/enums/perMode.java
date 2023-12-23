package logic.enums;

public enum perMode {

    PER100POSS("Per100Possessions"),
    PER100PLAYS("Per100Plays"),
    PER48MINUTES("Per48");

    private String value;
    perMode(String value){
        this.value=value;
    }

    public String getValue(){
        return this.value;
    }
}
