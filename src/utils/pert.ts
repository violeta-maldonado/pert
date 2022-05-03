import { Excel } from "src/redux/slices/data-project";

interface  IPertCalculate{
  activity: Excel[];
}
// calcule the pert
export const pertCalculate = (props: IPertCalculate) : (string)[] => {
  const {activity} = props;
  const variant: number[] = [];
  const days: (string)[] = ['0','0','0','0'];
  const graph: number[] = [0,0,0,0,0,0,0];
  let aux:number;
  let TotalDays:number = 0;
  let variantTotal:number = 0;
  let desviationStandar: number = 0;
  if(activity.length === 0){
    return days;
  }else{
    activity.forEach(element => {
      // duratin activity
      aux = (element['optimistic']+ 4*(element['mostLikely'])+element['pessimistic'])/6 ;
      console.log(aux);
      TotalDays = Math.round(aux + TotalDays);
      // varianza = desviation*desviation/36
      variant.push(((element['pessimistic']-element['optimistic'])/36)*(element['pessimistic']-element['optimistic']));
    })
    variant.forEach(element => {
      variantTotal = element + variantTotal;
    })
    desviationStandar = Math.sqrt(variantTotal);
    days[0]= TotalDays.toString() +' ± '+ trunc(desviationStandar.toString(),2);
    days[1]= TotalDays.toString() +' ± '+ trunc((2*desviationStandar).toString(),2);
    days[2]= TotalDays.toString() +' ± '+ trunc((3*desviationStandar).toString(),2);
    days[3]= TotalDays.toString(); 
    return days;
  }
}
function trunc (x, posiciones = 0) {
  var s = x.toString()
  var l = s.length
  var decimalLength = s.indexOf('.') + 1
  var numStr = s.substr(0, decimalLength + posiciones)
  return Number(numStr)
}

