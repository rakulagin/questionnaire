import React from "react";
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

import './Registration.scss'
import '../../index.scss'

const Registration = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    console.log(errors)

   return (
       <div className="mockup mockup__wrapper">
           <form onSubmit={handleSubmit(onSubmit)}>


               <div className="input__block">
                   <label className="input__question">Как вас зовут?</label>
                   <input
                       className="input__field input__answer"
                       type="text"
                       {...register("name", { required: true, minLength: 2 })}/>
                   {errors.name && <span>Здесь ошибка</span>}
               </div>

               <div className="input__block">
                   <h2 className="input__question">Ваш пол</h2>
                   <label className="input__radio">
                       <input
                           className="input__radio"
                           type="radio"
                           value="male"
                           {...register("gender")}
                       />
                       <span className="input__answer">Мужчина</span>
                   </label>
                   <label className="input__radio">
                       <input
                           className="input__radio"
                           type="radio"
                           value="female"
                           {...register("gender")}
                       />
                       <span className="input__answer">Женщина</span>
                   </label>
               </div>

               <div className="input__block">
                   <label className="input__question">В каком году вы родились?</label>
                   <input id="year" className="input__field input__answer" type="number" {...register("year")}/>
               </div>

               <div className="input__block">
                   <h2 className="input__question">Находитесь ли вы в отношениях?</h2>
                   <label className="input__radio">
                       <input className="input__radio" type="radio"  id="yes" value="yes" {...register("relationship")}/>
                       <span className="input__answer">Да</span>
                   </label>
                   <label className="input__radio">
                       <input className="input__radio" type="radio"  id="no" value="no" {...register("relationship")}/>
                       <span className="input__answer">Нет</span>
                   </label>
               </div>

               <div className="input__block">
                   <label className="input__question">В каком городе вы живете?</label>
                   <input id="city" className="input__field input__answer" type="text" {...register("city")}/>
               </div>

               <div className="input__block">
                   <label className="input__question">Ваш рост?</label>
                   <input id="height" className="input__field input__answer" type="number" {...register("height")}/>
               </div>

               <div className="input__block">
                   <label className="input__question">Ваш вес?</label>
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

               <input className="button-send" type="submit" value="отправить в консоль" />

               <Link to="/introduction" className="btn btn-white-blue" >Продолжить роутинг</Link>


           </form>


       </div>
   )
}

export default Registration