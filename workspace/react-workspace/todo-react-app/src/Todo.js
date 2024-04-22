import React, { useState } from "react"; //디폴트로 export한 경우, {} 생략/ export 하지 않은 것들은 {}
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material"
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined"

const Todo = (props) => {
    //let item = props.item;

    const [item, setItem] = useState(props.item); // props.items : 상태 변수에 담길 초기값 / return 값이 배열
    const [readOnly, setReadOnly] = useState(true);

    const trunOffReadOnly = () =>{
        setReadOnly(false);
    }

    const turnOnReadOnly = (e) => {
        if(e.key === "Enter" && readOnly === false){
            setReadOnly(true);
            editItem(item);
        };
    }

    const editItem = props.editItem;
    const editEventHandler = (e) =>{
       setItem({...item, title: e.target.value});
    };

    const deleteItem = props.deleteItem;
    const deleteEventHandler = () => {
        deleteItem(item);
    }

    const checkboxEventHandler = (e) => {
        item.done = e.target.checked;
        editItem(item);
    }

    return(
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler}/>
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label": "naked",
                                readOnly: readOnly,}}
                    onClick={trunOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
                    type = "text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo"
                onClick={deleteEventHandler}>
                    <DeleteOutlineOutlined/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    ) ;
};

export default Todo; //다른 컴포넌트가 이용 가능