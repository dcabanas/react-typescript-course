import {type FC, type PropsWithChildren, type ReactNode} from 'react';

interface Image {
    src: string,
    alt: string
}

interface HeaderProps extends PropsWithChildren {
    image: Image
    children: ReactNode
}


const Header: FC<HeaderProps> = ({image, children}) => {
    return (
        <header>
            <img {...image}/>
            {children}
        </header>
    );
}

export default Header;