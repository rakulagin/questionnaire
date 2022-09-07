import React from "react";
import { Link } from 'react-router-dom'
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


               <div className="input__block">
                   <label for="name" className="input__question">Как вас зовут?</label>
                   <input
                       id="name"
                       className="input__field input__answer"
                       type="text"
                       {...register("name", { required: true, minLength: 2 })}/>
                   {errors.name && <span>Здесь ошибка</span>}
               </div>


               <div className="input__block">
                   <h2 className="input__question">Ваш пол</h2>
                   <input
                       className="input__radio"
                       type="radio"
                       // name="gender"
                       id="man"
                       value="male"
                       {...register("gender")}
                   />
                   <label for="man" className="input__answer">Мужчина</label>

                   <input
                       className="input__radio"
                       type="radio"
                       // name="gender"
                       id="woman"
                       value="female"
                       {...register("gender")}
                   />
                   <label for="woman" className="input__answer">Женщина</label>
               </div>

               <div className="input__block">
                   <label for="name" className="input__question">В каком году вы родились?</label>
                   <input id="name" className="input__field input__answer" type="number" {...register("year")}/>
               </div>

               <div className="input__block">
                   <h2 className="input__question">Находитесь ли вы в отношениях?</h2>
                   <input className="input__radio" type="radio" name="relationship" id="yes" value="yes" {...register("relationship")}/>
                   <label for="yes" className="input__answer">Да</label>
                   <input className="input__radio" type="radio" name="relationship" id="no" value="no" {...register("relationship")}/>
                   <label for="no" className="input__answer">Нет</label>
               </div>

               <div className="input__block">
                   <label for="city" className="input__question">В каком городе вы живете?</label>
                   <input id="city" className="input__field input__answer" type="text" {...register("city")}/>
               </div>

               <div className="input__block">
                   <label for="height" className="input__question">Ваш рост?</label>
                   <input id="height" className="input__field input__answer" type="number" {...register("height")}/>
               </div>

               <div className="input__block">
                   <label for="weight" className="input__question">Ваш вес?</label>
                   <input id="weight" className="input__field input__answer" type="number" {...register("weight")}/>
               </div>

               <div className="input__block">
                   <h2 className="input__question">Какое у вас образование?</h2>
                   <select
                       className="input__field input__answer"
                       {...register("education")}>
                       <option value="1">Начальное</option>
                       <option value="2">Среднее</option>
                       <option value="3">Средне-специальное</option>
                       <option value="4">Незаконченное высшее</option>
                       <option value="5">Высшее</option>
                       <option value="6">Несколько высших</option>
                       <option value="7">Ученая степень</option>
                   </select>
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