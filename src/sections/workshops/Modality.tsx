
import { TbWorldUpload } from 'react-icons/tb'

interface Props {
    text: string;
}

export function Modality ({text}: Props){
    return (
        <div style={{width:'100%'}}>
            <TbWorldUpload></TbWorldUpload>
            <h3>MODALIDAD</h3>
            <p>{text}</p>
        </div>
    )
}