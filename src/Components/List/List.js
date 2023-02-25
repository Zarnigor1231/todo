import React from 'react'

// css
import './list.css'

function List({id , name , number, email,del , edit,editItemState,setEditItem}) {
    
    const [ value , setValue ] = React.useState({
        name,
        number,
        email

    })


    const modal = (e) => {
        e.preventDefault()
        edit( {...value , id})
        setEditItem(false)
        // console.log(value)
        
    }


    const change = (e) =>{
       setValue((p) => ({...p , [e.target.name]:e.target.value}))
    }


  return (
    <>
            <li className='w-44'>
                <div className="flex items-center gap-x-12">
                    <div >
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{name}</h3>
                        <strong className="text-sm font-semibold leading-6 text-gray-600">{number}</strong>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">{email}</p>
                        <div className='mt-1'>
                            <button onClick={() => setEditItem(!editItemState) } className='bg-sky-500 px-4 py-1 mr-1 rounded'>Edit</button>
                            <button onClick={() => del(id)} className='bg-red-500 px-2 py-1 rounded'>Delete</button>
                        </div>
                    </div>
                </div>
            </li>


            <div className={editItemState ? 'flex min-h-full items-center py-12 px-4 sm:px-6 lg:px-8  modal' : 'hidden'}>
                <div className="w-full max-w-md space-y-8">
                    <form className="mt-8 space-y-6">
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label for="name" className="sr-only">Password</label>
                                <input onChange={change}  value={value.name} id="name" name="name" type="name" autocomplete="name" required className="relative block w-full appearance-none rounded mb-1  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500" placeholder="Name" />
                            </div>
                            <div>
                                <label for="number" className="sr-only">Email address</label>
                                <input onChange={change}  value={value.number} id="number" name="number" type="number" autocomplete="number" required className="relative block w-full appearance-none rounded mb-1  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 " placeholder="Number" />
                            </div>
                            <div>
                                <label for="email-address" className="sr-only">Email address</label>
                                <input onChange={change}  value={value.email} id="email-address" name="email" type="email" autocomplete="email" required className="relative block w-full appearance-none rounded  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 " placeholder="Email address" />
                            </div>
                        </div>
                
                        <div>
                            <button onClick={modal}  type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                </svg>
                                </span> */}
                                Change
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    </>
  )
}

export default List