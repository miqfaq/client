import { Employee } from "../../types/models";
export interface EmpoyeesListProps{
    employeesList:Array<Employee>;
    onItemClick?:(id:number) => void;
}
