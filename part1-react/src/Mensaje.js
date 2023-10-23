//Los parametros en Reac se llama props
const Mensaje = (props) => {
    console.log(props);
    return <h1 style={{ color: props.color }}>{props.message}</h1>
}

export default Mensaje