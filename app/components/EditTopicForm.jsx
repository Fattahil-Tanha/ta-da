
const EditTopicForm = () => {
  return (
    <div className="m-5">
     <form action="" className='flex flex-col gap-3'>
        <input type="text" name="" id="" placeholder='topic-title' className='py-3 px-4  bg-transparent rounded-lg'   style={{border: '1px solid #64748b'}}/>
        <textarea name="" id="" cols="30" className='bg-transparent bor rounded-lg py-3 px-4' placeholder='topic-description' style={{border: '1px solid #64748b'}} rows="10"></textarea>
        <button type="submit" className='p-5 rounded-lg hover:bg-slate-700 duration-300 ease-linear' style={{border: '1px solid #64748b'}}>Update-Topic</button>
    </form>
    </div>
  )
}

export default EditTopicForm
