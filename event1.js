const EventEmitter=require('events');

const emitter=new EventEmitter();

emitter.on('greet',()=>{
    console.log('Hello Event!');
});

emitter.emit('greet');

emitter.on('orderPlaced',()=>{
    console.log('Order saved to DB');
});

emitter.on('orderPlaced',()=>{
    console.log('Confirmation email sent');
});

emitter.emit('orderPlaced');