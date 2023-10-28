import {type ComponentPropsWithoutRef, type ElementType, type ReactNode} from "react";

/*
interface ContainerProps {
    as: ElementType
    children: ReactNode
}
*/

type ContainerProps<T extends ElementType, N extends ReactNode> = {
    as?: T
    children: N
} & ComponentPropsWithoutRef<T>

const Container = <C extends ElementType, N extends ReactNode>({as, children, ...props}: ContainerProps<C, N>) => {

    const Component = as || 'div'
    return <Component {...props}>{children}</Component>
}

export default Container