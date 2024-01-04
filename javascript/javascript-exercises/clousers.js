const StringFormatter=function(){

            const capitalizeFirst=function(str){
                return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
                
            }

            const toSkewerCase=function(str){
                return str.replace(/\s+/g, '-');
            }





    return{
        capitalizeFirst,
        toSkewerCase

    }
}




const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box") )//should return blue-box
//-----------------------------------------------------------------------------------------------------
const Bank=function(){
    let mony=500;
    const depositCash =function(num){
        mony+=num;
    };
    const checkBalance =function(){
        console.log(mony);
    };

    return{
        deposit:depositCash,
        showBalance:checkBalance
    };
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
//-------------------------------------------------------------------------------------
const SongsManager = function() {
    const songs = {};
  
    const addSong =function (name, url) {
      const videoId = url.split('v=')[1];
      songs[name] = videoId;
    };
  
    const getSong =function (name){
      if (songs.hasOwnProperty(name)) {
        return `https://www.youtube.com/watch?v=${songs[name]}`;
      } else {
        return "Song not found";
      }
    };
  
    return {
      addSong,
      getSong
    };
  };
  
  const songsManager = SongsManager();
  songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
  songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
  songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");
  
  console.log(songsManager.getSong("sax")); 
  