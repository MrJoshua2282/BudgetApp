export const converter = (num) => {
    num = +num;
    let insert = (num) => {
        return num.split('').reverse().map((el, i) => {
            if (i % 3 === 0 && i !== 0) {
                el = `${el},`;
                return el;
            };
            return el;
        }).reverse().join('');
    }
    let front;
    let str = num.toString();
    if (str.includes('.')) {
        let [front, back] = str.split('.');
        return insert(front).concat(`.${back}`);
    } else {
        front = str;
        return insert(front);
    }
};