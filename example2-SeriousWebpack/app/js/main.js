import _ from 'lodash';

const letters = ['a', 'c', 'd', 'j'];

_.each(letters, letter => {
    const para = document.createElement('P');
    const elem = document.createTextNode(letter);
    para.appendChild(elem);
    document.body.appendChild(para);
});