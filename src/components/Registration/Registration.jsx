import React from "react";
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";

import './Registration.scss'

const Registration = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    console.log(errors)

   return (
       <div className="mockup mockup__wrapper">
           <form onSubmit={handleSubmit(onSubmit)}>
               <div>
                   <label for="name" className="test1">Как вас зовут?</label>
                   <input id="name" className="input-name" type="text" {...register("name", { required: true, minLength: 2 })}/>
                   {errors.name && <span>error</span>}
               </div>

               <div>
                   <h2 className="test1">Ваш пол</h2>
                   <input type="radio" checked name="gender" id="man" value="male" {...register("gender")}/>
                   <label for="man">Мужчина</label>
                   <input type="radio" name="gender" id="woman" value="female" {...register("gender")}/>
                   <label for="woman">Женщина</label>
               </div>

               <div>
                   <label for="name" className="test1">В каком году вы родились?</label>
                   <input id="name" className="input-name" type="number" {...register("year")}/>
               </div>

               <div>
                   <h2 className="test1">Находитесь ли вы в отношениях?</h2>
                   <input type="radio" checked name="relationship" id="yes" value="yes" {...register("relationship")}/>
                   <label for="yes">Да</label>
                   <input type="radio" name="relationship" id="no" value="no" {...register("relationship")}/>
                   <label for="no">Нет</label>
               </div>

               <div>
                   <label for="city" className="test1">В каком городе вы живете?</label>
                   <input id="city" className="input-name" type="text" {...register("city")}/>
               </div>

               <div>
                   <label for="height" className="test1">Ваш рост?</label>
                   <input id="height" className="input-name" type="number" {...register("height")}/>
               </div>

               <div>
                   <label for="weight" className="test1">Ваш вес?</label>
                   <input id="weight" className="input-name" type="number" {...register("weight")}/>
               </div>

               {/*<div>*/}
               {/*    <label htmlFor="name" className="test1">Какое у вас образование?</label>*/}
               {/*    <div>*/}
               {/*        <p>Нет</p>*/}
               {/*        <p>Начальное</p>*/}
               {/*        <p>Среднее</p>*/}
               {/*        <p>Средне-специальное</p>*/}
               {/*        <p>Незаконченное высшее</p>*/}
               {/*        <p>Высшее</p>*/}
               {/*        <p>Несколько высших</p>*/}
               {/*        <p>Ученая степень</p>*/}
               {/*    </div>*/}
               {/*</div>*/}

               <input className="button-send" type="submit" value="Продолжить" />

               <Link to="/introduction">next</Link>

           </form>

       </div>
   )
}

export default Registration