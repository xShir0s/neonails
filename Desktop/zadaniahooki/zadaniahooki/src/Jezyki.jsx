import { createContext, useContext, useState } from 'react';
import react from "react";
function Text() {
    const [user, setUser] = useState(" ");

    return (
           <>
               <input
               type={"checkbox"}
               checked={user==="text"}
               onChange={(e) =>
               {
                   setUser(e.target.checked ? "text" : "tekst")
               }
               }

               />

               <h1>{`${user}`}</h1>

           </>

    );
}

export default Text