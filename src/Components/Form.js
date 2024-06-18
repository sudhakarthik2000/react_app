export const  Form = () =>{

    return(

    <div>

       <center>

            <form style={{border:"1px solid black",backgroundColor:"violet",width:"500px",textAlign:"center"}}>

                <h1>Student Details</h1>
                <label for="name">Name:</label>
                <input type="text" id="name"></input>
                <br></br>
                <br></br>
                
                <label for="age">Age:</label>
                <input type="text" id="age"></input>
                <br></br>
                <br></br>
             
                <label for="roll">Roll NO:</label>
                <input type="text" id="roll"></input>
                <br></br>
                <br></br>
              
                <label for="br">Branch:</label>
                <input type="text" id="br"></input>
                <br></br>
                <br></br>
            </form>
       </center>
    </div>

    );
}




