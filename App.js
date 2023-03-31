function display(val) {

    document.getElementById('result').value += val

}
function solve() {

    let x = document.getElementById('result').value

    let res = eval(x);

    document.getElementById('result').value = res;

}
function clearAll() {

    document.getElementById('result').value = '';

}
function deleteOne() {
    const input = document.getElementById('result');
    input.value = input.value.toString().slice(0, -1);
}
