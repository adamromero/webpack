import moment from 'moment';

function greet() {
    var day = moment().format('dddd');
    return 'Have a great ' + day + '! jQuery is here';
};

export default greet;