import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";

import {
  HomeContainer,
  TaskInput,
  MinutesAmountInput,
  FormContainer,
  CountdownContainer,
  Separator,
  StartCountdownButton,
} from "./styles";
import { useState } from "react";

//form controlled // uncontrolled

/**
 * function register(name: string){
 * return{
 *      onChange: () => void,
 *      onBlur: () => void,
 *      onFocus: () =>,
 *  }
 * }
 */

export const Home = () => {
  const { register, handleSubmit, watch } = useForm();

  const handleCreateNewCycle = (data: any) => {
    console.log(data);
  };

  const task = watch("task");

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Projeto 5" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton disabled={!task} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
};
