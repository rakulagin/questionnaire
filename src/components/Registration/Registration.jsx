import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

import './Registration.scss'
import '../../index.scss'

import DataContext from "../../context";

const Registration = () => {

    const {userInfo, setUserInfo} = useContext(DataContext)

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm( {
        mode: "onChange"
    } );

    const navigate = useNavigate()


    const onSubmit = (data) => {
        const addUser = {...userInfo, user: data }
        setUserInfo(addUser)
        navigate("/introduction")
    }

   return (
       <div className="mockup mockup__wrapper">
           <form onSubmit={handleSubmit(onSubmit)}>


               {/*<div className="input__block">*/}
               {/*    <label className="input__question">Как вас зовут?</label>*/}
               {/*    <input*/}
               {/*        className="input__field input__answer"*/}
               {/*        type="text"*/}
               {/*        {...register("name", {*/}
               {/*            required: "Обязательное поле",*/}
               {/*            minLength: {*/}
               {/*                value: 2,*/}
               {/*                message: "Минимальная длина символов - 2"*/}
               {/*            },*/}
               {/*            pattern: {*/}
               {/*                value: /^([А-Я]?)?([а-я]{0,14})?$/ig,*/}
               {/*                message: "Допускаются только русские буквы"*/}
               {/*            }*/}
               {/*        })}*/}
               {/*    />*/}
               {/*    {errors.name && <p>{errors.name.message}</p>}*/}
               {/*</div>*/}

               <div className="input__block">
                   <h2 className="input__question">Ваш пол</h2>
                   <label className="input__radio">
                       <input
                           className="input__radio"
                           type="radio"
                           value="male"
                           {...register("gender", {required: true})}
                       />
                       <span className="input__answer">Мужчина</span>
                   </label>
                   <label className="input__radio">
                       <input
                           className="input__radio"
                           type="radio"
                           value="female"
                           {...register("gender" , {required: true})}
                       />
                       <span className="input__answer">Женщина</span>
                   </label>
                   {errors.gender && <p>Обязательное поле</p>}
               </div>

               {/*<div className="input__block">*/}
               {/*    <label className="input__question">Ваш возраст</label>*/}
               {/*    <input*/}
               {/*        className="input__field input__answer"*/}
               {/*           type="number"*/}
               {/*           {...register("year", {*/}
               {/*               required: "Обязательное поле",*/}
               {/*               min: {*/}
               {/*                   value: 18,*/}
               {/*                   message: "Вы должны быть старше 18 лет"*/}
               {/*               },*/}
               {/*               max: {*/}
               {/*                   value: 80,*/}
               {/*                   message: "Вы слишком стары для знакомств"*/}
               {/*               }*/}
               {/*           })}/>*/}
               {/*    {errors.year && <p>{errors.year.message}</p>}*/}
               {/*</div>*/}

               {/*<div className="input__block">*/}
               {/*    <h2 className="input__question">Находитесь ли вы в отношениях?</h2>*/}
               {/*    <label className="input__radio">*/}
               {/*        <input className="input__radio"*/}
               {/*               type="radio"*/}
               {/*               value="yes"*/}
               {/*               {...register("relationship", {required: true})}/>*/}
               {/*        <span className="input__answer">Да</span>*/}
               {/*    </label>*/}
               {/*    <label className="input__radio">*/}
               {/*        <input className="input__radio"*/}
               {/*               type="radio"*/}
               {/*               value="no"*/}
               {/*               {...register("relationship", {required: true})}/>*/}
               {/*        <span className="input__answer">Нет</span>*/}
               {/*    </label>*/}
               {/*    {errors.relationship && <p>Обязательное поле</p>}*/}
               {/*</div>*/}

               {/*<div className="input__block">*/}
               {/*    <label className="input__question">В каком городе вы живете?</label>*/}
               {/*    <input*/}
               {/*        className="input__field input__answer"*/}
               {/*        type="text"*/}
               {/*        {...register("city", {*/}
               {/*            required: "Обязательное поле",*/}
               {/*            pattern: {*/}
               {/*                value: /^([А-Я]?)?([а-я]{0,14})?$/ig,*/}
               {/*                message: "Допускаются только русские буквы"*/}
               {/*            }*/}
               {/*        })}*/}
               {/*    />*/}
               {/*    {errors.city && <p>{errors.city.message}</p>}*/}
               {/*</div>*/}

               {/*<div className="input__block">*/}
               {/*    <label className="input__question">Ваш рост?</label>*/}
               {/*    <input*/}
               {/*        className="input__field input__answer"*/}
               {/*        type="number"*/}
               {/*        {...register("height", {*/}
               {/*            required: "Обязательное поле",*/}
               {/*            min: {*/}
               {/*                value: 100,*/}
               {/*                message: "Недопустимо маленькое значение"*/}
               {/*            },*/}
               {/*            max: {*/}
               {/*                value: 250,*/}
               {/*                message: "Недопустимо большое значение"*/}
               {/*            }*/}
               {/*        })}*/}
               {/*    />*/}
               {/*    {errors.height && <p>{errors.height.message}</p>}*/}
               {/*</div>*/}

               {/*<div className="input__block">*/}
               {/*    <label className="input__question">Ваш вес?</label>*/}
               {/*    <input*/}
               {/*        className="input__field input__answer"*/}
               {/*        type="number"*/}
               {/*        {...register("weight", {*/}
               {/*            required: "Обязательное поле",*/}
               {/*            min: {*/}
               {/*                value: 40,*/}
               {/*                message: "Недопустимо маленькое значение"*/}
               {/*            },*/}
               {/*            max: {*/}
               {/*                value: 150,*/}
               {/*                message: "Недопустимо большое значение"*/}
               {/*            }*/}
               {/*        })}*/}
               {/*    />*/}
               {/*    {errors.weight && <p>{errors.weight.message}</p>}*/}
               {/*</div>*/}

               <div className="input__block">
                   <h2 className="input__question">Какое у вас образование?</h2>
                   <select
                       className="input__field input__answer"
                       {...register("education", {required: true})}
                       >
                       <option value="1" >Начальное</option>
                       <option value="2">Среднее</option>
                       <option value="3">Средне-специальное</option>
                       <option value="4">Незаконченное высшее</option>
                       <option value="5">Высшее</option>
                       <option value="6">Несколько высших</option>
                       <option value="7">Ученая степень</option>
                   </select>
               </div>

               <input
                   className={isValid ? "btn btn-white-blue" : "btn btn-disabled"}
                   type="submit"
                   value="Продолжить"

               />
           </form>


       </div>
   )
}

export default Registration