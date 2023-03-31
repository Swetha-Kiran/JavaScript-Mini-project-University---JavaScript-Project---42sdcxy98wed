function display(val){

    document.getElementById('result').value += val

    return val;

}
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
function clearAll(){

    document.getElementById('result').value = ''

}
function deleteOne()
{
    const input =   document.getElementById('result');
    input.value = input.value.toString().slice(0,-1);
}
