function receivesAFunction(callback){callback()}

function returnsANamedFunction() {
  return function test(){}
}

function returnsAnAnonymousFunction(){
  return function(){}
}
