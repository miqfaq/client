import { FC } from "react";
import { IconProps } from "../../types/commonTypes";



export const AddIcon: FC<IconProps> = props => {
    const {
        className,
        color='#ffffff',
        height = 28,
        width = 28,
        onClick
    } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
        <g id="Edit / Add_Plus">
        <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    )
}
