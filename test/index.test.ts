import {expect,it} from 'vitest'
import {getFunctionNode} from '../src/main'

it('should work', () => {
  const code = `
  function foo(){
    console.log('foo')
  }
  function bar(){
    console.log('bar')
  }
  `
  const functionNode = getFunctionNode(code, 5)
  expect(functionNode).toEqual({
    name:'foo',
    start:{
      line:2,
      column:2,
      index:3
    },
    end:{
      line:4,
      column:3,
      index:45
    }
  })
})
