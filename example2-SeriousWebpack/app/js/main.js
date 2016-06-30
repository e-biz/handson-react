import _ from 'lodash';

const letters = ['a', 'c', 'd', 'j'];

_.each(letters, letter => {
    var para = document.createElement('P');
    var elem = document.createTextNode(letter);
    para.appendChild(elem);
    document.body.appendChild(para);
});