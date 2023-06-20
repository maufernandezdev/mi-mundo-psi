interface Props{
    title: string;
}
export function PrimaryButton ({title}: Props){
    return (
        <>
            <button style={{borderRadius:'20%'}}>
                {title}
            </button>
        </>
    )
}