console.log('-----------------------');

class PrintChar{
  constructor(height,char){
    this.fn1=function(height,char){
      for(let i=0;i<=height;i++){
        var result='';
        for(let j=0;j<i;j++){
          result +=char;
        }
        console.log(result);
      }
    }
    this.fn2=function(height,char){
      for(let i=height;i>=0;i--){
        var result='';
        for(let j=0;j<i;j++){
          result +=char;
        }
        console.log(result);
      }
    }
    this.fn3=function(height,char){
      for(let i=height;i>=0;i--){
        var result='';
        for(var j=0;j<i;j++){
          result +=char;
        }
        if((j%2)==0){
        console.log(result);
        }
      }
    }
    this.fn4=function(width,char){
      if((width%2)!=0){
      var i=(width+1)/2;
      var j=(width+1)/2;
      while(i>0 & j>0){
        var result='';
        var lastLine=''
        for(var z=0;z<=width;z++){
          if(z==i|z==j){
            result+=char
          }else{
            result+=' ';
          }
          lastLine+=char;
        }
        console.log(result);
        i--;
        j++;
      }
      console.log(lastLine+char);
    }else{console.log('Ops,Please type a odd number!')}};
  };
  static get QuestionNumber(){
    return 4;
  }
}

console.log('-----------Main--------');
var P = new PrintChar();
P.fn1(10,'A');
console.log('-----------------------');
P.fn2(10,'A');
console.log('-----------------------');
P.fn3(10,'A');
console.log('-----------------------');
P.fn4(11,'A');
console.log('-----------------------');
P.fn4(12,'A');
console.log('-----------------------');
console.log(PrintChar.QuestionNumber);
