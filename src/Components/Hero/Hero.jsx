import { useRef } from "react"

const Hero = ()=>{
    const task_Ref = {
        task : useRef(''),
        content : useRef('')
    }

    const hero_submit = (e)=>{
            e.preventDefault();
            const task_data = {
                task: task_Ref.task.current.value,
                content : task_Ref.content.current.value
            }
            console.log(task_data);
    }


    return(
        <>
        <form onSubmit={hero_submit} >
        <input type="text" ref={task_Ref.task} placeholder="task"/> <br/><br/>

            <textarea ref={task_Ref.content} placeholder="content" /><br/><br/>
            <button type="submit">add</button>

        </form>
        </>
            
    )
}

export default Hero