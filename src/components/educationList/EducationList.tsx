import { FC } from "react";
import { DownloadIcon, TrashIcon } from "../../assets/icons";
import { EducationListProps } from "./educationListProps";
import clsx from 'classnames';
import './EducationListStyles.scss';

export const EducationList: FC<EducationListProps> = props =>{
    const {
        educationList,
        onDelete
    } = props;

    const deleteHandler = (id: number) => {
        onDelete && onDelete(id);
    }

    return (
        <div className="education-list">
            {educationList.map(education =>{
                return(
                    <div key={education.id} className="education-list__item">
                        <div className="education-list__item-descr">
                            <span className="education-list__item-descr-title">{education.title}</span>
                            <span className="education-list__item-descr-description">{education.description}</span>
                        </div>
                        <div className="education-list__item-actions">
                            <TrashIcon width={18} height={18} onClick={() => {deleteHandler(education.id)}} />
                        </div>
                    </div>
                );
            })}
        </div>
    )
}