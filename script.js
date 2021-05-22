const calculatetemp = () => {
    const numbertemp = document.getElementById('temp').value
    // console.log(numbertemp);
    const tempselected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempselected.selectedIndex].value;
    // console.log(valueTemp);

    let ctof = (celsi) => {
        let fahr = Math.round((celsi * 9/5) + 32);
        return fahr;
    }

    let ftoc = (fahe) => {
        let cel = Math.round((fahe - 32) * 5/9);
        return cel;
    }

    let res;

    if(valueTemp == 'cel') {
        res = ctof(numbertemp);
        document.getElementById('result').innerHTML = `= ${res} Fahrenheit`;
    }
    else{
        res = ftoc(numbertemp);
        document.getElementById('result').innerHTML = `= ${res} Celsius`;
    }
}