import { MouseEvent, ReactNode } from 'react'

interface Props {
    children: ReactNode,
    onbthItem: (event: MouseEvent) => void;
}

function Button({ children, onbthItem }: Props) {
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={(event) => { onbthItem(event) }}>{children}</button>
        </div>
    )
}

export default Button