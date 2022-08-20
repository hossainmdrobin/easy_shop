const Blur = (e, obj, setObj)=> {
    let newObj = {...obj};
    newObj[e.target.name] = e.target.value;
    setObj(newObj)
}

export default Blur