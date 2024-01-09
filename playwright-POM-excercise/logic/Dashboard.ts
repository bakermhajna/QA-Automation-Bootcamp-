import { Locator, Page } from "playwright-core";
import { BasePage } from "../infrastructre/BasePage";
import { Header } from "./Header";
import { SideBar } from "./SideBar";

export class Dashboard extends BasePage{

    

    private HEADER:Header;
    private SIDEBAR:SideBar;

    constructor(page:Page){
        super(page);
        this.HEADER=new Header(this.page);
        this.SIDEBAR=new SideBar(this.page);
    }

    getHeader(){
        return this.HEADER;
    }

    getSidebar(){
        return this.SIDEBAR;
    }

    

}