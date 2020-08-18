const Page = require('./page');

class LandingPage extends Page {
    get flightsBtn      ()  {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/nav/ul/li[2]/a') };
    get fromTxtBox      ()  {return $('//html/body/div[6]/div/input')};
    get toTxtBox        ()  {return $('//html/body/div[7]/div/input')};
    get departDate      ()  {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[2]/div/div/div[1]/div/div[2]/input')};
        get nextMonthBtn    ()  {return $('//html/body/div[3]/div[9]/nav/div[3]')};
        get dayBtn          ()  {return $('.datepicker--cell datepicker--cell-day').$('div=16')};    
    get adultPlus1Btn   ()  {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[3]/div/div/div[1]/div/div[2]/div/span/button[1]')};
    get childPlus1Btn   ()  {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[3]/div/div/div[2]/div/div[2]/div/span/button[1]')};
    get infantPlus1Btn  ()  {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[3]/div/div/div[3]/div/div[2]/div/span/button[1]')};
    get searchBtn       ()  {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[4]/button')};

    getFlightsBtn (){
        return this.flightsBtn;
    };
    getFromTxtbox (){
        return this.fromTxtBox;
    };
    getToTxtbox (){
        return this.toTxtBox;
    };
    getDepartDateField () {
        return this.departDate;
    };
    getNextMonthbtn (){
        return this.nextMonthBtn;
    };
    getDayOfMonthBtn (){
        return this.dayBtn;
    };
    getAdultPlus1Btn (){
        return this.adultPlus1Btn;
    };
    getChildPlus1Btn (){
        return this.childPlus1Btn;
    };
    getInfantPlus1Btn (){
        return this.infantPlus1Btn;
    };
    getSearchBtn (){
        return this.searchBtn;
    };


    open () {
        return super.open(' ');
    };

}//class
module.exports = new LandingPage();