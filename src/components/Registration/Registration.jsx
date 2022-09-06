import React from "react";
import {Link} from 'react-router-dom'

import './Registration.scss'

const Registration = () => {
   return (
       <div className="mockup mockup__wrapper">
           <form action="">
               <div>
                   <label for="name" className="test1">Как вас зовут?</label>
                   <input id="name" className="input-name" type="text"/>
               </div>

               <div>
                   <h2 className="test1">Ваш пол</h2>
                   <input type="radio" name="gender" id="man" value="man"/>
                   <label for="man">Мужчина</label>
                   <input type="radio" name="gender" id="woman" value="woman"/>
                   <label for="woman">Женщина</label>
               </div>

               <div>
                   <label for="name" className="test1">В каком году вы родились?</label>
                   <input id="name" className="input-name" type="number"/>
               </div>

               <div>
                   <h2 className="test1">Находитесь ли вы в отношениях?</h2>
                   <input type="radio" name="relationship" id="yes" value="yes"/>
                   <label for="yes">Да</label>
                   <input type="radio" name="relationship" id="no" value="no"/>
                   <label for="no">Нет</label>
               </div>

               <div>
                   <label for="city" className="test1">В каком городе вы живете?</label>
                   <input id="city" className="input-name" type="text"/>
               </div>

               <div>
                   <label for="height" className="test1">Ваш рост?</label>
                   <input id="height" className="input-name" type="number"/>
               </div>

               <div>
                   <label for="weight" className="test1">Ваш вес?</label>
                   <input id="weight" className="input-name" type="number"/>
               </div>

           </form>
       </div>
   )
}

export default Registration