import React, { useState } from "react"; //디폴트로 export한 경우, {} 생략/ export 하지 않은 것들은 {}

const Todo = (props) => {
    //let item = props.item;

    const [item, setItem] = useState(props.item); // props.items : 상태 변수에 담길 초기값 / return 값이 배열

    let output = <div className="Todo">
                    
                    <input 
                        type="checkbox" 
                        id={item.id} 
                        name={item.id} 
                        checked={item.done}
                    />

                        <label id={item.id}> {item.title}</label>
                </div>;

    return output;
};

export default Todo; //다른 컴포넌트가 이용 가능