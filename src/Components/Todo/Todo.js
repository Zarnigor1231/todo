import React from 'react'
import {Form, List} from '../index'
import { request } from '../../config/request'

function Todo() {
    const [dataGet , setDataGet ] =React.useState([])
    // const [ data , setData] = React.useState([])
    const [ editItemState , setEditItem ] = React.useState(false);
    const [ value , setValue] = React.useState({name:'' , number:'' , email:''})

    React.useEffect(() =>{
      request.get('/items').then((item) => {
        setDataGet([...item.data])
      })
    },[value,editItemState])

    // Funcion

    const submit = (e) =>{
      e.preventDefault()

      request.post('/items', value).then(() => {
        // setData((p) => [...p , {...item.data.user}])
        setValue({name:'' , number:'' , email:''});
      }).catch((error) =>{
        console.log(error);
      })
    }

    const change = (e) =>{
      setValue((p) => ({...p , [e.target.name]:e.target.value}))
    }

    const deleteItem = (id) =>{
      request.delete(`/items/${id}`).then(() => {
        setDataGet((p) => p.filter(item => item.id !== id))
      }).catch((error) => {
        console.log(error)
      })
    }


    const editItem = (obj) => {
      console.log(obj)
      request.put(`/items/${obj.id}`, obj).then(() =>{
        setDataGet((el) => el.map(item => item.id === item.id ? item : item))
      })
      console.log(obj);
    }
    // async function DeleteItem(id){
    //   let res = await request.delete(`/todos/${id}`)
    //   console.log(res)
    //   setDataGet((p) => p.filter(item => item.id !== id))
    // }


  return (
        <div className={editItemState ? 'relative flex items-start  justify-between ' : 'flex items-start  justify-between ' }>
            <Form  {...value} change = {change} submit = {submit}/>
            <div className="bg-white py-20 w-1/2">
              <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
                  <ul className="grid gap-x-24 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {
                      dataGet?.map((item,id) => <List setEditItem={setEditItem} editItemState={editItemState} key={id} {...item} del = {deleteItem} edit = {editItem} />)
                    }
                  </ul>
              </div>
            </div>
        </div>
  )
}

export default Todo