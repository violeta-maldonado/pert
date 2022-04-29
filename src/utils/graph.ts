interface  IGraphCalculate{
    activity: (string | number)[];
  }
  // calcule the pert
  export const graphCalculate = (props: IGraphCalculate) : number[] => {
    const {activity} = props;
    const variant: number[] = [];
    const days: number[] = [0,0,0];
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
        TotalDays = aux + TotalDays;
        // varianza = desviation*desviation/36
        variant.push(((element['pessimistic']-element['optimistic'])/36)*(element['pessimistic']-element['optimistic']));
      })
      variant.forEach(element => {
        variantTotal = element + variantTotal;
      })
      desviationStandar = Math.sqrt(variantTotal);
      graph[0] = Math.round(TotalDays - 3*desviationStandar);
      graph[1] = Math.round(TotalDays - 2*desviationStandar);
      graph[2] = Math.round(TotalDays - desviationStandar);
      graph[3] = Math.round(TotalDays );
      graph[4] = Math.round(TotalDays + desviationStandar);
      graph[5] = Math.round(TotalDays + 2*desviationStandar);
      graph[6] = Math.round(TotalDays + 3*desviationStandar);
      return graph;
    }
  }