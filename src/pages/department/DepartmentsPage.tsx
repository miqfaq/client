import { FC } from "react";
import { Layout } from "../../components/layouts";
import './departmentsPageStyles.scss';
import { Button, DropDown, EmployeesList } from "../../components";

export const DepartmentsPage: FC = ()=> {
    return (
        <Layout>
            <div className="dep-page">
                <div className="dep-page__users-list-container">
                    <DropDown items = {[
                        {
                            text: 'Отдел1', value: '1'
                        },
                        {
                            text: 'Отдел2', value: '2'
                        },
                        {
                            text: 'Отдел3', value: '3'
                        }
                        ]}
                        label="Отделы"
                        selectedChanged = {(val) => console.log}
                    />
                    <EmployeesList employeesList={[
                        { id: 1, lastName:"Ivanov", firstName:"Ivan", midleName: "Ivanovich" },
                        { id: 2, lastName:"Ivanov", firstName:"Ivan", midleName: "Ivanovich" },
                        { id: 3, lastName:"Ivanov", firstName:"Ivan" },
                        { id: 4, lastName:"Ivanov", firstName:"Ivan", midleName: "Ivanovich" },
                        { id: 5, lastName:"Ivanov", firstName:"Ivan", midleName: "Ivanovich" },
                    ]}
                    onItemClick={(id) => console.log(id)}
                    />
                    <Button text="Добавить сотрудника" className="dep-page__add-user-btn"/>
                </div>
                <div>
                    <div>
                        <span>
                            Фио
                        </span>
                        <div>*</div>
                    </div>
                    <div>
                        <div>Личные данные</div>
                        <div>Данные о работе</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
