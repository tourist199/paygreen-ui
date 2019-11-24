var fs = require('fs');

const icons = [
    'arrow-bottom.svg',
    'arrow-circle-left-bold.svg',
    'arrow-circle-left.svg',
    'arrow-circle-right-bold.svg',
    'arrow-circle-right.svg',
    'arrow-left.svg',
    'arrow-long-bottom.svg',
    'arrow-long-left.svg',
    'arrow-long-right.svg',
    'arrow-long-top.svg',
    'arrow-right.svg',
    'arrow-round-bottom-left.svg',
    'arrow-round-bottom-right.svg',
    'arrow-round-top-left.svg',
    'arrow-round-top-right.svg',
    'arrow-top.svg',
    'balloon-bold.svg',
    'balloon.svg',
    'bank.svg',
    'beaker-bold.svg',
    'beaker.svg',
    'bell-bold.svg',
    'bell.svg',
    'bulb-bold.svg',
    'bulb.svg',
    'cards-bold.svg',
    'cards.svg',
    'car.svg',
    'cart.svg',
    'caution-bold.svg',
    'caution.svg',
    'check-bold.svg',
    'checkbox.svg',
    'check.svg',
    'clock-bold.svg',
    'clock.svg',
    'code.svg',
    'coins.svg',
    'contract.svg',
    'cross-bold.svg',
    'cross.svg',
    'download.svg',
    'empty.svg',
    'eye.svg',
    'globe.svg',
    'heart.svg',
    'hourglass.svg',
    'information.svg',
    'leaf.svg',
    'letter-bold.svg',
    'letter.svg',
    'link-bold.svg',
    'link.svg',
    'lock.svg',
    'meal.svg',
    'menu-bold.svg',
    'menu.svg',
    'meter.svg',
    'organization.svg',
    'out.svg',
    'paperclip.svg',
    'pen.svg',
    'phone.svg',
    'picture.svg',
    'plane.svg',
    'pointer.svg',
    'popin.svg',
    'question-bold.svg',
    'question.svg',
    'quote-left.svg',
    'quote-right.svg',
    'refresh-bold.svg',
    'refresh.svg',
    'satchel.svg',
    'schedule.svg',
    'search-bold.svg',
    'search.svg',
    'shop.svg',
    'trees.svg',
    'trophy.svg',
    'truck.svg',
    'user-bold.svg',
    'users.svg',
    'user.svg',
    'wallet.svg',
    'wheels.svg']


icons.forEach((value) => {
    console.log('svg/' + value);
    const data = fs.readFileSync('svg/' + value, 'UTF-8');
    fs.appendFile('test.js', data, function (err) {
        if (err) throw err;
        console.log('Updated!');
    });
})
