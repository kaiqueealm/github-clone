import React from 'react';
import Heatmap from 'react-calendar-heatmap'
import { subYears, isBefore, isSameDay, addDays } from 'date-fns' // essa biblioteca possui varias funções de tempo

import { Container } from './styles';

type HeatmapValue = { date: Date; count: number };

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1) //subYears significa subtrair os anos que vai subtrair um ano dessa nossa data atual
  const endDate = new Date();//o end date que irei criar vai ser o dia de hoje e so colocar um Datewdate que ele reconhece que e o dia de hoje 


  return (
    <Container>
      <div className='wrapper'>
        <Heatmap 
        startDate={startDate}
        endDate={endDate}
        values={generateHeatmapValues(startDate, endDate)}
        gutterSize={3.5}//gutterSize e o tamanho dos quadradinhos 
        classForValue={(item: HeatmapValue) => {
          let clampedCount = 0;

          if (item !== null) {
            clampedCount = Math.max(item.count, 0);
            clampedCount = Math.min(item.count, 4)
          }

          return `scale-${clampedCount}`;
        }} //HeatmapValue para cada um deles vou execulta uma função tipo de 0 a 4 serao cores diferente
        showWeekdayLabels//pra mostra os dias da semana vou colocar um showWeekdaylabels
        /> 
      </div>

      <span>Random calendar (do not represent actual data)</span> 
    </Container>
  );
}

const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];

  let currentDate = startDate;
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) { 
    const count = Math.random() *4;   

    values.push({ date: currentDate, count: Math.round(count) });

    currentDate = addDays(currentDate, 1);
  }

  return values; 
} //generateHeatmapValues para gerar os dados do calendario 

export default RandomCalendar;

// envolver um calendario dentro de um wrapperdo para ficar mais responsivo

//vou fala que esse calendario na represnta os dados atuais heatmap para nao ter confusao

//<Heatmap /> -> precisa receber algumas props pq ele fica reclamando

//classForValue e a forma de como agente vai estlizar cada um dos itens internos com base na contidade de contribuições das pessoas 

//if (item =/= null) ou seja se o item for nulo se a pessoa tiver contribuido aquele dia o clampdCount = o valor que a pessoa contribui nao vai poder ser menor que zero e o valor nao vai poder ser maior que 4

//const values: HeatmapVelue[] = [];// criar uma constante chamada values e ela vai ser um array  do heatmap values criado mais a acima 

//let currentDate = startDate;
//while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) { //enquanto o dia atual for igual ao dia de fim ou seja enaquanto o dia atual nao chegar no fim agente vai manter o looping de dentro e caso contrario ele chegue no dia de fim agente tambem vai manter o looping

//const count = Math.random() *4; // valor randomicon de zero a 4

//values.push({ date: currentDate, count: Math.round(count) })
//para gera um numero arredondado