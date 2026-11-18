import { FC } from "react";
import { DownloadIcon, TrashIcon } from "../../assets/icons";
import { WorkExperienceListProps } from "./WorkExperienceListProps";
import clsx from 'classnames';
import './WorkExperienceListStyles.scss';

export const WorkExperienceList: FC<WorkExperienceListProps> = props =>{
    const {
        workExperienceList,
        onDelete
    } = props;

    const deleteHandler = (id: number) => {
        onDelete && onDelete(id);
    }

    return (
        <div className="work_Experience-list">
            {workExperienceList.map(work_ExperienceList =>{
                return(
                    <div key={work_ExperienceList.id} className="work_Experience-list__item">
                        <div className="work_Experience-list__item-descr">
                            <span>{work_ExperienceList.description}</span>
                            <span className="work_Experience-list__item-descr-years">Лет: {work_ExperienceList.workedYears}</span>
                        </div>
                        <div className="work_Experience-list__item-actions">
                            <TrashIcon width={18} height={18} onClick={() => {deleteHandler(work_ExperienceList.id)}} />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}