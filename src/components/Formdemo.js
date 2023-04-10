import {useForm} from 'react-hook-form';
function Formdemo(){
    let sf=(userObj)=>{
        console.log(userObj);
        //Make http post req to store userobj in local api
        //We can use axios or fetch
        // fetch("http://localhost:4000/users",{
        //     method:"POST",
        //     headers:{
        //         'Content-Type':'application/json',
        //     },
        //     body:JSON.stringify(userObj)
        // })
        // .then(res=>res.json())
        // .then(message=>console.log(message))
        // .catch(err=>console.log(err))
    };

    let {register,
    handleSubmit,
    formState: {errors},
    } = useForm();

console.log("e",errors);

    return (<div>
        <div className="row">
            <h1 className='text-center'>Form</h1>
            <div className="col-11 col-md-8 col-lg-6 mx-auto">
            <form onSubmit={handleSubmit(sf)}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username"
                    id="username"
                    className="form-control mb-3"
                    {...register("username",{required:'username is required',minLength:"4",maxLength:"6"})}
                />
                {errors.username?.type==='required' && <p className='text-danger'>{errors.username?.message}</p>}
                {errors.username?.type==='minLength' && <p className='text-danger'>Min length should be 4</p>}
                {errors.username?.type==='maxLength' && <p className='text-danger'>Max length is 6</p>}
                <input 
                    type="date" 
                    className='form-control mb-3'
                    {...register("dateOfBirth")}
                />
                <div className='form-check mb-3'>
                    <input 
                        type="radio" 
                        className='form-check-input' 
                        id='male'
                        value="male"
                        {...register("gender")}
                    />
                    <label htmlFor="male" className='form-check-label'>Male</label>
                </div>
                <div className='form-check mb-3'>
                    <input 
                        type="radio" 
                        id="female" 
                        className='form-check-input'
                        value="female" 
                        {...register("gender")}
                    />
                    <label htmlFor="female" className='form-check-label'>Female</label>
                </div>
                <select {...register("state")} className='form-select mb-3' defaultValue={"default"}>
                    <option value="default" disabled>Choose a state</option>
                    <option value="telengana">Telengana</option>
                    <option value="ap">Andhra Pradesh</option>
                </select>
                <textarea rows="" cols="10" className='form-control mb-3' {...register("feedback")}></textarea>
                <button type="submit" className="btn btn-info">Add user</button>
            </form>
            </div>
        </div>
    </div>);
}

export default Formdemo;