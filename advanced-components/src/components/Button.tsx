import {type ComponentPropsWithoutRef} from "react";

type ButtonProps = {
    el: 'button'
} & ComponentPropsWithoutRef<'button'>

type AnchorProps = {
    el: 'anchor'
} & ComponentPropsWithoutRef<'a'>

function Button(props: ButtonProps | AnchorProps) {
    const {el} = props

    if (el == 'anchor') {
        const {...anchorProps} = props
        return <a {...anchorProps}></a>
    }

    const {...buttonProps} = props
    return <button className="button" {...buttonProps}></button>
}

export default Button


/*

Alternative way if we don't want to pass the "el" prop everytime
we want to create a <Button/> element.
This approach comes with the downside that allows to pass props
that shouldn't be passed down to a <button/> because the
absence of the href attribute doesn't necessarily mean it's a
<button/> since it is optional

                        (Not prefered)

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never
}
type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string
}

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps { // Type Predicate
    return 'href' in props
}

function Button(props: ButtonProps | AnchorProps) {
    if (isAnchorProps(props)) {
        return <a className="button" {...props}></a>
    }

    return <button className="button" {...props}></button>
}

*/
