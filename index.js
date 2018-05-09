/**
 * Created by zhengxiaoyan on 2018/5/7.
 */
import { Observable } from 'rxjs/Rx';
import jquery from 'jquery';

let requestStream = Observable.just('https://api.github.com/users');

console.info(jquery)

// requestStream.subscribe()