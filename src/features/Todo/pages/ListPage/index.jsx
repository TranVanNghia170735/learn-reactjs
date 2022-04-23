import React, { useState } from 'react';
import TodoList from '../../components/TodoList';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {

};

function ListPage(props) {
    const initTodoList = [

        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },

    ];
    const location = useLocation(); //Tra ve location object cua URL hien tai
    const history = useHistory(); //Dung de navigate
    const match = useRouteMatch(); //Tra ve match object cua URL hien tai
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        console.log(params);
        return params.status || 'all';
    });
    const handleTodoClick = (todo, idx) => {
        //clone current array to the new one.
        const newTodoList = [...todoList];
        console.log(todo, idx);

        //Khi muon thay doi doi tuong ben trong item, clone object ra
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };

        //update todo list
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        // setFilteredStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
        console.log(match.path);
    }
    const handleShowCompletedClick = () => {
        //setFilteredStatus('completed')
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const handleShowNewClick = () => {
        // setFilteredStatus('new')
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)

    const handleTodoFormSubmit = (values) => {
        console.log('Form submit: ', values);
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new'
        };

        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    };

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;