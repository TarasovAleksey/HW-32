
const Form = ({getWeather}) => {

    const getCity = e =>{
        e.preventDefault();
        console.log(e.currentTarget.city.value.trim());
        getWeather(e.currentTarget.city.value.trim());
        e.currentTarget.city.value = "";
    }

    return (
       <form onSubmit={getCity}>
           <input type={"text"} name={'city'} placeholder={'Enter yore City'}/>
           <button type={'submit'}>Get Weather</button>
       </form>
    );
};

export default Form;