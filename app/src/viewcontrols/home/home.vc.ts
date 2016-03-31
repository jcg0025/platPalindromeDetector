import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import TestViewControl from '../test/test.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        word: ''
    };
    
    constructor() {
        super();
    }
    go() {
        this.navigator.navigate(TestViewControl, {
            parameters: {
                word: this.context.word
            }
        });
    }
    
}

register.viewControl('home-vc', HomeViewControl);
