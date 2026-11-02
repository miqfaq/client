import { Employee } from "../../types/models";
export interface EmpoyeesListProps{
    employeesList:Array<Employee>;
    onItemClick?:(id:number) => void;
    onItemEdit?:(id:number) => void;
    onItemDelete?:(id:number) => void;
}
