import React from 'react';
import SectionWrapper from './SectionWrapper';
import ExerciseCard from './ExerciseCard';


function Workout(props){
  const{workout}=props;
  return (
    <SectionWrapper id={"workout"} header={"Welcome to"} title ={['The','DANGER','zone']}>
      <div className="flex flex-col gap-4">
        {workout.map((exercise,index)=>{
          return (
            <ExerciseCard index={index} exercise={exercise} key={index}/>
          )
        })}

      </div>
    </SectionWrapper>
  )
}

export default Workout;