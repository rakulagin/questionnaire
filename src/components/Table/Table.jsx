import React, {useState} from "react";

import './Table.scss'

const Table = () => {

    const [chose, setChose] = useState(null)

    const onClick = (e) => {
        setChose(e.target.getAttribute("data-cords"));
        console.log(chose)
    };

    return (
        <div className="area">
            <div className="table-wrapper">
                <div className="question">Какой-то вопрос</div>
                <div className="table"
                     onClick = {onClick}
                >
                    <div className="row">
                        <div className="col">5</div>
                        <div className="col" data-cords="1:5">&nbsp;</div>
                        <div className="col" data-cords="2:5">&nbsp;</div>
                        <div className="col" data-cords="3:5">&nbsp;</div>
                        <div className="col" data-cords="4:5">&nbsp;</div>
                        <div className="col" data-cords="5:5">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col">4</div>
                        <div className="col" data-cords="1:4">&nbsp;</div>
                        <div className="col" data-cords="2:4">&nbsp;</div>
                        <div className="col" data-cords="3:4">&nbsp;</div>
                        <div className="col" data-cords="4:4">&nbsp;</div>
                        <div className="col" data-cords="5:4">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col">3</div>
                        <div className="col" data-cords="1:3">&nbsp;</div>
                        <div className="col" data-cords="2:3">&nbsp;</div>
                        <div className="col" data-cords="3:3">&nbsp;</div>
                        <div className="col" data-cords="4:3">&nbsp;</div>
                        <div className="col" data-cords="5:3">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col">2</div>
                        <div className="col" data-cords="1:2">&nbsp;</div>
                        <div className="col" data-cords="2:2">&nbsp;</div>
                        <div className="col" data-cords="3:2">&nbsp;</div>
                        <div className="col" data-cords="4:2">&nbsp;</div>
                        <div className="col" data-cords="5:2">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col">1</div>
                        <div className="col" data-cords="1:1">&nbsp;</div>
                        <div className="col" data-cords="2:1">&nbsp;</div>
                        <div className="col" data-cords="3:1">&nbsp;</div>
                        <div className="col" data-cords="4:1">&nbsp;</div>
                        <div className="col" data-cords="5:1">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col">&nbsp;</div>
                        <div className="col" data-cords="">1</div>
                        <div className="col" data-cords="">2</div>
                        <div className="col" data-cords="">3</div>
                        <div className="col" data-cords="">4</div>
                        <div className="col" data-cords="">5</div>
                    </div>
                </div>
            </div>
            <div className="question2">Какой-то еще вопрос</div>
            {/*{cords && <p className="cords">Выбранное значение: {cords}</p>}*/}



            <div className="extra-table-wrapper">
                <div className="extra-question">Первый отдельный вопрос</div>
                <div className="table"
                     onClick = {onClick}
                >
                    <div className="row">
                        <div className="col"></div>
                        <div className="col" data-cords="1">&nbsp;</div>
                        <div className="col" data-cords="2">&nbsp;</div>
                        <div className="col" data-cords="3">&nbsp;</div>
                        <div className="col" data-cords="4">&nbsp;</div>
                        <div className="col" data-cords="5">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col">&nbsp;</div>
                        <div className="col" data-cords="">1</div>
                        <div className="col" data-cords="">2</div>
                        <div className="col" data-cords="">3</div>
                        <div className="col" data-cords="">4</div>
                        <div className="col" data-cords="">5</div>
                    </div>
                </div>
            </div>
            {/*{cords && <p className="cords">Выбранное значение: {cords}</p>}*/}

            <div className="extra-table-wrapper">
                <div className="extra-question">Второй отдельный вопрос</div>
                <div className="table"
                     onClick = {onClick}
                >
                    <div className="row">
                        <div className="col"></div>
                        <div className="col" data-cords="1">&nbsp;</div>
                        <div className="col" data-cords="2">&nbsp;</div>
                        <div className="col" data-cords="3">&nbsp;</div>
                        <div className="col" data-cords="4">&nbsp;</div>
                        <div className="col" data-cords="5">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col">&nbsp;</div>
                        <div className="col" data-cords="">1</div>
                        <div className="col" data-cords="">2</div>
                        <div className="col" data-cords="">3</div>
                        <div className="col" data-cords="">4</div>
                        <div className="col" data-cords="">5</div>
                    </div>
                </div>
            </div>
            {/*{cords && <p className="cords">Выбранное значение: {cords}</p>}*/}
        </div>
    )
}

export default Table