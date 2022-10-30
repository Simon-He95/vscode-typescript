import {parse} from '@babel/parser';
import traverse from '@babel/traverse';
interface IOptions {
  line: number
    column: number
    index: number
  }
interface IFunctionNode {
  name: string
  start:IOptions
  end: IOptions
}
export function getFunctionNode(code:string,index:number):IFunctionNode{
  const ast = parse(code);
  let result:IFunctionNode; 
  traverse(ast,{
   FunctionDeclaration(path){
      const { node:{ loc,start,end,id }} = path;
      if(index>=start! && index<=end!){
        const { name } = id!;
        const { start, end } = loc!;
        result = {
          name,
          start,
          end
        } as IFunctionNode;
      }
   }
  });
  return result!;
}
