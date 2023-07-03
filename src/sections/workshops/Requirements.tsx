import { MdDevicesOther } from 'react-icons/md'

interface Props {
    text: string;
}

export function Requirements ({text}: Props){
    return (
        <div style={{width:'100%'}}>
            <MdDevicesOther></MdDevicesOther>
            <h3>¿QUE NECESITAS?</h3>
            <p>{text}</p>
        </div>
    )
}