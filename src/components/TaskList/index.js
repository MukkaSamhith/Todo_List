import './index.css'

const DisplayList=(props)=>{
    const {details,updateTask,editTask} = props
    
    const deleteItem=(id)=>{
        updateTask(id)
    }

    const editItem=(id)=>{
        editTask(id)
    }

    return(
        <div className='display-list'>
            {details.map((each)=>(
                <div key={each.id} className='display-order'>
                    <div>
                        <h2 className='title'>{each.title}</h2>
                        <h2>{each.description}</h2>
                    </div>
                    <div>
                        <button type="button" onClick={()=>editItem(each.id)}>Edit</button>
                        <button type="button" onClick={()=>deleteItem(each.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
    
}

export default DisplayList