//  Observer | Behavioral Pattern
// The observer pattern is used to notify a set of interested parties when a state change occurs.
// The rxjs library is a popular implementation of this pattern.

import { subject } from 'rxjs';

const news = new Subject();

const tv1 = news.subscribe((v) => console.log(v + 'via Den TV'));
const tv2 = news.subscribe((v) => console.log(v + 'via Batcave TV'));
const tv3 = news.subscribe((v) => console.log(v + 'via Airport TV'));

news.next('Breaking News: ');
news.next('The war is over');

tv1.unsubscribe();
