function FormInput({name,placeholder,label,type,handleInput,required}){
    return(
        <div className="block">
            <label htmlFor={name}>{label}</label>
            <input required={required} type={type} name={name} id={name} placeholder={placeholder} onInput={handleInput}/>
        </div>
    )
}


export default FormInput