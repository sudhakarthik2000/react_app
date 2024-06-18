

import "./style.css"


const Ipllist = () =>{

    const iplTeams = [
    {
        teamname : "RCB",
        teamplayers : ["ViratKohli","faf","maxi"],
        won : 2,
        wonYear : [2018,2023],
        
        teamlogo : "https://i.redd.it/ghw0zt6cmroc1.jpeg"
    },  
    {
        teamname : "CSK",
        teamplayers : ["Dhoni","Raina","Jadeja"],
        won : 1,
        wonYear : [2018,2023],
       teamlogo : "https://i.pinimg.com/originals/f4/9e/dc/f49edcb233909eb9894750929e8b1565.jpg"
    },
    {
        teamname : "GT",
        teamplayers : ["Gill","Rahul","Smith"],
        won : 5,
        wonYear : [2018,2023],
       teamlogo : "https://imgk.timesnownews.com/media/Gujarat_Titans_logo.png"
    },
    ];


// filter data 

function filterdata(iplTeams){
    const newTeams = iplTeams.filter((Eachteam)=>Eachteam.won>=1);
    return newTeams

}

//  reduce data 


function countMatch(iplTeams){
    const newIplteamcount = iplTeams.reduce((acc,Eachteam)=>{
        return acc + Eachteam.won;
    },0)
    return newIplteamcount;

}


    return(
        <> 
    {filterdata(iplTeams).map((Eachteam)=>{
        return (
            <div>
                <p className="count">Total Count of Matches {countMatch(iplTeams)}</p>
                <p className="count">Total Count of Matches {countMatch(iplTeams)}</p>
                <p className="count">Total Count of Matches {countMatch(iplTeams)}</p>
          
          <h3> {Eachteam.teamname}</h3>
            <img src={Eachteam.teamlogo} width={100} height={100}/>
           
                {Eachteam.teamplayers.map((eachplayer)=>{
                return(
                    <>
                    <h5>{eachplayer}</h5>




                    </>
                )
               })}
            </div>
        );

        })}
        
      
        </>
    
    );
    
    
    }
    export default Ipllist;


