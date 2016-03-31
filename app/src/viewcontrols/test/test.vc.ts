import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class TestViewControl extends BaseViewControl {
    templateString: string = require('./test.vc.html');

    context: any = {
        word: '',
        result: '',
        reverseInput: ''
    };
    
    constructor() {
        super();
    }
    
    navigatedTo(parameters: any) {
        this.context.word = parameters.word;
        let word = parameters.word;
        let array = word.split('');
        let reversedArray = array.reverse();
        let reversedWord = reversedArray.join('');
        this.context.reverseInput = reversedWord;
        let word1 = word.toLowerCase();
        let word2 = reversedWord.toLowerCase();
        if (word1 === word2) {
            this.context.result = 'Palindrome!'
        } else {
            this.context.result = 'Not A Palindrome...'
        }
        
    }
}

register.viewControl('test-vc', TestViewControl);
