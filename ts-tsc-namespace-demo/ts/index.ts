/// <reference path="Factory.ts" />  

import create = Factory.create
 
class Hello {
  private mess: string = 'hello template'
  static show(msg:string) {
    console.log( msg)
  }
}
 
function main() { 
  Hello.show("test")
}
main()
  