import React, {useState} from "react";
import { Link, useNavigate  } from 'react-router-dom'
import { useForm } from "react-hook-form";

import './Registration.scss'
import '../../index.scss'

const Registration = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState()


    const onSubmit = (data) => {
        console.log(data)
        setUserInfo(data)
        // navigate("/introduction")
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
                       {...register("name", { required: true, minLength: 2, pattern: /^([А-Я]?)?([а-я]{0,14})?$/ig })}/>
               </div>

               {/*<div className="input__block">*/}
               {/*    <h2 className="input__question">Ваш пол</h2>*/}
               {/*    <label className="input__radio">*/}
               {/*        <input*/}
               {/*            className="input__radio"*/}
               {/*            type="radio"*/}
               {/*            value="male"*/}
               {/*            {...register("gender", {required: true})}*/}
               {/*        />*/}
               {/*        <span className="input__answer">Мужчина</span>*/}
               {/*    </label>*/}
               {/*    <label className="input__radio">*/}
               {/*        <input*/}
               {/*            className="input__radio"*/}
               {/*            type="radio"*/}
               {/*            value="female"*/}
               {/*            {...register("gender" , {required: true})}*/}
               {/*        />*/}
               {/*        <span className="input__answer">Женщина</span>*/}
               {/*    </label>*/}
               {/*</div>*/}

               {/*<div className="input__block">*/}
               {/*    <label className="input__question">В каком году вы родились?</label>*/}
               {/*    <input id="year"*/}
               {/*           className="input__field input__answer"*/}
               {/*           type="number"*/}
               {/*           {...register("year", {required: true, min: 1922, max: 2004})}/>*/}
               {/*</div>*/}

               {/*<div className="input__block">*/}
               {/*    <h2 className="input__question">Находитесь ли вы в отношениях?</h2>*/}
               {/*    <label className="input__radio">*/}
               {/*        <input className="input__radio" type="radio"  id="yes" value="yes" {...register("relationship", {required: true})}/>*/}
               {/*        <span className="input__answer">Да</span>*/}
               {/*    </label>*/}
               {/*    <label className="input__radio">*/}
               {/*        <input className="input__radio" type="radio"  id="no" value="no" {...register("relationship", {required: true})}/>*/}
               {/*        <span className="input__answer">Нет</span>*/}
               {/*    </label>*/}
               {/*</div>*/}

               {/*<div className="input__block">*/}
               {/*    <label className="input__question">В каком городе вы живете?</label>*/}
               {/*    <input id="city" className="input__field input__answer" type="text" {...register("city", {required: true, pattern: /^([А-Я]?)?([а-я]{0,14})?$/ig})}/>*/}
               {/*</div>*/}

               {/*<div className="input__block">*/}
               {/*    <label className="input__question">Ваш рост?</label>*/}
               {/*    <input id="height" className="input__field input__answer" type="number" {...register("height", {required: true, min: 100, max: 250})}/>*/}
               {/*</div>*/}

               {/*<div className="input__block">*/}
               {/*    <label className="input__question">Ваш вес?</label>*/}
               {/*    <input id="weight" className="input__field input__answer" type="number" {...register("weight", {required: true, min: 40, max: 150})}/>*/}
               {/*</div>*/}

               {/*<div className="input__block">*/}
               {/*    <h2 className="input__question">Какое у вас образование?</h2>*/}
               {/*    <select*/}
               {/*        className="input__field input__answer"*/}
               {/*        {...register("education", {required: true})}>*/}
               {/*        <option value="1">Начальное</option>*/}
               {/*        <option value="2">Среднее</option>*/}
               {/*        <option value="3">Средне-специальное</option>*/}
               {/*        <option value="4">Незаконченное высшее</option>*/}
               {/*        <option value="5">Высшее</option>*/}
               {/*        <option value="6">Несколько высших</option>*/}
               {/*        <option value="7">Ученая степень</option>*/}
               {/*    </select>*/}
               {/*</div>*/}

               <input className="btn btn-white-blue" type="submit" value="Продолжить" />
           </form>


       </div>
   )
}

export default Registration