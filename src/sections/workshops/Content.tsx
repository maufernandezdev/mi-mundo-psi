import { BiBookBookmark } from 'react-icons/bi'

interface Props {
    text: string;
}
export function Content ({text}: Props){
    return (
        <div style={{width:'100%'}}>
            <BiBookBookmark></BiBookBookmark>
            <h3>CONTENIDO</h3>
            <p>{text}</p>
        </div>
    )
}